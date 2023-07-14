//Função chamada para o nivel 1
function nivel1(id){
    if(jogador == 1){
        campos[id].figuras[1].style.visibility = "visible"
        campos[id].figuras[2].style.visibility = "visible"
        campos[id].escolhido = true
        jogador1.push(campos[id].posicao)
        jogador = 2
        ganhou = verficarVitoria(jogador1)

        if(ganhou[0]){
            vitoria(ganhou[1], "Jogador 1")
            if(typeof(sessionStorage) != "undefined"){
                
                sessionStorage.setItem(
                    "jogador1",
                    Number(sessionStorage.getItem("jogador1")) + 1
                )
            }
        }

        
    }else if(jogador == 2){
        campos[id].figuras[0].style.visibility = "visible"
        campos[id].escolhido = true
        jogador2.push(campos[id].posicao)
        jogador = 1
        ganhou = verficarVitoria(jogador2)
        
        if(ganhou[0]){
            vitoria(ganhou[1], "Jogador 2")
            if(typeof(sessionStorage) != "undefined"){
                sessionStorage.setItem(
                    "jogador2",
                    Number(sessionStorage.getItem("jogador2")) + 1
                )
            }
        }
        
    }
}