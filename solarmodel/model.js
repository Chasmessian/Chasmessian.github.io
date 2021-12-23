const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');


maininterval = setInterval(function(){
renderall();
movetoprow();
movebottomrow();
},10)


cb = [[[[0,100,90,0],[-545,100,90,0],[-1090,100,90,0]],[[-272.5,195,90,1],[-817.5,195,90,1],[-1362.5,195,90,1]]],[[[1337,305,270,1],[1882.5,305,270,1],[2427.5,305,270,1]],[[1065,400,270,0],[1610,400,270,0],[2155,400,270,0]]]] 
//cb = celestial bodies
//first array is top row, second is bottom row, first in each are a sun, second are a moon. A sun/moon consists of [x,y,rotation, 0 or 1 (0 is clockwise rotation, 1 is ccw rotation)]

function idarb(){
    ctx.beginPath()
    ctx.rect(340,0,375,480)
    ctx.strokeStyle = "#FF0000"
    ctx.lineWidth = 4;
    ctx.stroke();
}


function renderall(){
//earth
ctx.clearRect(0,0,1000,480)
ctx.beginPath();
ctx.rect(0,0,canvas.width,canvas.height)
ctx.fillStyle = "#0098DD"
ctx.fill();


ctx.beginPath()
ctx.rect(0,230,1000,20)
ctx.fillStyle="#00FF00"
ctx.fill();
ctx.beginPath()
ctx.rect(0,250,1000,50)
ctx.fillStyle = "#553300"
ctx.fill()
rendersuns();
rendermoons();
idarb()
};
function rendersuns(){
for(var i = 0; i<cb[0][0].length; i++){
x = cb[0][0][i][0]
y = cb[0][0][i][1]
ctx.beginPath()
ctx.rect(x,y,25,25)
ctx.fillStyle = "#FFFF00"
ctx.fill();
} //top row
for(var i = 0; i<cb[1][0].length; i++){
    x = cb[1][0][i][0]
    y = cb[1][0][i][1]
    ctx.beginPath()
    ctx.rect(x,y,25,25)
    ctx.fillStyle = "#FFFF00"
    ctx.fill();
} //bottom row
}
function rendermoons(){
for(var i = 0; i<cb[0][1].length; i++){
    x = cb[0][1][i][0]
    y = cb[0][1][i][1]
    ctx.beginPath()
    ctx.rect(x,y,20,20)
    ctx.fillStyle = "#555555"
    ctx.fill();
}
for(var i = 0; i<cb[1][1].length; i++){
    x = cb[1][1][i][0]
    y = cb[1][1][i][1]
    ctx.beginPath()
    ctx.rect(x,y,20,20)
    ctx.fillStyle = "#555555"
    ctx.fill();
}
};
function movetoprow(){
for(var i = 0; i<cb[0][0].length; i++){
    if(cb[0][0][i][2]==45){
        cb[0][0][i][3] = 0;
    }
    if(cb[0][0][i][2]==135){
        cb[0][0][i][3] = 1
    }
        if(cb[0][0][i][3]==0){
            cb[0][0][i][2]+=.5
        } else if(cb[0][0][i][3]==1){
            cb[0][0][i][2]-=.5
        }
        if(cb[0][0][i][2]<0){
            cb[0][0][i][2] +=360
        }
        if(cb[0][0][i][2]>360){
            cb[0][0][i][2]-= 360
        }
        cb[0][0][i][0] += velocitybyrotation(cb[0][0][i][2])[0]*2
        cb[0][0][i][1] += velocitybyrotation(cb[0][0][i][2])[1]*2
        if(cb[0][0][i][0]>1025){
            cb[0][0][i][0]-=1628
        }
    }


    for(var i = 0; i<cb[0][1].length; i++){
        if(cb[0][1][i][2]==45){
            cb[0][1][i][3] = 0;
        }
        if(cb[0][1][i][2]==135){
            cb[0][1][i][3] = 1
        }
            if(cb[0][1][i][3]==0){
                cb[0][1][i][2]+=.5
            } else if(cb[0][1][i][3]==1){
                cb[0][1][i][2]-=.5
            }
            if(cb[0][1][i][2]<0){
                cb[0][1][i][2] +=360
            }
            if(cb[0][1][i][2]>360){
                cb[0][1][i][2]-= 360
            }
            cb[0][1][i][0] += velocitybyrotation(cb[0][1][i][2])[0]*2
            cb[0][1][i][1] += velocitybyrotation(cb[0][1][i][2])[1]*2
            if(cb[0][1][i][0]>1025){
                cb[0][1][i][0]-=1628
            }
    }
}

function movebottomrow(){
    
for(var i = 0; i<cb[1][0].length; i++){
    if(cb[1][0][i][2]==315){
        cb[1][0][i][3] = 1;
    }
    if(cb[1][0][i][2]==225){
        cb[1][0][i][3] = 0;
    }
        if(cb[1][0][i][3]==0){
            cb[1][0][i][2]+=.5
        } else if(cb[1][0][i][3]==1){
            cb[1][0][i][2]-=.5
        }
        if(cb[1][0][i][2]<0){
            cb[1][0][i][2] +=360
        }
        if(cb[1][0][i][2]>360){
            cb[1][0][i][2]-= 360
        }
        cb[1][0][i][0] += velocitybyrotation(cb[1][0][i][2])[0]*2
        cb[1][0][i][1] += velocitybyrotation(cb[1][0][i][2])[1]*2
        if(cb[1][0][i][0]<-25){
            cb[1][0][i][0]+=1624
        }
    }


    for(var i = 0; i<cb[1][1].length; i++){
        if(cb[1][1][i][2]==315){
            cb[1][1][i][3] = 1;
        }
        if(cb[1][1][i][2]==225){
            cb[1][1][i][3] = 0;
        }
            if(cb[1][1][i][3]==0){
                cb[1][1][i][2]+=.5
            } else if(cb[1][1][i][3]==1){
                cb[1][1][i][2]-=.5
            }
            if(cb[1][1][i][2]<0){
                cb[1][1][i][2] +=360
            }
            if(cb[1][1][i][2]>360){
                cb[1][1][i][2]-= 360
            }
            cb[1][1][i][0] += velocitybyrotation(cb[1][1][i][2])[0]*2
            cb[1][1][i][1] += velocitybyrotation(cb[1][1][i][2])[1]*2
            if(cb[1][1][i][0]<-25){
                cb[1][1][i][0]+=1624
            }
    }
}





function velocitybyrotation(r){
    var vx = 0;
    var vy = 0;
    if (r < 90 && r >= 0) {
        vx = r / 90
        vy = (vx - 1)
    } else if (r < 180 && r >= 90) {
        vy = (r - 90) / 90;
        vx = (1 - vy);
    } else if (r < 270 && r >= 180) {
        vx = ((r - 180) / 90) * -1;
        vy = vx + 1
    } else if (r < 360 && r >= 270) {
        vy = (r - 270) / -90
        vx = -1 - vy
    };
    return [vx,vy]
}

