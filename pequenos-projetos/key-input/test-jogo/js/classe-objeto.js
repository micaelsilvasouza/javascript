class Cubo{
    /*
    Cria uma Objeto manipulavel via javascript 
    que pode ser manipula e adiconada em um documento HTML
    */
    constructor(lar, alt, cor){
        /* 
        Construir um objeto HTML para ser o Objeto a ser usado
        param:alt: Valor para dimensionar a altura do objeto, valor numerico e referente a uma quantidade em pixiels
        param:lar: Valor para dimensionar a largura do objeto, valor numerico e referente a uma  quantidade em pixels
        param:cor: Valor que determina a cor do objeto, sendo uma string, podendo conter um rgb(), hexadecimal para cor e tambem o nome da propria cor
        */
        //Criando um objeto HTML
        this._objeto = document.createElement("div")
        //Adiconado a cor do objeto
        this._objeto.style.backgroundColor = cor
        this._objeto.style.border = "2"
        //Determinado as dimensões do objeto
        this._largura = lar
        this._altura = alt
        this._objeto.style.height = alt+"px"
        this._objeto.style.width = lar+"px"
        //Determina o posicionamento do Objeto
        this._objeto.style.position = "absolute"
    }

    get objeto(){
        //Retoran
        return this._objeto
    }

    get largura(){
        return this._largura
    }

    get altura(){
        return this._altura
    }

    get dimensao(){
        return [this._altura, this._altura]
    }

    get posisoes(){
        return [this._posx, this._posy]
    }

    get colisores(){
        return this._colisores
    }

    posicionar(local, posx=0,posy=0){
        /*
        Adiciona o objeto a uma parte do documento HTML
        param:local: Objeto HTML onde o objeto será adiconado
        param:posx: Posicionamento Horizontal do objeto no Objeto HTML, valor numerico e referente a uma quantidade me pixel (padrao = 0) 
        param:posy: Posicionamento vertical do objeto no Objeto HTML, valor numerico e referente a uma quantidade me pixel (padrao = 0) 
        */
        this._local = local
        this._posx = posx
        this._posy = posy
        this.objeto.style.top = posy+"px"
        this.objeto.style.left = posx+"px"
        local.appendChild(this.objeto)
    }

    mudarPosisao(posx, posy){
        /*
        Altera o posicionamento do objeto
        param:posx: Posicionamento Horizontal do objeto
        param:posx: Posiconamento Vertical do Objeto
        */
        this._posx = posx
        this._posy = posy
        this.objeto.style.top = posy +"px"
        this.objeto.style.left = posx+"px"
    }

    movimentar(incx, incy){
        /*
        Gera um movimento no Objeto fazendo ele mover do ponto atual ao novo ponto declarado
        param:incx: Valor de incremento ao posicinamento horizontal do objeto, o valor será somado ao posicionamento atual
        param:incy: Valor de incremento ao posicionameto vertical do objeto, o valor será somado ao posicionamento atual
        */

       this.mudarPosisao(this._posx + incx, this._posy + incy)
    }

    criarPontosColisores(){
        /* 
        Cria os pontos para identificar alguma colisão
        gera uma Matriz contendo os pontos de colisão do eixo x e y
        esses pontos são determinados pela posição atual e a sua dimensão
        um laço é passado inicando da posição atual até a 
        posição que indica o fim da dimensão ou seja a 
        posição atual mais o tamanho do eixo
        */
        let pontos = [[],[]]//Matriz que conterá os pontos x e y
        let x = this._posx //A posição atual do eixo x
        let y = this._posy //A posição atual do eixo Y
        let lar = this._largura //A largura atual
        let alt = this._altura //A altura atual

        //laço contará os pontos de colisão do eixo x
        for(let ponto = x+5; ponto <= x+lar-5; ponto++){
            pontos[0].push(ponto)
        }

        //laço contará os pontos de colisão de eixo y
        for(let ponto = y+5; ponto <=y+alt-5; ponto++){
            pontos[1].push(ponto)
        }
        this._colisores = pontos
    }

    verificarColisao(objetos, muitos=false){
        /*
        Verifica se ouver uma colisão com um objeto da mesma 
        classe ou de suas filhas
        param:objeto: objeto a ser conferido se colidiu (padrão undefined)
        param:objetos: uma array contendo todos os objetos a serem conferidos (padrão undefined)
        return:colidiu: Retorna true se existe colisão e falso caso não exista
        */

        let colidiu = false //Variavel retornada
        //Verificando se foi passado apenas um objeto
        if(objetos && !muitos){
            //criar os colisores
            this.criarPontosColisores()
            objetos.criarPontosColisores()
            //passando pelos pontos do eixo x
            for(let x of this.colisores[0]){
                //verificando se existe no colisores objeto
                
                if(objetos.colisores[0].includes(x)){
                    //passando pelos pontos de eixo y
                    for(let y of this._colisores[1]){
                        //verificando se existe no objeto
                        if(objetos.colisores[1].includes(y)){
                            //detectando colisão
                            colidiu = true
                            //console.log(x + " " + y)
                            break
                        }
                    }
                    break
                }
            }
        //verificando se foi passado mais objetos
        }else if(objetos && muitos){
            for(let objeto of objetos){
                if(objeto.verificarColisao(this)){
                    colidiu = true
                    break
                }
            }
        }

        return colidiu
    }

}