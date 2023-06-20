import readlineSync from 'readline-sync';
import userName from './cli.js';

console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

const calc = () => {
  for (let i = 1; i <= 3; i += 1) {
    const rand1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    const rand2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

    const arrOper = ['+', '-', '*'];
    const randOper = Math.floor(Math.random() * arrOper.length);
    const operator = arrOper[randOper];

    console.log(`Question: ${rand1} ${operator} ${rand2}`);

    const answer = readlineSync.question('Your answer: ');
    let ansNum = Number(answer);

    switch (operator) {
      case '+':
        ansNum = rand1 + rand2;
        break;
      case '-':
        ansNum = rand1 - rand2;
        break;
      case '*':
        ansNum = rand1 * rand2;
        break;
      default:
        ansNum = null;
    }

    if (answer === ansNum) {
      console.log('Correct!');
    } else if (answer !== ansNum) {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${ansNum}.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default calc;
