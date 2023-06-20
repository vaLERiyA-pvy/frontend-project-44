import readlineSync from 'readline-sync';

export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

export const isEven = () => {
  for (let i = 1; i <= 3; i += 1) {
    const ramdNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    console.log(`Question: ${ramdNum}`);
    const ramdNumYes = (ramdNum % 2 === 0);
    const ramdNumNo = (ramdNum % 2 !== 0);

    const ansNum = readlineSync.question('Your answer: ');
    const isAnsYes = ansNum === 'yes';
    const isAnsNo = ansNum === 'no';

    if (ramdNumYes && isAnsYes) {
      console.log('Correct!');
    } else if (ramdNumNo && isAnsNo) {
      console.log('Correct!');
    } else {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
