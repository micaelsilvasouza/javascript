class Item{
    #tipo
    #elemento
    #bonus
    #resistencia

    constructor(tipo, elemento, bonus, resistencia){
        this.setBonus(bonus)
        this.setElemento(elemento)
        this.setResistencia(resistencia)
        this.setTipo(tipo)
    }

    getTipo(){
        return this.#tipo
    }

    getElemento(){
        return this.#elemento
    }

    getBonus(){
        return this.#bonus
    }

    getResistencia(){
        return this.#resistencia
    }

    setTipo(tipo){
        this.#tipo = tipo
    }

    setElemento(elemento){
        this.#elemento = elemento
    }

    setBonus(bonus){
        this.#bonus = bonus
    }

    setResistencia(resistencia){
        this.#resistencia = resistencia
    }
}