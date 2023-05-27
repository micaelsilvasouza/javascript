//Codidgo Principal do jogo
//Recebendo o input e a div cubo do  html
let input = document.getElementById("input")
let cubo = document.getElementById("cubo")
let timer = document.getElementById("timer")
//Dimenções da tela
let larg = window.innerWidth
let altu = window.innerHeight
//Definindo as variaveis de posicionamento
let posx = 200
let posy = 200
//Definindo a variavel de verificadação de movimento
let movimentando = false
//Definindo a variavel que armazenara o intervalo de movimento
let move 

//Adicionado os eventos e funções do elemento input
input.addEventListener("keydown", inicairMove)
input.addEventListener("keyup", pararMove)

function inicairMove(event){
    /* 
        Função que verifica o event de precinamento de uma tecla do teclado, verificado as teclas especificas. 
        E cria o intervalos para o movimento da div cubo.
        Teclas especificadas:
        Movimento esquerdo: 'a' ou seta esquerda
        Movimento direito: 'd' ou seta esquerda
    */
    input.value = ""
    key = event.key.toLowerCase()//tecla precionada coloca em minusculo
    //console.log(key)
    //Verificando a tecla precionada
    if(!movimentando && key == "a" || key == "arrowleft"){
        //execultando movimento para esquerda
        movimentando = true
        move = setInterval(moverEsq, 10)
    }else if(!movimentando && key == "d" || key == "arrowright"){
        //execultando movimento para a direita
        movimentando = true
        move = setInterval(moverDir, 10)
    }else if(!movimentando && key == "w" || key == "arrowup"){
        //execultando movimento para a cima
        movimentando = true
        move = setInterval(moverCima, 10)
    }else if(!movimentando && key == "s" || key == "arrowdown"){
        //execultando movimento para a baixo
        movimentando = true
        move = setInterval(moverBaixo, 10)
    }
}

function pararMove(){
    /*
        Função que interrompe o movimento da div cubo quando uma das teclas espeficadas deixa de estar precionada.
        Teclas especificadas:
        Movimento esquerdo: 'a' ou seta esquerda
        Movimenot direito: 'd' ou seta esquerda
    */
    movimentando = false
    clearInterval(move)
}

function moverEsq(){
    //Função que move a div cubo para a esquerda em 5px
    if(posx > 30){
        posx -= 10
        cubo.style.left = posx+"px"
    }
    
}

function moverDir(){
    //Função que move a div cubo para a direita em 5 px
    if(posx < larg - 40){
        posx+=10
        cubo.style.left = posx+"px"
    }
    
}

function moverCima(){
    //Função que move a div cubo para cima em 5px
    if(posy > 30){
        posy -=10
        cubo.style.top = posy+"px"
    }
    
}

function moverBaixo(){
    //Função que move a div cubo para baixa em 5px
    if(posy < altu-40){
        posy +=10
        cubo.style.top = posy+"px" 
    }
}


function iniciarTimer(time){
    timer.innerText = time
    let intervalo = setInterval(()=>{
        if(time > 0){
            time--
            timer.innerText = time
        }else{
            pararTimer(intervalo)
        }
    }, 1000)
}

function pararTimer(intervalo){
    clearInterval(intervalo)
}