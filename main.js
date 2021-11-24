// Access toggle switch HTML element

var question = document.getElementById("questions");
var option1 = document.getElementById("a");
var option2 = document.getElementById("b");
var option3 = document.getElementById("c");
var option4 = document.getElementById("d");
var countDown = document.getElementById("timer");
countDown.innerHTML = 10;
var maurice = "<img src = ./assets/maurice.png  position = absolute>";
var jen = "<img src = ./assets/jen.png  position = absolute>";
var roy = "<img src = ./assets/roy.png  position = absolute>";
var richmond = "<img src = ./assets/richmond.png  position = absolute>";

///// create an object to hold questions and answers
const myQuestions = [
  {
    q: "Roy has been decribed by an ex-girlfriend as...",

    answers: [
      "Emotionally Artistic",
      "A Massive Arse",
      "The Best Lover She Ever Had",
      "Roy Has Never Had A Girlfriend",
    ],

    correct: "a",
  },
  {
    q: "What dating site does the I.T. Crowd use?",

    answers: ["Halt and Catch Fire", "Lonely Hearts", "Buffle", "Crickets"],

    correct: "b",
  },
  {
    q: "How many people work in the I.T. Department",

    answers: ["2", "3", "4", "5"],

    correct: "c",
  },
  {
    q: "Who replaces Denholm Reynholm",

    answers: [
      "Douglas Reynholm",
      "Dennis Rhinestone",
      "Danny Trejo",
      "Jen Barber",
    ],

    correct: "a",
  },
  {
    q: "Which OS does the bomb disposal robot run on",

    answers: ["Windows Vista", "Windows ME", "Linux", "MenuetOS"],

    correct: "a",
  },
  {
    q: "What do I like to eat in the morning?",

    answers: [
      "Eggs, Banger, and Beans",
      "Smartie Cereal",
      "Wheaties",
      "I'm More of a Brunch Man",
    ],

    correct: "b",
  },
  {
    q: "What is Richmond's favorite drink",

    answers: ["Blood", "Grape Juice", "Absynthe", "Red Wine"],

    correct: "c",
  },
  {
    q: "What is the number for emergency services",

    answers: ["0118 999 881 999 119 7253", "999", "911", "0909 87900222"],

    correct: "a",
  },
  {
    q: "How does Denholm Reynholm meet his demise?",

    answers: [
      "Chokes On A Donut",
      "Scalded To Death by Tea",
      "Overwork",
      "Jumps Out The Window",
    ],

    correct: "d",
  },
  {
    q: "Where is Reynholm Industries located?",

    answers: [
      "65 Sutton Wick Lane",
      "9 Abbey Road",
      "123 Carenden Road",
      "422 Crumpet Hill",
    ],

    correct: "c",
  },
];

////store questions///
qIndex = [];

///store answers///
optionIndex = [];

/// tracks current question #////
answerIndex = [];

////keep score///
score = 0;

function createArrays() {
  for (i = 0; i < myQuestions.length; i++) {
    ///push to single array///
    qIndex.push(myQuestions[i].q);

    ///corect answer array///
    answerIndex.push(myQuestions[i].correct);

    /////  put answers in a single array////
    optionIndex.push(myQuestions[i].answers);
  }
}

function renderQuestion() {
  ////push to HTML///
  question.innerHTML = qIndex[0];
  if (qIndex[0] == undefined) {
    question.innerHTML = "";
  }
}

function renderAnswers() {
  ///push answers from array to buttons///

  option1.innerHTML = optionIndex[0][0];
  option2.innerHTML = optionIndex[0][1];
  option3.innerHTML = optionIndex[0][2];
  option4.innerHTML = optionIndex[0][3];
}

///this tellls me what is clicked///
function checkAnswer(clickedId) {
  correct = answerIndex[0];
  if (clickedId === correct) {
    //// if ID matched current correct////
    score += 10;
    nextQuestion();
  } else nextQuestion();
}
//// force next question after 10secs
var ref;
function timer(count) {
  ref = setInterval(function () {
    count--;
    countDown.innerHTML = count;
    console.log(count);
    if (count === 0) {
      clearInterval(ref);
      nextQuestion();
    } else if (qIndex[0] == undefined) {
      clearInterval(ref);
      displayScore();
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
  createArrays();
  renderQuestion();
  renderAnswers();
  timer(10);
}
