// elements
var choices = document.getElementById('choice');
var timerEl = document.getElementById('timeLeft');
var title = document.getElementById('question-title')
var answer = document.getElementById('answer')



// get current question object from array
var currentQuestion = questions[currentQuestionIndex];

title.textContent = currentQuestion.title;


// clear out any old question choices
choicesEl.innerHRML = "";

// loop over choices
currentQuestion.choices.forEach(function (choice, i) {
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    choiceNode.onclick = questionClick;

    choicesEl.appendChild(choiceNode);
});
// create new button for each choice


// attach click event listener to each choice


// display on page (append)


// check if user guessed wrong
if (this.value !== questions[currentQuestionIndex].answer) {

    time -= 15;

    if (time < 0) {
        time = 0
    }

timerEl.textcontent = time

sfxWrong.play();

feedbackEl.textcontent = 'Wrong!';
} 
    else {
    sfxRight.play();
    feedbackEl.textContent = 'Correct!';
}
// flash right/wrong feedback on page for half a second
feedbackEl.setAttribute('class','feedback');
setTimeout(function () {
    feedbackEl.setAttribute('Class', 'feedback hide');
}, 1000);

// move to next question
currentQuestionIndex++

// check if we've run out of time
if (currentQuestionIndex=== questions.length) {
    quizEnd();
} else [
    currentQuestionIndex++,
]