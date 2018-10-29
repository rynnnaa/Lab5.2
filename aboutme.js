'use strict';
var numberCorrect = 0; //Tallying all correct answers throughout Questionaire
//Alerting user to answer only yes or no
alert('Please respond to the following questions with YES or NO.');
console.log('number correct', numberCorrect);
//TESTING
//First Question
function questionOne(varible1, varible2) {
  if (varible1 === varible2) {
    alert('correct');
    numberCorrect++;
  } else {
    alert('wrong');
  }
}

var responseOne = prompt('Was I born in Seattle?').toUpperCase();
var ansOne = 'NO';
questionOne(responseOne, ansOne);

//Second Question
function questionTwo(varible1, varible2) {
  if (varible1 === varible2) {
    alert('correct');
    numberCorrect++;
  } else {
    alert('wrong');
  }
}

var responseTwo = prompt('Do I like wasabi?').toUpperCase();
var ansTwo = 'NO';
questionTwo(responseTwo, ansTwo);
console.log('responseTwo', responseTwo);

// //Third Question
function questionThree(varible1, varible2) {
  if (varible1 === varible2) {
    alert('correct');
    numberCorrect++;
  } else {
    alert('wrong');
  }
}

var responseThree = prompt('Do I have any children?').toUpperCase();
var ansThree = 'YES';
questionThree(responseThree, ansThree);
console.log('responseThree', responseThree);

// //Foruth Question
function questionFour(varible1, varible2) {
  if (varible1 === varible2) {
    alert('correct');
    numberCorrect++;
  } else {
    alert('wrong');
  }
}
var responseFour = prompt('Do I like to cook').toUpperCase();
var ansFour = 'YES';
questionFour(responseFour, ansFour);
console.log('responseFour', responseFour);

// //Fifth Question
function questionFive(varible1, varible2) {
  if (varible1 === varible2) {
    alert('correct');
    numberCorrect++;
  } else {
    alert('wrong');
  }
}
var responseFive = prompt('Do I like Autum season?').toUpperCase();
var ansFive = 'YES';
questionFive(responseFive, ansFive);
console.log('responseFive', responseFive);

// //Sixth Question

function yesNo6() {
  var ansSix = 6;
  console.log('ansSix', ansSix);
  var responseSix = parseInt(prompt('How many siblings do I have?'));
  console.log('responseSix', responseSix);

  //   Too High or too low
  var counter = 0;
  console.log('counter', counter);
  while (responseSix !== ansSix && counter < 3) {
    if (responseSix > 6) {
      responseSix = parseInt(prompt('Your guess was too high. Try again'));
    } else if (responseSix < 6 && counter < 3) {
      responseSix = parseInt(prompt('Your guess was too low. Try again'));
    } else {
      responseSix = parseInt(prompt(responseSix + ' is not a number. Try again!')
      );
    }

    counter++;
    console.log('counter', counter);
  }
  // IF CORRECT:
  if (responseSix === 6) {
    alert(
      'How did you know?! That\'s right, I have a total of 6 siblings!');
        numberCorrect + ' siblings.';
    numberCorrect++;
  } else {
    alert('Sorry, that is incorrect. I have 6 siblings altogether.');
  }
}
yesNo6();

// SEVENTH QUESTION
function yesNo7() {
  var numSiblings = ['tony', 'david', 'steve', 'lily', 'kevin', 'justen'];
  var responseSeven = prompt('Can you guess my siblings names?').toLowerCase();
  var correct = false;
  var counter2 = 0;

  while (counter2 < 5 && correct === false) {
    for (var a = 0; a <numSiblings.length; a++) {
      if (responseSeven ===numSiblings[a]) {
        correct = true;
        break;
      }
    }
    if (correct === true) {
      alert('Wow!!! How did you know! Are you psychic?!');
      numberCorrect++;
    }
    else {
      alert('Nope!');
      responseSeven = prompt('Try again');
      counter2++;
    }
  } 
}
yesNo7();

//FINAL SCORE
alert('Hey you got ' + numberCorrect + ' out of 7 questions correct.  Thanks for visiting my site!'); 