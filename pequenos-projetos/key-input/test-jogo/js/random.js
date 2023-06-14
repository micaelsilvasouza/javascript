function aleatorioLista(lista){
    let index = Math.floor(Math.random() * lista.length)
    return lista[index]
}

function aleatorioEntre(min, max){
    let aleatorio = Math.floor(Math.random() * (max - min)) + min
    return aleatorio
}