// funções para combate entre inimigo e personagem
let inimigo = inimigos.Naokin
let person = personagens.test
let vidaInimigo = document.getElementsByClassName("vida")

function atacarInimigo(){
    person.atacar(inimigo)
    vidaInimigo[0].innerHTML = inimigo.vida
    aparecerMensagem(person.nome + " atacou " + inimigo.nome)
}

function defenderPerson(){
    person.setDefendendo()
    aparecerMensagem(person.nome + " está se defendendo " + person.defesa)
}

function usarMagiaPerson(){
    let verificaVida = inimigo.vida
    person.atacarMagia(inimigo)
    if(inimigo.vida < verificaVida){
        vidaInimigo[0].innerHTML = inimigo.vida
        aparecerMensagem(person.nome + " atacou " + inimigo.nome + " usando magia")
    }else{
        aparecerMensagem(person.nome + " não possui magia suficente para atacar")
    }
}