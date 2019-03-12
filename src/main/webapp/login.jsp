<!DOCTYPE html>

<html  dir="ltr" lang="es" xml:lang="es">
<head>
    <title>Bienvenido a sistema de gestores sociales</title>
    <link rel="shortcut icon" href="https://virtual.usergioarboleda.edu.co/theme/image.php/sergiov/theme/1551808202/favicon" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="moodle, ¡Bienvenido a Sergio Virtual!: Entrar al sitio" />
<link rel="stylesheet" type="text/css" href="https://virtual.usergioarboleda.edu.co/theme/yui_combo.php?rollup/3.17.2/yui-moodlesimple-min.css" /><script id="firstthemesheet" type="text/css">/** Required in order to fix style inclusion problems in IE with YUI **/</script><link rel="stylesheet" type="text/css" href="https://virtual.usergioarboleda.edu.co/theme/styles.php/sergiov/1551808202/all" />



<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">

<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>

<meta name="google-site-verification" content="ojhDPxhbsrGiBMDcV7JGL0tqwkO_y5GVdLf1srePGes" /><meta name="robots" content="noindex" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
	
	
	
	
	  <%

        HttpSession misession = request.getSession(true);

        if (misession.getAttribute("usuario") != null) {
            response.sendRedirect("inicio.jsp");
        }

    %>

<body  id="page-login-index" class="format-site  path-login safari dir-ltr lang-es yui-skin-sam yui3-skin-sam virtual-usergioarboleda-edu-co pagelayout-login course-1 context-2 notloggedin ">

<div id="page-wrapper">
<div id="bannerlogin"><img src="https://virtual.usergioarboleda.edu.co/theme/sergiov/pix/logo_univ_sergioarboleda_login.png" alt=""/></div>
    <div>
    <a class="sr-only sr-only-focusable" href="#maincontent">Saltar a contenido principal</a>
</div><script type="text/javascript" src="https://virtual.usergioarboleda.edu.co/theme/yui_combo.php?rollup/3.17.2/yui-moodlesimple-min.js&amp;rollup/1551808202/mcore-min.js"></script><script type="text/javascript" src="https://virtual.usergioarboleda.edu.co/lib/javascript.php/1551808202/lib/javascript-static.js"></script>
<script type="text/javascript">
//<![CDATA[
document.body.className += ' jsenabled';
//]]>
</script>



    <div id="page" class="container-fluid">
        <div id="page-content" class="row">
            <div id="region-main-box">
                <section id="region-main" class="col-xs-12">
                    <span class="notifications" id="user-notifications"></span>
                    <div role="main"><span id="maincontent"></span><div class="m-y-3 hidden-sm-down"></div>
<div class="row">
<div class="col-xl-6 push-xl-3 m-2-md col-sm-8 push-sm-2">
<div class="card">
    <div class="card-block">
        <div class="card-title text-xs-center">
                <h2>�Bienvenido sistema de gestores sociales!</h2>
            <hr>
        </div>



        <div class="row">
            <div class="col-md-4 push-md-1">
                 <form action="Login" method="POST">
            <fieldset>
                <div>
                    <input placeholder="Usuario" name="usuario" type="text" autofocus required>
                </div>
                <div>
                    <input placeholder="Contrase�a" name="clave" type="password" required>
                </div>
                <input type="submit" value="Iniciar Sesi�n">
            </fieldset>
        </form>
            </div>

            <div class="col-md-4 push-md-3">
              

                <div class="m-t-1">
                   
                   
                </div>

            </div>
        </div>
    </div>
</div>
</div>
</div></div>
                    
                </section>
            </div>
        </div>
    </div>
</div>
<footer id="page-footer" class="p-y-1 bg-inverse">

<div id="footer-details">ADMINISTRADOR DE PROYECTOS<span id="contactus"><a href="#soporte"><img src="https://virtual.usergioarboleda.edu.co/theme/sergiov/pix/soporte.png" alt="Soporte t&eacute;cnico"/></a>
<a href="#telefono"><img src="https://virtual.usergioarboleda.edu.co/theme/sergiov/pix/telefono.png" alt="Soporte t&eacute;cnico" /></a></span></div>
        
        
        <script type="text/javascript">
