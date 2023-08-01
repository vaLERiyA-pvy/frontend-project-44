export const expression = {
  welcome: 'Welcome to the Brain Games!',
  whatName: 'May I have your name? ',
  answer: 'Your answer: ',
  corrAnswer: 'Correct!',
  yes: 'yes',
  no: 'no',
  descriptionCalc: 'What is the result of the expression?',
  descriptionEven: 'Answer "yes" if the number is even, otherwise answer "no".',
};

export const displayGreeting = (userName) => `Hello, ${userName}!`;
export const displayQuestion = (question) => `Question: ${question}`;
export const displayWrongAnswer = (userAnswer, correctAnswer, userName) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
export const displayCongratulation = (userName) => `Congratulations, ${userName}!`;
