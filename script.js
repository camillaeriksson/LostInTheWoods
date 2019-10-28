start()

function start() {
    alert("Det har nu gått tre dagar sedan du kom bort ifrån din vandringsgrupp. Mobilen har dött, du har ingen aning om vart du är och det enda du har i din ryggsäck är ett tält och en tändare. Regnt forsade ner hela natten och ditt tält blev översvämmat. Du inser att du måste göra upp en eld för att hålla dig torr och varm.")
    let newAnswer = prompt("Vill du göra upp eld med fuktiga pinnar du hittar på marken, eller ta av dig din t-shirt som du har under tjocktröjan och använda som bränsle?")
    if (newAnswer === "Pinnar") {
        sticks()
    }
    if (newAnswer === "T-shirt") {
        tshirt()
    }
}

function sticks() {
    alert("Pinnarna är för fuktiga och går ej att tända eld på.")
    let newAnswer = prompt("Vill du använda din t-shirt istället?")
    if (newAnswer === "Ja") {
        useTshirt()
    }
    if (newAnswer === "Nej") {
        doNotUseTshirt()
    }
}

function tshirt() {
    alert("Du lyckas få fyr på din t-shirt och hittr några halvtorra pinnar som du startar en eld med. Efter en stund är du torr och varm. Du börjar bli rejält matt och inser att du måste hitta mat och vatten.")
    let newAnswer = prompt("Vill leta efter mat eller vatten först?")
    if (newAnswer === "Mat") {
        useTshirt()
    }
    if (newAnswer === "Vatten") {
        doNotUseTshirt()
    }
}
