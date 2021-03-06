const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ship={
    x:Math.floor(Math.random()*(canvas.width-1)+1),
    y:Math.floor(Math.random()*(canvas.height-1)+1),
    r:0,
    vx:Math.random()+1,
    vy:Math.random()+1,
    red: {
        value:Math.floor(Math.random()*254+1),
        change:1,
        hex:"00"
    },
    blue: {
        value:Math.floor(Math.random()*254+1),
        change:1,
        hex:"00"
    },
    green:{
        value:Math.floor(Math.random()*254+1),
        change:1,
        hex:"00"
    }
};

//color stuff

var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };



setInterval(function(){
ship.r=ship.r+1;
newframe();
move();
},16)

function move(){
    ship.x=ship.x+ship.vx
    if((ship.x+40)>canvas.width || (ship.x-40)<0){
        ship.vx *=-1
    }
    ship.y=ship.y+ship.vy
    if((ship.y+40)>canvas.height|| (ship.y-40)<0){
        ship.vy *=-1
    }

    ship.red.value=ship.red.value+ship.red.change
    if(ship.red.value>=255||(ship.red.value <= 0)){
        ship.red.change *=-1
        };
    ship.blue.value=ship.blue.value+ship.blue.change
    if(ship.blue.value>=255||(ship.red.value<=0)){
        ship.blue.change *=-1
    }
    ship.green.value=ship.green.value+ship.green.change
    if(ship.green.value>=255||(ship.green.value<=0)){
        ship.green.change *=-1
    }
ship.red.hex = rgbToHex(ship.red.value);
ship.green.hex = rgbToHex(ship.green.value);
ship.blue.hex = rgbToHex(ship.blue.value);
};

function newframe(){
ctx.resetTransform();
ctx.beginPath();
ctx.translate(ship.x, ship.y)
ctx.rotate(ship.r*Math.PI/180);
ctx.translate(-ship.x, -ship.y)

ctx.moveTo(ship.x+50,ship.y+55);

//ship shape
ctx.lineTo(ship.x, ship.y+40);
ctx.lineTo(ship.x-50, ship.y +55);
ctx.lineTo(ship.x, ship.y-55);
ctx.lineTo(ship.x+50, ship.y +55)
ctx.lineTo(ship.x, ship.y+40);
ctx.moveTo(ship.x, ship.y);
    
    
ctx.closePath();
var hexrandom = "#"+ship.red.hex+ship.green.hex+ship.blue.hex;
ctx.strokeStyle = hexrandom;
ctx.lineWidth = 5;
ctx.stroke();
};
newframe();
