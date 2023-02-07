function chooseOperator(firstOperand, secondOperand, randomOperator) {
  let correctAnswer;
  if (randomOperator === '*') {
    correctAnswer = firstOperand * secondOperand;
    return correctAnswer;
  }

  if (randomOperator === '-') {
    correctAnswer = firstOperand - secondOperand;
    return correctAnswer;
  }

  correctAnswer = firstOperand + secondOperand;
  return correctAnswer;
}

export default chooseOperator;
