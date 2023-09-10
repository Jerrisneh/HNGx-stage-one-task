let week = document.getElementById("currentWeek");
let time = document.getElementById("time")

function getCurrentDayOfWeek(){
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const currentDate = new Date();
    const weekDay = weekDays[currentDate.getUTCDay()];
    return weekDay;
}

function getCurrentUTCTime(){
    const currentTime = Date.now()
    const formattedTime = new Date(currentTime).toLocaleString();
    return formattedTime;
}

week.textContent = getCurrentDayOfWeek();
time.textContent = getCurrentUTCTime();