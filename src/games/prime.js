import startGame from '../index.js';
import getRandomNumder from '../randomInteger.js';

const rulesText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const limitOfPrime = 2;
  const middleInterval = 2;
  const step = 1;
  if (number < limitOfPrime) {
    return false;
  }

  for (let i = limitOfPrime; i <= number / middleInterval; i += step) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const buildRoundData = () => {
  const randomNumber = getRandomNumder();
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return {
    question: randomNumber,
    correctAnswer,
  };
};

const playPrimeGame = () => startGame(rulesText, buildRoundData);

export default playPrimeGame;
