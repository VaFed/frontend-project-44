import startGame from '../index.js';
import getRandomNumder from '../randomInteger.js';

const rulesText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const brainEvenGame = () => {
  const lowerLimit = 1;
  const upperLimit = 100;
  const questionNumber = getRandomNumder(lowerLimit, upperLimit);
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

  return {
    question: questionNumber,
    correctAnswer,
  };
};

const playEvenGame = () => startGame(rulesText, brainEvenGame);

export default playEvenGame;
