function add(){
    main.innerHTML += "<P>INDEX POSITIVO E OPERANTE</P>"
}
let p1 = new Person("Juvenildo", "fogo")
        let i = [
            new Item("BraskHands", "Amuleto", [50, 30, 20]),
            new Item("Blustands", "Anel", [60,40,80]),
            new Item("CronosHands", "Colar", [10,20,90]),
            new Item("AndRands", "Medalhão", [50,60,10])
        ]  
        p1.addItem(i[0])
        p1.addItem(i[1])
        p1.addItem(i[2])
        p1.removeItem("CronosHands")
        p1.subsItem("Blustands", i[3])

main.innerHTML += p1.status()
main.innerHTML += i[2].propriedades()