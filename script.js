/**
 * Starts at index 0 in game state array
 */
let index = 0;
getInfoAndQuestion(gameState[index]);

setup();

/**
 * Takes the parameters message and question from objects in array
 * and sends it to printMessage()
 * @param {GameState} currentGameState Information about the current state of the game
 */
function getInfoAndQuestion(currentGameState) {
    printMessage(currentGameState.message);
    printMessage(currentGameState.question);
}

/**
 * Adds message/question from array and aswer to list
 * @param {String} message - Message/question/answer
 */
function printMessage(message) {
    let ulNode = document.querySelector("ul");
    let listNode = document.createElement('li');
    listNode.innerHTML = message;
    ulNode.appendChild(listNode);
}

/**
 * Applies keyup event on input field
 */
function setup() {
    document.querySelector('input').addEventListener("keyup", handleKeyUp);
}

/**
 * Handles keyup on enter and sends the input answer to printMessage()
 * @param {KeyboardEvent} event Built in event in Java Script
 */
function handleKeyUp(event) {
    if (event.key === "Enter") {
        let answer = event.target.value;
        answer = answer.toLowerCase();
        event.target.value = "";
        printMessage(answer);
        checkAnswer(answer);
    }
}

/**
 * Takes input from user and compares it to the attributes of the objects in the array
 * and goes to the next correct index in array
 * @param {String} answer - Input from user
 */
function checkAnswer(answer) {
    while (true) {

        if (index === 5) {
            getInfoAndQuestion(gameState[index]);
            close();
            return;
        }
        else if (answer === gameState[index].firstChoice) {
            index = gameState[index].index.first;
            getInfoAndQuestion(gameState[index]);
            return;
        }
        else if (answer === gameState[index].secondChoice) {
            index = gameState[index].index.second;
            getInfoAndQuestion(gameState[index]);
            return;
        }

        else {
            let wrongAnswer = `Du måste ange &quot;${gameState[index].firstChoice}&quot; eller 	&quot;${gameState[index].secondChoice}&quot;`;
            printMessage(wrongAnswer);
            return;
        }
    }
}
