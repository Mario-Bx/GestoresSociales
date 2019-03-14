<!DOCTYPE html>
<html lang="fr">

    <head>



        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Bienvenido </title>

        <!--[if lt IE 9]>
        <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

        <!-- Fichiers CSS -->
        <link rel="stylesheet" href="reset.css">
        <!--[if lt IE 9]> 
                <link rel="stylesheet" href="css/cv.css" media="screen">
        <![endif]-->
        <link rel="stylesheet" media="screen and (max-width:480px)" href="mobile.css">
        <link rel="stylesheet" media="screen and (min-width:481px)" href="cv.css">
        <link rel="stylesheet" media="print" href="print.css">
    </head>
    <%

        HttpSession misession = request.getSession(true);

        if (misession.getAttribute("usuario") == null) {
            response.sendRedirect("login.jsp");
        }

    %>
    <body>

        <!-- Header -->
        <header role="banner">
            <div class="container_16">
                <hgroup>
                    <h1>Bienvenido <%= misession.getAttribute("usuario")%></h1>


                </hgroup>

                <figure>
                    <img src="avatar.jpg" alt="Sheldon COOPER">
                </figure>
            </div>
        </header>



        <!-- Corps -->
        <section role="main" class="container_16 clearfix">
            <div class="grid_16">
                <!-- A propos -->
                <div class="grid_8 apropos">
                    <h3>Administradores</h3>
                    <p>Gestion completa</p>

                    <button type="button" class="btn btn-dark" onclick="location.href = 'AdministradorListar.jsp'">Listar Administradores</button>
                    <button type="button" class="btn btn-dark" onclick="location.href = 'AdministradorCrear.jsp'">Crear Administradores</button>

                </div>
                <div class="grid_8 apropos">
                    <h3>Estudiantes</h3>
                    <p>Gestion completa</p>

                    <button type="button" class="btn btn-dark" onclick="location.href = 'PerfilGestor.html'">Vista Estudiantes</button>
                    <button type="button" class="btn btn-dark" onclick="location.href = 'EstudianteCrear.jsp'">Crear Estudiantes</button>

                </div>
                <div class="grid_8 apropos">
                    <h3>Convocatoria</h3>
                    <p>Gestion completa</p>

                    <button type="button" class="btn btn-dark" onclick="location.href = 'ConvocatoriaListar.jsp'">Listar Convocatoria</button>
                    <button type="button" class="btn btn-dark" onclick="location.href = 'ConvocatoriaCrear.jsp'">Crear Convocatoria</button>

                </div>







            </div>

            <!-- Compétences -->

            <!-- Scripts JavaScript -->
            <script src="jquery-1.js"></script>
            <script src="validate.js"></script>
            <!--[if lt IE 9]>
            <script src="scripts/placeholder.js"></script>
            <![endif]-->
            <script src="plugins.js"></script>

    </body></html>