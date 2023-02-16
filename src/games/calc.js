import startGame from '../index.js';
import getRandomNumder from '../randomInteger.js';

const rulesText = 'What is the result of the expression?';

const operators = ['*', '-', '+'];

function chooseOperator(firstOperand, secondOperand, operator) {
  switch (operator) {
    case '*':
      return firstOperand * secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '+':
      return firstOperand + secondOperand;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}

const brainCalcGame = () => {
  const randomOperatorIndex = getRandomNumder(0, operators.length - 1);

  const randomOperator = operators[randomOperatorIndex];
  const firstOperand = getRandomNumder();
  const secondOperand = getRandomNumder();

  const question = `${firstOperand} ${randomOperator} ${secondOperand}`;

  const correctAnswer = chooseOperator(firstOperand, secondOperand, randomOperator).toString();

  return {
    question,
    correctAnswer,
  };
};

const playCalcGame = () => startGame(rulesText, brainCalcGame);

export default playCalcGame;
