<html>
    <head>
        <title>Perfil Administrador</title>

        <meta charset="utf-8">
        <!-- Bootstrap 4 -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">

        <!-- Funciones Restructuradas -->
        <script src="js/funcion.js"></script>
        <script src="js/FgAdministador.js "></script>
        <script src="js/FgTarjetaEstu.js "></script>
        <script src="js/FgTarjetaCon.js "></script>
        <script src="js/FgTarjetaSancion.js "></script>

        <!-- w3schools.com -->
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <!-- Tarjetas EStudiantes -->
        <link rel="stylesheet" href="css/blogstyle.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,700" rel="stylesheet">
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css'>

        <link href='css/bootstrap.css' rel='stylesheet'/>
        <link href='css/rotating-card.css' rel='stylesheet'/>
        <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport'/>

        <!-- Llamado de Funciones -->
        <script>
            $(document).ready(PinPerfilAdmin(<%out.print(request.getAttribute("id"));%>));
            $(document).ready(listaTarjetaEst());
            $(document).ready(listaTarjetaSan());
        </script>

    </head>

    <body>

        <!-- Sidebar/menu -->
        <nav class="w3-sidebar w3-indigo w3-collapse w3-top w3-large w3-padding" style="z-index:3;width:300px;font-weight:bold;" id="mySidebar">
            <br>
            <a onclick="w3_close()" class="w3-button w3-hide-large w3-display-topleft" style="width:100%;font-size:22px">Cerrar Menu</a>

            <!-- Div Pintar Perfil -->
            <div id="PinPerfilAdmin" class="w3-container">             
            </div>
        </nav>



        <!-- Top menu on small screens -->
        <header class="w3-container w3-top w3-hide-large w3-indigo w3-xlarge w3-padding">
            <a href="javascript:void(0)" class="w3-button w3-indigo w3-margin-right" onclick="w3_open()"><i class='glyphicon glyphicon-th' style='font-size:36px'></i></a>
            <div class="w3-bar w3-black">
                <button class="w3-bar-item w3-button tablink w3-indigo" onclick="openCity(event, 'Estudiantes')">Estudiantes</button>
                <button class="w3-bar-item w3-button tablink" onclick="openCity(event, 'Convocatorias')">Convocatorias</button>
                <button class="w3-bar-item w3-button tablink" onclick="openCity(event, 'Sanciones')">Sanciones</button>
            </div>
            <span>Company Name</span>
        </header>

        <!-- Overlay effect when opening sidebar on small screens -->
        <div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

        <!-- !PAGE CONTENT! -->
        <div class="w3-main" style="margin-left:340px;margin-right:40px">
            <br />
            <div class="w3-bar w3-black">
                <button class="w3-bar-item w3-button tablink w3-indigo" onclick="openCity(event, 'Estudiantes')">Estudiantes</button>
                <button class="w3-bar-item w3-button tablink" onclick="openCity(event, 'Convocatorias')">Convocatorias</button>
                <button class="w3-bar-item w3-button tablink" onclick="openCity(event, 'Sanciones')">Sanciones</button>
            </div>

            <!-- Header -->
            <div class="w3-container" style="margin-top:80px" id="showcase">

                <!-- Right Column -->
                <div id="Estudiantes" class="w3-container w3-card w3-white w3-margin-bottom city">
                    <div  class="w3-container w3-center">
                        <h1 class="w3-xxxlarge w3-text-indigo"><b>Estudiantes</b></h1>
                        <hr style="width:50px;border:5px solid red" class="w3-round">
                        <button onclick="document.getElementById('id02').style.display = 'block', FormEstudiente()" class="w3-btn w3-ripple w3-round-xlarge w3-hover-indigo w3-purple">
                            Agregar  <i class="fa fa-plus-square" ></i>
                        </button>
                    </div>

                    <div  id="TarjetaEst" class="w3-container w3-center">

                    </div>


                </div>

                <div id="Convocatorias" class="w3-container w3-card w3-white w3-margin-bottom city" style="display:none">
                    <div  class="w3-container w3-center">
                        <h1 class="w3-xxxlarge w3-text-indigo"><b>Convocatorias</b></h1>
                        <hr style="width:50px;border:5px solid red" class="w3-round">

                        <!-- Id del administrador, id de la escuela del administrador -->
                        <button onclick="document.getElementById('id02').style.display = 'block', FormConvocatoria(<%out.print(request.getAttribute("id"));%>, 1)" class="w3-btn w3-ripple w3-round-xlarge w3-hover-indigo w3-purple">
                            Agregar  <i class="fa fa-plus-square" ></i>
                        </button>
                    </div>
                    <hr>

                    <div  id="TarjetaCon" class="w3-container w3-center">

                    </div>
                </div>

                <div id="Sanciones" class="w3-container w3-card w3-white w3-margin-bottom city" style="display:none">
                    <div  class="w3-container w3-center">
                        <h1 class="w3-xxxlarge w3-text-indigo"><b>Sanciones</b></h1>
                        <hr style="width:50px;border:5px solid red" class="w3-round">
                        <!-- Id del administrador-->
                        <button onclick="document.getElementById('id02').style.display = 'block', FormSancion()" class="w3-btn w3-ripple w3-round-xlarge w3-hover-indigo w3-purple">
                            Agregar  <i class="fa fa-plus-square" ></i>
                        </button>
                    </div>
                    <hr> 
                    <div  id="TarjetaSan" class="w3-container w3-center">

                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div class="w3-container">
                <div id="id01" class="w3-modal">
                    <div class="w3-modal-content w3-card-4 w3-animate-zoom">
                        <header class="w3-container w3-blue"> 
                            <span onclick="document.getElementById('id01').style.display = 'none'" 
                                  class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>
                            <h2>Inscritos</h2>
                        </header>

                        <div class="w3-bar w3-border-bottom">
                            <button class="tablink w3-bar-item w3-button" onclick="openCity2(event, 'Inscritos')">Inscritos</button>
                            <button class="tablink w3-bar-item w3-button" onclick="openCity2(event, 'Reserva')">Reserva</button>
                        </div>

                        <div id="Inscritos" class="w3-container city2">
                            <div  class="w3-container w3-center">
                                <h1 class="w3-xxxlarge w3-text-blue"><b>Estudiantes Inscritos</b></h1>
                                <hr style="width:50px;border:5px solid blue" class="w3-round">
                            </div>
                            <div  id="TarjetaPri" class="w3-container w3-center">

                            </div>
                        </div>

                        <div id="Reserva" class="w3-container city2" style="display:none">
                            <div  class="w3-container w3-center">
                                <h1 class="w3-xxxlarge w3-text-blue"><b>Estudiantes De Reserva</b></h1>
                                <hr style="width:50px;border:5px solid blue" class="w3-round">
                            </div>
                            <div  id="TarjetaRes" class="w3-container w3-center">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w3-container">
                <div id="id02" class="w3-modal w3-container w3-animate-opacity">
                </div>
            </div>

            <!-- End page content -->
        </div>

        <!-- W3.CSS Container -->
        <div class="w3-light-grey w3-container w3-padding-32" style="margin-top:75px;padding-right:58px">
            <p class="w3-right">Powered by <a href="" title="W3.CSS" target="_blank" class="w3-hover-opacity">Mario Bolaños</a></p>
            <hr>
            <p class="w3-right">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-opacity">w3.css</a></p>
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
                    tablinks[i].className = tablinks[i].className.replace("w3-indigo", "");
                }
                document.getElementById(cityName).style.display = "block";
                evt.currentTarget.className += " w3-indigo";
            }
        </script>

        <script>
            document.getElementsByClassName("tablink")[0].click();
            function openCity2(evt, cityName) {
                var i, x, tablinks;
                x = document.getElementsByClassName("city2");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablink");
                for (i = 0; i < x.length; i++) {
                    tablinks[i].classList.remove("w3-light-grey");
                }
                document.getElementById(cityName).style.display = "block";
                evt.currentTarget.classList.add("w3-light-grey");
            }
        </script>
    </body>
</html>