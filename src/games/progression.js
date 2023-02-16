import startGame from '../index.js';
import getRandomNumder from '../randomInteger.js';

const rulesText = 'What number is missing in the progression?';

const buildProgression = (firstNumber, oneToTenStepOfProgression, numberOfProgressionSteps) => {
  const resultArrProgression = [firstNumber];
  const addToTenStep = 1;
  
  for (let i = 1; i <= numberOfProgressionSteps + addToTenStep; i += 1) {
    resultArrProgression.push(firstNumber + i * oneToTenStepOfProgression);
  }

  return resultArrProgression;
};

const buildRoundData = () => {
  const upperLimitFirst = 20;
  const upperLimitSecond = 10;
  const lowerLimit = 1;

  const stepOfProgression = getRandomNumder(lowerLimit, upperLimitSecond);
  const firstNumber = getRandomNumder(lowerLimit, upperLimitFirst);

  const numberOfSteps = 8;
  const progression = buildProgression(firstNumber, stepOfProgression, numberOfSteps);
  console.log(progression)
  const positionOfHidenElement = getRandomNumder(lowerLimit, progression.length - 1);
  const correctAnswer = progression[positionOfHidenElement];
  progression[positionOfHidenElement] = '..';

  return {
    question: progression.join(' '),
    correctAnswer: String(correctAnswer),
  };
};

const playProgressionGame = () => startGame(rulesText, buildRoundData);

export default playProgressionGame;
