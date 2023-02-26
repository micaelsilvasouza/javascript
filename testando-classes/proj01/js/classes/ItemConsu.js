class ItemConsu extends Item{
    #valor

    propriedades(){
        return `<p>
                    Nome = ${this.nome}<br>
                    Tipo = ${this.tipo}<br>
                    ${this.bonus[0]} = ${this.bonus[1]}<br>
                    Valor = ${this.#valor}
                </p>`
    }

    get valor(){
        return this.#valor
    }

    set valor(valor){
        this.#valor = valor
    }
}