function AlterarTitulo(){
    let titulo = document.getElementById("titulo")
    let newtitulo = document.getElementById("ntitulo")
    let men = document.getElementById("men")
    if(newtitulo.value.length == 0){
        men.innerHTML = "Digite primeito um titulo para depois auterar."
    }else{
        titulo.innerHTML = newtitulo.value
        men.innerHTML = "auterou o titulo."
    }
}
