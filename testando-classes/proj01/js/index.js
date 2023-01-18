let personagens = {}


function criarPersonagem(){
    let radioSex = document.getElementsByName("sexo")[0]
    let nomePerson = nome.value
    let sexo = radioSex.checked? "Masculino": "Feminio"
    let atributo = atr.options[atr.selectedIndex].value

    if(nomePerson.length > 0 && atributo.length > 0){
        if(!personagens[nomePerson]){
            personagens[nomePerson] = new Person(nomePerson, sexo, atributo)
            aparecerMensagem( "Personagem " + nomePerson + " criado")

            let optItem = document.createElement("option")
            let optStatus = document.createElement("option")
            let optCriado = document.createElement("option")
            
            optItem.value = nomePerson
            optStatus.value = nomePerson
            optCriado.value = nomePerson

            optItem.innerHTML = nomePerson
            optStatus.innerHTML = nomePerson
            optCriado.text = nomePerson


            
            optCriado.selected = true
            selpersonItem.appendChild(optItem)
            selpersonStatus.appendChild(optStatus)
            selpersonCriados.appendChild(optCriado)
        }else{
            aparecerMensagem("Personagem já existente")
        }
    }else{
        aparecerMensagem("Personagem não pode ser criado, necessário preencher todos os campos.")
    }

    nome.value = ""
    setImgPerson()
}

//Mudar a imagem do personagem na section de criar pelo onchage no select dos personagens criados

function setImgPerson(){
        let personagem = personagens[selpersonCriados.value]
        let img = personagem.sexo == "Masculino"? "imagens/person-masculino.png": "imagens/person-feminino.png"
    
        imgPerson.setAttribute("src", img)
}

function verStatus(){
    let sel = selpersonStatus.options[selpersonStatus.selectedIndex].value
    barraStatus.innerHTML = personagens[sel].status()
}

///Funções Relacionadas a manipulação dos itens de um personagem////

function verificarItens(){
    selRemoverItem.innerHTML = ""
    let personagem = selpersonItem.options[selpersonItem.selectedIndex].value
    let itens = Object.keys(personagens[personagem].item)
    for (let item of itens) {
        let opt = document.createElement("option")
        opt.value = item
        opt.innerHTML = item
        selRemoverItem.appendChild(opt)
    }
}

function addItem(){
    let personagem = selpersonItem.options[selpersonItem.selectedIndex].value
    let item = selAddItem.options[selAddItem.selectedIndex]


    personagens[personagem].addItem(i[item.value])
    verificarItens()
}

function removerItem(){
    let personagem = personagens[selpersonItem.options[selpersonItem.selectedIndex].value]
    let item = selRemoverItem.options[selRemoverItem.selectedIndex].value

    personagem.removeItem(i[item])
    verificarItens()

    aparecerMensagem(item + " removido")
}

function substituirItem(){
    let personagem = personagens[selpersonItem.value]
    let reitem = i[selRemoverItem.value]
    let additem = i[selAddItem.value]

    personagem.substItem(reitem, additem)
    verificarItens()
}

//Chamada para criar Personagem
btCriarPersonagem.addEventListener("click",criarPersonagem)

//chamadas usando a imagem do Pesonagem
selpersonCriados.addEventListener("change", setImgPerson)
selpersonItem.addEventListener("change", setImgPerson)
selpersonStatus.addEventListener("change", setImgPerson)

//Chamadas usando funções de itens
selpersonItem.addEventListener("change", verificarItens)
btremover.addEventListener("click", removerItem)
btsubstituir.addEventListener("click", substituirItem)
