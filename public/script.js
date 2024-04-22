let timerRunning = false;
let startTime;
let elapsedTime = 0;
let timerHistory = [];
let challengeRunning = false;
let challengeStartTime;
let challengeTimes = [];
let ghostGameRunning = false;
let ghostTimer;
let ghostAppearTime;
document.getElementById('startGhostGame').addEventListener('click', function() {
    ghostGameRunning = true;
    document.getElementById('ghostDisplay').textContent = '';
    document.getElementById('ghostResults').textContent = '';
    document.getElementById('bustGhost').style.display = 'none';
    let randomTime = Math.random() * 10000; // Random time within 10 seconds
    ghostTimer = setTimeout(function() {
        document.getElementById('ghostDisplay').textContent = '👻';
        ghostAppearTime = Date.now();
        document.getElementById('bustGhost').style.display = 'inline';
    }, randomTime);
});
document.getElementById('bustGhost').addEventListener('click', function() {
    if (!ghostAppearTime) {
        document.getElementById('ghostResults').textContent = 'Too early! You lose!';
        clearTimeout(ghostTimer);
    } else {
        let reactionTime = Date.now() - ghostAppearTime;
        document.getElementById('ghostResults').textContent = `Reaction Time: ${reactionTime} ms`;
    }
    ghostGameRunning = false;
    document.getElementById('bustGhost').style.display = 'none';
});

const timerButton = document.getElementById('timerButton');
const historyList = document.getElementById('historyList');
const challengeButton = document.getElementById('challengeButton');
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

challengeButton.addEventListener('click', function() {
	    if (!challengeRunning) {
		            challengeStartTime = Date.now();
		            challengeRunning = true;
		            challengeButton.textContent = 'Tap at 2 seconds';
		        } else {
				        let tapTime = Date.now();
				        let interval = tapTime - challengeStartTime;
				        challengeTimes.push(interval);
				        challengeRunning = false;
				        challengeButton.textContent = '⏱️ 2-Second Challenge ⏱️';
				        recordChallengeTime(interval);
				    }
});

function recordTime(time) {
	    timerHistory.push(time);
	    const newTime = document.createElement('li');
	    newTime.textContent = `Time: ${time} ms`;
	    historyList.appendChild(newTime);
}

function recordChallengeTime(time) {
	    const newTime = document.createElement('li');
	    newTime.textContent = `Attempt: ${time} ms - ${Math.abs(2000 - time)} ms off`;
	    resultsList.appendChild(newTime);
}
