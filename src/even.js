import readlineSync from 'readline-sync';

export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
console.log(`Hello, ${userName}!`);

export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Answer "yes" if the number is even, otherwise answer "no"');

const question = readlineSync.question(`Question: ${getRandomInRange(1, 99)}`);

const answerNum = readlineSync.question('Your answer: ');
export const answerYes = `${answerNum}yes`;
export const answerNo = `${answerNum}no`;

export function answer() {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

export function func() {
  let phrase;
  if (question % 2 === 0 && answerYes) {
    phrase = 'Correct!';
  } else if (question % 2 === 0 && answerNo) {
    phrase = "'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!";
  } else {
    phrase = "'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!";
  }

  let i = answerYes;
  while (i >= 3) {
    console.log(i);
    i += 1;
  }
  console.log(`Congratulations, ${userName}!`);
}
