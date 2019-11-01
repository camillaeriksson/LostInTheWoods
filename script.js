let index = 0;
getInfoAndQuestion();

const gameTextBox = document.querySelector("div")
    gameTextBox.scrollTop = gameTextBox.scrollHeight

window.onload = setup;


function getInfoAndQuestion() {
    printMessage(gameState[index].message);
    printMessage(gameState[index].question);
    return;
}


function printMessage(message) {
    let ulNode = document.querySelector("ul");
    let listNode = document.createElement('li');
    listNode.innerHTML = message;
    ulNode.appendChild(listNode);
}

function setup() {
    document.querySelector('input').addEventListener("keyup", handleKeyUp);
}

function handleKeyUp(event) {
    if (event.key === "Enter") {
        let answer = event.target.value;
        answer = answer.toLowerCase();
        event.target.value = "";
        printMessage(answer);
        checkAnswer(answer);
    }
}

function checkAnswer(answer) {
    while (true) {
        if (answer === gameState[index].firstChoice) {
            index = gameState[index].index.first;
            getInfoAndQuestion();
            return;
        }
        else if (answer === gameState[index].secondChoice) {
            index = gameState[index].index.second;
            getInfoAndQuestion();
            return;
        }

        else {
            let wrongAnswer = `Du måste ange ${gameState[index].firstChoice} eller ${gameState[index].secondChoice}`;
            printMessage(wrongAnswer);
            return;
        }
    }
}
