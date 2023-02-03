import startGame from '../index.js';

const rulesText = 'What number is missing in the progression?';

const brainProgressionGame = () => {
  let correctAnswer = 0;

  const upToTwenty = 20;
  const upToTen = 10;
  const upToOne = 1;

  const randomNumberUntilTen = Math.floor(Math.random() * upToTen) + upToOne;
  const randomNumberUntilTwenty = Math.floor(Math.random() * upToTwenty) + upToOne;
  const oneToTenStepOfProgression = randomNumberUntilTen;
  const firstNumber = randomNumberUntilTwenty;
  let sumToStep = firstNumber;

  let resultArrProgression = [firstNumber];

  for (let i = 0; i <= 8; i += 1) {
    sumToStep += oneToTenStepOfProgression;
    resultArrProgression.push(sumToStep);
  }

  const positionOfHidenElement = Math.floor(Math.random() * 10);
  correctAnswer = resultArrProgression[positionOfHidenElement];
  const stringCorrectAnswer = correctAnswer.toString();
  resultArrProgression[positionOfHidenElement] = '..';
  resultArrProgression = resultArrProgression.join(' ');

  return {
    question: resultArrProgression,
    correctAnswer: stringCorrectAnswer,
  };
};

const brainProgression = startGame(rulesText, brainProgressionGame);

export default brainProgression;
