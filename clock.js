let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
let running = false;

function updateDisplay() {
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  console.clear();
  console.log(`⏱️ ${h}:${m}:${s}`);
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
}

function stop() {
  running = false;
  clearInterval(timer);
  console.log("🛑 Stopwatch stopped.");
}

function reset() {
  stop();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  console.log("🔄 Stopwatch reset.");
}

// Example usage:
start(); // To start the stopwatch
// stop(); // To stop it
// reset(); // To reset it
