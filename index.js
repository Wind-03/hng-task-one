const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = document.getElementById('currentDay');
const currentUTCTime = document.getElementById('currentUTCTime');

    // Function to get the current day of the week
function getCurrentDay() {
    const today = new Date();
    const weekday = today.getUTCDay();
   return daysOfWeek[weekday];
}
 // Function to get the current UTC time in milliseconds
function getCurrentUTCTime() {
    currentUTCTime.textContent = `Current UTC Time: ${Date.now()} milliseconds`;
}
getCurrentUTCTime();
setInterval(getCurrentUTCTime, 1000)

// Set the content of the elements
currentDay.textContent = `Current Day of the Week: ${getCurrentDay()}`;
