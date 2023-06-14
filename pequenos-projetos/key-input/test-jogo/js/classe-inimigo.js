class Inimigo extends Cubo{
    direcoes = ["top","bai","esq","dir"]
    direcao = aleatorioLista(this.direcoes)

    mudarDirecao(){
        let direcao = aleatorioLista(this.direcoes)
        if(this.direcao == direcao){
            this.mudarDirecao()
        }else{
            this.direcao = direcao
        }
    }
}
