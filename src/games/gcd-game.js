import startGame from '../index.js';

const rulesText = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = () => {
  let correctAnswerString;

  const upToOneHundred = 99;
  const upToOne = 1;

  const firstOperand = Math.floor(Math.random() * upToOneHundred) + upToOne;
  const secondOperand = Math.floor(Math.random() * upToOneHundred) + upToOne;
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

const brainGcd = () => startGame(rulesText, greatestCommonDivisor);

export default brainGcd;
