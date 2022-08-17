/*
All your work should be done in this file
*/


var interval_id = null; // storing id returned from setInterval()
var minute = 0; // current timer minute counter
var second = 0; // current timer second counter

// This function add one second to the timer
function run_timer() {
    second++; // add 1 second
    if(second > 59) { // if second reach 60, add 1 minute to minute counter
        minute++;
        second = 0; // reset second counter
    }
}

// this function handle the start button click event, which start the timer
function start() {
    // disable the start button after timer start (additional requirement)
    document.getElementById('start-btn').disabled = true;

    // make sure the timer is not running (no existing setInterval() running)
    // this is especially needed if you do not disable the start button
    // multiple click on the start button would create multiple setInterval() running at the same time
    if(interval_id === null) { 
        // call the anonymous function every 1000 milliseconds (1 second)
        interval_id = setInterval(function() {
            run_timer(); // add one second to the timer counter
            var minute_string = (minute<10)? '0'+minute : minute; // display the leading zero if less than 10
            var second_string = (second<10)? '0'+second : second;
            var time_string = minute_string + ':' + second_string; // create the new timer string
            document.getElementById('time').textContent = time_string; // insert the new timer string to HTML
        }, 1000);
    }
}

// this function handle the stop button click event, which stop the timer
function stop() {
    clearInterval(interval_id); // stop timer by clearing the setInternval()
    interval_id = null; // reset the id to null, so that this can be checked in start()
    document.getElementById('start-btn').disabled = false; // additional requirement to re-enable the 'Start' button
}

// this function handle the reset button click event, which reset the timer
function reset() {
    stop(); // stop the timer, in case the timer is still running
    minute = second = 0; // reset the timer counters
    document.getElementById('time').textContent = '00:00'; // reset the timer display
}

// registering the onclick event of each button
document.getElementById('start-btn').onclick = start;
document.getElementById('stop-btn').onclick = stop;
document.getElementById('reset-btn').onclick = reset;

