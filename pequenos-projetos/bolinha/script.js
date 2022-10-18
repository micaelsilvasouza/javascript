let boll = true
let x = 100
let y = 100
let inter = setInterval(LogoDVD, 1100)
function LogoDVD(){
    if(boll){
        boll = false
        bola.style.top = `calc(${y}% - 50px)`
        x = Math.floor(Math.random() * 100)
    }else{
        boll = true
        bola.style.left = `calc(${x}% - 50px)`
        y = Math.floor(Math.random() * 100)
    }
    
    
}

