//Função chamada para o nivel 4
function nivel4() {
    let campo = undefined
    let chance = verficarVitoria(jogador2)[2]
    if(chance[0]){
        campo = finalizar(chance)
    }

    if(condicao_nivel == "arriscar" && campo == undefined){
        campo = arriscar()
    }
    
    if(condicao_nivel == "velha" && campo == undefined){
        campo = velha()
    }

    adicinarFormaComputador(campo)
}

//Função que adicina a forma no campo passado
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