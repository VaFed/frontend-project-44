import readlineSync from 'readline-sync';

let userName;
const greetings = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};

export default greetings;
