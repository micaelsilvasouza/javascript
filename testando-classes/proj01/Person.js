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

    removeItem(nomeItem){ //Remove um item pelo seu nome. Percorre a array do  atributo item, e confere o nome recebido no parametro da função

        let pos = "nao" // guarda o valor da posição do objeto na array item, predefindo como string para verificação se caso não exista nenhum objeto com o nome passado

        for (let index = 0; index < this.#item.length; index++) {
            if(this.#item[index].nome === nomeItem){
                pos = index
                index += this.#item.length
            }
        }

        if(pos == "não"){ // verificação de existencia de objeto
            alert("Esse nome não corresponde a nenhum item existente")
        }else{ // remove o objeto e os bonus 
            this.#ataque -= this.#item[pos].bonus[0]
            this.#defesa -= this.#item[pos].bonus[1]
            this.#magia -= this.#item[pos].bonus[2]
            this.#item.splice(pos,1)
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