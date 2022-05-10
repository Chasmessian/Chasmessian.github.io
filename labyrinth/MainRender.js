function mainRender(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    renderStone()
    renderGrid() 
    renderCoins()
    renderZombies()
    renderShadow()
    renderPlayer()
}



function renderStone(){
    for(var i = 0; i<stone.length; i++){
        let realCoords = convertFakeCoordsToReal(stone[i][0],stone[i][1])
        ctx.beginPath()
        ctx.rect(realCoords[0],realCoords[1],Math.ceil(spacing+1),Math.ceil(spacing+1))
        ctx.fillStyle="#555555"
        ctx.fill()
    }
}

function renderPlayer(){
player.render()
}

function renderGrid(){
    for(var i=0; i<21; i++){
        ctx.strokeStyle = "rgba(0,0,0,1)"
        ctx.beginPath()
        ctx.moveTo(spacing*i,0)
        // ctx.lineTo(spacing*i,canvasMax)
        ctx.lineTo(spacing*i,500)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(0,spacing*i)
        // ctx.lineTo(canvasMax, spacing*i)
        ctx.lineTo(500, spacing*i)
        ctx.stroke()
    }
}

function renderZombies(){
    for(var i = 0; i<zombieArray.length; i++){
        zombieArray[i].render()
    }
}
function renderShadow(){
    let Coords = player.getPos()
    let radianAngle = player.getAngle()*Math.PI/180
    let startCoord = [Coords[0]+(Math.cos(radianAngle-(((arcLength)/2)*Math.PI/180)))*rayLength*2/3, Coords[1]+(Math.sin(radianAngle-(((arcLength)/2)*Math.PI/180)))*rayLength*2/3,]
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(Coords[0],Coords[1],rayLength*2/3,radianAngle-(((arcLength)/2)*Math.PI/180),radianAngle+(((arcLength)/2)*Math.PI/180))
    ctx.lineTo(Coords[0],Coords[1])
    ctx.lineTo(startCoord[0],startCoord[1])
    ctx.moveTo(Coords[0],Coords[1])
    ctx.arc(Coords[0],Coords[1],50,radianAngle+(((arcLength/2)*Math.PI/180)),radianAngle-((arcLength/2)*Math.PI/180))
    ctx.rect(canvas.width, 0, canvas.width*-1, canvas.height);
    ctx.fill();
    }

function renderCoins(){
    for(var i = 0; i<coins.length;i++){
        let coords = convertFakeCoordsToReal(coins[i][0],coins[i][1])
        ctx.beginPath()
        ctx.arc(coords[0]+spacing/2,coords[1]+spacing/2,5,0,2*Math.PI)
        ctx.fillStyle="#FFFF00"
        ctx.fill()
    }
}
