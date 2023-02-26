function comprarItensConsu(){
    let item = selItensConsu.value
    let person = personagens[selpersonCriados.value]
    if(person.moedas >= ic[item].valor){
        person.addItensConsu(item, 1)
        person.moedas -= ic[item].valor
        moedas.innerHTML = "Moedas: " + person.moedas
    	aparecerMensagem(`${person.nome} comprou ${ic[item].nome}`, "person")
    }else{
        aparecerMensagem(`${person.nome} não possui moedas suficientes`, "person")
    }
}


function curarPerson(){
    if(person.vida < person.vidaMax){
        if(person.itensConsu["cura10"] > 0){
            person.curar(person.vidaMax * ic["cura10"].bonus[1])
            person.itensConsu["cura10"] --
            btcurarPerson.innerHTML = person.itensConsu["cura10"]
            setBarraVida("person")
            aparecerMensagem(`${person.nome} usou o item ${ic["cura10"].nome}`, "person")
        }else{
            aparecerMensagem(`${person.nome} não possui esse item`, "person")
        }
    }else{
        aparecerMensagem(`${person.nome} está com a vida completa`, "person")
    }
}

function aumentarAtaquePerson(){
    if(person.itensConsu["maisAtk"] > 0){
        person.bonusAtk += person.ataque * ic["maisAtk"].bonus[1]
        person.itensConsu["maisAtk"] --
        btmaisAtk.innerHTML = person.itensConsu["maisAtk"]
        aparecerMensagem(`${person.nome} usou o item ${ic["maisAtk"].nome}`, "person")
    }else{
        aparecerMensagem(`${person.nome} não possui esse item`, "person")
    }
}

function aumentarDefesaPerson(){
    if(person.itensConsu["maisDef"] > 0){
        person.bonusDef += person.defesaMax * ic["maisDef"].bonus[1]
        person.defesa += person.bonusDef
        person.itensConsu["maisDef"]--
        btmaisDef.innerHTML = person.itensConsu["maisDef"]
        aparecerMensagem(`${person.nome} usou o item ${ic["maisAtk"].nome}`, "person")
    }else{
        aparecerMensagem(`${person.nome} não possui esse item`, "person")
    }
}

function aumentarMagiaPerson(){
    if(person.itensConsu["maisMag"] > 0){
        person.bonusMag += magiaMaxPerson * ic["maisMag"].bonus[1]
        person.magia += person.bonusMag
        person.itensConsu["maisMag"]--
        btmaisMag.innerHTML = person.itensConsu["maisMag"]
        aparecerMensagem(`${person.nome} usou o item ${ic["maisMag"].nome}`, "person")
    }else{
        aparecerMensagem(`${person.nome} não possui esse item`, "person")
    }
}