timer = document.getElementById("clock")
i = 0
loop = setInterval(function(){
    i++
    now = new Date()
    
    normal = {
        hours: now.getHours(),
        minutes:now.getMinutes(),
        seconds:now.getSeconds(),
        totalSeconds: now.getMinutes() * 60 + now.getSeconds()
    }
    end = "AM"
    newHours = normal.hours
    if(normal.hours>12){
        newHours-=12
        end = "PM"
    }
    newMinutes = Math.floor(normal.totalSeconds/40)
    newSeconds = normal.totalSeconds - newMinutes * 40
    string = newHours + ":" + newMinutes + ":" + newSeconds + " " + end
    timer.innerHTML = string
},1000)
