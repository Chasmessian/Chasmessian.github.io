const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ship={
    x:canvas.width/2,
    y:canvas.height/2,
    r:0,
    rspeed:2,
    tv:0, //total velocity
    maxvelocity:3.5, 
    vx:0,
    vy:0,

};

var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

x = 100;

function gameLoop() {
    if (keyState[37] || keyState[65]){
        ship.r -= ship.rspeed;
    }    
    if (keyState[39] || keyState[68]){
        ship.r += ship.rspeed;
    }
    if(keyState[38] || keyState[87]){
        if(ship.tv<ship.maxvelocity){
            ship.tv +=.05;
        }
    } else if (!keyState[38] || !keyState[87]){
        if(ship.tv>0){
        ship.tv -=.02
        } else if (ship.tv<0){
            ship.tv=0
        }
    }
}

//slowly changes one number to another..
function numberchange(start, destination){
    var difference = destination-start;
    var addFraction = difference/100
    i=0
    var numberinterval = setInterval(function(){
        if(i!=100){
        start=start+addFraction
        i=i+1
        } else {
            start=destination
            clearInterval(numberinterval);
        }
    },5)
    };
//delete if broken



setInterval(function(){
if(ship.r>=360){ship.r-=360} else if(ship.r<0){ship.r+=360};

if(ship.x>canvas.width-20){
    ship.x=canvas.width-20
}
if (ship.x<20){
    ship.x = 20
}
if (ship.y<20) {
    ship.y=20;
}
if(ship.y>canvas.height-20){
    ship.y=canvas.height-20
}

gameLoop();
newframe();
move();
},5)

function move(){
//turning ship.r into a split velocity
if(keyState[38] || keyState[87]){
if(ship.r<90&&ship.r>=0){
    ship.vx = ship.r/90
    ship.vy = (ship.vx-1)
} else if (ship.r<180&&ship.r>=90) {
    ship.vy = (ship.r-90)/90;
    ship.vx = (1-ship.vy);
} else if (ship.r<270&&ship.r>=180){
    ship.vx=((ship.r-180)/90)*-1;
    ship.vy=ship.vx+1
} else if (ship.r<360&&ship.r>=270){
    ship.vy=(ship.r-270)/-90
    ship.vx=-1-ship.vy
};
};

    ship.x=ship.x+(ship.vx*(ship.tv))
    if((ship.x+40)>canvas.width || (ship.x-40)<0){
        ship.vx = 0
    }
    ship.y=ship.y+(ship.vy * (ship.tv))
    if((ship.y+40)>canvas.height|| (ship.y-40)<0){
        ship.vy =0
    }
};

function newframe(){
ctx.resetTransform();
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
ctx.translate(ship.x, ship.y)
ctx.rotate(ship.r*Math.PI/180);
ctx.translate(-ship.x, -ship.y)

ctx.moveTo(ship.x+25,ship.y+27.5);

//ship shape
ctx.lineTo(ship.x, ship.y+20);
ctx.lineTo(ship.x-25, ship.y +27.5);
ctx.lineTo(ship.x, ship.y-27.5);
ctx.lineTo(ship.x+25, ship.y +27.5)
ctx.lineTo(ship.x, ship.y+20);
ctx.moveTo(ship.x, ship.y);


ctx.closePath();

// the fill color
ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth = 5;
ctx.stroke();
};
newframe();
alert("use left and right arrow keys to rotate, use up to accelerate. alternatively, use WASD in the same way.")
