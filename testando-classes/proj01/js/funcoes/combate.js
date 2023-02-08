// funções para combate entre inimigo e personagem
let inimigo = inimigos.Naokin
let person

function iniciarCombate() {
    person = personagens[selpersonCriados.value]
    
    //auterando a imagem do personagem na section gameplay
    if(person.sexo == "Masculino"){
        imagemPersonGameplay.src = "imagens/person-masculino.png"
    }else if(person.sexo == "Feminino"){
        imagemPersonGameplay.src = `imagens/person-feminino.png`
    }else{
        console.error("sexo indefinido")
    }

    //setando a barra de vida para ficar com 100%
    barraDanoPerson.style.width = "100%" 
    barraDanoInimigo.style.width = "100%" 
    barraVidaPerson.style.width = "100%" 
    barraVidaInimigo.style.width = "100%" 

    //auterando a visibilidade das sections 
    gameplay.style.display = "block"
    criacao.style.display = "none"
}

// Funções Personagem
let random

function atacarPerson(){
    random = 1//Math.floor(Math.random() * 3) + 1

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
    verificaMorte(inimigo, person)
    aparecerMensagem(person.nome + " atacou " + inimigo.nome, "person")
    exibDano.innerHTML = inimigo.vida - verificaVidaIni

    campInimigo.appendChild(exibDano)
    setTimeout(()=>{exibDano.remove()}, 400)
}

function defenderPerson(){
    person.setDefedendo()
    aparecerMensagem(person.nome + " está se defendendo " + person.defesa, "person")

    setTimeout(atacarInimigo, 2500)
}

function usarMagiaPerson(){
    random = 3//Math.floor(Math.random() * 3) + 1
    
    let verificaVidaIni = inimigo.vida
    let exibDano = document.createElement("span")
    exibDano.setAttribute("class", "exibDano")

    if(random == 3){
        defenderInimigo()
    }
   
    person.atacarMagia(inimigo)
    setBarraVida('inimigo')
    verificaMorte(inimigo, person)
    exibDano.innerHTML = inimigo.vida - verificaVidaIni
    hitInimigo.style.display = "block"
    setTimeout(()=>{hitInimigo.style.display = "none"}, 300)
    campInimigo.appendChild(exibDano)
    setTimeout(()=>{exibDano.remove()}, 400)

    if(inimigo.vida < verificaVidaIni){
        aparecerMensagem(person.nome + " atacou " + inimigo.nome + " usando magia", "person")
        //reação do inimigo
        if(random < 3){
            setTimeout(atacarInimigo, 2500)
        }
    }else{
        aparecerMensagem(person.nome + " não possui magia suficente para atacar", "person")
    }
}



/////Funções para o Inimigo

function atacarInimigo(){
    let verificaVidaPerson = person.vida
    let exibDano = document.createElement("span")
    exibDano.setAttribute("class", "exibDano")

    inimigo.atacar(person)
    setBarraVida("person")
    verificaMorte(person, inimigo)
    let danoTomado = person.vida - verificaVidaPerson
    exibDano.innerHTML = danoTomado

    hitPerson.style.display = "block"
    setTimeout(()=>{hitPerson.style.display = "none"}, 300)

    if(person.defendedo){
        person.setDefedendo()
    }

    campPerson.appendChild(exibDano)
    aparecerMensagem(inimigo.nome + " atacou o " + person.nome, "inimigo")

    setTimeout(()=>{exibDano.remove()}, 400)
}

function defenderInimigo(){
    inimigo.setDefedendo()
    
    setTimeout(()=>{
        inimigo.setDefedendo() 
        aparecerMensagem("Inimigo Defedendo", "inimigo")
    }, 1000)
}

///Funções auxiliares de combate

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
        vida = person.vida
        barraDano = barraDanoPerson.style
        barraVida = barraVidaPerson.style

        barraVida.width = vida * tamanhoBarra / person.vidaMax + "px"
        barraDano.width = vida * tamanhoBarra / person.vidaMax + "px"
    }else{
        console.error("nenhum atacado compativel")
    }
}

function verificaMorte(atacado, atacando){
    if(atacado.vida < 1){
        resultado.innerHTML = atacando.nome + " Ganhou"
        resPartida.style.display = "block"
        gameplay.style.display = "none"
    }
}