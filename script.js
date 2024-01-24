var timer = $('#timer');
var time = 60;
var start = $('#start');
var question = $('.question');
var answers = $('.answers');
var button = $('<button>');
var instruction = $('.intro');

//countdown timer function updates time after time runs out calls endGame function
function countDown() {
    if (time >= 0) {
        timer.text('Time: ' + time);
        time --;
    }else {
        endGame();
    }
}

//first question adds the question to the P element then creates 4 clickable buttons for the user to click depeding on what is clicked will be a right or wrong answer
function questionOne(event) {
    question.text('What symbol acts as a punctuation to end a line in javascript?');
    $('<button>:</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        setTimeout(questionTwo, 2000);
    });
    $('<button>;</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Right!</p>').appendTo(answers);
        setTimeout(questionTwo, 2000);
    });
    $('<button>.</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        setTimeout(questionTwo, 2000);
    });
    $('<button>/</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        setTimeout(questionTwo, 2000);
    });
}

function questionTwo(event){
    question.empty();
    answers.empty();
    question.text("What method adds an item to the end of an array?");
    $('<button>.length()</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        setTimeout(questionThree, 2000);
    });
    $('<button>.pop()</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        setTimeout(questionThree, 2000);
    });
    $('<button>.shift()</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        setTimeout(questionThree, 2000);
    });
    $('<button>.push()</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Right!</p>').appendTo(answers);
        setTimeout(questionThree, 2000);
    });
}

function questionThree(event){
    question.empty();
    answers.empty();
    question.text("Question Three");
}

function questionfour(event){
    question.empty();
    answers.empty();
    question.text("Question four");
}

function questionFive(event){
    question.empty();
    answers.empty();
    question.text("Question five");
}

function endGame(){
    console.log("hello");
}

//start game event starts timer as well as calls the first question
start.on('click', function() {
    setInterval(countDown, 1000);
    instruction.remove();
    questionOne();
});
