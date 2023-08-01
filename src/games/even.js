import { getRandomNum } from './cli.js';
import { expression } from '../expression.js';

const isEven = (num) => num % 2 === 0; // определяет четное число

const evenGame = () => {
  const question = getRandomNum(1, 99); // выводит рандомное число
  const correctAnswer = isEven(question) ? expression.yes : expression.no;
  // условие: если четное - да, нечетное - нет

  return [question, correctAnswer]; // возвращает рандомное число и ответ игрока
};

export default evenGame;
