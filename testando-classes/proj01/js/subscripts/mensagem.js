let timeMensagem

function aparecerMensagem(men, donoMen){
    let mensagem
    if(donoMen == "person"){
        mensagem = document.getElementById("mensagemPerson")
    }else if(donoMen == "inimigo"){
        mensagem = document.getElementById("mensagemInimigo")
    }else{
        console.error("Quem é o dono da mensagem o Person ou Inimigo")
    }
    
    mensagem.innerHTML = men
    mensagem.style.left = "10px"
    setTimeout(()=>{
        removerMensagem(donoMen)
    }, 2000)
}
function removerMensagem(donoMen){
    let mensagem
    if (donoMen == "person") {
        mensagem = document.getElementById("mensagemPerson")
    }else{
        mensagem = document.getElementById("mensagemInimigo")
    }
    mensagem.style.left = "-350px"
}