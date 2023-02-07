import startGame from '../index.js';
import randomInteger from '../randomInteger-function.js';
import chooseOperator from '../operator-function.js';

const rulesText = 'What is the result of the expression?';

const operators = ['*', '-', '+'];

const brainCalcGame = () => {
  const sample = (array) => array[Math.floor(Math.random() * array.length)];

  const lowerLimit = 1;
  const upperLimit = 100;

  const randomOperator = sample(operators);
  const firstOperand = randomInteger(lowerLimit, upperLimit);
  const secondOperand = randomInteger(lowerLimit, upperLimit);

  const questionExpression = `${firstOperand} ${randomOperator} ${secondOperand}`;

  const stringCorectAnswer = chooseOperator(firstOperand, secondOperand, randomOperator).toString();

  return {
    question: questionExpression,
    correctAnswer: stringCorectAnswer,
  };
};

const playCalcGame = () => startGame(rulesText, brainCalcGame);

export default playCalcGame;
