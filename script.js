var timer = $('#timer');
var time = 60;
var start = $('#start');

function countDown() {
    if (time >= 0) {
        timer.text('Time: ' + time);
        time --;
    }else {
        endGame();
    }
}

function endGame(){
    console.log("hello");
}

start.on('click', function() {
    setInterval(countDown, 1000);
    function questionOne() {
        return 0;
    }

});