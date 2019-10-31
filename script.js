
// function game(gameState) {
//     let index = 0;
//     while (true) {
//         if (gameState[index].gameOver === true) {
//             alert("Game Over")
//             return;
//         }
//         alert(gameState[index].message);
//         while (true) {
//         let answer = prompt(gameState[index].question);
//         if (answer === null) {
//             return;
//         }
//         answer = answer.toLowerCase();
//         if (answer === gameState[index].firstChoice) {
//             index = gameState[index].index.first;
//             break;
//         }
//         else if (answer === gameState[index].secondChoice) {
//             index = gameState[index].index.second;
//             break;
//         }
//         else {
//             alert(`Du måste ange ${gameState[index].firstChoice} eller ${gameState[index].secondChoice}`)
//         }
//     }
// }
// }
// game(gameState);

let index = 0

printInfo()
printQuestion()

function printInfo() {
    let info = (gameState[index].message)
    printMessage(info)
}

function printQuestion() {
    let question = (gameState[index].question)
    printMessage(question)
}

function checkAnswer(answer) {
    if (answer === gameState[index].firstChoice) {
        index = gameState[index].index.first;

    }
    else if (answer === gameState[index].secondChoice) {
        index = gameState[index].index.second;
    }

    else {
            let wrongAnswer = `Du måste ange ${gameState[index].firstChoice} eller ${gameState[index].secondChoice}`;
            printMessage(wrongAnswer);
        }
        return
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
            const answer = event.target.value;
            event.target.value = "";
            checkAnswer(answer);
            printMessage(answer);
        }

    }

    window.onload = setup