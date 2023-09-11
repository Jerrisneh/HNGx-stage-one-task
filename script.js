const date = new Date();
const currentDate = date.getUTCDay();
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const currentDay = days[currentDate]


document.getElementById(
    "day"
).innerHTML = `${currentDay}`;

function milliseconds(){
    const date = new Date();
    const currentTime = date.getTime();
    document.getElementById(
         "time"
    ).innerHTML = ` ${currentTime}`;
}

setInterval(milliseconds, 1000)