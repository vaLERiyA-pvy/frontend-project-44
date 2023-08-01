import readlineSync from 'readline-sync';
import {
  expression,
  displayGreeting,
  displayQuestion,
  displayWrongAnswer,
  displayCongratulation,
} from './expression.js';

const game = (description, getRound) => {
  console.log(expression.welcome); // приветствие в игре
  const userName = readlineSync.question(expression.whatName); // спрашиваем как зовут
  console.log(displayGreeting(userName)); // приветствуем игрока
  console.log(description); // условие игры
  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = getRound();
    console.log(displayQuestion(question)); // вопрос для ответа
    const userAnswer = readlineSync.question(expression.answer);
    // константа для ввода ответа играком
    if (userAnswer === correctAnswer) { // если введенное значение = уловию из игры
      console.log(expression.corrAnswer); // ввыводить браво!
    } else {
      console.log(displayWrongAnswer(userAnswer, correctAnswer, userName));
      // в противном случае - выводит фразу с правильным ответом и предложением попробовать снова
      return;
    }
  }
  console.log(displayCongratulation(userName));
};

export default game;
