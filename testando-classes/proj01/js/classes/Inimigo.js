//Classe que cria os inimigos extendendo personagem

class Inimgo extends Person{
    sobreInimigo

    constructor(nome, sexo, atr, vida, ataque, defesa, magia){
        super()
        this.nome = nome
        this.sexo = sexo
        this.atrMagico = atr
        this.vida = vida 
        this.vidaMax = vida
        this.ataque = ataque
        this.defesa = defesa
        this.defesaMax = defesa
        this.magia = magia
    }
} 