'use strict';
document.getElementById('start-quiz').addEventListener('click', () => {

  let numberOfQuestions = 7;
  let numberOfCorrectAnswers = 0;

  // <------------------------- GET USERNAME -------------------------> //

  let userName = prompt('Before we start, I need to know who you are. What is your name?');
  alert(`Nice to meet you ${userName}!`);

  // <------------------------- QUESTION 1 -------------------------> //

  let morningPersonAnswer = prompt('Am I a morning person?').toLowerCase();
  if (morningPersonAnswer === 'yes' || morningPersonAnswer === 'y') {
    numberOfCorrectAnswers++;
    alert(`Yes! That\'s correct! My brain works much better in the morning. You\'ve answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`);
  } else if (morningPersonAnswer === 'no' || morningPersonAnswer === 'n') {
    alert(`Sorry, that\'s incorrect. You\'ve answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`);
  }
  console.log(`Question 1: Answer: ${morningPersonAnswer}`);

//   // <------------------------- QUESTION 2 -------------------------> //

//   let orangeSodaAnswer = prompt('Do I like orange soda?').toLowerCase();
//   if (orangeSodaAnswer === 'no' || orangeSodaAnswer === 'n') {
//     alert('Correct! I actually hate orange-flavored anything...unless it\'s an actual orange.');
//   } else if (orangeSodaAnswer === 'yes' || orangeSodaAnswer === 'y') {
//     alert('Sorry, you guessed wrong.');
//   }
//   console.log(`Question 2: Answer: ${orangeSodaAnswer}`);

//   // <------------------------- QUESTION 3 -------------------------> //

//   let cheesyDanceMovieAnswer = prompt('Do I love cheesy dance movies?').toLowerCase();
//   if (cheesyDanceMovieAnswer === 'yes' || cheesyDanceMovieAnswer === 'y') {
//     alert('You guessed it! Top faves include: You Got Served, Honey, and Stomp The Yard');
//   } else if (cheesyDanceMovieAnswer === 'no' || cheesyDanceMovieAnswer === 'n') {
//     alert('Sorry, that\'s incorrect.');
//   }
//   console.log(`Question 3: Answer: ${cheesyDanceMovieAnswer}`);

//   // <------------------------- QUESTION 4 -------------------------> //

//   let tallerThanAnswer = prompt('Am I taller than 5\'3"?').toLowerCase();
//   if (tallerThanAnswer === 'no' || tallerThanAnswer === 'n') {
//     alert('You\'re right. I\'m actually the shortest in my immediate family. And they remind me of this A LOT.');
//   } else if (tallerThanAnswer === 'yes' || tallerThanAnswer === 'y') {
//     alert('Sorry, you guessed wrong.');
//   }
//   console.log(`Question 4: Answer: ${tallerThanAnswer}`);

//   // <------------------------- QUESTION 5 -------------------------> //

//   let playsInstrumentAnswer = prompt('Do I play an instrument?').toLowerCase();
//   if (playsInstrumentAnswer === 'yes' || playsInstrumentAnswer === 'y') {
//     alert('Yep! I play guitar, and I also sing. Fun fact: at one point I was part of my family band. Until I moved away.');
//   } else if (playsInstrumentAnswer === 'no' || playsInstrumentAnswer === 'n') {
//     alert('Sorry, that\'s incorrect.');
//   }
//   console.log(`Question 5: Answer: ${playsInstrumentAnswer}`);

// // <------------------------- QUESTION 6 -------------------------> //
  
//   let min = Math.ceil(1);
//   let max = Math.floor(10);
//   let randomNumber = Math.floor(Math.random() * (max - min)) + min;
//   console.log(randomNumber);
//   let guesses = 0;
//   let guessesLeft = 4;
//   let guessNumberAnswer = 0;
//   while ((guessNumberAnswer !== randomNumber) && guesses < guessesLeft) {
//     guessNumberAnswer = prompt(`I\'m thinking of a number between 1 and 10. Can you guess it? You have ${guessesLeft - guesses} guesses left.`);
//     console.log(`guessed the number: ${guessNumberAnswer}`);
//     console.log((guessNumberAnswer === randomNumber) && guesses < 4);
//     console.log(typeof guessNumberAnswer);
//     guesses++;
//     if ((parseInt(guessNumberAnswer) === randomNumber) && guessesLeft >= guesses) {
//       alert(`You guessed it! I am thinking of the number ${randomNumber}`);
//       break;
//     }
//   }

//   // <------------------------- QUESTION 7 -------------------------> //

//   const states = ['colorado', 'north carolina'];
//   let stateLivedInAnswer = '';
//   const availableGuesses = 6;
//   let triesUsed = 0;
//   while ((stateLivedInAnswer !== states[0] || stateLivedInAnswer !== states[1]) && triesUsed < availableGuesses) {
//     stateLivedInAnswer = prompt(`Can you guess what states I have lived in besides Washington? You have ${availableGuesses - triesUsed} guesses left.`).toLowerCase();
//     triesUsed++;
//     if ((stateLivedInAnswer === states[0] || stateLivedInAnswer === states[1]) && triesUsed < 6) {
//       alert('Correct! I have lived in North Carolina and Colorado.');
//       break;
//     }
//     console.log(`try #${triesUsed} answer: ${stateLivedInAnswer}`);
//   }
});