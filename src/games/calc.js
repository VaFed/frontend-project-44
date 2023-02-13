import startGame from '../index.js';
import getRandomNumder from '../randomInteger.js';

const rulesText = 'What is the result of the expression?';

const operators = ['*', '-', '+'];

function chooseOperator(firstOperand, secondOperand, randomOperator) {
  switch (randomOperator) {
    case '*':
      return firstOperand * secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '+':
      return firstOperand + secondOperand;
    default:
      throw new Error('Unknown state!');
  }
}

const brainCalcGame = () => {
  const randomOperatorIndex = getRandomNumder(0, operators.length - 1);
  const lowerLimit = 1;
  const upperLimit = 100;

  const randomOperator = operators[randomOperatorIndex];
  const firstOperand = getRandomNumder(lowerLimit, upperLimit);
  const secondOperand = getRandomNumder(lowerLimit, upperLimit);

  const question = `${firstOperand} ${randomOperator} ${secondOperand}`;

  const correctAnswer = chooseOperator(firstOperand, secondOperand, randomOperator).toString();

  return {
    question,
    correctAnswer,
  };
};

const playCalcGame = () => startGame(rulesText, brainCalcGame);

export default playCalcGame;
