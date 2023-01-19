//Mudar a imagem do personagem

function setImgPerson(){
    let img
    if(selpersonCriados.options.length > 0){
        let personagem = personagens[selpersonCriados.value]
        img = personagem.sexo == "Masculino"? "imagens/person-masculino.png": "imagens/person-feminino.png"
    }else{
        img = document.getElementsByName("sexo")[0].checked? "imagens/person-masculino.png": "imagens/person-feminino.png"
    }

    imgPerson.setAttribute("src", img) 
}

//Mudar o icone do atributo mágico do personagem

function setImgAtributo(){
    let atr
    if(selpersonCriados.options.length == 0){
        atr = selAtributo.value
    }else{
        atr = personagens[selpersonCriados.value].atrMagico
    }
    imgAtributo.src = `imagens/atributo-${atr}.png`
}