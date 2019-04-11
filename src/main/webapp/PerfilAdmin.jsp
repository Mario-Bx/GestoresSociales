<html>
    <head>
        <title>Proyecyo</title>
        <meta charset="utf-8">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
        <script src="js/funcion.js"></script>
        <script src="js/PintarAdmin.js"></script>
        <script src="js/PintarGestor.js"></script>
        <script src="js/PintaTarjetas.js"></script>
        <script src="js/TarjetaConvocatoria.js"></script>   

        <!-- w3schools.com -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <!-- Tarjetas -->
        <link href='css/bootstrap.css' rel='stylesheet' />
        <link href='css/rotating-card.css' rel='stylesheet' />
        <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />

        <link rel='stylesheet' href='http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css'>
        <link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'>
        <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        <link rel="stylesheet" href="css/TarjetaPerfile.css">
        <script  src="js/TarjetaPerfile.js"></script>

        <script>
            $(document).ready(listaConvocatoriaLista());
            $(document).ready(listaAdminLista(<%out.print(request.getAttribute("id"));%>));
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    </head>

   <body>

        <nav class="w3-sidebar w3-indigo w3-collapse w3-top w3-large w3-padding" style="z-index:3;width:300px;font-weight:bold;" id="mySidebar">
            <br>
            <a href="javascript:void(0)" onclick="w3_close()" class="w3-button w3-hide-large w3-display-topleft" style="width:100%;font-size:22px">Close Menu</a>
            <div class="w3-container">
            </div>
            <div class="w3-white w3-text-grey w3-card-4">
                <div class="w3-display-container">
                    <center>
                        <img src="https://image.flaticon.com/icons/svg/149/149071.svg" style="width:40%" alt="Avatar">
                    </center>
                </div>
                <div id="Administradorlista" class="w3-container">

                </div>
            </div><br>
        </nav>



        <!-- Top menu on small screens -->
        <header class="w3-container w3-top w3-hide-large w3-indigo w3-xlarge w3-padding">
            <a href="javascript:void(0)" class="w3-button w3-indigo w3-margin-right" onclick="w3_open()">=</a>
            <div class="w3-bar w3-black">
                <button class="w3-bar-item w3-button tablink w3-indigo" onclick="openCity(event, 'Estudiantes', listaEstudiLista())">Gestores</button>
                <button class="w3-bar-item w3-button tablink" onclick="openCity(event, 'BuscarConvocatoria', listaConvocatoriaLista())">BuscarConvocatoria</button>
                <button class="w3-bar-item w3-button tablink" onclick="openCity(event, 'Sanciones', listaSancionesLista())">Sanciones</button>
            </div>
        </header>

        <!-- Overlay effect when opening sidebar on small screens -->
        <div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

        <!-- !PAGE CONTENT! -->
        <div class="w3-main" style="margin-left:340px;margin-right:40px">
            <br />
            <div class="w3-bar w3-black">
                <button class="w3-bar-item w3-button tablink w3-indigo" onclick="openCity(event, 'Estudiantes', listaEstudiLista())">Gestores</button>
                <button class="w3-bar-item w3-button tablink" onclick="openCity(event, 'BuscarConvocatoria', listaConvocatoriaLista())">BuscarConvocatoria</button>
                <button class="w3-bar-item w3-button tablink" onclick="openCity(event, 'Sanciones', listaSancionesLista())">Sanciones</button>
            </div>
            <br />



            <!-- Header -->
            <div class="w3-container" style="margin-top:80px" id="showcase">



                <!-- Right Column -->

                <div id="Estudiantes" class="w3-container w3-card w3-white w3-margin-bottom city">
                    <h1 class="w3-xxxlarge w3-text-indigo"><b>Estudiantes.</b></h1>
                    <form class="example" action="/action_page.php">
                        <input type="text" placeholder="Buscar Gestores.." name="search">

                        <button type="submit" ><i class="fa fa-search"></i></button>

                    </form>
                    <button class="w3-bar-item w3-button tablink w3-indigo" onclick="openCity(event, 'CrearGestores', CrearEstudiLista)">Crear Gestores</button>


                    <hr style="width:50px;border:5px solid blue" class="w3-round">

                    <div class="w3-responsive">
                        <br>
                        <div id ="Tarjetas" class="container">

                        </div>

                    </div>

                </div>

                <div id="BuscarConvocatoria" class="w3-container w3-card w3-white w3-margin-bottom city" style="display:none">
                    <h1 class="w3-xxxlarge w3-text-indigo"><b>Buscar Convocatorias.</b></h1>
                    <hr style="width:50px;border:5px solid blue" class="w3-round">
                    <div class="w3-responsive">
                        <br>
                        <div  id="Convocatoriaslista" class="w3-container">

                        </div>	
                        <br>
                    </div>
                </div>

                <div id="Sanciones" class="w3-container w3-card w3-white w3-margin-bottom city" style="display:none">
                    <h1 class="w3-xxxlarge w3-text-indigo"><b>Sanciones.</b></h1>
                    <form class="example" action="/action_page.php">
                        <input type="text" placeholder="Buscar Sanciones..." name="search">

                        <button type="submit"><i class="fa fa-search"></i></button>

                    </form>
                    <button class="w3-bar-item w3-button tablink w3-indigo" onclick="openCity(event, 'CrearSanciones', CrearEstudiLista)">Crear Sanciones</button>

                    <hr style="width:50px;border:5px solid blue" class="w3-round">
                    <div class="w3-responsive">
                        <br>
                        <div id="SancionesLista" class="w3-container">

                        </div>	
                        <br>
                    </div>
                </div>


                <!-- Modal for full size images on click-->
                <div id="modal01" class="w3-modal w3-black" style="padding-top:0" onclick="this.style.display = 'none'">
                    <span class="w3-button w3-black w3-xxlarge w3-display-topright">�</span>
                    <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
                        <img id="img01" class="w3-image">
                        <p id="caption"></p>
                    </div>
                </div>

                <!-- End page content -->
            </div>

            <script>
                // Script to open and close sidebar
                function w3_open() {
                    document.getElementById("mySidebar").style.display = "block";
                    document.getElementById("myOverlay").style.display = "block";
                }

                function w3_close() {
                    document.getElementById("mySidebar").style.display = "none";
                    document.getElementById("myOverlay").style.display = "none";
                }

                // Modal Image Gallery
                function onClick(element) {
                    document.getElementById("img01").src = element.src;
                    document.getElementById("modal01").style.display = "block";
                    var captionText = document.getElementById("caption");
                    captionText.innerHTML = element.alt;
                }
            </script>

            <script>
                // Script to open and close Etiquetas
                function openCity(evt, cityName) {
                    var i, x, tablinks;
                    x = document.getElementsByClassName("city");
                    for (i = 0; i < x.length; i++) {
                        x[i].style.display = "none";
                    }
                    tablinks = document.getElementsByClassName("tablink");
                    for (i = 0; i < x.length; i++) {
                        tablinks[i].className = tablinks[i].className.replace(" w3-indigo", "");
                    }
                    document.getElementById(cityName).style.display = "block";
                    evt.currentTarget.className += " w3-indigo";
                }
            </script>
            <script type="text/javascript">
                $().ready(function () {
                    $('[rel="tooltip"]').tooltip();

                    $('a.scroll-down').click(function (e) {
                        e.preventDefault();
                        scroll_target = $(this).data('href');
                        $('html, body').animate({
                            scrollTop: $(scroll_target).offset().top - 60
                        }, 1000);
                    });

                });

                function rotateCard(btn) {
                    var $card = $(btn).closest('.card-container');
                    console.log($card);
                    if ($card.hasClass('hover')) {
                        $card.removeClass('hover');
                    } else {
                        $card.addClass('hover');
                    }
                }


            </script>

    </body>
</html>
