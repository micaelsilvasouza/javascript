//Funções Relacionadas a manipulação dos itens de um personagem////////////////////////////////////////////////////

//Confere os que já existem em um personagem para evitar a repetição de itens//
//Adiciona do personagem os itens no select de remover e substituir itens

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

//Adicina um novo item ao personagem

function addItem(){
    let personagem = selpersonItem.options[selpersonItem.selectedIndex].value
    let item = selAddItem.options[selAddItem.selectedIndex]


    personagens[personagem].addItem(i[item.value])
    verificarItens()
}

//Remove um item do personagem

function removerItem(){
    let personagem = personagens[selpersonItem.options[selpersonItem.selectedIndex].value]
    let item = selRemoverItem.options[selRemoverItem.selectedIndex].value

    personagem.removeItem(i[item])
    verificarItens()

    aparecerMensagem(item + " removido")
}

//Substitui o item do personagem por outro do select de adicionar itens

function substituirItem(){
    let personagem = personagens[selpersonItem.value]
    let reitem = i[selRemoverItem.value]
    let additem = i[selAddItem.value]

    personagem.substItem(reitem, additem)
    verificarItens()
}

function propriedadeItem(){
    if(this.value != "Propriedades"){
        propItem.innerHTML = i[this.value].propriedades()
        imgItem.src = `imagens/${this.value}.png`
        imgItem.alt = this.value 
    }else{
        let value = selRemoverItem.value
        propItem.innerHTML = i[value].propriedades()
        imgItem.src = `imagens/${value}.png`
        imgItem.alt = value
    }
    
}