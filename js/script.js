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
        var contenu = "{<br/>Projects.json :{<br/><span class='tiret' style='color:blue'>______</span>Project #1 :{<br/><span class='tiret' style='color:blue'>_________</span>'titre projet':'Projet Hackathon',<br/><span class='tiret' style='color:blue'>_________</span>'context':'Projet réalisé pour un hackathon avec le réseau GES (ICAN),<br/><span class='tiret' style='color:blue'>_________</span>'tech':'Laravel, TWIG, HTML, CSS, JS, Jquery',<br/><span class='tiret' style='color:blue'>_________</span>'screen': <button>CLICK HERE</button><br/><span class='tiret' style='color:blue'>______</span>},<br/><span class='tiret' style='color:blue'>______</span>Project #2 :{<br/><span class='tiret' style='color:blue'>_________</span>'titre projet':'Projet Fédération Française de Roller Sports',<br/><span class='tiret' style='color:blue'>_________</span>'context':'Projet de premier semestre de 3ème année à l'ICAN à Paris (75),<br/><span class='tiret' style='color:blue'>_________</span>'tech':'Symfony 4.0, TWIG, HTML, CSS/SASS, JS, Jquery, SQL',<br/><span class='tiret' style='color:blue'>_________</span>'link': <a href='https://www.ffroller.valentin-leymonie.fr/'>CLICK HERE</a><br/><span class='tiret' style='color:blue'>______</span>},<br/><span class='tiret' style='color:blue'>______</span>Project #3 :{<br/><span class='tiret' style='color:blue'>_________</span>'titre projet':'Projet Bot ICAN',<br/><span class='tiret' style='color:blue'>_________</span>'context':'Projet de second semestre de 3ème année à l'ICAN à Paris (75),<br/><span class='tiret' style='color:blue'>_________</span>'tech':'Symfony 4.0, ReactJS, TWIG, HTML, CSS/SASS, JS, Jquery',<br/><span class='tiret' style='color:blue'>_________</span>'screen': <button>CLICK HERE</button><br/><span class='tiret' style='color:blue'>______</span>}<br/><span class='tiret' style='color:blue'>___</span>}<br/>}";
        ajaxRender(contenu);
        break;

        case 'Contact':
        case 'Contact me':
        case 'Find me':
        var contenu = "{% if work == true OR question == true  %}<br/><span class='tiret' style='color:blue'>______</span>{% set valentinPhone = 06 17 55 77 52 %}<br/><span class='tiret' style='color:blue'>_________</span>{{ valentinPhone }}<br/><span class='tiret' style='color:blue'>______</span>{% set valentinMail = valentin.leymonie.es@gmail.com %}<br/><span class='tiret' style='color:blue'>_________</span>{{ valentinMail }}<br/>{% elseif %}<br/><span class='tiret' style='color:blue'>______</span>{{ It's will be a pleasure to read you ! }}<br/>{% endif %}";
        ajaxRender(contenu);
        break;

        case 'About':
        case 'A propos':
        var contenu = "<span class='tiret' style='color:blue'>______</span>- echo ('Prochainement diplomé, actuellement en 3ème de licence Web Design à l'ICAN (Paris), je suis à la recherche d'une alternance dans le but de la préparation de mon Master Développement mobile & IoT à YNOV (Nanterre). Je suis à la recherche d'un poste dans le développement mobile ou en développeur Front-End.');"
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

