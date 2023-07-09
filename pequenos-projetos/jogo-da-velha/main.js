let campos = document.querySelectorAll("td")
let formas = document.querySelectorAll(".formas")
let men = document.getElementById("men-vitoria")
let jogador1 = []
let jogador2 = []
let jogador = 1

for(let id = 0; id < campos.length; id++){
    campos[id].addEventListener('click', adicinarForma)
    campos[id].posicao = id+1
    campos[id].figuras = [
        formas[id].children[0],
        formas[id].children[1],
        formas[id].children[2]
    ]
    campos[id].escolhido = false
}

function adicinarForma(){
    let ganhou = []
    if(!this.escolhido && jogador == 1){
        this.figuras[0].style.visibility = "visible"
        this.escolhido = true
        jogador1.push(this.posicao)
        jogador = 2
        ganhou = verficarVitoria(jogador1)
        ganhou[0]?vitoria(ganhou[1], "Jogador 1"): 0
    }else if(!this.escolhido && jogador == 2){
        this.figuras[1].style.visibility = "visible"
        this.figuras[2].style.visibility = "visible"
        this.escolhido = true
        jogador2.push(this.posicao)
        jogador = 1
        ganhou = verficarVitoria(jogador2)
        ganhou[0]?vitoria(ganhou[1], "Jogador 2"): 0
    }
    
    if(!ganhou[0] && jogador1.length >= 5){
        men.children[0].innerHTML = "Deu Velha<br>Ninguém Ganhou"
        men.style.display = "block"
    }
}


function verficarVitoria(jogador) {
    let campeao = false
    let total = 0
    let id = 0
    let condicoes = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,7,4],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ]

    if(jogador.length >= 3){
        for(let condicao of condicoes){
            for(let termo of condicao){
                if(jogador.includes(termo)){
                    total++
                }else{
                    break
                }

                if(total >= 3){
                    campeao = true
                    id = condicoes.indexOf(condicao)
                    break
                }
            }

            total = 0

            if(campeao){
                break
            }
        }
    }

    return [campeao, id]
}

function vitoria(id, jogador){
    let linha = document.getElementById("linha")
    linha.style.display = "block"
    linha.children[id].style.display = "block"
    
    men.children[0].innerHTML = "Parabéns "+jogador+"<br> Você Ganhou"
    men.style.display = "block"
}