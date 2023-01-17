let i = {
    BraskHands: new Item("BraskHands", "Amuleto", [50, 30, 20]),
    BlusTands: new Item("BlusTands", "Anel", [60,40,80]),
    CronosHands: new Item("CronosHands", "Colar", [10,20,90]),
    AndRands: new Item("AndRands", "Medalhão", [50,60,10]),
    TrinKands: new Item("Trinkands", "Manopla", [30,50,70])
}

let listItens = Object.keys(i)
for(let item of listItens){
    let opt = document.createElement("option")
    opt.value = item
    opt.innerHTML = item

    selAddItem.appendChild(opt)
}
