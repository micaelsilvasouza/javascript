function carregar(){
    var msg = window.document.getElementById("msg")
    var body = window.document.getElementsByTagName("body")[0]
    var img = window.document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora > 0 && hora < 12){
        img.src = "imagens/alteradas/manha.png"
        body.style.backgroundColor = "#e9da53"
    } else if(hora >= 12 && hora <= 18 ){
        img.src = "imagens/alteradas/tarde.png"
        body.style.backgroundColor = "#d46632"
    }else {
        img.src = "imagens/alteradas/noite.png"
        body.style.backgroundColor = "#04356d"
    }
}
carregar()