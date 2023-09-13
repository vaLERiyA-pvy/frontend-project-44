import game from '../index.js';
import getRandomNum from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const calculateAnswer = (firstValue, secondValue, operator) => {
  let result = null;

  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    default:
  }
  return result;
};

const calcGame = () => {
  const firstOper = getRandomNum(1, 10);
  const secondOper = getRandomNum(1, 10);
  const arrOper = ['+', '-', '*'];
  const randOper = Math.floor(Math.random() * arrOper.length);
  const operator = arrOper[randOper];
  const question = `${firstOper} ${operator} ${secondOper}`;
  const correctAnswer = calculateAnswer(firstOper, secondOper, operator).toString();
  return [question, correctAnswer];
};

const calcStart = () => game(gameDescription, calcGame);

export default calcStart;
