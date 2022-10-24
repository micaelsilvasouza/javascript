var valores = []
function adicionar(list){
    let txtn = document.getElementById("txtn")
    let res = document.getElementById("res")
    let sel = document.getElementById("sel")
    let valor = Number(txtn.value)
    let opt = document.createElement("option")

    if(valor >= 10 && valor <= 100 && !valores.includes(valor)){
        opt.innerHTML = `O valor ${valor} foi adicionado`
        sel.appendChild(opt)
        txtn.value = ""
        res.innerHTML = ""
        list.push(valor)
    }else if(list.includes(valor)) {
        alert("Valor já existente. Adicione outro.")
        txtn.value = ""
    }else{
        alert("Verifique se o valor que deseja adicionar está correto e tente novamente.")
    }
    
}
function media(list){
    let total = 0
    let m = 0

    for(let num of list){
        total += num
    }

    m = total / list.length

    return m
}

function maior(list){
    let m = 10
    for(let num of list){
        m = num > m? num : m
    }
    return m
}

function menor(list){
    let n = 100 
    for(let num of list){
        n = n < num? n : num
    }
    return n
} 

console.log(menor([1,2,3]))

function conferir(list){
    let res = document.getElementById("res")
    let len = list.length
    let min = menor(list)
    let max = maior(list)
    let med = media(list)

    if(len > 0){
        res.innerHTML = ""
        res.innerHTML += `<p>A lista possui <strong>${len}</strong> valores.</p>`
        res.innerHTML += `<p>O maior valor da lista é <strong>${max}</strong>.</p>`
        res.innerHTML += `<p>O menor valor da lista é <strong>${min}</strong></p>`
        res.innerHTML += `<p>A média entre os valores da lista é <strong>${med.toFixed(2)}</strong></p>`
    }else{
        res.innerHTML = "<p><strong>Adione um valor a lista.</strong></p>"
    }
    
    
}

function limpar(){
    let txtn = document.getElementById("txtn")
    let sel = document.getElementById("sel")
    let res = document.getElementById("res")

    res.innerHTML = ""
    sel.innerHTML = "<option>Digite um valor...</option>"
    txtn.value = ""
}