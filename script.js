let gameState = [{
    message: "Det har nu gått tre dagar sedan du kom bort ifrån din vandringsgrupp. Mobilen har dött, du har ingen aning om vart du är och det enda du har i din ryggsäck är ett tält och en tändare. Regnet forsade ner hela natten och ditt tält blev översvämmat. Du inser att du måste göra upp en eld för att hålla dig torr och varm.",
    question: "Vill du göra upp eld med fuktiga pinnar du hittar på marken, eller ta av dig din t-shirt som du har under tjocktröjan och använda som bränsle?",
    firstChoice: "Pinnar",
    secondChoice: "T-shirt",
    index: {
        first: 1,
        second: 2
    }
},

{
    message: "Pinnarna är för fuktiga och går ej att tända eld på.",
    question: "Vill du använda din t-shirt istället?",
    firstChoice: "Ja",
    secondChoice: "Nej",
    index: {
        first: 3,
        second: 4
    }
},

{
    message: "Du lyckas få fyr på din t-shirt och hittar några halvtorra pinnar som du startar en eld med. Efter en stund är du torr och varm. Du börjar bli rejält matt och inser att du måste hitta mat.",
    question: "Vill du gå mot öst eller väst för att leta efter mat?",
    firstChoice: "Öst",
    secondChoice: "Väst",
    index: {
        first: 5,
        second: 6
    }
},]

function game(gameState) {
    let index = 0;
    while (true) {
        alert(gameState[index].message);
        let answer = prompt(gameState[index].question);
        if (answer === gameState[index].firstChoice) {
            index = gameState[index].index.first
        }
        else if (answer === gameState[index].secondChoice) {
            index = gameState[index].index.second
        }
        else {
            alert(`Du måste ange ${gameState[index].firstChoice} eller ${gameState[index].secondChoice}`)
        }
    }
}

game(gameState);

// start()

// function start() {
//     alert("Det har nu gått tre dagar sedan du kom bort ifrån din vandringsgrupp. Mobilen har dött, du har ingen aning om vart du är och det enda du har i din ryggsäck är ett tält och en tändare. Regnet forsade ner hela natten och ditt tält blev översvämmat. Du inser att du måste göra upp en eld för att hålla dig torr och varm.");
//     let question = "Vill du göra upp eld med fuktiga pinnar du hittar på marken, eller ta av dig din t-shirt som du har under tjocktröjan och använda som bränsle?";
//     while (true) {
//         let newAnswer = prompt(question);
//         if (newAnswer === "Pinnar") {
//             sticks();
//             return;
//         }
//         else if (newAnswer === "T-shirt") {
//             tshirt();
//             return;
//         }
//         else if (newAnswer === null) {
//             return;
//         }
//         else {
//             alert("Du måste ange Pinnar eller T-shirt");
//         }
//     }
// }

// function sticks() {
//     alert("Pinnarna är för fuktiga och går ej att tända eld på.");
//     let question = "Vill du använda din t-shirt istället?";
//     while (true) {
//         let newAnswer = prompt(question);
//         if (newAnswer === "Ja") {
//             tshirt();
//             return;
//         }
//         else if (newAnswer === "Nej") {
//             doNotUseTshirt();
//             return;
//         }
//         else if (newAnswer === null) {
//             return;
//         }
//         else {
//             alert("Du måste ange Ja eller Nej");
//         }
//     }
// }

// function tshirt() {
//     alert("Du lyckas få fyr på din t-shirt och hittar några halvtorra pinnar som du startar en eld med. Efter en stund är du torr och varm. Du börjar bli rejält matt och inser att du måste hitta mat.");
//     let question = "Vill du gå mot öst eller väst för att leta efter mat?";
//     while (true) {
//         let newAnswer = prompt(question);
//         if (newAnswer === "Öst") {
//             goEast();
//             return;
//         }
//         else if (newAnswer === "Väst") {
//             goWest();
//             return;
//         }
//         else if (newAnswer === null) {
//             return;
//         }
//         else {
//             alert("Du måste ange Öst eller Väst");
//         }
//     }
// }

// function doNotUseTshirt() {
//     alert("Eftersom att du inte tycker det är en bra idé att elda upp din t-shirt, så bestämmer du dig istället för att koncentrera dig på mat, då du börjar bli rejält matt.");
//     let question = "Vill du gå mot öst eller väst för att leta efter mat?";
//     while (true) {
//         let newAnswer = prompt(question);
//         if (newAnswer === "Öst") {
//             tooCold();
//             return;
//         }
//         else if (newAnswer === "Väst") {
//             tooCold();
//             return;
//         }
//         else if (newAnswer === null) {
//             return;
//         }
//         else {
//             alert("Du måste ange Öst eller Väst");
//         }
//     }
// }

// function tooCold() {
//     alert("Du vandrar en bra bit på jakt efter mat men kylan från dina blöta kläder dränerar dig på krafter. Du faller ihop på marken och kan inte ta dig upp. Du förfryser i din ensamhet med kråkorna skränandes uppifrån trädtopparna.");
//     return;
// }

// function goEast() {
//     alert("När du vandrat i 30 min kommer du till en dunge. På marken växer en svamp som du tror är brunsopp. På en buske hänger bär som du tror är krusbär.");
//     let question = "Plockar och äter du svampen eller bären?";
//     while (true) {
//         let newAnswer = prompt(question);
//         if (newAnswer === "Svampen") {
//             eatMushroom();
//             return;
//         }
//         else if (newAnswer === "Bären") {
//             eatBerry();
//             return;
//         }
//         else if (newAnswer === null) {
//             return;
//         }
//         else {
//             alert("Du måste ange Svampen eller Bären");
//         }
//     }
// }