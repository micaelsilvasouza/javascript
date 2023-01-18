/*Uma classe que cria um personagem*/ 
class Person{
    #nome
    #sexo
    #ataque = 100
    #defesa = 100
    #magia = 100
    #atrMagico
    #item = {}

    constructor(nome, sexo, atr){
        this.#nome = nome
        this.#sexo = sexo
        this.#atrMagico = atr
    }

    status(){ //Demonstra o status desse personagem
        return `<p>
                    Nome = ${this.#nome.toUpperCase()}<br>
                    Sexo = ${this.#sexo}<br>
                    Ataque = ${this.#ataque}<br>
                    Defesa = ${this.#defesa}<br>
                    Magia = ${this.#magia}<br>
                    Atributo Magico = ${this.#atrMagico.toUpperCase()}<br>
                    itens = ${Object.keys(this.#item)}
                </p>`
    }

    addItem(item){ //Adiciona um objeto da classe Item numa array de trés itens

        if(Object.keys(this.#item).length < 3){ //adiciona os bonus nos respectivos atributos
            if(!this.#item[item.nome]){
                this.#item[item.nome] = item
                this.#ataque += item.bonus[0]
                this.#defesa += item.bonus[1]
                this.#magia += item.bonus[2] 
                aparecerMensagem("Item " + item.nome +  " Adicionado a " + this.#nome)
            }else{
                aparecerMensagem("Item já existente")
            }
             
        }else{
            aparecerMensagem("Numero maximo de item é 3, não se pode colocar mais itens")
        }
        
    }

    removeItem(item){ //Remove um item pelo seu nome. Percorre a array do  atributo item, e confere o nome recebido no parametro da função

        if(this.#item[item.nome]){ // verificação de existencia de objeto
            this.#ataque -= item.bonus[0]
            this.#defesa -= item.bonus[1]
            this.#magia -= item.bonus[2]
            
            delete this.#item[item.nome]
        }else{ 
            aparecerMensagem("Esse nome não corresponde a nenhum item existente")
        } 
    }

    substItem(antigoItem, novoItem){ // os parametros são objetos da classe Item e suas subclasses

        if(!this.#item[novoItem.nome]){
            this.removeItem(antigoItem)
            this.addItem(novoItem) 
        }else{
            aparecerMensagem("O item que deseja adiciona já existe")
        }
    }

    get nome(){
        return this.#nome
    }

    set nome(nome){
        this.#nome = nome
    }

    get sexo(){
        return this.#sexo
    }

    set sexo(sexo){
        this.#sexo = sexo
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

    get item(){
        return this.#item
    }
}