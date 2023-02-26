let ic = {
    cura10: new ItemConsu("Cogumelo Curativo", "Curativo",["cura" ,0.3]),
    maisAtk: new ItemConsu("Poção Magica", "Fortificante", ["ataque", 0.2]),
    maisDef: new ItemConsu("Flor Negra", "Fortificante", ["defesa", 0.2]),
    maisMag: new ItemConsu("Perola Dourada", "Fortificante", ["magia", 0.2])
}

ic.cura10.valor = 100
ic.maisAtk.valor = 500
ic.maisDef.valor = 500
ic.maisMag.valor = 300

let listIC = Object.keys(ic)

for (let i of listIC) {
    let opt = document.createElement("option")
    opt.value = i
    opt.text = ic[i].nome

    selItensConsu.appendChild(opt)
}