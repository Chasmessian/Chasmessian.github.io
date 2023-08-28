canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
let data = []
let mouse = {x:0,y:0}
let stored = []
canvas.addEventListener("mousemove", function(event) {
    // get the mouse coordinates
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });

for(let i = 0; i<7; i++){
    data.push([0,0,0,0,0,0,0])
}
for(let i = 0; i <6; i++){
    ctx.beginPath()
    ctx.moveTo((i+1)*50, 0)
    ctx.lineTo((i+1)*50, 350)
    ctx.fillStyle = "rgba(127,127,127,.3)"
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(0, (i+1)*50)
    ctx.lineTo(350, (i+1)*50)
    ctx.fillStyle = "rgba(127,127,127,.3)"
    ctx.stroke()
}
function draw(row, column){
    ctx.rect(50 * column, 50 * row, 50, 50)
    ctx.fillStyle="#000000"
    ctx.fill()
    data[row][column] = 1;
}
function erase(row, column){
    ctx.rect(50 * column, 50 * row, 50, 50)
    ctx.fillStyle="#FFFFFF"
    ctx.fill()
    data[row][column] = 0;
} //why didn't I just make these two one function? I'll never know

function change(){
    let row = Math.floor(mouse.y/50)
    let column = Math.floor(mouse.x/50)
    if(data[row][column]==0){
        draw(row, column)
    }
    else {
        erase(row, column)
    }
    for(let i = 0; i <6; i++){
        ctx.beginPath()
        ctx.moveTo((i+1)*50, 0)
        ctx.lineTo((i+1)*50, 350)
        ctx.fillStyle = "rgba(127,127,127,.3)"
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(0, (i+1)*50)
        ctx.lineTo(350, (i+1)*50)
        ctx.fillStyle = "rgba(127,127,127,.3)"
        ctx.stroke()
    }
}
function copy(){
    let formattedArray = JSON.stringify(stored);
    navigator.clipboard.writeText(formattedArray);
}
function submit(){
    let value = document.getElementById("class").value
    stored.push([data,value])
    data = []
    for(let i = 0; i<7; i++){
        data.push([0,0,0,0,0,0,0])
    }
    ctx.clearRect(0,0,350,350)
    for(let i = 0; i <6; i++){
        ctx.beginPath()
        ctx.moveTo((i+1)*50, 0)
        ctx.lineTo((i+1)*50, 350)
        ctx.fillStyle = "rgba(127,127,127,.3)"
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(0, (i+1)*50)
        ctx.lineTo(350, (i+1)*50)
        ctx.fillStyle = "rgba(127,127,127,.3)"
        ctx.stroke()
    }
}
