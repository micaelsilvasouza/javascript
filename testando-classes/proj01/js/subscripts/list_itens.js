let i = {
    BraskHands: new Item("BraskHands", "Anel", [50, 30, 20]),
    BlusTands: new Item("BlusTands", "Amuleto", [60,40,80]),
    CronosHands: new Item("CronosHands", "Pergaminho", [10,20,90]),
    AndRands: new Item("AndRands", "Brasão", [50,60,10]),
    TrinKands: new Item("Trinkands", "Pedra Mágica", [30,50,70])
}

let listItens = Object.keys(i)
for(let item of listItens){
    let opt = document.createElement("option")
    opt.value = item
    opt.innerHTML = item

    selAddItem.appendChild(opt)
}
