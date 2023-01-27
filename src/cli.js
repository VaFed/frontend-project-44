import readlineSync from 'readline-sync';

export const showCondition = (condition) => (console.log(condition));

export const showQuestion = (question) => (console.log(`Question: ${question}`));

let userName;
export const isRight = (correctAnswer) => {
  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer === answer) {
    return console.log('Correct!');
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
  return false;
};

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};

export const congratulations = () => {
  console.log(`Congratulations, ${userName}!`);
};
