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

