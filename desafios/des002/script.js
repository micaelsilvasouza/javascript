function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!!!")
    } else {
        var fsex = document.getElementsByName("radiosex")
        var idade = ano - Number(fano.value)
        var genero =""
        if(fsex[0].checked){
            genero = "Homem"
            if(idade>=0 && idade <10){
                //criança
                img.setAttribute("src", "criança_menino.png")
            }else if (idade <21){
                // jovem
                img.setAttribute("src", "jovem_masculino.png")
            }else if(idade <50){
                // adulto
                img.setAttribute("src", "homem.png")
            }else {
                // idoso
                img.setAttribute("src", "idoso.png")
            }
        }else{
            genero = "Mulher"
            if(idade>=0 && idade <10){
                //criança
                img.setAttribute("src", "criança_menina.png")
            }else if (idade <21){
                // jovem
                img.setAttribute("src", "jovem_feminino.png")
            }else if(idade <50){
                // adulto
                img.setAttribute("src", "mulher.png")
            }else {
                // idoso
                img.setAttribute("src", "idosa.png")
            }
        }
        res.style.textAlign ="center"
        res.innerHTML = `<p>Encontramos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}
