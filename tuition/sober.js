let semesterPrice = 6222
let off = 8
let workDays = 80
let days = 121
let SecondsInDay = 60*60*24
let rate = (semesterPrice/(days))/(SecondsInDay)
let total = 0
let elapsedStartTime = (Date.now() - new Date(2024,7,14).getTime())/1000
total = elapsedStartTime * rate
// console.log(elapsedStartTime * rate)
setInterval(function(){
    total += rate * (16/1000)
    // console.log(total)
    document.getElementById("tuition").innerHTML = "$" + total
},16)
