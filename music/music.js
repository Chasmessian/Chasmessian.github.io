notes = [[27, "pencil scratches"], [43, "cough"], [59, "pencil scratches"], [69, "frustrated sigh"], [85, "pencil scratches"], [95,"water bottle falls over"], [105, "pencil scratches"], [111, "1 person walks in and stands in back"], [127, "pencil scratches, more people enter"], [137, "everyone enters, starts pacing"], [147, "pencil scratches, everyone moves closer"], [154, "1 person : 'do you really think you can do this?'"], [164, "more people start quiet, sparse comments of 'you are going to fail', more pencil scratches"], [170, "all - slightly louder, 'you are bad at theory', 'you're bad at school', 'you can't do this'"], [176, "all loudly torment, 'you are an idiot', 'you can't do anything right', 'why are you trying?', 'just give up'"], [180, "paper rips"]]
time = 0
document.getElementById("event").innerHTML = notes[0][1]
function startEvent(event){
    document.getElementById("event").innerHTML = notes[0][1]
    console.log(event[1])
}
lastEvent = 0
percentage = 0
start = Date.now()
timer = setInterval(function(){
time = (Date.now()-start)/1000
if(notes.length != 1){
    if(time>notes[0][0]){
        lastNote = notes.shift()
        startEvent(lastNote)
        lastEvent = lastNote[0]
    }
    if(notes[0][0]-lastEvent == 0){
        percentage = 0
    } else {
        percentage = Math.floor((time - lastEvent) / (notes[0][0] - lastEvent) * 100)
        document.getElementById("time").innerHTML = (notes[0][0]-time).toFixed(1)
        document.getElementById("bar").innerHTML = "▓".repeat(Math.floor(percentage/5)) + "░".repeat((20 - Math.floor(percentage/5)))
    }
    // console.log(percentage)
}}, 16)
