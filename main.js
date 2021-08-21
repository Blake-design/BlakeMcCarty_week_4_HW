// Access toggle switch HTML element

var question = document.getElementById("questions");
var option1 = document.getElementById("a");
var option2 = document.getElementById("b");
var option3 = document.getElementById("c");
var option4 = document.getElementById("d");
var countDown = document.getElementById("timer");

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
aIndex = [];

/// tracks current question #////
current = [];

////keep score///
(score = []), score >= 100;

////display questions by setting a loop of the length of myQuestions array////
function renderQuestion() {
  for (i = 0; i < myQuestions.length; i++) {
    ///push to single array///
    qIndex.push(myQuestions[i].q);

    ///coorect answer array///
    current.push(myQuestions[i].correct);

    //// push answers to and array
    current.push(myQuestions[i].correct);
  }

  ////push to HTML///
  question.innerHTML = qIndex[1];
}

////this displays answers by setting a loop of 10 again///
function renderAnswers() {
  for (i = 0; i < myQuestions.length; i++) {
    /////  put answers in a single array////
    aIndex.push(myQuestions[i].answers);
  }

  ///push answers from array to buttons///
  option1.innerHTML = aIndex[0][0];
  option2.innerHTML = aIndex[0][1];
  option3.innerHTML = aIndex[0][2];
  option4.innerHTML = aIndex[0][3];
}

///this tellls me what is clicked///
function checkAnswer(clickedId) {
  console.log(clickedId);
  console.log(i);
  console.log(qIndex);
  console.log(current);
  //// if ID matched current correct////
  if (clickedId === current[i]) {
    score = +10;

    ///double check to make sure variables are correct////

    console.log(i);
    console.log(qIndex);
  }
}
//// force next question after 10secs

var count = 10;
function timer() {
  var ref = setInterval(function () {
    if (count === 0) {
      clearInterval(ref);
    }
    count--;
    countDown.innerHTML = count;
  }, 1000);
}

////move question index up 1///
function nextQuestion() {
  qIndex[i + 1];
  aIndex[i + 1];
  question.innerHTML = qIndex[i];
  option1.innerHTML = aIndex[i][0];
  option2.innerHTML = aIndex[i][1];
  option3.innerHTML = aIndex[i][2];
  option4.innerHTML = aIndex[i][3];
}

////start game bttn function ///
function startGame() {
  renderQuestion();
  renderAnswers();
  timer(10);
  console.log(qIndex[i + 1]);
  nextQuestion();
}
