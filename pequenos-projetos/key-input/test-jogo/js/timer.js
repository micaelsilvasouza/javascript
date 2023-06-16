let timer_intervalo
let time = 10
function iniciarTimer(){
    let min = Math.floor(time/60)
    let seg = time%60
    minstr = min >= 10? String(min) : "0"+min
    segstr = seg >= 10? String(seg) : "0"+seg
    timer.innerText = `${minstr}:${segstr}`
    timer_intervalo = setInterval(()=>{
        if(seg > 0){
            time--
            seg--
            minstr = min >= 10? String(minstr) : "0"+min
            segstr = seg >= 10? String(seg):"0"+seg;
            timer.innerText = `${minstr}:${segstr}`
        }else if(min > 0){
            min--
            seg = 59
            console.log(min)
            minstr = min >= 10? String(min) : "0"+min
            segstr = seg >= 10? String(seg):"0"+seg;
            timer.innerText = `${minstr}:${segstr}`
        }else{
            pararTimer(timer_intervalo)
            alert("O Tempo Acabou")
            window.location.href = "game-over.html"
        }
        return time
    }, 1000)
}

function pararTimer(intervalo){
    clearInterval(intervalo)
}


function atualizarTimer(newtime){
    pararTimer(timer_intervalo)
    time = newtime
    iniciarTimer()
}