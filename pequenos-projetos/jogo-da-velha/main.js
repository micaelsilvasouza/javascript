let campos = document.querySelectorAll("td")
let formas = document.querySelectorAll("svg")
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
    if(!this.escolhido && jogador == 1){
        this.figuras[0].style.visibility = "visible"
        this.escolhido = true
        jogador1.push(this.posicao)
        jogador = 2
        vitoria(jogador1)
    }else if(!this.escolhido && jogador == 2){
        this.figuras[1].style.visibility = "visible"
        this.figuras[2].style.visibility = "visible"
        this.escolhido = true
        jogador2.push(this.posicao)
        jogador = 1
        vitoria(jogador2)
    }
}


function vitoria(jogador) {
    let campeao = false
    let total = 0
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
                }

                if(total >= 3){
                    campeao = true
                    break
                }
            }

            total = 0

            if(campeao){
                alert("Temos um ganhador")
                window.location = "index.html"
                break
            }
        }
    }

    return campeao
}

function fazerlinha(){
    document.querySelector("#linha").style.display = "block"
    let linha = document.querySelector("#linha").getContext("2d")
    linha.moveTo(0,0)
    linha.lineTo(308,320)
    linha.lineWidth = 10
    linha.strokeStyle = '#f00'
    linha.stroke()
}