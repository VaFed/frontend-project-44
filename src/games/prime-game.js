const brainPrimeGame = () => {
  const rulesText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  let correctAnswer;

  const upToOneHundred = 99;
  const upToOne = 1;

  const randomNumberUntilHun = Math.floor(Math.random() * upToOneHundred) + upToOne;

  const isPrime = (number) => {
    if (number < 2) {
      correctAnswer = 'no';
      return correctAnswer;
    }

    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        correctAnswer = 'no';
        return correctAnswer;
      }
    }
    correctAnswer = 'yes';
    return correctAnswer;
  };

  isPrime(randomNumberUntilHun);

  return {
    rulesText,
    question: randomNumberUntilHun,
    correctAnswer,
  };
};

export default brainPrimeGame;
