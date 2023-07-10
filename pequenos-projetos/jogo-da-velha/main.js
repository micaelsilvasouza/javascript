let campos = document.querySelectorAll("td")
let formas = document.querySelectorAll(".formas")
let men = document.getElementById("men-vitoria")
let ganhou = [false, 0,false]
let nivel = "n4"
let jogador1 = []
let jogador2 = []
let jogador = 1

//Escolhedo como o computador vai se comportar no nivel 4
let comportar = "velha"
console.log(comportar)

//adicionado a função principal da todo os campos
for(let id = 0; id < campos.length; id++){
    campos[id].addEventListener('click', adicinarForma)
    campos[id].posicao = id
    campos[id].figuras = [
        formas[id].children[0],
        formas[id].children[1],
        formas[id].children[2]
    ]
    campos[id].escolhido = false
}

//função pricipal que é adicinada a cada um dos campos
function adicinarForma(){
    if(!this.escolhido && nivel == "n1"){
        nivel1(this.posicao) 
    }
    if(!this.escolhido && nivel == "n2" && !ganhou[0]){
        nivel1(this.posicao) 
        nivel2() 
    }
    
    if(!this.escolhido && nivel == "n3" && !ganhou[0]){
        nivel1(this.posicao) 
        nivel3() 
    }
    
    if(!this.escolhido && nivel == "n4" && !ganhou[0]){
        nivel1(this.posicao) 
        nivel4() 
    }
    
    if(!ganhou[0] && jogador1.length >= 5){
        men.children[0].innerHTML = "Deu Velha<br>Ninguém Ganhou"
        men.style.display = "block"
    }
}

//função para cada um dos niveis de jogo
function nivel1(id){
    if(jogador == 1){
        campos[id].figuras[1].style.visibility = "visible"
        campos[id].figuras[2].style.visibility = "visible"
        campos[id].escolhido = true
        jogador1.push(campos[id].posicao)
        jogador = 2
        ganhou = verficarVitoria(jogador1)
        ganhou[0]?vitoria(ganhou[1], "Jogador 1"): 0
    }else if(jogador == 2){
        campos[id].figuras[0].style.visibility = "visible"
        campos[id].escolhido = true
        jogador2.push(campos[id].posicao)
        jogador = 1
        ganhou = verficarVitoria(jogador2)
        ganhou[0]?vitoria(ganhou[1], "Jogador 2"): 0
    }
}

function nivel2() {
    let campo = undefined
    let chance = verficarVitoria(jogador2)[2]

    if(chance[0]){
        campo = finalizar(chance)
    }

    if(jogador2.length < 4 && campo == undefined){
        campo = escolherAleatorio()
    }

    adicinarFormaComputador(campo)
}

function nivel3(){
    let campo = undefined
    let chance = verficarVitoria(jogador2)[2]
    if(chance[0]){
        campo = finalizar(chance)
    }else if(ganhou[2][0] && Math.floor(Math.random()*2) == 0){
        campo = impedir() 
    }
    
    if(jogador2.length < 4 && campo == undefined){
        campo = escolherAleatorio()
    }   

    adicinarFormaComputador(campo)
}

function nivel4() {
    let campo = undefined
    let chance = verficarVitoria(jogador2)[2]
    if(chance[0]){
        campo = finalizar(chance)
    }
    
    if(comportar == "velha" && campo == undefined){
        campo = velha()
    }

    adicinarFormaComputador(campo)
}

//Funções auxilares para o computador
function finalizar(chance) {
    let campo = undefined
    for(let i = 1; i < chance.length; i++){
        if(!campos[chance[i]].escolhido){
            campo = campos[chance[i]]
            break
        }
    }

    return campo
}

function impedir() {
    let campo
    for(let i = 1; i < ganhou[2].length; i++){
        if(!campos[ganhou[2][i]].escolhido){
            campo = campos[ganhou[2][i]]
            break
        }
    }
    return campo
}

function escolherAleatorio() {
    let campo
    if(jogador2.length < 4){
        //escolhendo uma posição aleataria
        while (true) {
            campo = campos[Math.floor(Math.random() * 9)]
            if(!campo.escolhido){
                break
            }
        }
    }

    return campo
}

function velha() {
    let campo = undefined
    if(jogador2.length == 0 && !campos[4].escolhido){
        campo = campos[4]
    }else if(jogador2.length == 0 && campos[4].escolhido){
        campo = campos[0]
    }else if(jogador1.length == 2 && jogador2.includes(0) && campos[8].escolhido){
        campo = campos[2]
    }else if(jogador2.length > 0){
        campo = impedir()
    }

    if(campo == undefined){
        campo = escolherAleatorio()
    }

    return campo
}

function adicinarFormaComputador(campo) {
    if(!ganhou[0]){
        //Colocando depois de um tempo a figura
        setTimeout(() => {
            campo.figuras[0].style.visibility = "visible"
            campo.escolhido = true
            jogador2.push(campo.posicao)
            jogador = 1
            ganhou = verficarVitoria(jogador2)
            ganhou[0]?vitoria(ganhou[1],"Computador"):0
        }, 200);
    }
}


///Funções Para Vitoria de um jogador
function verficarVitoria(jogador) {
    let campeao = false
    let perto = [false]
    let total = 0
    let id = 0
    let condicoes = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let condicao of condicoes){
        for(let termo of condicao){
            if(jogador.includes(termo)){
                total++
            }else{
                id = termo
            }
        }
        
        if(total >= 3){
            campeao = true
            id = condicoes.indexOf(condicao)
            break
        }

        if(total == 2){
            perto.push(id)
        }

        total = 0
    }

    if(perto.length > 1){
        perto[0] = true
    }
    return [campeao, id, perto]
}


function vitoria(id, jogador){
    let linha = document.getElementById("linha")
    linha.style.display = "block"
    linha.children[id].style.display = "block"
    
    men.children[0].innerHTML = "Parabéns "+jogador+"<br> Você Ganhou"
    men.style.display = "block"
}