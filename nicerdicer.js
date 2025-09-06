let intervalId = null;
let clickCount = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; // 1 to 100
}

function startRolling() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      const number = generateRandomNumber();
      console.clear();
      console.log(`🎲 RANDOM NUMBER: ${number}`);
    }, 500); // changes every 0.5 seconds
  }
}

function stopRolling() {
  clearInterval(intervalId);
  intervalId = null;
  console.log("⛔ Number stopped.");
}

function toggleRolling() {
  clickCount++;
  if (clickCount % 2 === 1) {
    stopRolling(); // odd click → stop
  } else {
    startRolling(); // even click → start
  }
  console.log(`🔁 Click count: ${clickCount}`);
}

function resetRolling() {
  stopRolling();
  clickCount = 0;
  console.clear();
  console.log("🔄 Reset complete. Ready to roll!");
}

// Example usage:
// toggleRolling(); // Call this to start/stop based on click count
// resetRolling();  // Call this to reset everything
