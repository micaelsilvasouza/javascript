let i = {
   braskhands: new Item("braskhands", "Amuleto", [50, 30, 20]),
   blustands: new Item("blustands", "Anel", [60,40,80]),
   cronoshands: new Item("cronoshands", "Colar", [10,20,90]),
   andrands: new Item("andrands", "Medalhão", [50,60,10])
}

let personagens = {}


function criarPersonagem(nome, atr){
    if(nome.length > 0 && atr.length > 0){
        if(!personagens[nome]){
            personagens[nome] = new Person(nome, atr)
            personCriados.innerHTML += nome + "<br>"

            let optItem = document.createElement("option")
            let optStatus = document.createElement("option")
            
            optItem.value = nome
            optStatus.value = nome

            optItem.innerHTML = nome
            optStatus.innerHTML = nome
            
            selpersonItem.appendChild(optItem)
            selpersonStatus.appendChild(optStatus)
        }else{
            alert("Personagem já existente")
        }
    }else{
        alert("Personagem não pode ser criado, necessário preencher todos os campos.")
    }
}

function verStatus(){
    let sel = selpersonStatus.options[selpersonStatus.selectedIndex].value
    barraStatus.innerHTML = personagens[sel].status()
}

function addItem(){
    let personagem = selpersonItem.options[selpersonItem.selectedIndex].value
    let item = selAddItem.options[selAddItem.selectedIndex]
    let item2 = item

    personagens[personagem].addItem(i[item.value])
    selRemoverItem.appendChild(item2)
}

function removeItem(){
    let personagem = selpersonItem.options[selpersonItem.selectedIndex].value
    let item = selRemoverItem.options[selRemoverItem.selectedIndex].value

    personagem.removeItem(i[item])
}
