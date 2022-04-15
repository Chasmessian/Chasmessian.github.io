const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

var walls=[[0,20,20,10],[0,0,300,200],[200,300,400,100],[0,500,200,400],[300,450,500,500], [400,250,500,300]]
let mouseX;
let mouseY;
const rayLength = 300;
const rayAmount = 3960;
const rayInterval = 360/rayAmount;

let mainLoop = setInterval(function(){
    Mainrender();
},16)



function Mainrender(){
    ctx.clearRect(0,0,500,500);
    renderRays();
    renderwalls();
    renderShadow();

}

function renderwalls(){
    for(var i = 0; i<walls.length; i++){
       ctx.beginPath();
       ctx.moveTo(walls[i][0],walls[i][1]);
       ctx.lineTo(walls[i][2],walls[i][3])
       ctx.strokeStyle = "#000000";
       ctx.stroke();
    }
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    mouseX = evt.clientX - rect.left;
    mouseY = evt.clientY - rect.top;
}

function renderRays(){
for(var i = 0; i<rayAmount; i++){
ctx.beginPath()
ctx.moveTo(mouseX,mouseY)
let endPoints = new ray(i * rayInterval).getEndPoints()
let unObstructedEndPoints = new ray(i * rayInterval).getNonObstructedEndpoints()

ctx.lineTo(unObstructedEndPoints[0],unObstructedEndPoints[1])
let distance = getDistance(mouseX,mouseY,endPoints[0],endPoints[1])
let grd = ctx.createLinearGradient(mouseX,mouseY,endPoints[0],endPoints[1])
grd.addColorStop(.999, "rgba(0,0,0,0)");
grd.addColorStop(1, "rgba(0,0,0, 1)");

ctx.strokeStyle = grd
ctx.stroke()
}

//make rays invisible, draw a line between the current endpoint and the next ray

}

function getDistance(x1,y1,x2,y2){
return(Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2)))
}

function renderShadow(){
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(mouseX, mouseY, rayLength, 0, 2 * Math.PI);
ctx.rect(canvas.width, 0, canvas.width*-1, canvas.height);
ctx.fill();
}
