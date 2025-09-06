function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const dateString = `${dayName}, ${monthName} ${now.getDate()}, ${now.getFullYear()}`;

  console.log("Time:", timeString);
  console.log("Date:", dateString);
}

// Run once
updateClock();

// Or run every second
setInterval(updateClock, 1000);
