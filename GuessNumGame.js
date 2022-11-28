let guessCount = 1;
let randomNum = Math.floor(Math.random() * 100) + 1;

const guessSubmit = document.getElementById("guessSubmit");
const guessField = document.getElementById("guessField");
const restart = document.getElementById("restart");
const lastResult = document.getElementById("lastResult");
const table = document.getElementById("resultTable").getElementsByTagName('tbody')[0];

console.log(randomNum);

function checkGuess(){
    var userGuess = Number(guessField.value);   //Number轉成數字  .value獲取值
    
    //console.log(randomNum);

    //判斷輸入是否為數字
    if(isNaN(userGuess) || userGuess == 0){
        alert("請輸入數字");
        guessField.value = '';
        return;
    }

    if(userGuess === randomNum){
        addTableRow(userGuess, "You got it!");
        lastResult.textContent = '恭喜答對！';
        lastResult.style.color = 'green';
        gameOver();
    } else if(guessCount === 10){
        addTableRow(userGuess, "Game Over");
        lastResult.textContent = 'Game Over';
        gameOver();
    } else{
        lastResult.textContent = '猜錯了~';
        lastResult.style.color = 'red';
        if(userGuess < randomNum){
            addTableRow(userGuess, "Too Small");
        } else if(userGuess > randomNum) {
            addTableRow(userGuess, "Too Big");
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();     //自動點選
}

function gameOver(){
    restart.style.display = "block";    //css的style 顯示按鈕
    guessField.disabled = true;         //輸入框不可用
    guessSubmit.disabled = true;        //按鈕不可用
}

function newGame(){
    table.innerHTML = '';

    guessCount = 1;
    randomNum = Math.floor(Math.random() * 100) + 1;
    restart.style.display = "none";     //css的style 按鈕隱藏
    guessField.disabled = false;        //輸入框可用
    guessSubmit.disabled = false;       //按鈕可用
    //result.textContent = "";
    //LowOrHigh.textContent = "";
    lastResult.textContent = "";
}

function addTableRow(userGuess, lowOrHigh){
    let row = table.insertRow(0);
    let round = row.insertCell(0);
    let guessNum = row.insertCell(1);
    let result = row.insertCell(2);

    round.innerHTML = guessCount;
    guessNum.innerHTML = userGuess;
    result.innerHTML = lowOrHigh;
}