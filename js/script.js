var parent = document.querySelector('.header-parent');
var child = document.querySelector('.header-child');
var parentW = parent.offsetWidth;
/*
window.addEventListener("resize", resizeHeaderChild);

function resizeHeaderChild(){
    var parentW = parent.offsetWidth;
    child.style.width = parentW+'px';
    console.log(parentW);
}*/

function consoleLog(){
    var mot = $('.inpt').val();
    String(mot);
    res = mot.charAt(0).toUpperCase() + mot.substr(1);
    console.log(res);

    switch (res){
        case 'Skills':
        case 'Skill':
        case 'Compétences':
        case 'Compétence':
        case 'Competences':
        case 'Competence':
        var contenu = "prout";
        ajaxRender(contenu);
        break;

        case 'Projects':
        case 'Project':
        case 'Projets':
        case 'Projet':
        var contenu = "prout1";
        ajaxRender(contenu);
        break;

        case 'Contact':
        case 'Contact me':
        case 'Find me':
        var contenu = "prout2";
        ajaxRender(contenu);
        break;

        case 'About':
        case 'A propos':
        var contenu = "prout3";
        ajaxRender(contenu);
        break;

    }
    //console.log(mot);
    function ajaxRender(contenu){
        var rq = $.ajax({

            url: 'index.html',
            type: 'GET',
            data: res,
            dataType : 'html',
    
            success : function(data){
                $(".render-terminal").html(contenu);
            },
            error : function(){
                console.log("erreur");
            }
        }); 
    }

}
