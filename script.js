
let word = "satisfaction"
let attempts = 5
document.querySelector(".new").onclick = function(){
    let out = ""
    for(let i = 0; i < word.length; i = i + 1  ){
        out = out + "*"
    }

    document.querySelector(".word").value = out

    letters = ""

    document.querySelector(".letter").value = ""

    document.querySelector(".letter").focus()
    letters = []

    document.querySelector(".letter").disabled = false
    document.querySelector(".check").disabled = false
    attempts = 5
    document.querySelector("span").innerHTML = attempts
        
}

let letters = []

document.querySelector(".check").onclick = function(){
    let letter = document.querySelector(".letter").value
    letters.push(letter) 
    console.log(letters)
    let out = ""
    for(let i = 0; i < word.length; i++){
        let char = word[i]
        if(letters.indexOf(char) != -1){
            out = out + word[i]
        }
        else{
            out = out + "*"
        }
    }

    if(word.indexOf(letter) == -1){
    attempts = attempts - 1
    document.querySelector("span").innerHTML = attempts
    }

    if (attempts == 0){
        document.querySelector(".letter").disabled = true
        document.querySelector(".check").disabled = true

        document.querySelector(".check").style.background = "red"
        document.querySelector(".check").style.color = "black"

        document.querySelector(".new").style.background = "green"
        document.querySelector(".new").style.color = "white"
        
    }

    document.querySelector(".word").value = out

    document.querySelector(".letter").value = ""

    document.querySelector(".letter").focus()

    if(word == out){
    document.querySelector(".check").disabled = true
    document.querySelector(".letter").disabled = true
    alert("You are winner!")
    }
    
}

