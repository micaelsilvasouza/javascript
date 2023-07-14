let niveis = ["n1","n2","n3","n4"]
let nivel = sessionStorage.getItem("nivel")??"n3"
let alterar = document.getElementById("alterar")
let select = document.getElementById("nivel")
let lista = document.getElementById("lista-jogadores")

//Mostrando no select qual o nivel atual
select.options[niveis.indexOf(nivel)].selected = true

//Alterando lista que mostra os jogadores
if(nivel == "n1"){
    lista.children[1].children[1].innerText = "Jogador 2"
}else{
    lista.children[1].children[1].innerText = "Computador"
}

//Função adiconada ao botão alterar para alterar o nivel
alterar.onclick = function(){
    //zerar toda os resultados e mudar o nivel atualizando a pagina
    zerar()
    sessionStorage.setItem("nivel", select.value)
    window.location = "index.html"
}

//verificando suporte ao Armazenamento Web
if(typeof(sessionStorage) !== "undefined"){
    //Verificando se o nivel já foi criado
    if(!sessionStorage.getItem("nivel")){
        sessionStorage.setItem("nivel", "n3")
        nivel = sessionStorage.getItem("nivel")
    }
}else{
    //Pedindo ao usuario qual nivel deseja jogfar
    nivel = prompt("Imfelizmente seu navegador não possui suporte ao nosso salvamento\nInforme qual o nivel você quer jogar [n1/n2/n3/n4]")
    nivel = niveis.includes(nivel)?nivel:"n3"

    //Mostrando a informação de qual é o nivel selecinado
    switch (nivel) {
        case "n1":
            select.parentElement.innerHTML = "Nivel 1"
            break;
        
        case "n2":
            select.parentElement.innerHTML = "Nivel 2"
            break;
        
        case "n3":
            select.parentElement.innerHTML = "Nivel 3"
            break;
        
        case "n4":
            select.parentElement.innerHTML = "Nivel 4"
            break;
        
        default:
            break;
    }
}