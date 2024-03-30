let turn=1;
let win= -1;
let clickcounter=0;
let matrix=[
    [-1, -1, -1],                 
    [-1, -1, -1], 
    [-1, -1, -1]
]
function display(elem,row,cols)
{
    if(elem.innerHTML!="")return;
    if(win!= -1)return;
    clickcounter++;
    matrix[row][cols]=turn;
if(turn==1)
{
    elem.innerHTML="X";
    document.getElementById("messagesection").innerHTML="player two turn";
turn=2;
}
else if(turn==2)
{
    elem.innerHTML="O";
    document.getElementById("messagesection").innerHTML="player one turn";
    turn=1;
}
for(var i=0; i<3; i++)
{
    //row check
    if(matrix[i][0]==matrix[i][1]&& matrix[i][1]==matrix[i][2])win=matrix[i][0];
    //cols check
    if(matrix[0][i]==matrix[1][i] && matrix[1][i]==matrix[2][i])win=matrix[0][i];
}
//diagonal check
if(matrix[0][0]==matrix[1][1] && matrix[1][1]==matrix[2][2])win=matrix[1][1];
if(matrix[0][2]==matrix[1][1] && matrix[1][1]==matrix[2][0])win=matrix[1][1];

if(win!= -1)
{
    document.getElementById("messagesection").innerHTML="player  "+win+"won the game";

}
if(clickcounter==9 && win==-1){
    document.getElementById("messagesection").innerHTML="Board has been drawn";
}
let resetButton=document.getElementById("resetBtn");
resetButton.addEventListener("click",function(){
        document.getElementById("myform").reset();
});
}