function hCost(startX,startY,destinX,destinY){
    let xChange = Math.abs(startX-destinX)
    let yChange = Math.abs(startY-destinY)
    let min = Math.min(xChange,yChange)
    let max = Math.max(xChange,yChange)
    let diagonalCost = min*14
    let adjacentCost = (max-min)*10
    return(diagonalCost+adjacentCost)
}

function extractPath(square){
    let Path = []
    let currentStep = square
    for(let w = 0; w<square[7]; w++){
        Path.unshift([currentStep[0],currentStep[1]])
        if(currentStep[3]!="origin"){
        currentStep = currentStep[3]
        }
    }
    return(Path)
}

function updateZombies(destinX,destinY){
    for(var i = 0; i<zombieArray.length; i++){
        zombieArray[i].updateAI(destinX,destinY)
    }
}

function convertRealCoordsToFake(x,y){
    x = Math.floor(x/spacing)+1
    y = 20-Math.floor(y/spacing)
    return([x,y])
    // flawed?
}

function convertFakeCoordsToReal(x,y){
        x = (x * spacing)-spacing
        // y = canvasMax-spacing*y
        y = 500-spacing*y

    return([x,y])
}

function restrict(number,min,max){
    if(number<=min){
        number = min
    } else if(number>=max){
        number = max
    }
    return (number)
}

function getAngle(startX, startY, endX, endY){
    //radians
let figurativeX = endX - startX
let figurativeY = endY - startY
return Math.atan2(figurativeY,figurativeX)
}

//delete before publish

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    mouseX = evt.clientX - rect.left;
    mouseY = evt.clientY - rect.top;
}



function updateCoins(){
    let playerPos = player.getPos()
    for(var i =0; i<coins.length; i++){
        realCoords = convertFakeCoordsToReal(coins[i][0],coins[i][1])
        realCoords[0]+=spacing/2
        realCoords[1]+=spacing/2
        distanceToPlayer = Math.sqrt(Math.pow(realCoords[0]-playerPos[0],2)+Math.pow(realCoords[1]-playerPos[1],2))
        if(distanceToPlayer<15){
            coins.splice(i,1)
        }
    }
    document.getElementById("coinCount").innerHTML = "Coins Remaining: " + coins.length
}

function checkVictory(){
if(coins.length==0){
    victory()
    victory = true
}
}

function deathCheck(){
    for(var i = 0; i<zombieArray.length;i++){
        let distance = zombieArray[i].checkDistance()
        if(distance<15){
            death()
        }
    }
}

function victory(){
    alert("YOU WIN!!! CONGRATULATIONS")
}

function death(){
    alert("YOU HAVE DIED. \n GAME OVER")
    deathStatus = true
    newGame()
}

function newGame(){

    keyState[87] = false
    keyState[38] = false
    keyState[37] = false
    keyState[65] = false
    keyState[39] = false
    keyState[68] = false

    player = new Player(250,250)
    deathStatus = false;
    victory = false
    coins = [[9,19],[3,19],[3,18],[4,18],[4,15],[3,15],[3,14],[2,14],[3,16],[3,17],[2,19],[4,19],[5,19],[6,19],[7,19],[8,19],[10,19],[11,19],[12,19],[13,19],[14,19],[15,19],[16,19],[17,19],[18,19],[19,19],[19,18],[19,17],[19,16],[19,15],[19,14],[19,13],[19,12],[19,11],[18,10],[18,9],[18,8],[18,7],[18,6],[18,5],[18,4],[19,3],[19,2],[19,4],[19,5],[19,7],[19,8],[19,9],[19,10],[18,15],[18,16],[18,17],[18,18],[17,18],[16,18],[15,18],[14,18],[13,18],[12,18],[11,18],[10,18],[9,18],[8,18],[7,18],[6,18],[5,18],[2,18],[2,17],[2,16],[2,15],[2,13],[2,12],[2,11],[2,10],[2,9],[2,8],[2,7],[2,6],[2,5],[3,4],[3,3],[3,2],[2,2],[2,3],[2,4],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,2],[14,2],[15,2],[16,2],[17,2],[18,2],[18,3],[17,3],[16,3],[15,3],[14,3],[13,3],[12,3],[11,3],[10,3],[9,3],[8,3],[7,3],[6,3],[5,3],[4,3],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[4,14],[5,14],[5,15],[6,15],[6,16],[6,17],[5,16],[7,17],[7,16],[7,15],[6,14],[10,17],[11,17],[11,16],[12,16],[12,15],[12,14],[13,14],[13,13],[13,12],[14,13],[14,12],[15,12],[16,12],[16,11],[17,11],[18,11],[18,12],[18,13],[18,14],[17,15],[16,15],[15,16],[15,17],[14,17],[14,16],[14,15],[15,15],[16,16],[15,14],[16,14],[17,14],[17,10],[16,10],[15,10],[15,11],[14,11],[15,9],[14,9],[14,10],[16,9],[13,9],[13,8],[12,8],[12,7],[13,7],[14,8],[12,6],[12,5],[11,5],[11,4],[10,4],[10,5],[11,6],[11,7],[10,7],[10,6],[9,6],[9,7],[9,8],[9,5],[8,8],[8,9],[8,7],[7,8],[7,9],[7,10],[7,11],[7,12],[8,12],[8,13],[7,13],[8,14],[9,14],[9,15],[10,15],[10,16],[9,16],[11,15],[11,14],[10,14],[9,13],[10,13],[11,13],[12,13],[6,12],[5,12],[4,11],[5,11],[6,11],[6,10],[5,10],[4,10],[6,9],[5,9],[4,7],[5,7],[6,7],[6,6],[5,6],[4,6],[5,5],[6,5],[7,6],[7,5],[7,4],[6,4],[14,4],[14,5],[15,5],[15,6],[16,6],[16,7],[17,7],[15,7],[14,6],[15,4],[16,5],[17,6],[19,6]]
    zombieArray = []
}
