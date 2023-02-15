function atualizarSelInimigos(personagem){
    selInimigoStatus.innerHTML = ""

    for(let i = 0; i < personagem.quantInimigos; i++){
        let opt = document.createElement("option")
        opt.setAttribute("value", inimigos[listInimigos[i]])
        opt.text = inimigos[listInimigos[i]].nome
        selInimigoStatus.appendChild(opt)
    }
}