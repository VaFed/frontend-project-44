import startGame from '../index.js';
import getRandomNumder from '../randomInteger.js';

const rulesText = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (firstOperand, secondOperand) => {
  if (secondOperand === 0) {
    return firstOperand;
  }

  return findGreatestCommonDivisor(secondOperand, firstOperand % secondOperand);
};

const greatestCommonDivisor = () => {
  const lowerLimit = 1;
  const upperLimit = 100;

  const firstOperand = getRandomNumder(lowerLimit, upperLimit);
  const secondOperand = getRandomNumder(lowerLimit, upperLimit);
  const questionNumbers = `${firstOperand} ${secondOperand}`;

  const correctAnswer = findGreatestCommonDivisor(firstOperand, secondOperand).toString();

  return {
    question: questionNumbers,
    correctAnswer,
  };
};

const playGcdGame = () => startGame(rulesText, greatestCommonDivisor);

export default playGcdGame;