//<![CDATA[
var require = {
    baseUrl : 'https://virtual.usergioarboleda.edu.co/lib/requirejs.php/1551808202/',
    // We only support AMD modules with an explicit define() statement.
    enforceDefine: true,
    skipDataMain: true,
    waitSeconds : 0,

    paths: {
        jquery: 'https://virtual.usergioarboleda.edu.co/lib/javascript.php/1551808202/lib/jquery/jquery-3.1.0.min',
        jqueryui: 'https://virtual.usergioarboleda.edu.co/lib/javascript.php/1551808202/lib/jquery/ui-1.12.1/jquery-ui.min',
        jqueryprivate: 'https://virtual.usergioarboleda.edu.co/lib/javascript.php/1551808202/lib/requirejs/jquery-private'
    },

    // Custom jquery config map.
    map: {
      // '*' means all modules will get 'jqueryprivate'
      // for their 'jquery' dependency.
      '*': { jquery: 'jqueryprivate' },

      // 'jquery-private' wants the real jQuery module
      // though. If this line was not here, there would
      // be an unresolvable cyclic dependency.
      jqueryprivate: { jquery: 'jquery' }
    }
};

//]]>
</script>
<script type="text/javascript" src="https://virtual.usergioarboleda.edu.co/lib/javascript.php/1551808202/lib/requirejs/require.min.js"></script>
<script type="text/javascript">
//<![CDATA[
require(['core/first'], function() {
;
require(["media_videojs/loader"], function(loader) {
    loader.setUp(function(videojs) {
        videojs.options.flash.swf = "http://virtual.usergioarboleda.edu.co/media/player/videojs/videojs/video-js.swf";
videojs.addLanguage("es",{
 "Play": "Reproducción",
 "Pause": "Pausa",
 "Current Time": "Tiempo reproducido",
 "Duration Time": "Duración total",
 "Remaining Time": "Tiempo restante",
 "Stream Type": "Tipo de secuencia",
 "LIVE": "DIRECTO",
 "Loaded": "Cargado",
 "Progress": "Progreso",
 "Fullscreen": "Pantalla completa",
 "Non-Fullscreen": "Pantalla no completa",
 "Mute": "Silenciar",
 "Unmute": "No silenciado",
 "Playback Rate": "Velocidad de reproducción",
 "Subtitles": "Subtítulos",
 "subtitles off": "Subtítulos desactivados",
 "Captions": "Subtítulos especiales",
 "captions off": "Subtítulos especiales desactivados",
 "Chapters": "Capítulos",
 "You aborted the media playback": "Ha interrumpido la reproducción del vídeo.",
 "A network error caused the media download to fail part-way.": "Un error de red ha interrumpido la descarga del vídeo.",
 "The media could not be loaded, either because the server or network failed or because the format is not supported.": "No se ha podido cargar el vídeo debido a un fallo de red o del servidor o porque el formato es incompatible.",
 "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "La reproducción de vídeo se ha interrumpido por un problema de corrupción de datos o porque el vídeo precisa funciones que su navegador no ofrece.",
 "No compatible source was found for this media.": "No se ha encontrado ninguna fuente compatible con este vídeo."
});

    });
});;

require(['theme_sergiov/loader']);
;

    require(['jquery', 'core/yui'], function($, Y) {
    })
;
require(["core/notification"], function(amd) { amd.init(2, []); });;
require(["core/log"], function(amd) { amd.setConfig({"level":"warn"}); });
});
//]]>
</script>
<script type="text/javascript">
//<![CDATA[
M.str = {"moodle":{"lastmodified":"\u00daltima modificaci\u00f3n","name":"Nombre","error":"Error","info":"Informaci\u00f3n","yes":"S\u00ed","no":"No","ok":"OK","morehelp":"M\u00e1s ayuda","loadinghelp":"Cargando...","cancel":"Cancelar","confirm":"Confirmar","areyousure":"\u00bfEst\u00e0 seguro?","closebuttontitle":"Cerrar","unknownerror":"Error desconocido"},"repository":{"type":"Tipo","size":"Tama\u00f1o","invalidjson":"Cadena JSON no v\u00e1lida","nofilesattached":"No se han adjuntado archivos","filepicker":"Selector de archivos","logout":"Salir","nofilesavailable":"No hay archivos disponibles","norepositoriesavailable":"Lo sentimos, ninguno de sus repositorios actuales puede devolver archivos en el formato solicitado.","fileexistsdialogheader":"El archivo existe","fileexistsdialog_editor":"Un archivo con el mismo nombre ya se ha adjuntado al texto que est\u00e1 editando.","fileexistsdialog_filemanager":"Un archivo con ese nombre ya ha sido adjuntado","renameto":"Cambiar el nombre a \"{$a}\"","referencesexist":"Existen {$a} archivos de alias\/atajos que emplean este archivo como su or\u00edgen","select":"Seleccionar"},"admin":{"confirmdeletecomments":"Est\u00e1 a punto de eliminar comentarios, \u00bfest\u00e1 seguro?","confirmation":"Confirmaci\u00f3n"}};
//]]>
</script>
<script type="text/javascript">
//<![CDATA[
(function() {setTimeout("fix_column_widths()", 20);
Y.use("moodle-filter_glossary-autolinker",function() {M.filter_glossary.init_filter_autolinking({"courseid":0});
});
Y.use("moodle-filter_mathjaxloader-loader",function() {M.filter_mathjaxloader.configure({"mathjaxconfig":"\n\nMathJax.Hub.Config({\n    config: [\"Accessible.js\", \"Safe.js\"],\n    errorSettings: { message: [\"!\"] },\n    skipStartupTypeset: true,\n    messageStyle: \"none\"\n});\n","lang":"es"});
});
M.util.help_popups.setup(Y);
Y.use("moodle-core-popuphelp",function() {M.core.init_popuphelp();
});
 M.util.js_pending('random5c7ed6e84ba9a2'); Y.on('domready', function() { M.util.js_complete("init");  M.util.js_complete('random5c7ed6e84ba9a2'); });
})();
//]]>
</script>


