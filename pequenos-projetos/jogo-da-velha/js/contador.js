//Salva e aculmula os resultados das partidas
let resultados = document.getElementById("resultados")
let jogador1_pontos = document.getElementById("jogador1")
let jogador2_pontos = document.getElementById("jogador2")
let computador_pontos = document.getElementById("computador")
let velhas_pontos = document.getElementById("velhas")

if(typeof(sessionStorage) !== "undefined"){
    //Verificando se os resultado foram criados
    if(!sessionStorage.getItem("jogador1")){
        sessionStorage.setItem("jogador1","0")
    }
    if(!sessionStorage.getItem("jogador2")){
        sessionStorage.setItem("jogador2","0")
    }
    if(!sessionStorage.getItem("computador")){
        sessionStorage.setItem("computador","0")
    }
    if(!sessionStorage.getItem("velhas")){
        sessionStorage.setItem("velhas","0")
    }
    
}else{
    //Omitindo a informação de salvamento de resultados
    resultados.style.display = "none"
}

jogador1_pontos.innerText = sessionStorage.getItem("jogador1")
jogador2_pontos.innerText = sessionStorage.getItem("jogador2")
computador_pontos.innerText = sessionStorage.getItem("computador")
velhas_pontos.innerText = sessionStorage.getItem("velhas")

if(nivel == "n1"){
    computador_pontos.parentElement.style.display = "none"
}else{
    jogador2_pontos.parentElement.style.display = "none"
}

//zera todos os resultado obtidos
function zerar() {
    sessionStorage.setItem("jogador1","0")
    sessionStorage.setItem("jogador2","0")
    sessionStorage.setItem("computador","0")
    sessionStorage.setItem("velhas","0")
}