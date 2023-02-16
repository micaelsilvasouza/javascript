function atualizarSelInimigos(personagem){
    selInimigoStatus.innerHTML = ""

    for(let i = 0; i < personagem.quantInimigos; i++){
        let opt = document.createElement("option")
        opt.setAttribute("value", inimigos[listInimigos[i]].sexo)
        opt.text = inimigos[listInimigos[i]].nome
        selInimigoStatus.appendChild(opt)
    }
}

function verSobreInimigo(){
    let inimigo = inimigos[selInimigoStatus.value]
    let img = document.createElement("img")
    let p = document.createElement("p")

    img.src = `imagens/inimigo-${inimigo.sexo}.png`
    p.innerHTML = inimigo.sobreInimigo

    barraStatus.innerHTML = ''
    barraStatus.appendChild(img)
    barraStatus.appendChild(p)
}