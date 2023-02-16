let inimigos = {
    esqueleto: new Inimgo("Naokin", "esqueleto", "Fogo", 200, 60, 50, 30),
    mumia: new Inimgo("Safira", "mumia", "vento", 300, 80, 70, 50), 
    ogro: new Inimgo("Shrek", "ogro", "agua", 500, 150, 100, 80),
    troll: new Inimgo("Setatroll", "troll", 1000, 500, 350, 200),
    lobisomem: new Inimgo("Darvim", "lobisomem", 2000, 800, 500, 400)
}

inimigos.esqueleto.sobreInimigo = `${inimigos.esqueleto.nome} é um ${inimigos.esqueleto.sexo}, um monstro de nivel inicial, mas nem sempre foi assim, antes de se tornar um monstro ele era apenas um campones com um desejo de se tornar um aventureiro, corajoso e aldacioso ao ponto de se envolver com um mago que desejava o poder de uma joia muito poderosa, essa foi sua primeira e ultima aventura, ao tocar na joia ele foi amaldiçoado e virou o monstro incapaz de evoluir e condenado a lutar com aventureiros em começo de aventura.`
inimigos.mumia.sobreInimigo = `Uma mumia`

let listInimigos = Object.keys(inimigos)