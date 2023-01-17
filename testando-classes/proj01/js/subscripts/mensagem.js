let timeMensagem

function aparecerMensagem(men){
    let mensagem = document.querySelector(".mensagem")
    mensagem.innerHTML = men
    mensagem.style.left = "10px"
    timeMensagem = setInterval(removerMensagem, 2000)
}
function removerMensagem(){
    let mensagem = document.getElementsByClassName("mensagem")[0]
    mensagem.style.left = "-350px"
    clearInterval(timeMensagem)
}