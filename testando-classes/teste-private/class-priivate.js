class Cubo{
    #largura
    #altura
    #comprimento
    #cor

    #calcVolume(){
        return this.getAltura() * this.getComprimento() * this.getLargura()
    }

    constructor(largura, altura, comprimento, cor){
        this.setAltura(altura)
        this.setLargura(largura)
        this.setComprimento(comprimento)
        this.setCor(cor)
    }

    getVolume(){
        return this.#calcVolume()
    }

    getLargura(){
        return this.#largura
    }

    getAltura(){
        return this.#altura
    }

    getComprimento(){
        return this.#comprimento
    }

    getCor(){
        return this.#cor
    }

    setLargura(largura){
        this.#largura = largura
    }

    setAltura(altura){
        this.#altura = altura
    }

    setComprimento(comprimento){
        this.#comprimento = comprimento
    }

    setCor(cor){
        this.#cor = cor
    }
}

let c1 = new Cubo(10,10,10, "green")
c1.setAltura(20)
c1.setComprimento(25)
c1.setLargura(50)
main.innerHTML += c1.getVolume()
