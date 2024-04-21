let timerRunning = false;
let startTime;
let elapsedTime = 0;
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