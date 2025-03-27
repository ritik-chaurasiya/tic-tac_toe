let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;// PlayerX, PlayerO
console.log("-----------------");
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Ritik");
        if (turnO) { // Turn of O then print innertext
            box.innerText = "O";
            turnO = false;
        } else { // Turn of X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = "true";// do bar btn taugh nahi hogi
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congraturations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

let checkWinner = () => {
    for (let pattern of winPatterns) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                showWinner(position1);
            }
                
        }
    }
};
newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

