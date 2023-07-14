let campos = document.querySelectorAll("td")
let formas = document.querySelectorAll(".formas")
let men = document.getElementById("men-vitoria")
let ganhou = [false, 0,false]
let jogador1 = []
let jogador2 = []
let jogador = 1

//Escolhedo como o computador vai se comportar no nivel 4
let condicao_nivel = ""
if(nivel == "n4"){
    condicao_nivel = Math.floor(Math.random()*2)?"velha":"arriscar"
    console.log(condicao_nivel)
}



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

//função pricipal que chama a funções de acordo com o nivel
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