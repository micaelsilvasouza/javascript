// funções para combate entre inimigo e personagem
let inimigo = inimigos.Naokin
let person = personagens.test
let vidaInimigo = document.getElementById("barraVidaInimigo")
let vidaPerson = document.getElementById("barraVidaPerson")

// Funções Personagem
let random

function atacarPerson(){
    random = Math.floor(Math.random() * 3) + 1

    let verificaVidaIni = inimigo.vida
    let exibDano = document.createElement("span")
    exibDano.setAttribute("class", "exibDano")

    if(random == 3){
        defenderInimigo()
    }else{
        setTimeout(atacarInimigo, 2500)
    }

    hitInimigo.style.display = "block"
    setTimeout(()=>{hitInimigo.style.display = "none"}, 300)

    person.atacar(inimigo)
    vidaInimigo.innerHTML = inimigo.vida
    aparecerMensagem(person.nome + " atacou " + inimigo.nome)
    exibDano.innerHTML = inimigo.vida - verificaVidaIni

    campInimigo.appendChild(exibDano)
    setTimeout(()=>{exibDano.remove()}, 400)
}

function defenderPerson(){
    person.setDefedendo()
    aparecerMensagem(person.nome + " está se defendendo " + person.defesa)

    setTimeout(atacarInimigo, 2500)
}

function usarMagiaPerson(){
    random = Math.floor(Math.random() * 3) + 1
    
    let verificaVidaIni = inimigo.vida
    let exibDano = document.createElement("span")
    exibDano.setAttribute("class", "exibDano")

    if(random == 3){
        defenderInimigo()
    }
   
    person.atacarMagia(inimigo)
    exibDano.innerHTML = inimigo.vida - verificaVidaIni
    hitInimigo.style.display = "block"
    setTimeout(()=>{hitInimigo.style.display = "none"}, 300)
    campInimigo.appendChild(exibDano)
    setTimeout(()=>{exibDano.remove()}, 400)

    if(inimigo.vida < verificaVidaIni){
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

function setBarraVida(newvida){
    
}

/////Funções para o Inimigo

function atacarInimigo(){
    let verificaVidaPerson = person.vida
    let exibDano = document.createElement("span")
    exibDano.setAttribute("class", "exibDano")

    inimigo.atacar(person)
    vidaPerson.innerHTML = person.vida

    let danoTomado = person.vida - verificaVidaPerson
    exibDano.innerHTML = danoTomado

    hitPerson.style.display = "block"
    setTimeout(()=>{hitPerson.style.display = "none"}, 300)

    if(person.defendedo){
        person.setDefedendo()
    }

    campPerson.appendChild(exibDano)

    setTimeout(()=>{exibDano.remove()}, 400)
}

function defenderInimigo(){
    inimigo.setDefedendo()
    console.log("defedendo")
    setTimeout(inimigo.setDefedendo(), 1000)
}