let inimigos = {
    esqueleto: new Inimgo("Naokin", "esqueleto", "Fogo", 200, 60, 50, 30),
    mumia: new Inimgo("Safira", "mumia", "vento", 300, 80, 70, 50), 
    ogro: new Inimgo("Shrek", "ogro", "agua", 500, 150, 100, 80),
    troll: new Inimgo("Setatroll", "troll", 1000, 500, 350, 200),
    lobisomem: new Inimgo("Darvim", "lobisomem", 2000, 800, 500, 400)
}

let listInimigos = Object.keys(inimigos)