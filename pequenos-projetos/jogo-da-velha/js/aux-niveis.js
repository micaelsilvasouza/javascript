//Funções auxiliares para cada um dos niveis de jogo

let opcao = []//para a função arriscar, quarda as opções

//Função que verifica se o computador tem chance de ganhar, retorna o campo certo
function finalizar(chance) {
    let campo = undefined
    for(let i = 1; i < chance.length; i++){
        if(!campos[chance[i]].escolhido){
            campo = campos[chance[i]]
            break
        }
    }

    return campo
}

//Função que verifica se o jogador tem chance de ganhar
function impedir() {
    let campo
    for(let i = 1; i < ganhou[2].length; i++){
        if(!campos[ganhou[2][i]].escolhido){
            campo = campos[ganhou[2][i]]
            break
        }
    }
    return campo
}

//Funçõa chamda que retorna um campo aleatorio
function escolherAleatorio() {
    let campo
    if(jogador2.length < 4){
        //escolhendo uma posição aleataria
        while (true) {
            campo = campos[Math.floor(Math.random() * 9)]
            if(!campo.escolhido){
                break
            }
        }
    }

    return campo
}

//Função auxiliar nivel 4 para fazer o jogo sempre dar velha
function velha() {
    let campo = undefined
    if(jogador2.length == 0 && !campos[4].escolhido){
        campo = campos[4]
    }else if(jogador2.length == 0 && campos[4].escolhido){
        campo = campos[0]
    }else if(jogador1.length == 2 && jogador2.includes(0) && campos[8].escolhido){
        campo = campos[2]
    }else if(jogador2.length > 0){
        campo = impedir()
    }

    if(campo == undefined){
        campo = escolherAleatorio()
    }

    return campo
}

//Função auxiliar nivel 4 para escolher as melhores formas de ganhar
function arriscar(){
    let campo = undefined
    let opcoes = [
        [0,8],
        [2,6],
        [1,3],
        [7,5]
    ]
    let continuacao = []
    let continuacao1 = [
        [[3,6],[1,2],[4,2],[5,4],[7,5]],
        [[7,6],[5,2],[4,6],[3,4],[1,3]],
        [[5,8],[1,0],[4,8],[3,4],[7,3]],
        [[7,8],[3,0],[4,0],[5,4],[1,5]],
        [[2,0],[8,4],[6,4],[5,8],[7,4]],
        [[6,0],[8,4],[2,4],[7,8],[5,4]],
        [[6,8],[0,4],[2,4],[3,0],[1,4]],
        [[2,8],[0,4],[6,4],[1,0],[3,4]]
    ]

    let continuacao2 = [
        [[7,2],[5,6],[undefined],[undefined],[undefined]],
        [[3,2],[1,6],[undefined],[undefined],[undefined]],
        [[7,0],[3,8],[undefined],[undefined],[undefined]],
        [[5,0],[1,8],[undefined],[undefined],[undefined]],
        [[6,4],[undefined],[5,8],[undefined],[5,0]],
        [[2,4],[undefined],[7,8],[undefined],[7,2]],
        [[2,4],[undefined],[3,0],[undefined],[3,8]],
        [[6,4],[undefined],[1,0],[undefined],[1,8]]
    ]

    let posicao = jogador1[jogador1.length - 1]
    
    if(jogador2.length == 0){
        switch(posicao){
            case opcoes[0][0]:
                campo = campos[opcoes[0][1]]
                opcao.push(0)
                break
            case opcoes[0][1]:
                campo = campos[opcoes[0][0]]
                opcao.push(1)
                break
            case opcoes[1][0]:
                campo = campos[opcoes[1][1]]
                opcao.push(2)
                break
            case opcoes[1][1]:
                campo = campos[opcoes[1][0]]
                opcao.push(3)
                break
            case opcoes[2][0]:
                campo = campos[opcoes[2][1]]
                opcao.push(4) 
                break
            case opcoes[2][1]:
                campo = campos[opcoes[2][0]]
                opcao.push(5) 
                break
            case opcoes[3][0]:
                campo = campos[opcoes[3][1]]
                opcao.push(6)
                break
            case opcoes[3][1]:
                campo = campos[opcoes[3][0]]
                opcao.push(7)
                break
            case 4:
                campo = velha()
                condicao_nivel = "velha"
                break
            default:
                campo = undefined
                break
        }
    }else if(jogador2.length == 1){
        continuacao = continuacao1[opcao[0]]
        switch (posicao) {
            case continuacao[0][0]:
                campo = campos[continuacao[0][1]]
                opcao.push(0)
                break;
            
            case continuacao[1][0]:
                campo = campos[continuacao[1][1]]
                opcao.push(1)
                break;
            
            case continuacao[2][0]:
                campo = campos[continuacao[2][1]]
                opcao.push(2)
                break;
            
            case continuacao[3][0]:
                campo = campos[continuacao[3][1]]
                opcao.push(3)
                break;
            
            case continuacao[4][0]:
                campo = campos[continuacao[4][1]]
                opcao.push(4)
                break;

            case 4:
                campo = velha()
                condicao_nivel = "velha"
                break
            
            default:
                campo = undefined
                //console.log(opcao)
                break;
        }
    }else if(jogador2.length == 2 && opcao.length == 2){
        continuacao = continuacao2[opcao[0]][opcao[1]]
        switch (posicao) {
            case continuacao[0]:
                campo = campos[continuacao[1]]
                break;
        
            default:
                break;
        }
    }

    if(jogador2.length > 0 && campo == undefined){
        campo = impedir()
    }
    
    if(campo == undefined){
        campo = escolherAleatorio()
    }
    //console.log(opcao)
    return campo
}
