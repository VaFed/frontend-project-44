const greatestCommonDivisor = () => {
  const rulesText = 'Find the greatest common divisor of given numbers.';
  let correctAnswerString;

  const firstOperand = Math.floor(Math.random() * 99) + 1;
  const secondOperand = Math.floor(Math.random() * 99) + 1;
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
    rulesText,
    question: questionNumbers,
    correctAnswer: correctAnswerString,
  };
};

export default greatestCommonDivisor;
