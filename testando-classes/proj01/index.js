let i = {
   braskhands: new Item("braskhands", "Amuleto", [50, 30, 20]),
   blustands: new Item("blustands", "Anel", [60,40,80]),
   cronoshands: new Item("cronoshands", "Colar", [10,20,90]),
   andrands: new Item("andrands", "Medalhão", [50,60,10])
}

let personagens = {}

function criarPersonagem(nome, atr, item){
    if(nome.length > 0 && atr.length > 0){
        if(!personagens[nome]){
            personagens[nome] = new Person(nome, atr)
            personagens[nome].addItem(i[item])
            console.log("Criado " + nome)

            let opt = document.createElement("option")
            opt.value = nome
            opt.innerHTML = nome
            selperson.appendChild(opt)
        }else{
            console.log("Personagem já existente")
        }
    }else{
        console.log("Personagem não pode ser criado, necessário preencher todos os campos.")
    }
    
    
}

function verStatus(){
    let selperson = document.getElementById("selperson")
    let sel = selperson.options[selperson.selectedIndex].value
    barraStatus.innerHTML = personagens[sel].status()
}