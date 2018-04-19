function openProject(){
    $('.project1').fadeIn(600);
}

function closeProject(){
    $('.project1').fadeOut(600);
}

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
    }, 400);
}

function resizeMenu(){
    var widthWindow = window.innerWidth;
    var headerParent = document.getElementById('headerResp');
    var headerChild = document.getElementById('headerResp-child');
    var containerContent = document.getElementById('containerContent');
    var skills = document.getElementById('skills');
    if (widthWindow < 600){
        headerChild.classList.add('col-2');
        headerParent.classList.add('col-2');
        containerContent.classList.add('col-10');
        headerParent.classList.remove('col-3');
        headerChild.classList.remove('col-3');
        containerContent.classList.remove('col-9');
    }else{
        headerParent.classList.add('col-3');
        headerChild.classList.add('col-3');
        containerContent.classList.add('col-9');
        headerParent.classList.remove('col-2');
        headerChild.classList.remove('col-2');
        containerContent.classList.remove('col-10');
    }
}

window.onresize = resizeMenu;

document.onkeyup=function(e){
    e = e || window.event;
    var code = e.keyCode || e.wihch;
    if(code == 13){
        document.getElementById("run").click();
    }
}

$( document ).ready(function() {
    resizeMenu();
}


