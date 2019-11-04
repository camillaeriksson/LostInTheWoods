/**
 * Starts at index 0 in array
 */
let index = 0;
getInfoAndQuestion();

window.onload = setup();

/**
 * Takes the parameters message and question from objects in array
 * and sends it to printMessage()
 */
function getInfoAndQuestion() {
    printMessage(gameState[index].message);
    printMessage(gameState[index].question);
    return;
}

/**
 * Adds message/question from array and aswer to list
 * @param {sting} message - Message/question/answer
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
 * @param {sting} answer - Input from user
 */
function checkAnswer(answer) {
    while (true) {

        if (index === 5) {
            getInfoAndQuestion();
            close();
            return;
        }
        else if (answer === gameState[index].firstChoice) {
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
            let wrongAnswer = `Du måste ange &quot;${gameState[index].firstChoice}&quot; eller 	&quot;${gameState[index].secondChoice}&quot;`;
            printMessage(wrongAnswer);
            return;
        }
    }
}
