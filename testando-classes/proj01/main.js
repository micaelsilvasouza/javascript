class Person{
    #nome
    #ataque = 100
    #defesa = 100
    #magia = 100
    #atrMagico

    constructor(nome, atr){
        this.#nome = nome
        this.#atrMagico = atr
    }

    status(){
        return `<p>
                    Nome = ${this.#nome}<br>
                    Ataque = ${this.#ataque}<br>
                    Defesa = ${this.#defesa}<br>
                    Magia = ${this.#magia}<br>
                    Atributo Magico = ${this.#atrMagico}<br>
                </p>`
    }

    get nome(){
        return this.#nome
    }

    set nome(nome){
        this.#nome = nome
    }

    get defesa(){
        return this.#defesa
    }

    set defesa(defesa){
        this.#defesa = defesa
    }

    get ataque(){
        return this.#ataque
    }

    set ataque(ataque){
        this.#ataque = ataque
    }

    get magia(){
        return this.#magia
    }

    set magia(magia){
        this.#magia = magia
    }

    get atrMagico(){
        return this.#atrMagico
    }

    set atrMagico(atr){
        this.#atrMagico = atr
    }
}

class Item{
    #tipo
    #nome
    #bonus

    constructor(nome, tipo, bonus){
        this.#nome = nome
        this.#tipo = tipo
        this.bonus = bonus
    }

    propriedades(){
        return `<p>
                    Nome = ${this.#nome}<br>
                    Tipo = ${this.#tipo}<br>
                    bonus:<br>
                    Ataque = ${this.#bonus[0]}<br>
                    Defesa = ${this.#bonus[1]}<br>
                    Magia = ${this.#bonus[2]}<br>
                </p>`
    }

    get tipo(){
        return this.#tipo
    }

    set tipo(tipo){
        this.#tipo = tipo
    }

    get nome(){
        return this.#nome
    }

    set nome(nome){
        this.#nome = nome
    }

    get bonus(){
        return this.#bonus
    }

    set bonus(bonus){
        if(typeof(bonus) === typeof([])){
            this.#bonus = bonus
        }else{
           console.log("[ERRO] O atributo bonus exige que seu valor seja uma array(vetor)")
        }
    }
}

