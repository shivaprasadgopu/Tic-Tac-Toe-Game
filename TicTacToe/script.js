let Boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;//playerX,playerO

//win patterns
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

//for reset button
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};


//assigning the which player plays first
Boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {   //playerO
            box.innerText = "O";
            turnO = false;

        } else {
            box.innerText = "X";  //playerX
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

//function for disable the button
const disabledBoxes=()=>{
    for ( let box of Boxes){
        box.disabled=true;
    }
};
// function for enable the boxes
const enableBoxes=()=>{
    for ( let box of Boxes){
        box.disabled=true;
        box.innerText="";
    }
};
//Showing the winner
const showWinner=(Winner)=>{
msg.innerText=`Congartulations,Winner is ${Winner}`;
msgcontainer.classList.remove("hide");
disabledBoxes();
};
//checking the OOO and XXX
const checkWinner = () => {
    for (let pattern of winpatterns) {
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(Boxes[pattern[0]].innerText, Boxes[pattern[1]].innerText, Boxes[pattern[2]].innerText);
    let pos1val=Boxes[pattern[0]].innerText;
    let pos2val=Boxes[pattern[1]].innerText;
    let pos3val=Boxes[pattern[2]].innerText;
    //checking the winner
    if(pos1val !="" && pos2val !="" && pos3val!=""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("Winner",pos1val);

            showWinner(pos1val);
        };
    }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
