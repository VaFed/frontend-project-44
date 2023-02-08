import startGame from '../index.js';
import randomInteger from '../randomInteger-function.js';

const rulesText = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = () => {
  let correctAnswerString;

  const lowerLimit = 1;
  const upperLimit = 100;

  const firstOperand = randomInteger(lowerLimit, upperLimit);
  const secondOperand = randomInteger(lowerLimit, upperLimit);
  const questionNumbers = `${firstOperand} ${secondOperand}`;

  let firstOp = firstOperand;
  let secondOp = secondOperand;

  if (firstOp < secondOp) {
    firstOp = secondOperand;
    secondOp = firstOperand;
  }

  let rest;

  while (rest !== 0) {
    if (firstOp % secondOp === 0) {
      correctAnswerString = secondOp.toString();
      break;
    }
    rest = firstOp % secondOp;
    correctAnswerString = secondOp.toString();
    firstOp = secondOp;
    secondOp = rest;
  }

  return {
    question: questionNumbers,
    correctAnswer: correctAnswerString,
  };
};

const playGcdGame = () => startGame(rulesText, greatestCommonDivisor);

export default playGcdGame;
