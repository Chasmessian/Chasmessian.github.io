var suits = ["♠️", "♣️", "♥️", "♦️"]
function generateRandom(){
    var i = Math.floor(Math.random()*4)
    var j = Math.floor(Math.random()*4)
    string = "" + suits[i] + suits[j]
    document.getElementById("suitpair").innerHTML = string
}
