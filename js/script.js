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
        var contenu = "<span class='blueJS'>class</span> <span class='greenJS'>Competences</span> {<br/><span class= 'tiret'>______</span><span class='blueJS'>constructor</span>(<span class='orangeJS'>skill</span>){<br/><span class= 'tiret'>____________</span><span class='blueJS'>this</span>.<span class='blueJS2'>skill</span> = {<br/><span class= 'tiret'>__________________</span><span class='blueJS2'>php:</span> <span class='orangeJS'>'40%'</span>,<br/><span class= 'tiret'>__________________</span><span class='blueJS2'>js:</span> <span class='orangeJS'>'50%'</span>,<br/><span class= 'tiret'>__________________</span><span class='blueJS2'>html:</span> <span class='orangeJS'>'85%'</span>,<br/><span class= 'tiret'>__________________</span><span class='blueJS2'>css:</span> <span class='orangeJS'>'85%'</span>,<br/><span class= 'tiret'>__________________</span><span class='blueJS2'>sass:</span> <span class='orangeJS'>'70%'</span>,<br/><span class= 'tiret'>__________________</span><span class='blueJS2'>twig:</span> <span class='orangeJS'>'90%'</span>,<br/><span class= 'tiret'>__________________</span><span class='blueJS2'>json:</span> <span class='orangeJS'>'80%'</span>,<br/><span class= 'tiret'>__________________</span><span class='blueJS2'>symfony:</span> <span class='orangeJS'>'40%'</span>,<br/><span class= 'tiret'>__________________</span><span class='blueJS2'>react:</span> <span class='orangeJS'>'15%'</span><br/><span class= 'tiret'>____________</span>};<br/><span class= 'tiret'>______</span>}<br/><br/><span class= 'tiret'>______</span><span class='blueJS2'>get</span> <span class='yellowLog'>skillsLevel</span>(){<br/><span class= 'tiret'>____________</span><span class='roseRend'>return</span> <span class='yellowLog'>renderLevel</span>() ;<br/><span class= 'tiret'>______</span>}<br/><br/><span class= 'tiret'>______</span><span class='yellowLog'>renderLevel</span>(){<br/><span class= 'tiret'>____________</span><span class='roseRend'>return</span> <span class='blueJS2'>this</span>.<span class='blueJS2'>skill</span>;<br/><span class='tiret'>______</span>}<br/> }<br/><br/><span class='blueJS'>const</span> <span class='blueJS2'>Valentin2018</span> = <span class='blueJS'>new</span> <span class='greenConsole'>Competences</span>(<span class='blueJS2'>skill</span>);<br/><br/><span class='greenConsole'>console</span>.<span class='yellowLog'>log</span>(<span class='blueJS2'>Valentin2018</span>.<span class='blueJS2'>skillsLevel</span>);";
        intervalAnim();
        ajaxRender(contenu);
        break;

        case 'Projects':
        case 'Project':
        case 'Projets':
        case 'Projet':
        var contenu = "{<br/>Projects.json :{<br/><span class= 'tiret'>______</span><span class='blueJS2'>Project #1</span> :{<br/><span class= 'tiret'>_________</span><span class='blueJS2'>'titre projet'</span>:<span class='orangeJS'>'Projet Hackathon'</span>,<br/><span class= 'tiret'>_________</span><span class='blueJS2'>'context'</span>:<span class='orangeJS'>'Projet réalisé pour un hackathon avec le réseau GES (ICAN)'</span>,<br/><span class= 'tiret'>_________</span><span class='blueJS2'>'tech'</span>:<span class='orangeJS'>'Laravel, TWIG, HTML, CSS, JS, Jquery'</span>,<br/><span class= 'tiret'>_________</span><span class='blueJS2'>'screen'</span>: <button class='btn'>CLICK HERE</button><br/><span class= 'tiret'>______</span>},<br/><span class= 'tiret'>______</span><span class='blueJS2'>Project #2</span> :{<br/><span class= 'tiret'>_________</span><span class='blueJS2'>'titre projet'</span>:<span class='orangeJS'>'Projet Fédération Française de Roller Sports'</span>,<br/><span class= 'tiret'>_________</span><span class='blueJS2'>'context'</span>:<span class='orangeJS'>'Projet de premier semestre de 3ème année à l'ICAN à Paris (75)</span>,<br/><span class= 'tiret'>_________</span><span class='blueJS2'>'tech'</span>:<span class='orangeJS'>'Symfony 4.0, TWIG, HTML, CSS/SASS, JS, Jquery, SQL'</span>,<br/><span class= 'tiret'>_________</span><span class='blueJS2'>'link'</span>: <a href='https://www.ffroller.valentin-leymonie.fr/'><button class='btn'>CLICK HERE</button></a><br/><span class= 'tiret'>______</span>},<br/><span class= 'tiret'>______</span><span class='blueJS2'>Project #3</span> :{<br/><span class= 'tiret'>_________</span><span class='blueJS2'>'titre projet'</span>:<span class='orangeJS'>'Projet Bot ICAN'</span>,<br/><span class= 'tiret'>_________</span><span class='blueJS2'>'context'</span>:<span class='orangeJS'>'Projet de second semestre de 3ème année à l'ICAN à Paris (75)</span>,<br/><span class= 'tiret'>_________</span><span class='blueJS2'><span class='blueJS2'>'tech'</span></span>:<span class='orangeJS'>'Symfony 4.0, ReactJS, TWIG, HTML, CSS/SASS, JS, Jquery'</span>,<br/><span class= 'tiret'>_________</span><span class='blueJS2'>'screen'</span>: <button class='btn'>CLICK HERE</button><br/><span class= 'tiret'>______</span>}<br/><span class= 'tiret'>___</span>}<br/>}";
        intervalAnim();
        ajaxRender(contenu);
        break;

        case 'Contact':
        case 'Contact me':
        case 'Find me':
        var contenu = "{<span class='roseTwig'>% if</span> work <span class='roseTwig'>== true OR</span> question <span class='roseTwig'>== true</span>  <span class='roseTwig'>%</span>}<br/><span class= 'tiret'>______</span>{<span class='roseTwig'>% set</span> valentinMail <span class='roseTwig'>=</span> valentin.leymonie.es@gmail.com <span class='roseTwig'>%</span>}<br/><span class= 'tiret'>_________</span>{{ valentinMail }}<br/>{<span class='roseTwig'>% elseif %</span>}<br/><span class= 'tiret'>______</span>{{ It will be a pleasure to read you ! }}<br/>{<span class='roseTwig'>% endif %</span>}";
        intervalAnim();
        ajaxRender(contenu);
        break;

        case 'About':
        case 'A propos':
        var contenu = "<span class= 'tiret'>______</span>- <span class='blueJS2'>echo</span> ('<span class='orangeJS'>Prochainement diplomé, actuellement en 3ème de licence Web Design à l'ICAN (Paris), je suis à la recherche d'une alternance dans le but de la préparation de mon Master Développement mobile & IoT à YNOV (Nanterre). Je suis à la recherche d'un poste dans le développement mobile ou en développeur Front-End.</span>');"
        intervalAnim();
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
            },
        }); 
    }

}