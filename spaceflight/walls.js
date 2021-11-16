var walls = [];
var up_downwallspeed = 1
var left_rightwallspeed = 1
var speedmultiplier = 1
var timebetween = 2000;
var wall_limit=10;
var score = 0;
function renderwalls(){
    for(var i = 0;i<walls.length; i++){
        if(walls[i]["walltype"]===1){
            ctx.resetTransform();
            ctx.beginPath();
            ctx.moveTo(walls[i]["wallx"]+100,walls[i]["wally"]);
            ctx.lineTo(window.innerWidth, walls[i]["wally"])
            ctx.moveTo(walls[i]["wallx"]-100,walls[i]["wally"])
            ctx.lineTo(0,walls[i]["wally"])
            ctx.strokeStyle = "#FF0000"
            ctx.linewidth=3;
            ctx.stroke();
            };
        if(walls[i]["walltype"]===3){
            ctx.resetTransform();
            ctx.beginPath();
            ctx.moveTo(walls[i]["wallx"]+100,walls[i]["wally"]);
            ctx.lineTo(window.innerWidth, walls[i]["wally"])
            ctx.moveTo(walls[i]["wallx"]-100,walls[i]["wally"])
            ctx.lineTo(0,walls[i]["wally"])
            ctx.strokeStyle = "#FF0000"
            ctx.linewidth=3;
            ctx.stroke();
        }
        
        if(walls[i]["walltype"]===2){
            ctx.resetTransform();
            ctx.beginPath();
            ctx.moveTo(walls[i]["wallx"],walls[i]["wally"]+100);
            ctx.lineTo(walls[i]["wallx"], window.innerHeight)
            ctx.moveTo(walls[i]["wallx"],walls[i]["wally"]-100)
            ctx.lineTo(walls[i]["wallx"],0)
            ctx.strokeStyle = "#FF0000"
            ctx.linewidth=3;
            ctx.stroke();
        };
        if(walls[i]["walltype"]===4){
            ctx.resetTransform();
            ctx.beginPath();
            ctx.moveTo(walls[i]["wallx"],walls[i]["wally"]+100);
            ctx.lineTo(walls[i]["wallx"], window.innerHeight)
            ctx.moveTo(walls[i]["wallx"],walls[i]["wally"]-100)
            ctx.lineTo(walls[i]["wallx"],0)
            ctx.strokeStyle = "#FF0000"
            ctx.linewidth=3;
            ctx.stroke();
        }
        walls[i]["wallx"]+=(walls[i]["wallvx"]*speedmultiplier)
        walls[i]["wally"]+=(walls[i]["wallvy"]*speedmultiplier)

        //detects if game is over
    }
}

var wallmaker = setInterval(function createwall(){
    var walltype=Math.floor(Math.random()*4+1)
    if(walltype===1){
        var wallx = Math.floor(Math.random()*window.innerHeight+1)
        var wally = -10
        var wallvx = 0
        var wallvy = up_downwallspeed
    } else if(walltype===2){
        var wallx = window.innerWidth+10
        var wally = Math.floor(Math.random()*window.innerWidth+1)
        var wallvx = -1*left_rightwallspeed
        var wallvy=0
    } else if(walltype===3){
        var wallx = Math.floor(Math.random()*window.innerHeight+1)
        var wally = window.innerHeight+10
        var wallvx=0
        var wallvy=-1*up_downwallspeed
    } else if(walltype===4){
        var wallx=-10
        var wally=Math.floor(Math.random()*window.innerWidth+1)
        var wallvx = left_rightwallspeed
        var wallvy = 0
    }
    walls.push({walltype,wallx,wally,wallvx,wallvy})
    if(walls.length>wall_limit){
        walls.shift();
    }
},timebetween);

