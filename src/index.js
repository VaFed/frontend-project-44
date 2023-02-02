import readlineSync from 'readline-sync';
import brainCalcGame from './games/calc-game.js';
import brainEvenGame from './games/even-game.js';
import greatestCommonDivisor from './games/gcd-game.js';
import brainPrimeGame from './games/prime-game.js';
import brainProgressionGame from './games/progression-game.js';

const showCondition = (condition) => (console.log(condition));

const showQuestion = (question) => (console.log(`Question: ${question}`));

let userName;

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};

const isRight = (correctAnswer) => {
  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer === answer) {
    return console.log('Correct!');
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
  return false;
};

const congratulations = () => {
  console.log(`Congratulations, ${userName}!`);
};

const startGame = (gameName) => {
  if (gameName === 'brain-game') { return greetings(); }

  greetings();

  let dateOfGame;
  let rulesText = '';
  let question;
  let correctAnswer;

  for (let j = 0; j < 3; j += 1) {
    switch (gameName) {
      case 'brain-gcd':
        dateOfGame = greatestCommonDivisor();
        break;
      case 'brain-calc':
        dateOfGame = brainCalcGame();
        break;
      case 'brain-even':
        dateOfGame = brainEvenGame();
        break;
      case 'brain-prime':
        dateOfGame = brainPrimeGame();
        break;
      case 'brain-progression':
        dateOfGame = brainProgressionGame();
        break;
      default:
        return null;
    }

    rulesText = dateOfGame.rulesText;
    showCondition(rulesText);

    for (let i = 0; i < 3; i += 1) {
      question = dateOfGame.question;
      correctAnswer = dateOfGame.correctAnswer;
      showQuestion(question);
      if (!isRight(correctAnswer)) {
        break;
      }
    }
  }

  return congratulations();
};

export const brainCalc = () => startGame('brain-calc');
export const brainGcd = () => startGame('brain-gcd');
export const brainEven = () => startGame('brain-even');
export const brainPrime = () => startGame('brain-prime');
export const brainProgression = () => startGame('brain-progression');
