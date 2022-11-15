import readlineSync from 'readline-sync';

export const greetings  = () => {
var userName = readlineSync.question('May I have your name? ');
return  console.log('Hello, ' + userName + '!');
};
