//Função chamada para quando o nivel for 2
function nivel2() {
    let campo = undefined
    let chance = verficarVitoria(jogador2)[2]

    if(chance[0]){
        campo = finalizar(chance)
    }

    if(jogador2.length < 4 && campo == undefined){
        campo = escolherAleatorio()
    }

    adicinarFormaComputador(campo)
}