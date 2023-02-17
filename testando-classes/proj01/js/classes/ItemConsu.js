class ItemConsu extends Item{
    propriedades(){
        return `<p>
                    Nome = ${this.nome}<br>
                    Tipo = ${this.tipo}<br>
                    ${this.bonus[0]} = ${this.bonus[1]}
                </p>`
    }
}