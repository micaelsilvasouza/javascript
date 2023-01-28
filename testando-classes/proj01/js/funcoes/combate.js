// funções para combate entre inimigo e personagem
let inimigo = inimigos.Naokin
let person = personagens.test
let vidaInimigo = document.getElementsByClassName("vida")[0]
let vidaPerson = document.getElementsByClassName("vida")[1]

let random

function atacarPerson(){
    random = Math.floor(Math.random() * 3) + 1
    if(random == 3){
        defenderInimigo()
    }else{
        setTimeout(atacarInimigo, 2500)
    }

    person.atacar(inimigo)
    vidaInimigo.innerHTML = inimigo.vida
    aparecerMensagem(person.nome + " atacou " + inimigo.nome)
}

function defenderPerson(){
    person.setDefedendo()
    aparecerMensagem(person.nome + " está se defendendo " + person.defesa)

    setTimeout(atacarInimigo, 2500)
}

function usarMagiaPerson(){
    random = Math.floor(Math.random() * 3) + 1
    console.log(random)
    if(random == 3){
        defenderInimigo()
    }

    let verificaVida = inimigo.vida    
    person.atacarMagia(inimigo)
    if(inimigo.vida < verificaVida){
        vidaInimigo.innerHTML = inimigo.vida
        aparecerMensagem(person.nome + " atacou " + inimigo.nome + " usando magia")
        //reação do inimigo
        if(random < 3){
            setTimeout(atacarInimigo, 2500)
        }
    }else{
        aparecerMensagem(person.nome + " não possui magia suficente para atacar")
    }
}

function atacarInimigo(){
    inimigo.atacar(person)
    vidaPerson.innerHTML = person.vida

    if(person.defendedo){
        person.setDefedendo()
    }
}

function defenderInimigo(){
    inimigo.setDefedendo()
    console.log("defedendo")
    setTimeout(inimigo.setDefedendo(), 1000)
}