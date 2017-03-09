var b1 = document.querySelector("#p1");
var b2 = document.querySelector("#p2");
var p1 = document.querySelector("#p1display");
var p2 = document.querySelector("#p2display");
var p1score = 0;
var p2score = 0;
var winScore = 5;
var gameOver = false;
var reset = document.querySelector("#reset");
var number = document.querySelector("input");
var para = document.querySelector("#inputscore");


b1.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
    if(p1score === winScore){
        p1.classList.add("winner");    
        gameOver = true;
    }
    p1.textContent = p1score; 
    }
});

b2.addEventListener("click", function(){
    if(!gameOver){
        p2score++
    if(p2score === winScore){
        p2.classList.add("winner");
        gameOver = true;
    }
    p2.textContent = p2score; 
    }
});

reset.addEventListener("click", function(){
    p1score = 0;
    p2score = 0;
    p1.textContent = p1score;
    p2.textContent = p2score;
    gameOver = false;
    p1.classList.remove("winner");
    p2.classList.remove("winner");
    number.value = null;
    para.textContent = null;
});

function reset(){
    p1score = 0;
    p2score = 0;
    p1.textContent = p1score;
    p2.textContent = p2score;
    gameOver = false;
    p1.classList.remove("winner");
    p2.classList.remove("winner");
}

number.addEventListener("change",function(){
    para.textContent = number.value;
    winScore = Number(number.value);
    reset();
});



