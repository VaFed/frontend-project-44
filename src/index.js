import readlineSync from 'readline-sync';

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

const startGame = (rules, functonOfGame) => {
  greetings();
  const rulesText = rules;
  showCondition(rulesText);

  let dateOfGame;
  let question;
  let correctAnswer;
  for (let i = 0; i < 3; i += 1) {
    dateOfGame = functonOfGame();
    question = dateOfGame.question;
    correctAnswer = dateOfGame.correctAnswer;
    // console.log(rulesText);
    // console.log(question);
    // console.log(correctAnswer);

    showQuestion(question);

    if (!isRight(correctAnswer)) {
      return null;
    }
  }

  return congratulations();
};

export default startGame;
