// funções para combate entre inimigo e personagem
let inimigo = inimigos.Naokin
let person = personagens.test

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
    setBarraVida("inimigo")
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
    setBarraVida('inimigo')
    exibDano.innerHTML = inimigo.vida - verificaVidaIni
    hitInimigo.style.display = "block"
    setTimeout(()=>{hitInimigo.style.display = "none"}, 300)
    campInimigo.appendChild(exibDano)
    setTimeout(()=>{exibDano.remove()}, 400)

    if(inimigo.vida < verificaVidaIni){
        aparecerMensagem(person.nome + " atacou " + inimigo.nome + " usando magia")
        //reação do inimigo
        if(random < 3){
            setTimeout(atacarInimigo, 2500)
        }
    }else{
        aparecerMensagem(person.nome + " não possui magia suficente para atacar")
    }
}

function setBarraVida(atacado){
    let tamanhoBarra = window.innerWidth * 0.8
    let barraVida
    let barraDano
    let vida

    if (atacado == "inimigo") {
        //pego a vida do inimigo
        vida = inimigo.vida
        //barra de vida do inimigo
        barraVida = barraVidaInimigo.style
        barraDano = barraDanoInimigo.style
        
        /*atualizando o tamanho da barra de vida, fazendo a porcentagem
         de quanto a vida em relação ao tamanho total da barra*/
        
        barraVida.width = vida * tamanhoBarra / inimigo.vidaMax + "px"
        barraDano.width = vida * tamanhoBarra / inimigo.vidaMax + "px"
        
    } else if(atacado == "person"){
        
    }else{
        console.error("nenhum atacado compativel")
    }
}

/////Funções para o Inimigo

function atacarInimigo(){
    let verificaVidaPerson = person.vida
    let exibDano = document.createElement("span")
    exibDano.setAttribute("class", "exibDano")

    inimigo.atacar(person)
    setBarraVida("person")
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