// Access toggle switch HTML element

const question = document.getElementById("questions");
const option1 = document.getElementById("a");
const option2 = document.getElementById("b");
const option3 = document.getElementById("c");
const option4 = document.getElementById("d");
const buttonA = document.getElementById("butttonA");
const buttonB = document.getElementById("butttonB");
const buttonC = document.getElementById("butttonC");
const buttonD = document.getElementById("butttonD");
const countDown = document.getElementById("timer");

countDown.innerHTML = 10;

///// create an object to hold questions and options
const myData = [
  {
    q: "Roy has been decribed by an ex-girlfriend as...",

    options: [
      "A: Emotionally Artistic",
      "B: A Massive Arse",
      "C: The Best Lover She Ever Had",
      "D: Flippin Fantastic",
    ],

    correct: "buttonA",
  },
  {
    q: "What dating site does the I.T. Crowd use?",

    options: [
      "A: Halt and Catch Fire",
      "B: Lonely Hearts",
      "C: Buffle",
      "D: Crickets",
    ],

    correct: "buttonB",
  },
  {
    q: "How many people work in the I.T. Department",

    options: ["A: 2", "B: 3", "C: 4", "D: 5"],

    correct: "buttonC",
  },
  {
    q: "Who replaces Denholm Reynholm",

    options: [
      "A: Douglas Reynholm",
      "B: Dennis Rhinestone",
      "C: Danny Trejo",
      "D: Jen Barber",
    ],

    correct: "buttonA",
  },
  {
    q: "Which OS does the bomb disposal robot run on",

    options: ["A: Windows Vista", "B: Windows ME", "C: Linux", "D: MenuetOS"],

    correct: "buttonA",
  },
  {
    q: "What does Maurice eat for breakfast?",

    options: [
      "A: Eggs, Banger, and Beans",
      "B: Smarties Cereal",
      "C: Wheaties",
      "D: I'm More of a Brunch Man",
    ],

    correct: "buttonB",
  },
  {
    q: "What is Richmond's favorite drink",

    options: ["A: Blood", "B: Grape Juice", "C: Absynthe", "D: Red Wine"],

    correct: "buttonC",
  },
  {
    q: "What is the number for emergency services",

    options: [
      "A: 0118 999 881 999 119 7253",
      "B: 999",
      "C: 911",
      "D: 0909 87900222",
    ],

    correct: "buttonA",
  },
  {
    q: "How does Denholm Reynholm meet his demise?",

    options: [
      "A: Chokes On A Biscuit",
      "B: Scalded To Death by Tea",
      "C: Overwork",
      "D: Jumps Out The Window",
    ],

    correct: "buttonD",
  },
  {
    q: "Where is Reynholm Industries located?",

    options: [
      "A: 65 Sutton Wick Lane",
      "B: 9 Abbey Road",
      "C: 123 Carenden Road",
      "D: 422 Crumpet Hill",
    ],

    correct: "buttonC",
  },
];

// // ////store questions///
let qIndex = [];

// ///store options///
let optionIndex = [];

// /// tracks current question #////
let answerIndex = [];

////keep score///
var score = 0;

//// game running true or false
var gameRunning = false;
function createArrays() {
  for (i = 0; i < myData.length; i++) {
    ///push to single array///
    qIndex.push(myData[i].q);

    ///corect answer array///
    answerIndex.push(myData[i].correct);

    /////  put options in a single array////
    optionIndex.push(myData[i].options);
  }
}
function renderQuestion() {
  ////push to HTML///
  question.innerHTML = qIndex[0];
  if (qIndex[0] == undefined) {
    clearInterval(ref);
    displayScore();
    optionIndex.shift();
  }
}
console.log(optionIndex[0]);
function renderAnswers() {
  ///push options from array to buttons///
  if (answerIndex[0] == undefined) {
    gameRunning = false;

    option1.innerHTML = "A:";
    option2.innerHTML = "B:";
    option3.innerHTML = "C:";
    option4.innerHTML = "D:";
  } else {
    option1.innerHTML = optionIndex[0][0];
    option2.innerHTML = optionIndex[0][1];
    option3.innerHTML = optionIndex[0][2];
    option4.innerHTML = optionIndex[0][3];
    return;
  }
}

///this tellls me what is clicked///
function checkAnswer(clickedId) {
  if (answerIndex[0] !== undefined) {
    if (clickedId === answerIndex[0]) {
      //// if ID matched current correct////
      score += 10;
      nextQuestion();
    } else nextQuestion();
  } else return;
}
//// force next question after 10secs
var ref;
function timer(count) {
  ref = setInterval(function () {
    count--;
    countDown.innerHTML = count;
    if (gameRunning) {
      if (count === 0) {
        clearInterval(ref);
        nextQuestion();
      }
    } else {
      clearInterval(ref);
      countDown.innerHTML = 0;
    }
  }, 1000);
}

////move question index up 1///
function nextQuestion() {
  qIndex.shift();
  optionIndex.shift();
  answerIndex.shift();
  renderQuestion();
  renderAnswers();
  clearInterval(ref);
  timer(10);
}

function displayScore() {
  question.innerHTML = "Congratulations you scored " + score + "%";
}

////start game bttn function ///
function startGame() {
  if (qIndex.length < 1) {
    gameRunning = true;
    createArrays();
    renderQuestion();
    renderAnswers();
    timer(10);
  } else return;
}
