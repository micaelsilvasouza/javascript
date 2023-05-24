let input = document.getElementById("input")
let cubo = document.getElementById("cubo")
let move 
let posx = 200
let posy = 200

input.addEventListener("keydown", inicairMove)
input.addEventListener("keyup", pararMove)

function inicairMove(event){
    input.value = ""
    key = event.key
    if(key == "a" || key == "ArrowLeft"){
        move = setInterval(moverEsq, 200)
    }else if(key == "d" || key == "ArrowRight"){
        moverDir()
    }
}

function pararMove(){
    clearInterval(move)
}

function moverEsq(){
    posx -= 10
    console.log("vai")
    cubo.style.left = posx+"px"
}

function moverDir(){
    posx+=10
    cubo.style.left = posx+"px"
}