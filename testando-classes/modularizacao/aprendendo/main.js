import Person from "./Person.js"

main.innerHTML += "<p>Um Modulo. Reutilizando uma classe</p>"

let p1 = new Person("Ariovaldo")

main.innerHTML += `${p1.nome}, possui força de ${p1.forca} e uma desfesa de ${p1.defesa}.`

main.innerHTML += "<p>Não consigo ler nada</p>"