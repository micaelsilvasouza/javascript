/*Uma classe que cria um personagem*/ 
class Person{
    #nome
    #sexo
    #nivel = 1
    #xp = 0
    #moedas = 0
    #quantInimigos = 0
    #vida = 100
    #ataque = 100
    #defesa = 100
    #magia = 100
    #atrMagico
    #item = {}
    #itensConsu = {
        cura10: 10,
        maisAtk: 10,
        maisDef: 10,
        maisMag: 10
    }


    constructor(nome, sexo, atr){
        this.#nome = nome
        this.#sexo = sexo
        this.#atrMagico = atr
    }

    status(){ //Demonstra o status desse personagem
        return `<p>
                    Nome = ${this.#nome.toUpperCase()}<br>
                    Sexo = ${this.#sexo}<br>
                    Vida = ${this.#vida}<br>
                    XP = ${this.#xp}<br>
                    Nivel = ${this.#nivel}<br>
                    Ataque = ${this.#ataque}<br>
                    Defesa = ${this.#defesa}<br>
                    Magia = ${this.#magia}<br>
                    Atributo Magico = ${this.#atrMagico.toUpperCase()}<br>
                </p>`
    }
    
    #vidaMax = this.#vida
    curar(cura){
        if(this.#vida + cura < this.#vidaMax){
            this.#vida += cura
        }else{
            this.#vida = this.#vidaMax
        }
    }    
    
    #defedendo = false
    #defesaMax = this.#defesa
    #bonusDef = 0
    setDefedendo(){
        if(this.#defedendo){
            this.defesa = this.#defesaMax + this.#bonusDef
            this.#defedendo = false
        }else{
            this.defesa += this.#defesa / 4
            this.#defedendo = true
        }   
    }

    #bonusAtk = 0
    atacar(inimigo){
        let dano = this.#ataque + this.#bonusAtk - inimigo.defesa
        if(dano > 0){
            inimigo.vida -= dano
        }else{
            inimigo.vida -= 10
        }
    }

    #bonusMag = 0
    atacarMagia(inimigo){
        let dano = (150 + this.#bonusMag) - inimigo.defesa
        
        if(this.#magia > 0){
            if(dano > 0){
                inimigo.vida -= dano
            }else if(dano < -1){
                inimigo.vida += dano
            }
            this.#magia = this.#magia - 50 > 0 ? this.#magia - 50 : 0
        }        
    }

    addItensConsu(nomeItem, quantItem){
        this.#itensConsu[nomeItem] += quantItem
    }


    addItem(item){ //Adiciona um objeto da classe Item numa array de trés itens

        if(Object.keys(this.#item).length < 3){ //adiciona os bonus nos respectivos atributos
            if(!this.#item[item.nome]){
                this.#item[item.nome] = item
                this.#ataque += item.bonus[0]
                this.#defesa += item.bonus[1]
                this.#defesaMax += item.bonus[1]
                this.#magia += item.bonus[2] 
                aparecerMensagem("Item " + item.nome +  " Adicionado a " + this.#nome, "person")
            }else{
                aparecerMensagem("Item já existente", "person")
            }
             
        }else{
            aparecerMensagem("Numero maximo de item é 3, não se pode colocar mais itens", "person")
        }
        
    }

    removeItem(item){ //Remove um item pelo seu nome. Percorre a array do  atributo item, e confere o nome recebido no parametro da função

        if(this.#item[item.nome]){ // verificação de existencia de objeto
            this.#ataque -= item.bonus[0]
            this.#defesa -= item.bonus[1]
            this.#defesaMax -= item.bonus[1]
            this.#magia -= item.bonus[2]
            
            delete this.#item[item.nome]
        }else{ 
            aparecerMensagem("Esse nome não corresponde a nenhum item existente", "person")
        } 
    }

    substItem(antigoItem, novoItem){ // os parametros são objetos da classe Item e suas subclasses

        if(!this.#item[novoItem.nome]){
            this.removeItem(antigoItem)
            this.addItem(novoItem) 
        }else{
            aparecerMensagem("O item que deseja adiciona já existe", "person")
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

    get nivel(){
        return this.#nivel
    }

    set nivel(nivel){
        this.#nivel = nivel
    }

    get xp(){
        return this.#xp
    }

    set xp(pontos){
        this.#xp = pontos
    }

    get moedas(){
        return this.#moedas
    }

    set moedas(moedas){
        this.#moedas = moedas
    }

    get quantInimigos(){
        return this.#quantInimigos
    }

    set quantInimigos(numero){
        this.#quantInimigos = numero
    }

    get vida(){
        return this.#vida
    }

    set vida(vida){
        this.#vida = vida
    }

    get vidaMax(){
        return this.#vidaMax
    }

    set vidaMax(vida){
        this.#vidaMax = vida
        this.#vida = vida
    }

    get defesa(){
        return this.#defesa
    }

    set defesa(defesa){
        this.#defesa = defesa
    }
    
    get defesaMax(){
        return this.#defesaMax
    }

    set defesaMax(defesa){
        this.#defesaMax = defesa
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

    get itensConsu(){
        return this.#itensConsu
    }

    get bonusAtk(){
        return this.#bonusAtk
    }

    set bonusAtk(bonus){
        this.#bonusAtk = bonus
    }

    get bonusDef(){
        return this.#bonusDef
    }

    set bonusDef(bonus){
        this.#bonusDef = bonus
    }

    get bonusMag(){
        return this.#bonusMag
    }

    set bonusMag(bonus){
        this.#bonusMag = bonus
    }
}