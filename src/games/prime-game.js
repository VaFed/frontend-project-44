const brainPrimeGame = () => {
  const rulesText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  let correctAnswer;

  const randomNumberUntilHun = Math.floor(Math.random() * 99) + 1;
  
  const isPrime = (number) => {
    if (number < 2) {
      return correctAnswer = 'no';
    }
  
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        return correctAnswer = 'no';
      }
    }
  
    return correctAnswer = 'yes';
  };

  isPrime(randomNumberUntilHun);

  return {
    rulesText,
    question: randomNumberUntilHun,
    correctAnswer,
  };
};

export default brainPrimeGame;
