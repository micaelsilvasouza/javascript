let boll = true
let x_boll = true
let y_boll = true
let x = "calc(100% - 50px)"
let y = "calc(100% - 50px)"
let inter = setInterval(LogoDVD, 1000)
function LogoDVD(){
    //console.log(`x = ${x} e y = ${y}`)
    if(boll){
        boll = false
        
        bola.style.top = y
        bola.style.left = x
        
        x = Math.floor(Math.random() * 100)
        x = x > 30 ? `calc(${x}% - 50px)` : "50%"
        
        if(y_boll){
            y_boll = false
            y = "50px"
        }else{
            y = "calc(100% - 50px)"
            y_boll = true
        }
    }else{
        boll = true
        
        bola.style.top = y
        bola.style.left = x

        y = Math.floor(Math.random() * 100)
        y = y > 30 ? `calc(${y}% - 50px)` : "50%"
        
        if(x_boll){
            x_boll = false
            x = "50px"
        }else{
            x = "calc(100% - 50px)"
            x_boll = true
        }
    }
}

