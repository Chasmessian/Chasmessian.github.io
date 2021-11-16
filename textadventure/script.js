let start_decision = prompt("You awaken in a castle tower, smoke fills your lungs and heat burns your side. There is a ladder to your left(1) and a door in front of you(2). Where do you go?");
if(start_decision ==1){
    let jumporlook = prompt("You climb down the side of the tower and end up on the castle wall. You see some hay below you. You can either jump in(1) or look for another way(2)")
    if(jumporlook == 1){
        alert("You jump into the haybale and escape the burning castle. You wake up in your bed. It was just a dream.")
        alert("but... what's the smell? is it... smoke?")
    } else{
        alert("You look but don't see any other way, the floor beneath gives way as fire weakens the supports. You fall into a flaming pit. The End.")
    }
} else{
    let windoworstairs = prompt("You run into a modern looking kitchen, what is it doing in a medievel castle? No time for that. You see an open window which most certainly leads to death if you leap out of(1) and a stairway(2). Where do you go? ")
    if(windoworstairs == 1){
        alert("Running, you leap out the window. It's kind of a bad idea to leap out of a tower. You die from the shame of your decision before you hit the ground. GAME OVER")
    } else {
        let lockornot = prompt("You run down the stairs and flames bite your heels. You find a door at the bottom. Sadly, it's locked. You can try to pick the lock(1) or kick it down(2).")
        if(lockornot == 1){
            alert("you don't have lock picks. You try to do it with your fingers but fail. The fire burns you.")
        }else{
            alert("you kick down the door and escape! You go on to live a happy life")
        }
    }
}
