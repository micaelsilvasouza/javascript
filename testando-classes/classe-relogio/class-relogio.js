main.innerHTML += "<p>Relogio funcionando</p>";

class Relogio{
    tipo
    cor
    modelo
    horas
    minutos
    segundos
    
    constructor(tipo, cor, modelo){
        this.setTipo(tipo)
        this.setCor(cor)
        this.setModelo(modelo)
    }

    getTipo(){
        return this.tipo
    }

    getCor(){
        return this.cor
    }

    getModelo(){
        return this.modelo
    }

    getHoras(){
        this.setHoras()
        return this.horas
    }

    getMinutos(){
        this.setMinutos()
        return this.minutos
    }

    getSegundos(){
        this.setSegundos()
        return this.segundos
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    setCor(cor){
        this.cor = cor
    }

    setModelo(modelo){
        this.modelo = modelo
    }

    setHoras(){
        let date = new Date()
        let hora = date.getHours()
        this.horas = hora
    }

    setMinutos(){
        let date = new Date()
        let minuto = date.getMinutes()
        this.minutos = minuto
    }

    setSegundos(){
        let date = new Date()
        let segundo = date.getSeconds()
        this.segundos = segundo
    }
}

let r1 = new Relogio("Mesa", "Verde", "Digital")
main.innerHTML += "<p>Qual o tipo do seu relógio?<br>" + r1.getTipo() + "</p>"
main.innerHTML += "<p>Qual o modelo do seu relógio?<br>" + r1.modelo + "</p>"
main.innerHTML += "<p>A cor do seu relógio é " + r1.getCor()+ " mas você pode mudar, qual será a nova cor do relogio?<br>"
r1.setCor("darkblue")
main.innerHTML += r1.cor + "</p>"
main.innerHTML += "<p>Que horas são?<br>" + r1.getHoras() + "</p>"
main.innerHTML += "<p>Quais são os minutos?<br>" + r1.getMinutos() + "</p>"
main.innerHTML += "<p>Quais são os segundos?<br>" + `<span id=seg>${r1.getSegundos()}</span>` + "</p>"

seg.style.backgroundColor = r1.getCor()

function updateSegundos(){
    let segundos = r1.getSegundos()
    seg.innerHTML = segundos 
}

setInterval(updateSegundos, 1000)
