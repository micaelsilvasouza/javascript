//Criando os objetos principais do jogo
//Cubo player e Bola coletavel
let objeto = new Cubo(50,50,"#00f1dc")
let bola = new Cubo(30,30,"#a1c4ff")
//Posiconados os no body do HTML
objeto.posicionar(campo,300,300)
bola.posicionar(campo, 300,500)
bola.objeto.innerHTML = "1s"
bola.objeto.setAttribute("class", "boll")

//Funçoes para mavimentação
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

//Verificando a colisão com a bola coletavel
function verificarColisao(){
    if(objeto.verificarColisao(bola)){
        let x = aleatorioEntre(100, larg-100)
        let y = aleatorioEntre(100, altu-100)
        bola.mudarPosisao(x, y)
        pontos.innerHTML ++
        atualizarTimer(time + agrega_time)
        //Adicionar um novo inimigo se 
        if(pontos.innerHTML % 2 == 0){
            x = aleatorioEntre(100, larg-100)
            y = aleatorioEntre(100, altu-100)
            cont = 0
            while(cont<100){
                if(x >= objeto.posisoes[0] && x <= objeto.posisoes[0] +200){
                    x = aleatorioEntre(100, larg-100)
                }else{
                    break
                }
                cont++
            }
            cont = 0
            while (cont <100) {
                if(x >= objeto.posisoes[1] && y <= objeto.posisoes[1] +200){
                    y = aleatorioEntre(100, altu-100)
                }else{
                    break
                }
                cont++
            }
        
            let inimigo = new Inimigo(50,50,"#ff005f")
            inimigos.push(inimigo)
            inimigo.posicionar(campo,x,y)
        }
    }
}