function Hora(){
    let data = new Date()
    let h = data.getHours()
    let m = data.getMinutes()
    let s = data.getSeconds()

    rel.innerHTML =`${h}:${m}:${s}`
}

setInterval(Hora, 1000)
Hora()