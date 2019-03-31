<html>
    <head>
        <title>Proyecyo</title>
        <meta charset="utf-8">
        <!-- Bootstrap 4 -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
        <script src="funcion.js"></script>
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
        <script>
            $(document).ready(listaConvocatoriaLista());
            $(document).ready(listaEstudiLista());
            $(document).ready(listaSancionesLista());

        </script>



        <style>
            .fakeimg {
                height: 200px;
                background: #aaa;
            }
        </style>
    </head>




    <%

       HttpSession misession = request.getSession(true);

       if (misession.getAttribute("usuario") == null) {
           response.sendRedirect("login.jsp");
       }

    %>









    <body>
        <h1>el id es </h1>

        <%out.print(request.getAttribute("id")); %>
        <div class="w3-sidebar w3-bar-block w3-card w3-animate-left" style="display:none" id="mySidebar">


            <img src="https://image.flaticon.com/icons/svg/149/149071.svg" width="40%" style="display: block;margin-left: auto;margin-right: auto;margin-top: 3%;"> 
            <h4>Administrador  </h4>
            <button class="w3-bar-item w3-button w3-large"
                    onclick="w3_close()"><<<< &times;</button>
            <a  href="Convocatorias.html" class="w3-bar-item w3-button" >Crear convocatoria</a> 
            <a href="Agregar.html" class="w3-bar-item w3-button">Agregar Gestores</a>
            <a h " class="w3-bar-item w3-button">Cerrar sesion</a>

        </div>

        <div id="main">

            <div class="w3-teal">
                <button id="openNav" class="w3-button w3-teal w3-xlarge" onclick="w3_open()">&#9776;</button>
                <button class="btn btn-outline-light" onclick="openCity('Convocatorias')"> Convocatorias </button>
                <button class="btn btn-outline-light"onclick="openCity('Estudiantes')"> Estudiantes </button>
                <button class="btn btn-outline-light"onclick="openCity('Sanciones')"> Sanciones </button>
                <div class="w3-container">

                </div>
            </div>
            <div id="Convocatorias" class="w3-container city">
                <div class="w3-responsive">
                    <br>
                    <div class="w3-responsive">
                        <br>
                        <div class="w3-container">
                            <table class="w3-table-all w3-card-4" id="Convocatoriaslista">

                            </table>
                        </div>	
                        <br>
                    </div>
                    <br>
                </div>
            </div>

            <div id="Estudiantes" class="w3-container city" style="display:none">
                <div class="w3-responsive">
                    <br>
                    <div class="w3-responsive">
                        <br>
                        <div class="w3-container">
                            <table class="w3-table-all w3-card-4" id="Estudianteslista">

                            </table>
                        </div>	
                        <br>
                    </div>
                    <br>
                </div>
            </div>

            <div id="Sanciones" class="w3-container city" style="display:none">
                <div class="w3-responsive">
                    <br>
                    <div class="w3-responsive">
                        <br>
                        <div class="w3-container">
                            <table class="w3-table-all w3-card-4" id="Sancioneslista">

                            </table>
                        </div>	
                        <br>
                    </div>
                    <br>
                </div>
            </div>

            <div class="w3-container">

                <div id="id02" class="w3-modal">

                </div>
            </div>

            <script>
                function openCity(cityName) {
                    var i;
                    var x = document.getElementsByClassName("city");
                    for (i = 0; i < x.length; i++) {
                        x[i].style.display = "none";
                    }
                    document.getElementById(cityName).style.display = "block";
                }
            </script>
        </div>


    </div>

    <div class="w3-container">

    </div>

</div>

<script>
    function w3_open() {
        document.getElementById("main").style.marginLeft = "25%";
        document.getElementById("mySidebar").style.width = "25%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
    }
    function w3_close() {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").style.display = "inline-block";
    }
</script>

</body>
</html>
