import readlineSync from 'readline-sync';
import userName from './cli.js';

console.log(`Hello, ${userName}!`);

const ful = () => {
  const ramdomNumber = Math.random() * 100; // формирование рандомного числа
  const question = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${ramdomNumber}`); // чтобы рамномное число отражалась рядом с "Question"
  const answer = readlineSync.question('Your answer: '); // для ввода ответа пользователем
  for (let i = 0; i <= 3; i += 1) { // начала цикла, счетчик, i не больше 3х итераций цикла
    if ((ramdomNumber % 2 === 0 && answer === 'yes') || (ramdomNumber % 2 !== 0 && answer === 'no')) { // условие: если ранд.число четное и ответ пользователя "Да" либо ранд.число нечетное и ответ "нет", то
      console.log('Correct!'); // выводить, что все отлично
    } else { // в противном случае выводить, что ответ неправильный.
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!");
    }
  }
  console.log(`${question}${answer}`); // для вывода на экран объединенные предложения про ранд.число и ответ пользователя
};

export default ful;
