<!DOCTYPE html>
<html lang="en">
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
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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

        <div class="jumbotron text-center" style="margin-bottom:0">
            <h1>My First Bootstrap 4 Page</h1>
            <p>Resize this responsive page to see the effect!</p> 
        </div>


        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown">Administrador</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="AdministradorCrear.html">AdministradorCrear</a>
                            <a class="dropdown-item" href="AdministradorListar.jsp">AdministradorListar</a>
                            <a class="dropdown-item" href="AdministradorBuscar.html">AdministradorBuscar</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown">Estudiante</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="EstudianteCrear.html">EstudianteCrear</a>
                            <a class="dropdown-item" href="EstudianteListar.html">EstudianteListar</a>
                            <a class="dropdown-item" href="EstudianteBuscar.html">EstudianteBuscar</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown">Convocatoria</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="ConvocatoriaCrear.html">ConvocatoriaCrear</a>
                            <a class="dropdown-item" href="ConvocatoriaListar.html">ConvocatoriaListar</a>
                            <a class="dropdown-item" href="ConvocatoriaBuscar.html">ConvocatoriaBuscar</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown">Principales</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="PrincipalesCrear.html">PrincipalesCrear</a>
                            <a class="dropdown-item" href="PrincipalesListar.html">PrincipalesListar</a>
                            <a class="dropdown-item" href="PrincipalesBuscar.html">PrincipalesBuscar</a>
                        </div>
                    </li>
                </ul>
            </div>  
        </nav>

        <div class="container" style="margin-top:30px">
            <div class="row">
                <div class="col-sm-4">
                    <h2>About Me</h2>
                    <h5>Photo of me:</h5>
                    <div class="fakeimg">Fake Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    <h3>Some Links</h3>
                    <p>Lorem ipsum dolor sit ame.</p>
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <hr class="d-sm-none">
                </div>
                <div class="col-sm-8">
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div class="fakeimg">Fake Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <br>
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Sep 2, 2017</h5>
                    <div class="fakeimg">Fake Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
        </div>

        <div class="jumbotron text-center" style="margin-bottom:0">
            <p>Footer</p>
        </div>

    </body>
</html>