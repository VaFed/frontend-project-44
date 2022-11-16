// May I have your name? Sam
// Hello, Sam!
// Answer "yes" if the number is even, otherwise answer "no".
// Question: 15
// Your answer: no
// Correct!
// Question: 6
// Your answer: yes
// Correct!
// Question: 7
// Your answer: no
// Correct!
// Congratulations, Sam!

import readlineSync from 'readline-sync';

export function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log('Welcome to the Brain Games!');

export const evenGame = () => {

    var userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let result = 0;

    for(let i = 0; i <= 2; i++){
    
    
    let rand = randomInteger(1, 20);
    console.log('Question: ' + rand);

    var answer = readlineSync.question('Your answer: ');
    
    if (answer === 'yes' && rand % 2 === 0){
      result += 1;
      console.log('Correct!')
      if (result === 3){return console.log('Congratulations, ' + userName +'!')}
    };

    if (answer === 'no' && rand % 2 === 0){
      console.log('It`s wrong.Try again.')
    };

    if (answer === 'yes' && rand % 2 !== 0){
      console.log('It`s wrong.Try again.')
    };

    if (answer === 'no' && rand % 2 !== 0){
      result += 1;
      console.log('Correct!');
      if (result === 3){return console.log('Congratulations, ' + userName +'!')}
    }

    if (answer !== 'no' && answer !== 'yes'){
      console.log('It`s wrong.Try again.')
    };
    
    
  }
};

evenGame();