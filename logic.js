let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let boxes = document.querySelectorAll('.box');
let turn0 = true;
let isWon = false;
let resultBox = document.getElementById('result');
let messageBox = document.querySelector('.won_msg');
let playAgainButton = document.querySelector('.btn')

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.innerHTML !== "O" && box.innerHTML !== "X") {
      console.log("box was clicked");
      if (turn0) {
        box.innerHTML = "O";
        turn0 = false;
      } else {
        box.innerHTML = "X";
        turn0 = true;
      }
      checkWinner();
    }
  });
});

const checkWinner = () => {
  for (let pattern of winningCombinations) {
    let pos1val = boxes[pattern[0]].innerHTML;
    let pos2val = boxes[pattern[1]].innerHTML;
    let pos3val = boxes[pattern[2]].innerHTML;
    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        isWon = true;
        resultBox.style.visibility = "visible";
        messageBox.textContent = pos1val + " Won the match";
        playAgainButton.style.display = "block";
        break;
      }
    }
  }

  if (!isWon) {
    let allBoxesFilled = Array.from(boxes).every(box => box.innerHTML === "X" || box.innerHTML === "O");
    if (allBoxesFilled) {
      resultBox.style.visibility = "visible";
      messageBox.textContent = "Draw!";
      playAgainButton.style.display = "block";
    }
  }
};




playAgainButton.addEventListener("click",()=>{
  console.log("gandd me bhass ho jaega")
  location.reload();
})
