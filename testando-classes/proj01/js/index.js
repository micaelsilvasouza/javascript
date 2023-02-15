//Chamada relacionadas a Personagem
btCriarPersonagem.addEventListener("click",criarPersonagem)
btverStatus.addEventListener("click", verStatus)

//Chamadas para atualizar os selects de personagens
selpersonCriados.addEventListener("change", atualizarSelPerson)
selpersonItem.addEventListener("change", atualizarSelPerson)
selpersonStatus.addEventListener("change", atualizarSelPerson)

//chamadas usando a imagem do Pesonagem
selpersonCriados.addEventListener("change", setImgPerson)
selpersonItem.addEventListener("change", setImgPerson)
selpersonStatus.addEventListener("change", setImgPerson)
radioSexMas.addEventListener("click", setImgPerson)
radioSexFem.addEventListener("click", setImgPerson)

//Mudar os simbolo do atributo usando o select atributos
selAtributo.addEventListener("change", setImgAtributo)
selpersonCriados.addEventListener("change", setImgAtributo)
selpersonItem.addEventListener("change", setImgAtributo)
selpersonStatus.addEventListener("change", setImgAtributo)

//Chamadas usando funções de itens
selpersonItem.addEventListener("change", verificarItens)
selAddItem.addEventListener("change", propriedadeItem)
btpropriedade.addEventListener("click", propriedadeItem)
btaddItem.addEventListener("click", addItem)
btremover.addEventListener("click", removerItem)
btsubstituir.addEventListener("click", substituirItem)

//Chamadas usando funções de combate
btiniciarCombate.addEventListener("click", iniciarCombate)
btatacar.addEventListener("click", atacarPerson)
btdefender.addEventListener('click', defenderPerson)
btusarMagia.addEventListener("click", usarMagiaPerson)

//Chamadas depois do combate acabar
btmenu.onclick = ()=>{
    resPartida.style.display = "none"
    criacao.style.display = "block"

    //setando a vida do personagem e do inimigo
    person.curar(100000)
    person.magia = magiaMaxPerson
    inimigo.curar(100000)
}

btencerrarCombate.onclick = function (){
    gameplay.style.display = "none"
    criacao.style.display = "block"

    person.curar(100000)
    person.magia = magiaMaxPerson
    inimigo.curar(100000)
}