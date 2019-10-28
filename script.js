start()

function start() {
    alert("Det har nu gått tre dagar sedan du kom bort ifrån din vandringsgrupp. Mobilen har dött, du har ingen aning om vart du är och det enda du har i din ryggsäck är ett tält och en tändare. Regnet forsade ner hela natten och ditt tält blev översvämmat. Du inser att du måste göra upp en eld för att hålla dig torr och varm.");
    let question = "Vill du göra upp eld med fuktiga pinnar du hittar på marken, eller ta av dig din t-shirt som du har under tjocktröjan och använda som bränsle?";
  while(true){
    let newAnswer = prompt(question);
    if (newAnswer === "Pinnar") {
        sticks();
        return;
    }
    else if (newAnswer === "T-shirt") {
        tshirt();
        return;
    }
    else {
        alert("Du måste ange Pinnar eller T-shirt")
    }
  }
}

function sticks() {
    alert("Pinnarna är för fuktiga och går ej att tända eld på.")
    let newAnswer = prompt("Vill du använda din t-shirt istället?")
    if (newAnswer === "Ja") {
        tshirt()
    }
    if (newAnswer === "Nej") {
        doNotUseTshirt()
    }
}

function tshirt() {
    alert("Du lyckas få fyr på din t-shirt och hittr några halvtorra pinnar som du startar en eld med. Efter en stund är du torr och varm. Du börjar bli rejält matt och inser att du måste hitta mat.")
    let newAnswer = prompt("Vill du gå mot öst eller väst för att leta efter mat?")
    if (newAnswer === "Öst") {
        useTshirt()
    }
    if (newAnswer === "Väst") {
        doNotUseTshirt()
    }
}

function doNotUseTshirt() {
    alert("Eftersom att du inte tycker det är en bra idé att elda upp din t-shirt, så bestämmer du dig istället för att koncentrera dig på mat, då du börjar bli rejält matt.")
    let newAnswer = prompt("Vill du gå mot öst eller väst för att leta efter mat?")
    if (newAnswer === "Öst") {
        tooCold()
    }
    if (newAnswer === "Väst") {
        tooCold()
    }
}

function tooCold() {
    alert("Du vandrar en bra bit på jakt efter mat men kylan från dina blöta kläder dränerar dig på krafter. Du faller ihop på marken och kan inte ta dig upp. Du förfryser i din ensamhet med kråkorna skränandes uppifrån trädtopparna.")
}