<html>
    <head>
        <title>Perfil Administrador</title>

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

        <!-- Funciones Restructuradas -->
        <script src="js/funcion.js"></script>
        <script src="js/FgAdministador.js "></script>
        <script src="js/FgTarjetaEstu.js "></script>
        <script src="js/FgTarjetaCon.js "></script>
        <script src="js/FgTarjetaSancion.js "></script>

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

            <br>
            <a onclick="w3_close()" class="w3-button w3-hide-large w3-display-topleft" style="width:100%;font-size:22px">Cerrar Menu</a>

            <!-- Div Pintar Perfil -->
            <div id="PinPerfilAdmin" class="w3-container">             
            </div>
        </nav>



        <!-- Top menu on small screens -->
        <header class="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
            <a href="javascript:void(0)" class="w3-button w3-red w3-margin-right" onclick="w3_open()"><i class='glyphicon glyphicon-th' style='font-size:36px'></i></a>
            <div class="w3-bar w3-black">
        <!-- Sidebar/menu -->
        <nav class="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding" style="z-index:3;width:300px;font-weight:bold;" id="mySidebar">
            </div>
            <span>Company Name</span>
        </header>

        <!-- Overlay effect when opening sidebar on small screens -->
        <div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

        <!-- !PAGE CONTENT! -->
        <div class="w3-main" style="margin-left:340px;margin-right:40px">
            <br />
            <div class="w3-bar w3-black">
            </div>

            <!-- Header -->
            <div class="w3-container" style="margin-top:80px" id="showcase">

                <button class="w3-bar-item w3-button tablink w3-red" onclick="openCity(event, 'Estudiantes')">Estudiantes</button>
                <button class="w3-bar-item w3-button tablink" onclick="openCity(event, 'Convocatorias')">Convocatorias</button>
                <button class="w3-bar-item w3-button tablink" onclick="openCity(event, 'Sanciones')">Sanciones</button>
                <!-- Right Column -->
                <div id="Estudiantes" class="w3-container w3-card w3-white w3-margin-bottom city">
                    <div  class="w3-container w3-center">
                        <h1 class="w3-xxxlarge w3-text-red"><b>Estudiantes</b></h1>
                        <hr style="width:50px;border:5px solid red" class="w3-round">
                        <button onclick="document.getElementById('id02').style.display = 'block', FormEstudiente()" class="w3-btn w3-ripple w3-round-xlarge w3-hover-red w3-purple">
                            Agregar  <i class="fa fa-plus-square" ></i>
                        </button>
                    </div>

                <button class="w3-bar-item w3-button tablink w3-red" onclick="openCity(event, 'Estudiantes')">Estudiantes</button>
                <button class="w3-bar-item w3-button tablink" onclick="openCity(event, 'Convocatorias')">Convocatorias</button>
                <button class="w3-bar-item w3-button tablink" onclick="openCity(event, 'Sanciones')">Sanciones</button>


                    </div>

                </div>

                <div id="Sanciones" class="w3-container w3-card w3-white w3-margin-bottom city" style="display:none">
                    <div  class="w3-container w3-center">
                        <h1 class="w3-xxxlarge w3-text-red"><b>Sanciones</b></h1>
                        <hr style="width:50px;border:5px solid red" class="w3-round">
                        <!-- Id del administrador-->
                        <button onclick="document.getElementById('id02').style.display = 'block', FormSancion()" class="w3-btn w3-ripple w3-round-xlarge w3-hover-red w3-purple">
                            Agregar  <i class="fa fa-plus-square" ></i>
                        </button>
                    </div>
                    <hr> 
                    <div  id="TarjetaSan" class="w3-container w3-center">

                    </div>
                </div>
            </div>

                    <div  id="TarjetaEst" class="w3-container w3-center">

                    </div>

    </body>
</html>
