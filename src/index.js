import readlineSync from 'readline-sync';

const game = (description, getRound) => {
  console.log('Welcome to the Brain Games!'); // приветствие в игре

  const userName = readlineSync.question('May I have your name? '); // спрашиваем как зовут
  console.log(`Hello, ${userName}!`); // приветствуем игрока

  console.log(description); // условие игры

  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = getRound();
    console.log(`Question: ${question}`); // вопрос для ответа
    const userAnswer = readlineSync.question('Your answer: ');
    // константа для ввода ответа играком
    if (userAnswer === correctAnswer) { // если введенное значение = уловию из игры
      console.log('Correct!'); // ввыводить браво!
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      // в противном случае - выводит фразу с правильным ответом и предложением попробовать снова
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
