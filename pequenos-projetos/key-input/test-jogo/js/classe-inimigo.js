class Inimigo extends Cubo{
    constructor(lar,alt,cor){
        super(lar,alt,cor)
        this._direcao = "left"
    }

    get direcao(){
        return this._direcao
    }
}