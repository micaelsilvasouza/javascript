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
                    Ataque = +${this.#bonus[0]}<br>
                    Defesa = +${this.#bonus[1]}<br>
                    Magia = +${this.#bonus[2]}
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