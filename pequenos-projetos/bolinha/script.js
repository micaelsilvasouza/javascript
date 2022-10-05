let boll = true
//let inter = setInterval(Quicar, 500)
function Quicar(){
    if(boll){
        bola.style.top = "300px"
        boll = false
       
    }else{
        bola.style.top = '100px'
        boll = true
    } 
}
