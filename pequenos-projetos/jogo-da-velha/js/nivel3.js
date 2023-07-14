//Função para ser chamada quando o nivel for 3
function nivel3(){
    let campo = undefined
    let chance = verficarVitoria(jogador2)[2]
    if(chance[0]){
        campo = finalizar(chance)
    }else if(ganhou[2][0] && Math.floor(Math.random()*2) == 0){
        campo = impedir() 
    }
    
    if(jogador2.length < 4 && campo == undefined){
        campo = escolherAleatorio()
    }   

    adicinarFormaComputador(campo)
}