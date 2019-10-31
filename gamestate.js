let gameState = [
    { //Index 0 Start
        message: "Det har nu gått två veckor sedan du kom bort ifrån din vandringsgrupp. Mobilen har dött sedan länge, det är sen höst och det enda du har i din ryggsäck är ett tält, en kniv och en tändare. Regnet har forsat ner hela natten och ditt tält blev översvämmat. Du inser att du måste göra upp en eld för att hålla dig torr och varm.",
        question: "Vill du testa göra upp eld med fuktiga pinnar du hittar på marken, eller ta av dig din t-shirt som du har under tjocktröjan att använda för att tända på?",
        firstChoice: "pinnar",
        secondChoice: "t-shirt",
        index: {
            first: 1,
            second: 2
        }
    },

    { //Index 1 Tända eld med pinnar
        message: "Pinnarna är för fuktiga och går inte att tända eld på.",
        question: "Vill du använda din t-shirt istället?",
        firstChoice: "ja",
        secondChoice: "nej",
        index: {
            first: 2,
            second: 3
        }
    },

    { //Index 2 Tända eld med t-shirt
        message: "Du tänder eld på din t-shirt och hittar några halvtorra pinnar som du startar en eld med. Efter en stund är du torr och lite varmare. Du börjar bli rejält matt och inser att du måste hitta mat.",
        question: "Vill du gå mot öst eller väst för att leta efter mat?",
        firstChoice: "öst",
        secondChoice: "väst",
        index: {
            first: 6,
            second: 7
    }
    },

    { //Index 3 Nej till att försöka med t-shirt istället
        message: "Eftersom att du inte tycker det är en bra idé att elda upp din t-shirt, så bestämmer du dig istället för att koncentrera dig på mat, då du börjar bli rejält matt.",
        question: "Vill du gå mot öst eller väst för att leta efter mat?",
        firstChoice: "öst",
        secondChoice: "väst",
        index: {
            first: 4,
            second: 4
        }
    },

    { //Index 4 Gå öst/väst med kall t-shirt
        message: "Du vandrar en bra bit på jakt efter mat men kylan från dina blöta kläder dränerar dig på krafter. Du faller ihop på marken och kan inte ta dig upp. Du förfryser i din ensamhet med kråkorna skränandes uppifrån trädtopparna.",
        question: "Vill du spela igen?",
        firstChoice: "ja",
        secondChoice: "nej",
        index: {
            first: 0,
            second: 5,
        }
    },

    { //Index 5 Game Over
        gameOver: true,
    },

    { //Index 6 Gå öst efter mat
        message: "När du vandrat en stund kommer du till en glänta. På marken växer bruna svampar som du är nästan helt säker på är ätliga. Eftersom att du inte ätit något på flera dagar och är desperat, så överväger du att chansa.",
        question: "Plockar och äter du svampen?",
        firstChoice: "ja",
        secondChoice: "nej",
        index: {
            first: 8,
            second: 9
        }
    },

    { //Index 7 Gå väst/norr efter mat
        message: "Efter en stund kommer du till en liten äng. Där växer buskar med röda bär, som liknar dem du åt för några dagar sedan utan problem, men du är inte helt säker på att det är samma.",
        question: "Plockar och äter du bären?",
        firstChoice: "ja",
        secondChoice: "nej",
        index: {
            first: 10,
            second:  11
        }
    },

    { //Index 8 Ät svamp
        message: "30 minuter efter att du ätit svampen börjar skogen snurra, du börjar svettas och faller ihop på marken i fruktansvärda magkramper. Du dör i mossan av förgiftning från svampen.",
        question: "Vill du spela igen?",
        firstChoice: "ja",
        secondChoice: "nej",
        index: {
            first: 0,
            second: 5,
        }
    },

    { //Index 9 Ät INTE svamp
        message: "Du vågar inte chansa utan bestämmer dig för att vandra vidare, trots att dina krafter börjar ta slut.",
        question: "Vill du fortsätta mot öst, eller vända mot norr?",
        firstChoice: "öst",
        secondChoice: "norr",
        index: {
            first: 11,
            second: 7
        }
    },

    { //Index 10 Ät bären
        message: "Bären är söta och goda, så du plockar på dig och äter så mycket du kan. Med ny energi vandrar du vidare och kommer till slut till en damm. Vattnet ser riktigt smutsigt ut men du borde verkligen få i dig vätska.",
        question: "Vill du dricka vattnet, eller gå vidare?",
        firstChoice: "dricka",
        secondChoice: "gå vidare",
        index: {
            first: 12,
            second: 13 // ÄNDRA
        }
    },

    { //Index 11 Öst efter inte ätit
        message: "Du vandrar vidare med tunga, matta steg och kommer till slut till en damm. Vattnet ser riktigt smutsigt ut men du borde verkligen få i dig vätska.",
        question: "Vill du dricka vattnet, eller gå vidare?",
        firstChoice: "dricka",
        secondChoice: "gå vidare",
        index: {
            first: 12,
            second: 13 // ÄNDRA
        }
    },

    { //Index 12 Drick vatten
        message: "Vattnet gjorde susen och du känner dig stärkt att vandra vidare. När du går som djupast inne i dina egna tankar står du plötsligt öga mot öga med en en stor brunbjörn. Tre meter ifrån dig ställer den sig på bakbenen, visar tänderna och vrålar mot dig. Du står blixtstilla i några sekunder, och överväger om du ska springa, eller dra fram din kniv och fightas med björnen.",
        question: "Tänker du fightas eller springa?",
        firstChoice: "fightas",
        secondChoice: "springa",
        index: {
            first: 14,
            second: 15 // ÄNDRA
        }
    },

    { //Index 13 Drick inte vatten
        message: "Du går vidare men till slut orkar inte din kropp mer. Det har gått alldeles för många dagar utan vatten, och du dör av vätskebrist.",
        question: "Vill du spela igen?",
        firstChoice: "ja",
        secondChoice: "nej",
        index: {
            first: 0,
            second: 5
        }
    },

    { //Index 14 Fightas med björnen
        message: "Du drar din kniv, gör dig så stor som möjligt, vrålar tillbaka mot björnen och slänger dig mot den. Du lyckas få in några hugg och tillslut ger björnen upp och flyr därifrån. Du sätter dig ner på marken och andas ut. Plötsligt hör du en helikopter på avstånd! Du rusar bort till en mer öppen plats för att synas, hoppar, vinkar och skriker.",
        question: "Grattis! Du överlevde skogen och har blivit räddad! Vill du spela igen?",
        firstChoice: "ja",
        secondChoice: "nej",
        index: {
            first: 0,
            second: 5
        }
    },

    { //Index 15 Springa från björnen
        message: "Du vänder dig om och börjar springa allt vad du kan. Du hör björnen knappa in på dig, hur den flåsandes och frustande kommer närmare. Du känner hur björnens labb träffar dig i ryggen och du faller mot marken. Björnen sliter dig i stycken.",
        question: "Vill du spela igen?",
        firstChoice: "ja",
        secondChoice: "nej",
        index: {
            first: 0,
            second: 5
        }
    },
]