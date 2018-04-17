function getId(element){
 var keyword = element;
 console.log(keyword);
    document.getElementById("inputText").value = keyword;
    
}

function loadingDot(){
    var terminal = document.getElementById("terminal");
    var text = document.createTextNode(".");
    terminal.appendChild(text);
    
}

function intervalAnim(){
    var countLoop = 0;
    var interval = setInterval(function(){
        countLoop += 1;
        loadingDot();
        if(countLoop >= 3){
            clearInterval(interval);
        }
    }, 200);
}

document.onkeyup=function(e){
    e = e || window.event;
    var code = e.keyCode || e.wihch;
    if(code == 13){
        document.getElementById("run").click();
    }
}

