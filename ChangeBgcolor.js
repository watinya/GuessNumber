const bgColor = [
    "#99b3ff",                  //藍
    "#ccb3ff",                  //紫
    "#b3ffb3",                  //綠
    "rgba(247, 187, 205, 1)",   //粉
    "rgba(255, 255, 179, 1)"    //黃
]

let recordColor = ["#FFFFFF"]
let now = 0;

window.addEventListener('keydown', function(e){  //對整個頁面監聽 
    let keyNum = e.key    //獲取被按下的鍵值
    console.log(recordColor + " " + now);
    
    switch(keyNum){
        case "a":
            document.body.style.backgroundColor = recordColor[now-1];
            now--;
            break;
        case "d":
            document.body.style.backgroundColor = recordColor[now+1];
            now++;
            break;
    }

    if(now < 0){
        now++;
        alert("已為第一個顏色");
    }else if(now >= recordColor.length){
        now--;
        alert("已為最後一個顏色");
    }
});

function changeBgcolor(){
    while(true){
        var randomNum = Math.floor(Math.random() * bgColor.length);
        if(recordColor[now] !== bgColor[randomNum]){
            document.body.style.backgroundColor = bgColor[randomNum];
            break;
        }
    }

    recordColor.push(bgColor[randomNum]);
    now++;
    console.log(recordColor + " " + now);

    if(now !== recordColor.length-1){
        recordColor.splice(now, recordColor.length-now-1);
        console.log("clear");
    }
}