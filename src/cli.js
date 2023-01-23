import readlineSync from 'readline-sync';

export const greetings  = () => {
console.log('Welcome to the Brain Games!')
var userName = readlineSync.question('May I have your name? ');
return console.log('Hello, ' + userName + '!');
};
