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
  const firstOperand = getRandomNumder();
  const secondOperand = getRandomNumder();

  const correctAnswer = findGreatestCommonDivisor(firstOperand, secondOperand).toString();

  return {
    question: `${firstOperand} ${secondOperand}`,
    correctAnswer,
  };
};

const playGcdGame = () => startGame(rulesText, greatestCommonDivisor);

export default playGcdGame;