</footer>

<div id="soporte" class="modalDialogbottom">
        <div>
                <a href="#close" title="Cerrar ventana" class="mclose">X</a>
                <h2 class="titulo">BIENVENIDO AL ADMINISTRADOR DE PROYECTOS</h2>
   <hr>
                
                <h5 class="titulo2">&iquest;QU&Eacute; HAGO SI NO CONOZCO MI USUARIO?</h5>
                                <p> Si no conoce se usuario <a href="http://sergionet.usergioarboleda.edu.co/egroupware/usuario.php" target="_blank">HAGA CLIC AQU&Iacute;</a> y siga las instrucciones de la ventana emergente.</p>
                
<h5 class="titulo2">&iquest;C&Oacute;MO RESTABLEZCO MI CLAVE?</h5>
                                <p> Recuerde que su contrase&ntilde;a es su n&uacute;mero de documento de identidad. En caso de que lo haya cambiado y no lo recuerde, <a href="http://sergionet.usa.edu.co/egroupware/cambiarPassword.php" target="_blank">HAGA CLIC AQU&Iacute;</a> y siga las instrucciones de la ventana emergente. </p>
        </div>
</div>

<div id="telefono" class="modalDialogbottom">
        <div>
                <a href="#close" title="Cerrar ventana" class="mclose">X</a>
                <h2>CONTACTO</h2>
   <hr>
                <p><img src="https://virtual.usergioarboleda.edu.co/theme/sergiov/pix/uphone.png" alt=" "/> Tel 33333333.</p>
                <p><img src="https://virtual.usergioarboleda.edu.co/theme/sergiov/pix/mailto.png" alt=" "/> <a href="mailto:tecnologia.educativa@usa.edu.co">renan.arias@correo.usa.edu.co</a>.</p>
        </div>
</div>

</body>
</html>