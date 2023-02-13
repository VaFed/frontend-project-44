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
  const upperLimitFirst = 20;
  const upperLimitSecond = 10;
  const lowerLimit = 1;

  const randomNumberUntilTen = getRandomNumder(lowerLimit, upperLimitSecond);
  const randomNumberUntilTwenty = getRandomNumder(lowerLimit, upperLimitFirst);
  const stepOfProgression = randomNumberUntilTen;
  const firstNumber = randomNumberUntilTwenty;

  const numberOfSteps = 8;
  const progression = buildProgression(firstNumber, stepOfProgression, numberOfSteps);
  const positionOfHidenElement = getRandomNumder(lowerLimit, progression.length - 1);
  const correctAnswer = progression[positionOfHidenElement];
  progression[positionOfHidenElement] = '..';
  const stringProgression = progression.join(' ');

  return {
    question: stringProgression,
    correctAnswer: String(correctAnswer),
  };
};

const playProgressionGame = () => startGame(rulesText, buildRoundData);

export default playProgressionGame;
