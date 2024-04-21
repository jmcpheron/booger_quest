let timerRunning = false;
let startTime;
let elapsedTime = 0;
let timerHistory = [];

const timerButton = document.getElementById('timerButton');
const historyList = document.getElementById('historyList');

timerButton.addEventListener('click', function() {
    if (!timerRunning) {
        startTime = Date.now() - elapsedTime;
        timerRunning = true;
        timerButton.textContent = 'Stop Timer';
    } else {
        elapsedTime = Date.now() - startTime;
        timerRunning = false;
        timerButton.textContent = 'Start Timer';
        recordTime(elapsedTime);
    }
});

function recordTime(time) {
    timerHistory.push(time);
    const newTime = document.createElement('li');
    newTime.textContent = `Time: ${time} ms`;
    historyList.appendChild(newTime);
}
