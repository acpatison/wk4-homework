// elements
var choices = document.getElementById('choice');
var timerEl = document.querySelector('#timeLeft');
var title = document.getElementById('question-title')
var answer = document.getElementById('answer')
var startBtn = document.querySelector('#startBtn')
let currentQuestion = 0;
let currentScore = document.querySelector('#currentScore');
let nextQuestion = ``;


function showQuestion() {
    // get the question 
    var firstQuestion = questions[currentQuestion].question;
    const choice0 = questions[currentQuestion].choices[0];
    const choice1 = questions[currentQuestion].choices[1];
    const choice2 = questions[currentQuestion].choices[2];
    const choice3 = questions[currentQuestion].choices[3];
    // put the question into the DOM
    document.querySelector('#question-title').innerHTML = firstQuestion;
    // populate value of the radiobutton
    document.querySelector('#labelChoice1').innerHTML = choice0;
    document.querySelector('#labelChoice2').innerHTML = choice1;
    document.querySelector('#labelChoice3').innerHTML = choice2;
    document.querySelector('#labelChoice4').innerHTML = choice3;
}

startBtn.addEventListener('click', function () {
    // sanity check
    // console.log('I clicked Start');
    showQuestion();
    setInterval(timerEl, 5000);
});


// every second
getTimeLeft = () => {
    // -- reach into you html and grab that number
    document.getElementById(`#timeLeft`).innerHTML = timerEl
    // -- decrement that number by one
    timeLeft -= 1;
    // -- put the new number on the screen
    let timeLeft = new timerEl;
}
// -- if number === 0
// -- -- clear the timer




// const timerEl = setInterval(myTimer, 25000);

// const wrongAnswerTime = () => {
//     console.log(`WRONG!`);
//     myTimer = -5;
// }

// const rightAnswer = () => {

// }

// grab all my elements w/ the class choices
const radios = document.querySelectorAll('.choices')
// looping thru each element and add a click listener
for (let i=0; i<4; i++) {
    radios[i].addEventListener(`click`, doTheWork)
}

// on click
function doTheWork() {
    // If the choice radio button clicked on equals question i's answer, then 
    if (parseInt(this.value) === questions[currentQuestion].answer) {
        // rightAnswer();
        console.log('Clicked');
        
    } else {
        // wrongAnswerTime();
        console.log(`shoot`);
        
        
    }
    // move question counter to next question
    // if we have more questions
    // -- move to next question
        currentQuestion += 1;
        // remove the check from the button
        this.checked = false
        // paint the quesitons again
        showQuestion();
    // -- else
    // do somethin else
}

// Press Start Button

// Display current question and choices

// Display Timer

// start timer countdown

// User click radio function
    // FOR LOOP:
    // If user click = question.answer, then display correct! for 1 second
        // then proceed to ask next question (i+1)

    // else user click != question.answer, then display wrong for 1 second
        // Then deduct 5 seconds from timer

        // Then proceed to ask next question (i+1)
    // Else if timer = 0 
        // then display high score
    
// After question for loop, display high score

