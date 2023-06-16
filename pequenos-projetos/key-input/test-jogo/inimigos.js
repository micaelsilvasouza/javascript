//Array para guardar os objetos inimigos
let inimigos = [new Inimigo(50,50,"#ff005f")]
inimigos[0].posicionar(campo,10,120)

//Loop para mover o inimigos constantemente
setInterval(() => {
    inimigos.forEach(moverInimgo)
}, 20);

//Criando os timer para mudar a direção
timerMudarDirecao()

//função para movimentar Inimgo
function moverInimgo(inimigo){
    if(inimigo.direcao == "esq" && inimigo.posisoes[0] > 10){
        inimigo.movimentar(-3,0)
    }
    if(inimigo.direcao == "dir" && inimigo.posisoes[0] < larg - (inimigo.dimensao[0]+10)){
        inimigo.movimentar(3,0)
    }
    if(inimigo.direcao == "top" && inimigo.posisoes[1] > 10){
        inimigo.movimentar(0,-3)
    }
    if(inimigo.direcao == "bai" && inimigo.posisoes[1] < altu - inimigo.dimensao[1]-10) {
        inimigo.movimentar(0,3)
    }
    colisaoInimigo(inimigo)
}

//função que cria um timer mudar a direção do inimigo
function timerMudarDirecao(){
    setTimeout(() => {
        for(let inimigo of inimigos){
            inimigo.mudarDirecao()
             
        }
        timerMudarDirecao() 
    }, aleatorioEntre(2000,3000));
}

//Função para verificar colisão com o player e dar game over
function colisaoInimigo(inimigo) {
    if(inimigo.verificarColisao(objeto)){
        objeto.objeto.remove()
        objeto = {}
        window.location.href = "game-over.html"
        alert("Você colidiu com um inimigo")
    }
}
