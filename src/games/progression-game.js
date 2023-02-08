import startGame from '../index.js';
import randomInteger from '../randomInteger-function.js';

const rulesText = 'What number is missing in the progression?';

const brainProgressionGame = () => {
  let correctAnswer = 0;

  const upperLimitFirst = 20;
  const upperLimitSecond = 10;
  const lowerLimit = 1;

  const randomNumberUntilTen = randomInteger(lowerLimit, upperLimitSecond);
  const randomNumberUntilTwenty = randomInteger(lowerLimit, upperLimitFirst);
  const oneToTenStepOfProgression = randomNumberUntilTen;
  const firstNumber = randomNumberUntilTwenty;
  let sumToStep = firstNumber;

  let resultArrProgression = [firstNumber];

  const numberOfProgressionSteps = 8;

  for (let i = 0; i <= numberOfProgressionSteps; i += 1) {
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

const playProgressionGame = () => startGame(rulesText, brainProgressionGame);

export default playProgressionGame;
