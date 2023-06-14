class Inimigo extends Cubo{
    direcoes = ["top","bai","esq","lef"]
    moverInimigo(){
        let dir = aleatorioLista(this.direcoes)
        setInterval(()=>{
            if(this.dir == "top"){
                this.movimentar(0,-5)  
            }
            if(this.dir == "bai"){
                this.movimentar(5,0)  
            }
            if(this.dir == "esq"){
                this.movimentar(-5,0)  
            }
            if(this.dir == "dir"){
                this.movimentar(5,0)  
            }
        }, 50)
    }
}
