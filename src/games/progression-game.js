import startGame from '../index.js';
import getRandomNumder from '../randomInteger.js';

const rulesText = 'What number is missing in the progression?';

const buildProgression = (firstNumber, oneToTenStepOfProgression, numberOfProgressionSteps) => {
  let sumToStep = firstNumber;
  const resultArrProgression = [firstNumber];

  for (let i = 0; i <= numberOfProgressionSteps; i += 1) {
    sumToStep += oneToTenStepOfProgression;
    resultArrProgression.push(sumToStep);
  }

  return resultArrProgression;
};

const buildRoundData = () => {
  let correctAnswer = 0;

  const upperLimitFirst = 20;
  const upperLimitSecond = 10;
  const lowerLimit = 1;

  const randomNumberUntilTen = getRandomNumder(lowerLimit, upperLimitSecond);
  const randomNumberUntilTwenty = getRandomNumder(lowerLimit, upperLimitFirst);
  const stepOfProgression = randomNumberUntilTen;
  const firstNumber = randomNumberUntilTwenty;

  const numberOfSteps = 8;
  let resultArrProgression = buildProgression(firstNumber, stepOfProgression, numberOfSteps);

  const positionOfHidenElement = getRandomNumder(lowerLimit, upperLimitSecond);
  correctAnswer = resultArrProgression[positionOfHidenElement];
  const stringCorrectAnswer = correctAnswer.toString();
  resultArrProgression[positionOfHidenElement] = '..';
  resultArrProgression = resultArrProgression.join(' ');

  return {
    question: resultArrProgression,
    correctAnswer: stringCorrectAnswer,
  };
};

const playProgressionGame = () => startGame(rulesText, buildRoundData);

export default playProgressionGame;
