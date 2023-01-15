/*Uma classe que cria um personagem*/ 
class Person{
    #nome
    #ataque = 100
    #defesa = 100
    #magia = 100
    #atrMagico
    #item = {}

    constructor(nome, atr){
        this.#nome = nome
        this.#atrMagico = atr
    }

    status(){ //Demonstra o status desse personagem
        return `<p>
                    Nome = ${this.#nome}<br>
                    Ataque = ${this.#ataque}<br>
                    Defesa = ${this.#defesa}<br>
                    Magia = ${this.#magia}<br>
                    Atributo Magico = ${this.#atrMagico}<br>
                </p>`
    }

    addItem(item){ //Adiciona um objeto da classe Item numa array de trés itens

        if(Object.keys(this.#item).length < 3){ //adiciona os bonus nos respectivos atributos
            if(!this.#item[item.nome]){
                this.#item[item.nome] = item
                this.#ataque += item.bonus[0]
                this.#defesa += item.bonus[1]
                this.#magia += item.bonus[2] 
                alert("Item " + item.nome +  " Adicionado a " + this.#nome)
            }else{
                alert("Item já existente")
            }
             
        }else{
            alert("Numero maximo de item é 3, não se pode colocar mais itens")
        }
        
    }

    removeItem(item){ //Remove um item pelo seu nome. Percorre a array do  atributo item, e confere o nome recebido no parametro da função

        if(this.#item[item.nome]){ // verificação de existencia de objeto
            this.#ataque -= item.bonus[0]
            this.#defesa -= item.bonus[1]
            this.#magia -= item.bonus[2]
            
            delete this.#item[item.nome]
        }else{ 
            alert("Esse nome não corresponde a nenhum item existente")
        } 
    }

    subsItem(nome, novoItem){
        this.removeItem(nome)
        this.addItem(novoItem)
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

    get item(){
        return this.#item
    }
}