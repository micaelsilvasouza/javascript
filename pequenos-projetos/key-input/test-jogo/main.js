//Codidgo Principal do jogo
//Recebendo o input text para ser o verificador de tecla
let input = document.getElementById("input")
let botoes = document.querySelectorAll(".botao")

//Dimenções da tela
let larg = window.innerWidth
let altu = window.innerHeight

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
input.addEventListener("keydown", inicairMove)
input.addEventListener("keyup", pararMove)
//Adicionado os eventos e funçõe aos elementos buttons da classe botao
for(let botao of botoes){
    botao.addEventListener("touchstart", inicairMove)
    botao.addEventListener("touchend", pararMove)
}

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
    if(!movimentando && (key == "a" || key == "arrowleft" || this.id == "esq")){
        //execultando movimento para esquerda
        movimentando = true
        move_intervalo = setInterval(moverEsq, 10)
    }
    if(!movimentando && (key == "d" || key == "arrowright" || this.id == "dir")){
        //execultando movimento para a direita
        movimentando = true
        move_intervalo = setInterval(moverDir, 10)
    }
    if(!movimentando && (key == "w" || key == "arrowup" || this.id == "top")){
        //execultando movimento para a cima
        movimentando = true
        move_intervalo = setInterval(moverCima, 10)
    }
    if(!movimentando && (key == "s" || key == "arrowdown" || this.id == "bai")){
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
    */
    movimentando = false
    clearInterval(move_intervalo)
}