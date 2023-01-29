const brainProgressionGame = () => {
  const rulesText = 'What number is missing in the progression?';
  let correctAnswer;

  const randomNumberUntilTen = Math.floor(Math.random() * 10) + 1;
  const randomNumberUntilTwenty = Math.floor(Math.random() * 20) + 1;
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
    rulesText,
    question: resultArrProgression,
    correctAnswer: stringCorrectAnswer,
  };
};

export default brainProgressionGame;
