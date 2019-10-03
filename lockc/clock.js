1
var today = new Date();

timeHour = today.getHours()
timeMinute = today.getMinutes()
timeSecond = today.getSeconds()

setInterval(function () {
    updateTime()


}, 1000)

function updateTime() {
    if (timeSecond===59) {
        timeMinute -= 1
        timeSecond = 0
    } else if (timeMinute===0) {
        timeHour -=1
        timeMinute = 0
        timeSecond = 0
    } else if (timeHour===0) {
        timeHour = 24
        timeMinute = 59
        timeSecond = 0
    } else {
        timeSecond++
    }

    document.querySelector('h1').innerHTML = timeHour + ':' + timeMinute + ':' +timeSecond
}
