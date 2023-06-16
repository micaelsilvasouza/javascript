//Codidgo Principal do jogo
//Recebendo o input text para ser o verificador de tecla
let input = document.getElementById("input")
//Recebendo os buttons para executar a movimentação
let botoes = document.querySelectorAll(".botao")
//Campo principal pada adicionar os objetos
let campo = document.getElementById("campo")
//Dimenções do campo
let larg = campo.clientWidth
let altu = campo.clientHeight
//Atualizar as medidas do campo
window.onresize = ()=>{
    larg = campo.clientWidth
    altu = campo.clientHeight
}

//Mostradores de TIMER e PONTOS
let timer = document.getElementById("timer")
let pontos = document.getElementById("pontos")

//iniciando o timer e variavel de agregção ao timer
let agrega_time = 1
time = 10
iniciarTimer()

//Definindo a variavel de verificadação de movimento
let movimentando = false
//Definindo a variavel que armazenara o intervalo de movimento
let move_intervalo
//Adicionado os eventos e funções do elemento input
input.addEventListener("keydown", inicairMoveTeclado)
input.addEventListener("keyup", pararMove)
//Adicionado os eventos e funçõe aos elementos buttons da classe botao
for(let botao of botoes){
    botao.addEventListener("touchstart", inicairMoveBotao)
    botao.addEventListener("touchend", pararMove)
}

function inicairMoveTeclado(event){
    /* 
        Função que verifica o event de precinamento de uma tecla do teclado, verificado as teclas especificas. 
        E cria o intervalos para o movimento da div cubo.
        Teclas especificadas:
        Movimento esquerdo: 'a' ou seta esquerda
        Movimento direito: 'd' ou seta esquerda
        Movimento top: 'w' ou seta para cima
        Movimento baixo: 's' ou seta para baixo
    */
    input.value = ""
    key = event.key.toLowerCase()//tecla precionada coloca em minusculo
   
    //console.log(key)
    //Verificando a tecla precionada
    if(!movimentando && (key == "a" || key == "arrowleft")){
        //execultando movimento para esquerda
        movimentando = true
        move_intervalo = setInterval(moverEsq, 10)
    }
    if(!movimentando && (key == "d" || key == "arrowright" )){
        //execultando movimento para a direita
        movimentando = true
        move_intervalo = setInterval(moverDir, 10)
    }
    if(!movimentando && (key == "w" || key == "arrowup")){
        //execultando movimento para a cima
        movimentando = true
        move_intervalo = setInterval(moverCima, 10)
    }
    if(!movimentando && (key == "s" || key == "arrowdown")){
        //execultando movimento para a baixo
        movimentando = true
        move_intervalo = setInterval(moverBaixo, 10)
    }
}

function inicairMoveBotao(){
    if( this.id == "esq"){
        //execultando movimento para esquerda
        movimentando = true
        move_intervalo = setInterval(moverEsq, 10)
    }
    if(this.id == "dir"){
        //execultando movimento para a direita
        movimentando = true
        move_intervalo = setInterval(moverDir, 10)
    }
    if(this.id == "top"){
        //execultando movimento para a cima
        movimentando = true
        move_intervalo = setInterval(moverCima, 10)
    }
    if(this.id == "bai"){
        //execultando movimento para a baixo
        movimentando = true
        move_intervalo = setInterval(moverBaixo, 10)
    }
}

function pararMove(){
    /*
        Função que interrompe o movimento da div cubo quando uma das teclas espeficadas deixa de estar precionada.
        Teclas especificadas:
        Movimento esquerdo: 'a' ou seta esquerda
        Movimenot direito: 'd' ou seta esquerda
        Movimento top: 'w' ou seta para cima
        Movimento baixo: 's' ou seta para baixo
        ou para o os botões precionados
    */
    movimentando = false
    clearInterval(move_intervalo)
}