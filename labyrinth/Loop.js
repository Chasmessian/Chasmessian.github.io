

setInterval(
    function(){
        mainRender()
        let playerPos = convertRealCoordsToFake(player.getPos()[0],player.getPos()[1])
        updateZombies(playerPos[0],playerPos[1])
        player.move()
        // console.log(fakeMice)
        updateCoins()
        if(!victory){
            checkVictory()
        }
        if(!deathStatus){
        deathCheck()
        }

        if(coins.length == coinMax - 10&&zombieArray.length==0){
            zombieArray.push(new zombie(250,250))
        }
    },
    30
)
