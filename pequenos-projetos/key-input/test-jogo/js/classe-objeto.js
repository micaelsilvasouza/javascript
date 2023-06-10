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
}