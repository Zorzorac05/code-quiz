var timer = $('#timer');
var time = 60;
var start = $('#start');
var question = $('.question');
var answers = $('.answers');
var button = $('<button>');
var instruction = $('.intro');
var score = 0;
var end = $(".end");
var leaderBoard = $('.leaderBoard');

//countdown timer function updates time after time runs out calls endGame function
function countDown() {
    if (time >= 0) {
        timer.text('Time: ' + time);
        time --;
    }else {
        time = 999;
        endGame();
    }
}

//first question adds the question to the P element then creates 4 clickable buttons for the user to click depeding on what is clicked will be a right or wrong answer wrong answers -5 from the time then calls the next question
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

//next question clears everthing thing from previous question then updates with its own question once again -5 from time on wrong answers then calling next question
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
    question.text("What type of data type is this variable? var happy = 35");
    $('<button>number</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Right!</p>').appendTo(answers);
        setTimeout(questionFour, 2000);
    });
    $('<button>string</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        setTimeout(questionFour, 2000);
    });
    $('<button>boolean</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        setTimeout(questionFour, 2000);
    });
    $('<button>null</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        setTimeout(questionFour, 2000);
    });
}

function questionFour(event){
    question.empty();
    answers.empty();
    question.text("Which of the following would you expect to be a style sheet?");
    $('<button>home.html</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        setTimeout(questionFive, 2000);
    });
    $('<button>silly.js</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        setTimeout(questionFive, 2000);
    });
    $('<button>frown.png</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        setTimeout(questionFive, 2000);
    });
    $('<button>words.css</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Right!</p>').appendTo(answers);
        setTimeout(questionFive, 2000);
    });
}

function questionFive(event){
    question.empty();
    answers.empty();
    question.text("What to you use to change the color of text in CSS");
    $('<button>color:</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Right!</p>').appendTo(answers);
        score = time;
        time = 999;
        setTimeout(endGame, 2000);
    });
    $('<button>strong:</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        score = time;
        time = 999;
        setTimeout(endGame, 2000);
    });
    $('<button>font-family:</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        score = time;
        time = 999;
        setTimeout(endGame, 2000);
    });
    $('<button>background-color:</button></br>').appendTo(answers).on('click', 
    function() {
        $('<p>Wrong!</p>').appendTo(answers);
        time = time - 5;
        score = time;
        time = 999;
        setTimeout(endGame, 2000);
    });
}

//function called when the game is over either by answering all questions or running out of time gets a name from the user and assign it to the score in local storage
function endGame(){
    question.empty();
    answers.empty();
    question.text("Game over! Your final score is " + score);
    var name = $('<input type="text">').appendTo(end);
    $('<button>Submit</button>').appendTo(end).on('click', function(event){
        event.preventDefault();
        var object = {
            User: name.val(),
            userScore: score
        };
        localStorage.setItem("leaderBoards", JSON.stringify(object));
        scoreBoard();
    });

}

//clears all fields then shows the leader board of scores saved to local storage
function scoreBoard() {
    question.empty();
    answers.empty();
    end.empty();
    $('<h1>Highscores!</h1>').appendTo(leaderBoard);
    var scoresArray = [];
    scoresArray = JSON.parse(localStorage.getItem("leaderBoards"));
    console.log(scoresArray);
    for (var i = 0; i <= scoresArray.length; i++) {
        var x = scoresArray[i];
        console.log(x);
        $('<p></p></br>').append(x);
    }
}

//start game event starts timer as well as calls the first question
start.on('click', function() {
    setInterval(countDown, 1000);
    instruction.remove();
    questionOne();
});