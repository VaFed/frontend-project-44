import startGame from '../index.js';
import randomInteger from '../randomInteger-function.js';

const rulesText = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEvenGame = () => {
  let correctAnswer;

  const lowerLimit = 1;
  const upperLimit = 100;

  const questionNumber = randomInteger(lowerLimit, upperLimit);

  if (questionNumber % 2 === 0) {
    correctAnswer = 'yes';
  }
  if (questionNumber % 2 !== 0) {
    correctAnswer = 'no';
  }

  return {
    question: questionNumber,
    correctAnswer,
  };
};

const playEvenGame = () => startGame(rulesText, brainEvenGame);

export default playEvenGame;
