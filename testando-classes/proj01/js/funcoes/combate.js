// funções para combate entre inimigo e personagem
let inimigo = inimigos.esqueleto
let person = personagens.test
let magiaMaxPerson
let morte

function iniciarCombate() {
    person = personagens[selpersonCriados.value]
    magiaMaxPerson = person.magia
    nomePerson.innerHTML = person.nome
    btcurarPerson.innerHTML = person.itensConsu.cura10
    btmaisAtk.innerHTML = person.itensConsu.maisAtk
    btmaisDef.innerHTML = person.itensConsu.maisDef
    btmaisMag.innerHTML = person.itensConsu.maisMag

    inimigo = inimigos[listInimigos[person.quantInimigos]]
    imagemInimigoGameplay.src = `imagens/inimigo-${listInimigos[person.quantInimigos]}.png`
    nomeInimi.innerHTML = inimigo.nome

    morte = false
    
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
    random = Math.floor(Math.random() * 3) + 1

    let verificaVidaIni = inimigo.vida
    let exibDano = document.createElement("span")
    exibDano.setAttribute("class", "exibDano")


    if(random == 3){
        defenderInimigo()
    }else{
        setTimeout(atacarInimigo, 1000)
    }

    hitInimigo.style.backgroundImage = `url(imagens/esfeito-corte.png)`
    hitInimigo.style.display = "block"
    setTimeout(()=>{hitInimigo.style.display = "none"}, 300)

    person.atacar(inimigo)
    setBarraVida("inimigo")
    verificaMorte(inimigo, person)
    exibDano.innerHTML = inimigo.vida - verificaVidaIni

    campInimigo.appendChild(exibDano)
    setTimeout(()=>{exibDano.remove()}, 400)
}

function defenderPerson(){
    person.setDefedendo()

    setTimeout(atacarInimigo, 200)
}

function usarMagiaPerson(){
    random = Math.floor(Math.random() * 3) + 1
    
    let verificaVidaIni = inimigo.vida
    let exibDano = document.createElement("span")
    exibDano.setAttribute("class", "exibDano")

    if(random == 3){
        defenderInimigo()
    }else if(random < 3){
        setTimeout(atacarInimigo, 1000)
    }
   
    person.atacarMagia(inimigo)
    verificaMorte(inimigo, person)
    

    if(person.magia > 0){
        setBarraVida('inimigo')
        hitInimigo.style.backgroundImage = `url(imagens/efeito-magia-${person.atrMagico.toLowerCase()}.png)`
        exibDano.innerHTML = inimigo.vida - verificaVidaIni
        hitInimigo.style.display = "block"
        setTimeout(()=>{hitInimigo.style.display = "none"}, 300)
        campInimigo.appendChild(exibDano)
        setTimeout(()=>{exibDano.remove()}, 400)

    }else{
        aparecerMensagem(person.nome + " não possui magia suficente para atacar", "person")
    }
}



/////Funções para o Inimigo

function atacarInimigo(){
    let verificaVidaPerson = person.vida
    let exibDano = document.createElement("span")
    exibDano.setAttribute("class", "exibDano")
    //Setando o efeito de dano do inimigo
    hitPerson.style.backgroundImage = `url(imagens/efeito-ataque-${inimigo.sexo}.png)`

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
    setTimeout(()=>{exibDano.remove()}, 400)
}

function defenderInimigo(){
    inimigo.setDefedendo()
    aparecerMensagem("Inimigo Defedendo", "inimigo")
    setTimeout(()=>{
        inimigo.setDefedendo()
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
    if(!morte){
        if(atacado.vida < 1){
            resultado.innerHTML = atacando.nome + " Ganhou"
            resPartida.style.display = "block"
            gameplay.style.display = "none"
            
            if(atacando.nome == person.nome){
                person.quantInimigos += 1 
            }
            morte = true
        }
    }
    
}

