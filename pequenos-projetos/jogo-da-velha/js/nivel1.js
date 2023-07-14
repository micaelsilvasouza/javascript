//Função chamada para o nivel 1
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