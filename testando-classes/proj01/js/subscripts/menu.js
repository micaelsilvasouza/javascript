btcriar.onclick = function(){
    //Autera o campo visivel
    campCriar.style.display = 'block'
    campItens.style.display = "none"
    campStatus.style.display = "none"
    //Autera a section visu visivel no campo
    visuPerson.style.display = "block"
    visuItem.style.display = "none"
}

btitem.onclick = function(){
    campCriar.style.display = 'none'
    campItens.style.display = "block"
    campStatus.style.display = "none"

    visuPerson.style.display = "none"
    visuItem.style.display = "block"
}

btstatus.onclick = function(){
    campCriar.style.display = 'none'
    campItens.style.display = "none"
    campStatus.style.display = "block"

    visuPerson.style.display = "block"
    visuItem.style.display = "none"
}