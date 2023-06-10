//Codidgo Principal do jogo
//Recebendo o input e a div cubo do  html
let input = document.getElementById("input")
let cubo = document.getElementById("cubo")
let objeto = new Cubo(50,50,"#00f1dc")
objeto.posicionar(document.body,300,300)
let boll = document.getElementById("boll")
let timer = document.getElementById("timer")
let pontos = document.getElementById("pontos")
//iniciando o timer 
time = 10
iniciarTimer()
//Dimenções da tela
let larg = window.innerWidth
let altu = window.innerHeight
//Definindo as variaveis de posicionamento
let cubo_posx = 200
let cubo_posy = 200
let boll_posx = 500
let boll_posy = 300
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
    }else if(!movimentando && key == "d" || key == "arrowright"){
        //execultando movimento para a direita
        movimentando = true
        move_intervalo = setInterval(moverDir, 10)
    }else if(!movimentando && key == "w" || key == "arrowup"){
        //execultando movimento para a cima
        movimentando = true
        move_intervalo = setInterval(moverCima, 10)
    }else if(!movimentando && key == "s" || key == "arrowdown"){
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
        //Movimentando o cubo
        cubo_posx -= 5
        cubo.style.left = cubo_posx+"px"

        //Movimentando o objeto
        objeto.movimentar(-5,0)
        
        //Colisão cubo
        verificarColisao()
    }
    
}

function moverDir(){
    //Função que move a div cubo para a direita em 5 px
    if(objeto.posisoes[0] < larg-objeto.largura-10){
        //Movimentando o cubo
        cubo_posx+=5
        cubo.style.left = cubo_posx+"px"

        //Movimentando o objeto
        objeto.movimentar(5,0)

        //Colisão cubo
        verificarColisao()
    }
    
}

function moverCima(){
    //Função que move a div cubo para cima em 5px
    if(objeto.posisoes[1] > 10){
        //Movimentando cubo
        cubo_posy -=5
        cubo.style.top = cubo_posy+"px"
        //Colisão cubo
        verificarColisao()

        //Movimentadno objedo
        objeto.movimentar(0,-5)
    }
    
}

function moverBaixo(){
    //Função que move a div cubo para baixa em 5px
    if(objeto.posisoes[1] < altu-objeto.altura-10){
        //Movimentando cubo
        cubo_posy +=5
        cubo.style.top = cubo_posy+"px" 
        //Colisão cubo
        verificarColisao()

        //Movimentar objeto
        objeto.movimentar(0,5)
    }
}

function gerarPontosColisao(pos, tam){
    let points = []
    for(let p = pos - tam/2; p <= pos + tam/2; p++){
        points.push(p)
    }
    return points
}

function verificarColisao(){
    let colidy = gerarPontosColisao(cubo_posy, 50) 
    let colidx = gerarPontosColisao(cubo_posx, 50)
    if(colidy.includes(boll_posy) && colidx.includes(boll_posx)){
        boll_posx = Math.floor(Math.random() * (larg - 100) +1 ) +50
        boll_posy = Math.floor(Math.random() * (altu - 100) +1 ) +50
        mudarPosicaoBoll(boll_posx, boll_posy)
        atualizarTimer(time + 1)
        pontos.innerHTML = Number(pontos.innerHTML) + 1
    }
}

function mudarPosicaoBoll(posx, posy){
    boll.style.left = posx+"px"
    boll.style.top = posy+"px"
}