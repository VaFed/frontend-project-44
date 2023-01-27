import brainCalcGame from './games/calc-game.js';
import brainEvenGame from './games/even-game.js';
import greatestCommonDivisor from './games/gcd-game.js';
import brainPrimeGame from './games/prime-game.js';
import brainProgressionGame from './games/progression-game.js';
import {
  greetings, showCondition, showQuestion, isRight, congratulations,
}
  from './cli.js';

const startGame = (gameName) => {
  if (gameName === 'brain-game') { return greetings(); }

  greetings();

  let dateOfGame;
  let rulesText;
  let question;
  let correctAnswer;

  if (gameName === 'brain-gcd') {
    dateOfGame = greatestCommonDivisor();
    rulesText = dateOfGame.rulesText;
    showCondition(rulesText);
    let i = -1;
    do {
      question = dateOfGame.question;
      correctAnswer = dateOfGame.correctAnswer;
      showQuestion(question);
      if (isRight(correctAnswer) === false) { break; }
      dateOfGame = greatestCommonDivisor();
      i += 1;
      if (i === 2) { return congratulations(); }
    } while (i < 3);
  }

  if (gameName === 'brain-calc') {
    dateOfGame = brainCalcGame();
    rulesText = dateOfGame.rulesText;
    showCondition(rulesText);
    let i = -1;
    do {
      question = dateOfGame.question;
      correctAnswer = dateOfGame.correctAnswer;
      showQuestion(question);
      if (isRight(correctAnswer) === false) { break; }
      dateOfGame = brainCalcGame();
      i += 1;
      if (i === 2) { return congratulations(); }
    } while (i < 3);
  }

  if (gameName === 'brain-even') {
    dateOfGame = brainEvenGame();
    rulesText = dateOfGame.rulesText;
    showCondition(rulesText);
    let i = -1;
    do {
      question = dateOfGame.question;
      correctAnswer = dateOfGame.correctAnswer;
      showQuestion(question);
      if (isRight(correctAnswer) === false) { break; }
      dateOfGame = brainEvenGame();
      i += 1;
      if (i === 2) { return congratulations(); }
    } while (i < 3);
  }

  if (gameName === 'brain-prime') {
    dateOfGame = brainPrimeGame();
    rulesText = dateOfGame.rulesText;
    showCondition(rulesText);
    let i = -1;
    do {
      question = dateOfGame.question;
      correctAnswer = dateOfGame.correctAnswer;
      showQuestion(question);
      if (isRight(correctAnswer) === false) { break; }
      dateOfGame = brainPrimeGame();
      i += 1;
      if (i === 2) { return congratulations(); }
    } while (i < 3);
  }

  if (gameName === 'brain-progression') {
    dateOfGame = brainProgressionGame();
    rulesText = dateOfGame.rulesText;
    showCondition(rulesText);
    let i = -1;
    do {
      question = dateOfGame.question;
      correctAnswer = dateOfGame.correctAnswer;
      showQuestion(question);
      if (isRight(correctAnswer) === false) { break; }
      dateOfGame = brainProgressionGame();
      i += 1;
      if (i === 2) { return congratulations(); }
    } while (i < 3);
  }
  return null;
};

export default startGame;
