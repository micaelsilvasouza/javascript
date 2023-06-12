//Codidgo Principal do jogo
//Recebendo o input text para ser o verificador de tecla
let input = document.getElementById("input")
//Criando os objetos principais do jogo
let objeto = new Cubo(50,50,"#00f1dc")
let bola = new Cubo(30,30,"#a1c4ff")
//Posiconados os no body do HTML
objeto.posicionar(document.body,300,300)
bola.posicionar(document.body, 300,500)
bola.objeto.innerHTML = "1s"
bola.objeto.setAttribute("class", "boll")
//Array para guardar os objetos bola
let inimigos = []
//Mostradores de TIMER e PONTOS
let timer = document.getElementById("timer")
let pontos = document.getElementById("pontos")
//iniciando o timer e variavel de agregção ao timer
let agrega_time = 1
time = 10
iniciarTimer()
//Dimenções da tela
let larg = window.innerWidth
let altu = window.innerHeight
//Definindo a variavel de verificadação de movimento
let movimentando = false
//Definindo a variavel que armazenara o intervalo de movimento
let move_intervalo
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
        move_intervalo = setInterval(moverEsq, 10)
    }
    if(!movimentando && key == "d" || key == "arrowright"){
        //execultando movimento para a direita
        movimentando = true
        move_intervalo = setInterval(moverDir, 10)
    }
    if(!movimentando && key == "w" || key == "arrowup"){
        //execultando movimento para a cima
        movimentando = true
        move_intervalo = setInterval(moverCima, 10)
    }
    if(!movimentando && key == "s" || key == "arrowdown"){
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

function moverEsq(){
    //Função que move a div cubo para a esquerda em 5px
    if(objeto.posisoes[0] > 10){
        //Movimentando o objeto
        objeto.movimentar(-5,0)
        
        //Colisão cubo
        verificarColisao()
    }
    
}

function moverDir(){
    //Função que move a div cubo para a direita em 5 px
    if(objeto.posisoes[0] < larg-objeto.largura-10){

        //Movimentando o objeto
        objeto.movimentar(5,0)

        //Colisão cubo
        verificarColisao()
    }
    
}

function moverCima(){
    //Função que move a div cubo para cima em 5px
    if(objeto.posisoes[1] > 10){
        verificarColisao()
        //Movimentadno objedo
        objeto.movimentar(0,-5)
    }
    
}

function moverBaixo(){
    //Função que move a div cubo para baixa em 5px
    if(objeto.posisoes[1] < altu-objeto.altura-10){
        verificarColisao()

        //Movimentar objeto
        objeto.movimentar(0,5)
    }
}


function verificarColisao(){
    if(objeto.verificarColisao(bolas, true)){
        let x = Math.floor(Math.random() * (larg - 100) +1 ) +bola.dimensao[0]
        let y = Math.floor(Math.random() * (altu - 100) +1 ) +bola.dimensao[1]
        bola.mudarPosisao(x, y)
        pontos.innerHTML ++
        atualizarTimer(time + agrega_time)
    }
}