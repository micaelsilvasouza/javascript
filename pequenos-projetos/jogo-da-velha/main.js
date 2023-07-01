let campos = document.querySelectorAll("td")
let formas = document.querySelectorAll("svg")
let jogador = 1

for(const campo of campos){
    campo.addEventListener('click', adicinarForma)
    campo.escolhido = false
}

function adicinarForma(){
    if(this.escolhido){
        this.style.backgroundColor = "transparent"
        this.escolhido = false
    }else{
        this.style.backgroundColor = "red"
        this.escolhido = true
    }
}