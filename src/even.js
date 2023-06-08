import readlineSync from 'readline-sync';
import userName from './cli.js';

console.log(`Hello, ${userName}!`);

const isEven = () => {
  for (let i = 1; i <= 3; i += 1) {
    const ramdomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    const question = readlineSync.question(`Question: ${ramdomNum}`);
    const isYes = (type) => type === 'yes';
    const isNo = (type) => type === 'no';
    const ans = readlineSync.question('Your answer: ');
    const isAnsNo = `${ans}${isNo}`;
    const isAnsYes = `${ans}${isYes}`;

    if ((ramdomNum % 2 === 0 && ans === isAnsYes) || (ramdomNum % 2 !== 0 && ans === isAnsNo)) {
      console.log('Correct!');
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!");
    }
    console.log(question);
  }

  console.log(`Congratulations, ${userName}!`);
};

export default isEven;
