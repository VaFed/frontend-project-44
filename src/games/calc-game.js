const brainCalcGame = () => {
  const rulesText = 'What is the result of the expression?';
  let correctAnswer = 0;

  const sample = (array) => array[Math.floor(Math.random() * array.length)];

  const operators = ['*', '-', '+'];

  const upToOneHundred = 99;
  const upToOne = 1;

  const randomOperator = sample(operators);
  const firstOperand = Math.floor(Math.random() * upToOneHundred) + upToOne;
  const secondOperand = Math.floor(Math.random() * upToOneHundred) + upToOne;

  const questionExpression = `${firstOperand} ${randomOperator} ${secondOperand}`;

  if (randomOperator === '*') {
    correctAnswer = firstOperand * secondOperand;
  }

  if (randomOperator === '-') {
    correctAnswer = firstOperand - secondOperand;
  }

  if (randomOperator === '+') {
    correctAnswer = firstOperand + secondOperand;
  }

  const stringCorrectAnswer = correctAnswer.toString();

  return {
    rulesText,
    question: questionExpression,
    correctAnswer: stringCorrectAnswer,
  };
};

export default brainCalcGame;
