import startGame from '../index.js';
import getRandomNumder from '../randomInteger.js';

const rulesText = 'What is the result of the expression?';

const operators = ['*', '-', '+'];

function chooseOperator(firstOperand, secondOperand, randomOperator) {
  let correctAnswer;
  switch (randomOperator) {
    case '*':
      correctAnswer = firstOperand * secondOperand;
      break;
    case '-':
      correctAnswer = firstOperand - secondOperand;
      break;
    case '+':
    default:
      correctAnswer = firstOperand + secondOperand;
      break;
  }
  return correctAnswer;
}

const brainCalcGame = () => {
  const origin = 0;
  const lengthOffset = 1;
  const sample = (array) => array[getRandomNumder(origin, array.length - lengthOffset)];

  const lowerLimit = 1;
  const upperLimit = 100;

  const randomOperator = sample(operators);
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
