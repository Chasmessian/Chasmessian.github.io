var submitted = 0
var speech = null;
var save = null;
function Mainbutton(){
    if(submitted == 0){
        speech = document.getElementById("input").value
        if(speech == ""){
            alert("ERROR, must provide input")
        } else {
            document.getElementById("Mainbutton").innerText = "Change Input"
            document.getElementById("input").hidden = true
            document.getElementById("output").hidden = false
            submitted = 1
            submit()
        }
    } else {
        document.getElementById("output").hidden = true
        document.getElementById("input").hidden = false
        submitted = 0
        speech = null;
        document.getElementById("input").value = save
        document.getElementById("Mainbutton").innerText = "Submit"
    }
}


function submit(){
    save = speech
    percent = document.getElementById("percent").value
    speech = speech.split(" ")
    numToRemove = Math.floor(speech.length *(percent/100))
    alreadyDone = []
    characterlist = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for(var i = 0; i<numToRemove; i++){
        let wordindex = null
        let j = true
        while(j==true){
        wordIndex = Math.floor(Math.random()*speech.length)
        j = alreadyDone.includes(wordIndex)
        }
        alreadyDone.push(wordIndex)
        splitword = speech[wordIndex].split("")
        for(var h = 0; h < splitword.length; h++){
            //loops through each character
            character = splitword[h]
            if(characterlist.includes(character.toLowerCase())){
                splitword[h] = "_"
            }
        }
        splitword = splitword.join("")
        
        speech[wordIndex] = splitword
        /*
        ^^ gets us the index of a word we haven't used
        now we need to replace non-letter characters with underscores
        and finally replace the original word
        */
    }


    document.getElementById("output").innerHTML = speech.join(" ")

}


function updateDisplay(){
document.getElementById("percentDisplay").innerHTML = document.getElementById("percent").value + "%"
}

