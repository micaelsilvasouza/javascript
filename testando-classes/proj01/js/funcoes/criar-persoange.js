///A função cria um personagem e adiciona no objeto personagens usando o nome dado ao personagem como atributo do objeto//////
//Atualiza as imagens relacionadas ao personagem recem criado///
//Faz uso da classe Person

let personagens = {
    test: new Person("test", "Masculino", "Fogo")
}

function criarPersonagem(){
    let radioSex = document.getElementsByName("sexo")[0]
    let nomePerson = nome.value
    let sexo = radioSex.checked? "Masculino": "Feminino"
    let atributo = selAtributo.value

    if(nomePerson.length > 0 && atributo.length > 0){
        if(!personagens[nomePerson]){
            personagens[nomePerson] = new Person(nomePerson, sexo, atributo)
            aparecerMensagem( "Personagem " + nomePerson + " criado", "person")

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
            optItem.selected = true
            optStatus.selected = true

            selpersonItem.appendChild(optItem)
            selpersonStatus.appendChild(optStatus)
            selpersonCriados.appendChild(optCriado)
        }else{
            aparecerMensagem("Personagem já existente" , "person")
        }
    }else{
        aparecerMensagem("Personagem não pode ser criado, necessário preencher todos os campos.", "person")
    }

    nome.value = ""
    setImgPerson()
    setImgAtributo()
}

//Atualizar todos os select de personagens, para sempre ficarem com mensmo persoangem selecioando////

function atualizarSelPerson(){
    let indexopt = this.selectedIndex
    selpersonCriados.options[indexopt].selected = true
    selpersonItem.options[indexopt].selected = true
    selpersonStatus.options[indexopt].selected = true
}

//Visualização das informações de cada personagem criado////

function verStatus(){
    let sel = selpersonStatus.options[selpersonStatus.selectedIndex].value
    barraStatus.innerHTML = personagens[sel].status()
}