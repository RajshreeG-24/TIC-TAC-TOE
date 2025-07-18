let boxes=document.querySelectorAll(".box");
let newBtn=document.createElement("button");
let gm=document.querySelector(".game");
let msgContain=document.querySelector(".msgContainer");
let resetbtn=document.createElement("button");
resetbtn.innerText="RESET GAME";
let div=document.createElement("div");
gm.after(div);
div.style.display="flex";
div.style.justifyContent="center";
div.style.alignItems="center";
div.style.marginTop="80px";
resetbtn.style.color="#641B2E";
resetbtn.style.border="none";
resetbtn.style.cursor="pointer";
let msg=document.querySelector("#msg");
resetbtn.addEventListener("click",()=>
{
    boxes.forEach((box)=>
    {
        box.innerText="";
        box.style.backgroundColor="white";
        sybl="X";
    });
    msgContain.innerText="";
    enableBoxes();
});
newBtn.addEventListener("click",()=>
{
    boxes.forEach((box)=>
    {
        box.innerText="";
        box.style.backgroundColor="white";
        sybl="X";
    });
    msgContain.innerText="";
    enableBoxes();
});
let winnerPatterns = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal
    [2, 4, 6], // Diagonal
];
let sybl="X";
const disableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes=()=>
    {
        for(let box of boxes)
        {
            box.disabled=false;
        }
    }
const checkWinner=()=>
    {
        for (let pattern of winnerPatterns)
            {
                let pos1Val=boxes[pattern[0]].innerText;
                let pos2Val=boxes[pattern[1]].innerText;
                let pos3Val=boxes[pattern[2]].innerText;
                    if(pos1Val!==""  && pos1Val===pos2Val && pos2Val===pos3Val)
                    {
                        msg.innerText = "";
                        msg.innerText=` Congratulations ${pos1Val}!!! `;
                        disableBoxes();
                        resetbtn.style.display="none";
                        newBtn.innerText="New Game";
                        newBtn.style.color="#641B2E";
                        msgContain.append(newBtn);
                    
                    }  
                
            } 
    }
boxes.forEach((box)=>{
box.addEventListener("click", () => 
{
    if(box.innerText==="")
    {
        box.innerText=sybl;
        sybl==="X"?sybl="O":sybl="X";
        box.style.backgroundColor="#A53860";
        div.append(resetbtn);
        checkWinner();
    }
});
});
