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
                    <img src="data:image/jpeg;base64,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" alt="Sheldon COOPER">
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

                    <button type="button" class="btn btn-dark" onclick="location.href = 'PerfilAdmin.html'">VerPerfil Administrador</button>
                    <button type="button" class="btn btn-dark" onclick="location.href = 'AdministradorCrear.jsp'">Crear Administradores</button>

                    <br>
                    <br>
                </div>
                <div class="grid_8 apropos">
                    <h3>Estudiantes</h3>
                    <p>Gestion completa</p>

                    <button type="button" class="btn btn-dark" onclick="location.href = 'PerfilGestor.html'">Vista Estudiantes</button>
                    <button type="button" class="btn btn-dark" onclick="location.href = 'EstudianteCrear.jsp'">Crear Estudiantes</button>

                    <br>
                    <br>
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