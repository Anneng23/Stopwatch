let milliseconds = 0;
let interval = null;

const startBtn = () => document.getElementById('startBtn');
const stopBtn = () => document.getElementById('stopBtn');
const resetBtn = () => document.getElementById('resetBtn');
const timeDisplay = () => document.getElementById('time');

function setInitialButtonState() {
  if (!startBtn() || !stopBtn() || !resetBtn()) return;
  startBtn().disabled = false;
  startBtn().textContent = 'Start';
  stopBtn().disabled = true;
  stopBtn().textContent = 'Stop';
  resetBtn().disabled = true;
  resetBtn().textContent = 'Reset';
} 

// Start stopwatch
function start() {
  if (interval) return;
  interval = setInterval(() => {
  milliseconds += 10;

  const hrs = Math.floor(milliseconds / 3600000);
  const mins = Math.floor((milliseconds % 3600000) / 60000);
  const secs = Math.floor((milliseconds % 60000) / 1000);
  const ms = Math.floor((milliseconds % 1000) / 10);

  document.getElementById("time").textContent =
    String(hrs).padStart(2, "0") + ":" +
    String(mins).padStart(2, "0") + ":" +
    String(secs).padStart(2, "0") + ":" +
    String(ms).padStart(2, "0");
}, 10);


  // Update buttons
  startBtn().disabled = true;
  startBtn().textContent = 'Resume';
  stopBtn().disabled = false;
  stopBtn().textContent = 'Stop';
  resetBtn().disabled = false; 
}

// Stop stopwatch
function stop() {
  clearInterval(interval);
  interval = null;

  // Update buttons
  startBtn().disabled = false;
  startBtn().textContent = 'Resume';
  stopBtn().disabled = true;
  stopBtn().textContent = 'Stop';
  // keep reset enabled so user can reset after stopping
  resetBtn().disabled = false; 
}

// Reset stopwatch
function reset() {
  stop();
  seconds = 0;
  timeDisplay().textContent = "00:00:00:00";

  // Update buttons to initial state
  startBtn().disabled = false;
  startBtn().textContent = 'Start';
  stopBtn().disabled = true;
  stopBtn().textContent = 'Stop';
  resetBtn().disabled = true;
  resetBtn().textContent = 'Reset';
}

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  const updateThemeIcon = () => {
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    themeToggle.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  };

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateThemeIcon();
  });

  // Initialize icon/title state
  updateThemeIcon();
}

// Initialize button state when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setInitialButtonState);
} else {
  setInitialButtonState();
}
