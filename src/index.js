import readlineSync from 'readline-sync';

const startGame = (gameDescription, buildRoundData) => {
  let userName;
  const greetings = () => {
    console.log('Welcome to the Brain Games!');
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
  };
  greetings();
  console.log(gameDescription);

  const threeRoundsOfPlay = 3;

  for (let i = 0; i < threeRoundsOfPlay; i += 1) {
    const { question, correctAnswer } = buildRoundData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
