<!DOCTYPE html>
<html lang="en">
    <head>
        <title>ReservaCrear</title>
        <meta charset="utf-8">
        <!-- Bootstrap 4 -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
        <script src="funcion.js"></script>
        <!-- w3schools.com -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script>
            $(document).ready(crearFormReserva());
        </script>


    </head>
    <%

        HttpSession misession = request.getSession(true);

        if (misession.getAttribute("usuario") == null) {
            response.sendRedirect("login.jsp");
        }

    %>
    <body>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <a class="navbar-brand" href="#">Gestores sociales</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown">Administrador</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="AdministradorCrear.jsp">AdministradorCrear</a>
                            <a class="dropdown-item" href="AdministradorListar.jsp">AdministradorListar</a>
                            <a class="dropdown-item" href="AdministradorBuscar.jsp">AdministradorBuscar</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown">Estudiante</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="EstudianteCrear.jsp">EstudianteCrear</a>
                            <a class="dropdown-item" href="EstudianteListar.jsp">EstudianteListar</a>
                            <a class="dropdown-item" href="EstudianteBuscar.jsp">EstudianteBuscar</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown">Convocatoria</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="ConvocatoriaCrear.jsp">ConvocatoriaCrear</a>
                            <a class="dropdown-item" href="ConvocatoriaListar.jsp">ConvocatoriaListar</a>
                            <a class="dropdown-item" href="ConvocatoriaBuscar.jsp">ConvocatoriaBuscar</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown">Bitacora</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="BitacoraCrear.jsp">BitacoraCrear</a>
                            <a class="dropdown-item" href="BitacoraListar.jsp">BitacoraListar</a>
                            <a class="dropdown-item" href="BitacoraBuscar.jsp">BitacoraBuscar</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown">Sanciones</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="SancionesCrear.jsp">SancionesCrear</a>
                            <a class="dropdown-item" href="SancionesListar.jsp">SancionesListar</a>
                            <a class="dropdown-item" href="SancionesBuscar.jsp">SancionesBuscar</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown">Principales</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="PrincipalesCrear.jsp">PrincipalesCrear</a>
                            <a class="dropdown-item" href="PrincipalesListar.jsp">PrincipalesListar</a>
                            <a class="dropdown-item" href="PrincipalesBuscar.jsp">PrincipalesBuscar</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown">Reserva</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="ReservaCrear.jsp">ReservaCrear</a>
                            <a class="dropdown-item" href="ReservaListar.jsp">ReservaListar</a>
                            <a class="dropdown-item" href="ReservaBuscar.jsp">ReservaBuscar</a>
                        </div>
                    </li>
                </ul>
            </div>  
        </nav>
        <div class="container">
            <h2>Crear ReservaCr</h2>
            <div class="container" id="Reservacrear">
            </div>
        </div>



    </body>
</html>
