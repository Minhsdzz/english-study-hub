let timerInterval = null;
let remainingSeconds = 25 * 60;
let isRunning = false;

const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('timer-start');
const resetBtn = document.getElementById('timer-reset');
const presetBtns = document.querySelectorAll('.preset-btn');

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function updateTimerUI() {
  timerDisplay.textContent = formatTime(remainingSeconds);
}

function setTimerMinutes(minutes, autoStart = false) {
  clearInterval(timerInterval);
  isRunning = false;
  remainingSeconds = minutes * 60;
  startBtn.textContent = 'Bắt đầu';
  updateTimerUI();
  if (autoStart) toggleTimer();
}

function toggleTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    startBtn.textContent = 'Tiếp tục';
  } else {
    isRunning = true;
    startBtn.textContent = 'Tạm dừng';
    timerInterval = setInterval(() => {
      if (remainingSeconds > 0) {
        remainingSeconds--;
        updateTimerUI();
      } else {
        clearInterval(timerInterval);
        isRunning = false;
        startBtn.textContent = 'Bắt đầu';
        alert('🎉 Đã hết giờ học phiên này! Hãy nghỉ ngơi một chút nhé.');
      }
    }, 1000);
  }
}

startBtn.addEventListener('click', toggleTimer);

resetBtn.addEventListener('click', () => {
  setTimerMinutes(25, false);
});

presetBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const mins = parseInt(btn.getAttribute('data-minutes'), 10);
    setTimerMinutes(mins, false);
  });
});

updateTimerUI();