import startGame from '../index.js';

const rulesText = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEvenGame = () => {
  let correctAnswer;

  const upToOneHundred = 99;
  const upToOne = 1;

  const randomNumberUntilHundred = Math.floor(Math.random() * upToOneHundred) + upToOne;
  const questionNumber = randomNumberUntilHundred;

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

const brainEven = startGame(rulesText, brainEvenGame);

export default brainEven;
