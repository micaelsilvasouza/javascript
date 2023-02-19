function curarPerson(){
    if(person.vida < person.vidaMax){
        if(person.itensConsu["cura10"] > 0){
            person.curar(person.vidaMax * ic["cura10"].bonus[1])
            person.itensConsu["cura10"] --
            btcurarPerson.innerHTML = person.itensConsu["cura10"]
            setBarraVida("person")
        }else{
            aparecerMensagem(`${person.nome} não possui esse item`, "person")
        }
    }else{
        aparecerMensagem(`${person.nome} está com a vida completa`, "person")
    }
}