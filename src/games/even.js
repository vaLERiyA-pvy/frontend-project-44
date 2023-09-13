import game from '../index.js';
import getRandomNum from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0; // определяет четное число

const evenGame = () => {
  const question = getRandomNum(1, 99); // выводит рандомное число
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  // условие: если четное - да, нечетное - нет

  return [question, correctAnswer]; // возвращает рандомное число и ответ игрока
};

const evenStart = () => game(gameDescription, evenGame);

export default evenStart;
