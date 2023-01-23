const brainProgressionGame = () => {
    const rulesText = 'What number is missing in the progression?';
    let correctAnswer;
  
    const randomNumberUntilTen = Math.floor(Math.random() * 10) + 1;
    // console.log(randomNumberUntilTen);
    const randomNumberUntilTwenty = Math.floor(Math.random() * 20) + 1;
    // console.log(randomNumberUntilTwenty);
    const oneToTenStepOfProgression = randomNumberUntilTen;
    const firstNumber = randomNumberUntilTwenty;
    let sumToStep = firstNumber; 

    let resultArrProgression = [firstNumber];

    for(let i = 0; i <= 8; i += 1){
        sumToStep += oneToTenStepOfProgression
        resultArrProgression.push(sumToStep);
    }
    // console.log(resultArrProgression);

    const positionOfHidenElement = Math.floor(Math.random() * 10) + 1;
    correctAnswer = resultArrProgression[positionOfHidenElement];
    resultArrProgression[positionOfHidenElement] = ".."
    resultArrProgression = resultArrProgression.join(' ');

    // console.log(resultArrProgression);
  
    return {
      rulesText,
      question: resultArrProgression,
      correctAnswer,
    };
  };
  


  export default brainProgressionGame;