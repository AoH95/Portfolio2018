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
        var contenu = "class Competences {<br/><span class='tiret' style='color:blue'>______</span>constructor(skill){<br/><span class='tiret' style='color:blue'>____________</span>this.skill = {<br/><span class='tiret' style='color:blue'>__________________</span>'php' : 40%,<br/><span class='tiret' style='color:blue'>__________________</span>'js' : 50%,<br/><span class='tiret' style='color:blue'>__________________</span>'html' : 85%,<br/><span class='tiret' style='color:blue'>__________________</span>'css' : 85%,<br/><span class='tiret' style='color:blue'>__________________</span>'sass' : 70%,<br/><span class='tiret' style='color:blue'>__________________</span>'twig' : 90%,<br/><span class='tiret' style='color:blue'>__________________</span>'json' : 80%,<br/><span class='tiret' style='color:blue'>__________________</span>'symfony' : 40%,<br/><span class='tiret' style='color:blue'>__________________</span>'react' : 15%<br/><span class='tiret' style='color:blue'>____________</span>};<br/><span class='tiret' style='color:blue'>______</span>}<br/><br/><span class='tiret' style='color:blue'>______</span>get skillsLevel(){<br/><span class='tiret' style='color:blue'>____________</span>return renderLevel();<br/><span class='tiret' style='color:blue'>______</span>}<br/><br/><span class='tiret' style='color:blue'>______</span>renderLevel(){<br/><span class='tiret' style='color:blue'>____________</span>return this.skill;<br/><span class='tiret' style='color:blue'>______</span>}<br/> }<br/><br/>const Valentin2018 = new Competences(skill);<br/><br/>console.log(Valentin2018.skillsLevel);";
        ajaxRender(contenu);
        break;

        case 'Projects':
        case 'Project':
        case 'Projets':
        case 'Projet':
        var contenu = "Projects.json<br/><br/>{<br/>'titre projet':'Projet Fédération Française de Roller Sports',<br/> 'context':'Projet de premier semestre de 3ème année à l'ICAN à Paris (75),<br/> 'tech':'Symfony 4.0, TWIG, HTML, CSS/SASS, JS, Jquery, SQL',<br/>'screen':' '<br/>}";
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

elem = document.querySelectorAll("php");
console.log(elem);