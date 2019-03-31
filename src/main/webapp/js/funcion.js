var api = "http://localhost:8090/indexRest/rest/";

function crearFormAdministrador() {
    $.ajax({
        url: api + "AdministradorSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario");
            console.log("*****************");

            $("#Administradorcrear").empty();
            $("#Administradorcrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Nombre Administrador :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Nombre" placeholder="Ingrese Nombre">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Apellidos Administrador :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Apellidos" placeholder="Ingrese Apellidos">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Correo Administrador :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Correo" placeholder="Ingrese Correo">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Clave Administrador :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Clave" placeholder="Ingrese Clave">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">FechaNacimiento Administrador :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="FechaNacimiento" placeholder="Ingrese FechaNacimiento">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Documento Administrador :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Documento" placeholder="Ingrese Documento">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Telefono Administrador :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Telefono" placeholder="Ingrese Telefono">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Celular Administrador :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Celular" placeholder="Ingrese Celular">' +
                    '</div>'
                    );


            $("#Administradorcrear").append(
                    );



            $("#Administradorcrear").append(
                    '<button type="submit" class="btn btn-primary" onclick="crearAdministrador()">Crear3</button>'
                    );
        },

        error: function () {
            alert('Error function selectAdministrador');
        }
    });
}
function listaAdminLista() {
    $.ajax({
        url: api + "AdministradorSv",
        type: "Get",
        success: function (data) {
            console.log("Servicio Listar AdministradorSv");
            console.log(data);

            PintarAdminLista(data);

        },
        error: function () {
            alert('Error function listaAdminLista');
        }
    });

}


function PintarAdminLista(listasDatos) {
    console.log("Pintar la Lista de AdministradorSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Administradorlista").empty();

    if (listasDatos != null) {
        console.log("Prueba2 " + listasDatos.length);
        $("#Administradorlista").append('<thead>' +
                '<tr class="w3-light-grey w3-hover-red">' +
                '<th>id</th>' +
                '<th>Nombre</th>' +
                '<th>Apellidos</th>' +
                '<th>Correo</th>' +
                '<th>Clave</th>' +
                '<th>FechaNacimiento</th>' +
                '<th>Documento</th>' +
                '<th>Telefono</th>' +
                '<th>Celular</th>' +
                '<th colspan=2>Acciones</th>' +
                '</tr>' +
                '</thead>');

        listasDatos.AdministradorDTO.forEach(element => {
            $("#Administradorlista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.AdministradorID + ' </td>' +
                    '<td>' + element.Nombre + ' </td>' +
                    '<td>' + element.Apellidos + ' </td>' +
                    '<td>' + element.Correo + ' </td>' +
                    '<td>' + element.Clave + ' </td>' +
                    '<td>' + element.FechaNacimiento + ' </td>' +
                    '<td>' + element.Documento + ' </td>' +
                    '<td>' + element.Telefono + ' </td>' +
                    '<td>' + element.Celular + ' </td>' +
                    '<td><button type="submit" class="btn btn-secondary" onclick="borrarAdminLista(' + element.AdministradorID + ')"><i class="fa fa-trash"></i></button></td>' +
                    '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarAdminLista(' + element.AdministradorID + ')" class="btn btn-secondary" (click)="editarDato(item.AdministradorID)"><i class="fa fa-edit"></i></button></td>' +
                    '</tr>');
        });
    }
}
function borrarAdminLista(idN) {
    $.ajax({
        url: api + "AdministradorSv/" + idN,

        type: "Delete"
    });
    console.log("borar: " + idN);
}
function actualizarAdminLista(idN) {
    $.ajax({
        url: api + "AdministradorSv/" + idN,
        type: "Get",
        success: function (data) {
            console.log(data);
            var datoEdit = data;

            var m = "'id02'";
            var b = "'none'";

            $("#id02").empty();
            if (datoEdit != null) {
                console.log("Prueba2 " + datoEdit);
                $("#id02").append(
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="container">' +
                        '<br>' +
                        '<form action="/action_page.php">' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="AdministradorID�" value="' + datoEdit.AdministradorID + '" readonly="readonly">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Nombre:</label>' +
                        '<input type="text" class="form-control" id="Nombre" value="' + datoEdit.Nombre + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Apellidos:</label>' +
                        '<input type="text" class="form-control" id="Apellidos" value="' + datoEdit.Apellidos + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Correo:</label>' +
                        '<input type="text" class="form-control" id="Correo" value="' + datoEdit.Correo + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Clave:</label>' +
                        '<input type="text" class="form-control" id="Clave" value="' + datoEdit.Clave + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">FechaNacimiento:</label>' +
                        '<input type="text" class="form-control" id="FechaNacimiento" value="' + datoEdit.FechaNacimiento + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Documento:</label>' +
                        '<input type="text" class="form-control" id="Documento" value="' + datoEdit.Documento + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Telefono:</label>' +
                        '<input type="text" class="form-control" id="Telefono" value="' + datoEdit.Telefono + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Celular:</label>' +
                        '<input type="text" class="form-control" id="Celular" value="' + datoEdit.Celular + ' ">' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarAdministrador()">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>');
            }


        },
        error: function () {
            alert('Errror El formulario actualizarAdminLista');
        }
    });
}

function crearFormEstudiantes() {
    $.ajax({
        url: api + "EstudiantesSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario");
            console.log("*****************");

            $("#Estudiantescrear").empty();
            $("#Estudiantescrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Nombre Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Nombre" placeholder="Ingrese Nombre">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Apellidos Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Apellidos" placeholder="Ingrese Apellidos">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Correo Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Correo" placeholder="Ingrese Correo">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Clave Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Clave" placeholder="Ingrese Clave">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Documento Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Documento" placeholder="Ingrese Documento">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">FechaNacimiento Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="FechaNacimiento" placeholder="Ingrese FechaNacimiento">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Telefono Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Telefono" placeholder="Ingrese Telefono">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Celular Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Celular" placeholder="Ingrese Celular">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Escuela Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Escuela" placeholder="Ingrese Escuela">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Carreara Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Carreara" placeholder="Ingrese Carreara">' +
                    '</div>'
                    );


            $("#Estudiantescrear").append(						);



            $("#Estudiantescrear").append(
                    '<button type="submit" class="btn btn-primary" onclick="crearEstudiantes()">Crear3</button>'
                    );
        },

        error: function () {
            alert('Error function selectEstudiantes');
        }
    });
}
function listaEstudiLista() {
    $.ajax({
        url: api + "EstudiantesSv",
        type: "Get",
        success: function (data) {
            console.log("Servicio Listar EstudiantesSv");
            console.log(data);

            PintarEstudiLista(data);

        },
        error: function () {
            alert('Error function listaEstudiLista');
        }
    });

}


function PintarEstudiLista(listasDatos) {
    console.log("Pintar la Lista de EstudiantesSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Estudianteslista").empty();

    if (listasDatos != null) {
        console.log("Prueba2 " + listasDatos.length);
        $("#Estudianteslista").append('<thead>' +
                '<tr class="w3-light-grey w3-hover-red">' +
                '<th>id</th>' +
                '<th>Nombre</th>' +
                '<th>Apellidos</th>' +
                '<th>Correo</th>' +
                '<th>Clave</th>' +
                '<th>Documento</th>' +
                '<th>FechaNacimiento</th>' +
                '<th>Telefono</th>' +
                '<th>Celular</th>' +
                '<th>Escuela</th>' +
                '<th>Carreara</th>' +
                '<th colspan=2>Acciones</th>' +
                '</tr>' +
                '</thead>');

        listasDatos.EstudiantesDTO.forEach(element => {
            $("#Estudianteslista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.EstudiantesID + ' </td>' +
                    '<td>' + element.Nombre + ' </td>' +
                    '<td>' + element.Apellidos + ' </td>' +
                    '<td>' + element.Correo + ' </td>' +
                    '<td>' + element.Clave + ' </td>' +
                    '<td>' + element.Documento + ' </td>' +
                    '<td>' + element.FechaNacimiento + ' </td>' +
                    '<td>' + element.Telefono + ' </td>' +
                    '<td>' + element.Celular + ' </td>' +
                    '<td>' + element.Escuela + ' </td>' +
                    '<td>' + element.Carreara + ' </td>' +
                    '<td><button type="submit" class="btn btn-secondary" onclick="borrarEstudiLista(' + element.EstudiantesID + ')"><i class="fa fa-trash"></i></button></td>' +
                    '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarEstudiLista(' + element.EstudiantesID + ')" class="btn btn-secondary" (click)="editarDato(item.EstudiantesID)"><i class="fa fa-edit"></i></button></td>' +
                    '</tr>');
        });
    }
}
function borrarEstudiLista(idN) {
    $.ajax({
        url: api + "EstudiantesSv/" + idN,

        type: "Delete"
    });
    console.log("borar: " + idN);
}
function actualizarEstudiLista(idN) {
    $.ajax({
        url: api + "EstudiantesSv/" + idN,
        type: "Get",
        success: function (data) {
            console.log(data);
            var datoEdit = data;

            var m = "'id02'";
            var b = "'none'";

            $("#id02").empty();
            if (datoEdit != null) {
                console.log("Prueba2 " + datoEdit);
                $("#id02").append(
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="container">' +
                        '<br>' +
                        '<form action="/action_page.php">' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="EstudiantesID�" value="' + datoEdit.EstudiantesID + '" readonly="readonly">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Nombre:</label>' +
                        '<input type="text" class="form-control" id="Nombre" value="' + datoEdit.Nombre + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Apellidos:</label>' +
                        '<input type="text" class="form-control" id="Apellidos" value="' + datoEdit.Apellidos + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Correo:</label>' +
                        '<input type="text" class="form-control" id="Correo" value="' + datoEdit.Correo + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Clave:</label>' +
                        '<input type="text" class="form-control" id="Clave" value="' + datoEdit.Clave + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Documento:</label>' +
                        '<input type="text" class="form-control" id="Documento" value="' + datoEdit.Documento + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">FechaNacimiento:</label>' +
                        '<input type="text" class="form-control" id="FechaNacimiento" value="' + datoEdit.FechaNacimiento + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Telefono:</label>' +
                        '<input type="text" class="form-control" id="Telefono" value="' + datoEdit.Telefono + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Celular:</label>' +
                        '<input type="text" class="form-control" id="Celular" value="' + datoEdit.Celular + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Escuela:</label>' +
                        '<input type="text" class="form-control" id="Escuela" value="' + datoEdit.Escuela + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Carreara:</label>' +
                        '<input type="text" class="form-control" id="Carreara" value="' + datoEdit.Carreara + ' ">' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarEstudiantes()">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>');
            }


        },
        error: function () {
            alert('Errror El formulario actualizarEstudiLista');
        }
    });
}

function crearFormConvocatorias() {
    $.ajax({
        url: api + "ConvocatoriasSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario");
            console.log("*****************");

            $("#Convocatoriascrear").empty();
            $("#Convocatoriascrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Nombre Convocatorias :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Nombre" placeholder="Ingrese Nombre">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">FechaInicio Convocatorias :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="FechaInicio" placeholder="Ingrese FechaInicio">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">FechaFin Convocatorias :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="FechaFin" placeholder="Ingrese FechaFin">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Hora Convocatorias :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Hora" placeholder="Ingrese Hora">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Encargado Convocatorias :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Encargado" placeholder="Ingrese Encargado">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Descripcion Convocatorias :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Descripcion" placeholder="Ingrese Descripcion">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">HorasGanadas Convocatorias :</label>' +
                    '<input type="number"' +
                    'class="form-control" id="HorasGanadas" placeholder="Ingrese HorasGanadas">' +
                    '</div>'
                    );


            $("#Convocatoriascrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">deporte:</label>' +
                    '<SELECT id="AdministradorlistaSELECT"> ' +
                    '<OPTION value="errror">Error</OPTION>' +
                    '</SELECT>' +
                    '</div>'
                    );



            $("#Convocatoriascrear").append(
                    '<button type="submit" class="btn btn-primary" onclick="crearConvocatorias()">Crear3</button>'
                    );
            selectAdministrador();
        },

        error: function () {
            alert('Error function selectConvocatorias');
        }
    });
}
function listaConvocatoriaLista() {
    $.ajax({
        url: api + "ConvocatoriasSv",
        type: "Get",
        success: function (data) {
            console.log("Servicio Listar ConvocatoriasSv");
            console.log(data);

            PintarConvocatoriaLista(data);

        },
        error: function () {
            alert('Error function listaConvocatoriaLista');
        }
    });

}


function PintarConvocatoriaLista(listasDatos) {
    console.log("Pintar la Lista de ConvocatoriasSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Convocatoriaslista").empty();

    if (listasDatos != null) {
        console.log("Prueba2 " + listasDatos.length);
        $("#Convocatoriaslista").append('<thead>' +
                '<tr class="w3-light-grey w3-hover-red">' +
                '<th>id</th>' +
                '<th>Nombre</th>' +
                '<th>FechaInicio</th>' +
                '<th>FechaFin</th>' +
                '<th>Hora</th>' +
                '<th>Encargado</th>' +
                '<th>Descripcion</th>' +
                '<th>HorasGanadas</th>' +
                '<th colspan=2>Acciones</th>' +
                '</tr>' +
                '</thead>');

        listasDatos.ConvocatoriasDTO.forEach(element => {
            $("#Convocatoriaslista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.ConvocatoriasID + ' </td>' +
                    '<td>' + element.Nombre + ' </td>' +
                    '<td>' + element.FechaInicio + ' </td>' +
                    '<td>' + element.FechaFin + ' </td>' +
                    '<td>' + element.Hora + ' </td>' +
                    '<td>' + element.Encargado + ' </td>' +
                    '<td>' + element.Descripcion + ' </td>' +
                    '<td>' + element.HorasGanadas + ' </td>' +
                    '<td><button type="submit" class="btn btn-secondary" onclick="borrarConvocatoriaLista(' + element.ConvocatoriasID + ')"><i class="fa fa-trash"></i></button></td>' +
                    '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarConvocatoriaLista(' + element.ConvocatoriasID + ')" class="btn btn-secondary" (click)="editarDato(item.ConvocatoriasID)"><i class="fa fa-edit"></i></button></td>' +
                    '</tr>');
        });
    }
}
function borrarConvocatoriaLista(idN) {
    $.ajax({
        url: api + "ConvocatoriasSv/" + idN,

        type: "Delete"
    });
    console.log("borar: " + idN);
}
function actualizarConvocatoriaLista(idN) {
    $.ajax({
        url: api + "ConvocatoriasSv/" + idN,
        type: "Get",
        success: function (data) {
            console.log(data);
            var datoEdit = data;

            var m = "'id02'";
            var b = "'none'";

            $("#id02").empty();
            if (datoEdit != null) {
                console.log("Prueba2 " + datoEdit);
                $("#id02").append(
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="container">' +
                        '<br>' +
                        '<form action="/action_page.php">' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="ConvocatoriasID�" value="' + datoEdit.ConvocatoriasID + '" readonly="readonly">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Nombre:</label>' +
                        '<input type="text" class="form-control" id="Nombre" value="' + datoEdit.Nombre + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">FechaInicio:</label>' +
                        '<input type="text" class="form-control" id="FechaInicio" value="' + datoEdit.FechaInicio + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">FechaFin:</label>' +
                        '<input type="text" class="form-control" id="FechaFin" value="' + datoEdit.FechaFin + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Hora:</label>' +
                        '<input type="text" class="form-control" id="Hora" value="' + datoEdit.Hora + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Encargado:</label>' +
                        '<input type="text" class="form-control" id="Encargado" value="' + datoEdit.Encargado + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Descripcion:</label>' +
                        '<input type="text" class="form-control" id="Descripcion" value="' + datoEdit.Descripcion + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">HorasGanadas:</label>' +
                        '<input type="text" class="form-control" id="HorasGanadas" value="' + datoEdit.HorasGanadas + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">deporte:</label>' +
                        '<SELECT id="AdministradorlistaSELECT"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarConvocatorias()">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>');
            }

            selectAdministrador();

        },
        error: function () {
            alert('Errror El formulario actualizarConvocatoriaLista');
        }
    });
}

function crearFormBitacora() {
    $.ajax({
        url: api + "BitacoraSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario");
            console.log("*****************");

            $("#Bitacoracrear").empty();
            $("#Bitacoracrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Nombre Bitacora :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Nombre" placeholder="Ingrese Nombre">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Fecha Bitacora :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Fecha" placeholder="Ingrese Fecha">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Hora Bitacora :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Hora" placeholder="Ingrese Hora">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Descripcion Bitacora :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Descripcion" placeholder="Ingrese Descripcion">' +
                    '</div>'
                    );


            $("#Bitacoracrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">deporte:</label>' +
                    '<SELECT id="EstudianteslistaSELECT"> ' +
                    '<OPTION value="errror">Error</OPTION>' +
                    '</SELECT>' +
                    '</div>'
                    );



            $("#Bitacoracrear").append(
                    '<button type="submit" class="btn btn-primary" onclick="crearBitacora()">Crear3</button>'
                    );
            selectEstudiantes();
        },

        error: function () {
            alert('Error function selectBitacora');
        }
    });
}
function listaBitacoraLista() {
    $.ajax({
        url: api + "BitacoraSv",
        type: "Get",
        success: function (data) {
            console.log("Servicio Listar BitacoraSv");
            console.log(data);

            PintarBitacoraLista(data);

        },
        error: function () {
            alert('Error function listaBitacoraLista');
        }
    });

}


function PintarBitacoraLista(listasDatos) {
    console.log("Pintar la Lista de BitacoraSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Bitacoralista").empty();

    if (listasDatos != null) {
        console.log("Prueba2 " + listasDatos.length);
        $("#Bitacoralista").append('<thead>' +
                '<tr class="w3-light-grey w3-hover-red">' +
                '<th>id</th>' +
                '<th>Nombre</th>' +
                '<th>Fecha</th>' +
                '<th>Hora</th>' +
                '<th>Descripcion</th>' +
                '<th colspan=2>Acciones</th>' +
                '</tr>' +
                '</thead>');

        listasDatos.BitacoraDTO.forEach(element => {
            $("#Bitacoralista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.BitacoraID + ' </td>' +
                    '<td>' + element.Nombre + ' </td>' +
                    '<td>' + element.Fecha + ' </td>' +
                    '<td>' + element.Hora + ' </td>' +
                    '<td>' + element.Descripcion + ' </td>' +
                    '<td><button type="submit" class="btn btn-secondary" onclick="borrarBitacoraLista(' + element.BitacoraID + ')"><i class="fa fa-trash"></i></button></td>' +
                    '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarBitacoraLista(' + element.BitacoraID + ')" class="btn btn-secondary" (click)="editarDato(item.BitacoraID)"><i class="fa fa-edit"></i></button></td>' +
                    '</tr>');
        });
    }
}
function borrarBitacoraLista(idN) {
    $.ajax({
        url: api + "BitacoraSv/" + idN,

        type: "Delete"
    });
    console.log("borar: " + idN);
}
function actualizarBitacoraLista(idN) {
    $.ajax({
        url: api + "BitacoraSv/" + idN,
        type: "Get",
        success: function (data) {
            console.log(data);
            var datoEdit = data;

            var m = "'id02'";
            var b = "'none'";

            $("#id02").empty();
            if (datoEdit != null) {
                console.log("Prueba2 " + datoEdit);
                $("#id02").append(
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="container">' +
                        '<br>' +
                        '<form action="/action_page.php">' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="BitacoraID�" value="' + datoEdit.BitacoraID + '" readonly="readonly">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Nombre:</label>' +
                        '<input type="text" class="form-control" id="Nombre" value="' + datoEdit.Nombre + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Fecha:</label>' +
                        '<input type="text" class="form-control" id="Fecha" value="' + datoEdit.Fecha + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Hora:</label>' +
                        '<input type="text" class="form-control" id="Hora" value="' + datoEdit.Hora + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Descripcion:</label>' +
                        '<input type="text" class="form-control" id="Descripcion" value="' + datoEdit.Descripcion + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">deporte:</label>' +
                        '<SELECT id="EstudianteslistaSELECT"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarBitacora()">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>');
            }

            selectEstudiantes();

        },
        error: function () {
            alert('Errror El formulario actualizarBitacoraLista');
        }
    });
}

function crearFormSanciones() {
    $.ajax({
        url: api + "SancionesSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario");
            console.log("*****************");

            $("#Sancionescrear").empty();
            $("#Sancionescrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Descripcion Sanciones :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Descripcion" placeholder="Ingrese Descripcion">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">NumeroConvocatria Sanciones :</label>' +
                    '<input type="number"' +
                    'class="form-control" id="NumeroConvocatria" placeholder="Ingrese NumeroConvocatria">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">ConInicial Sanciones :</label>' +
                    '<input type="number"' +
                    'class="form-control" id="ConInicial" placeholder="Ingrese ConInicial">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">ConFinal Sanciones :</label>' +
                    '<input type="number"' +
                    'class="form-control" id="ConFinal" placeholder="Ingrese ConFinal">' +
                    '</div>'
                    );


            $("#Sancionescrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">deporte:</label>' +
                    '<SELECT id="EstudianteslistaSELECT"> ' +
                    '<OPTION value="errror">Error</OPTION>' +
                    '</SELECT>' +
                    '</div>'
                    );



            $("#Sancionescrear").append(
                    '<button type="submit" class="btn btn-primary" onclick="crearSanciones()">Crear3</button>'
                    );
            selectEstudiantes();
        },

        error: function () {
            alert('Error function selectSanciones');
        }
    });
}
function listaSancionesLista() {
    $.ajax({
        url: api + "SancionesSv",
        type: "Get",
        success: function (data) {
            console.log("Servicio Listar SancionesSv");
            console.log(data);

            PintarSancionesLista(data);

        },
        error: function () {
            alert('Error function listaSancionesLista');
        }
    });

}


function PintarSancionesLista(listasDatos) {
    console.log("Pintar la Lista de SancionesSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Sancioneslista").empty();

    if (listasDatos != null) {
        console.log("Prueba2 " + listasDatos.length);
        $("#Sancioneslista").append('<thead>' +
                '<tr class="w3-light-grey w3-hover-red">' +
                '<th>id</th>' +
                '<th>Descripcion</th>' +
                '<th>NumeroConvocatria</th>' +
                '<th>ConInicial</th>' +
                '<th>ConFinal</th>' +
                '<th colspan=2>Acciones</th>' +
                '</tr>' +
                '</thead>');

        listasDatos.SancionesDTO.forEach(element => {
            $("#Sancioneslista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.SancionesID + ' </td>' +
                    '<td>' + element.Descripcion + ' </td>' +
                    '<td>' + element.NumeroConvocatria + ' </td>' +
                    '<td>' + element.ConInicial + ' </td>' +
                    '<td>' + element.ConFinal + ' </td>' +
                    '<td><button type="submit" class="btn btn-secondary" onclick="borrarSancionesLista(' + element.SancionesID + ')"><i class="fa fa-trash"></i></button></td>' +
                    '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarSancionesLista(' + element.SancionesID + ')" class="btn btn-secondary" (click)="editarDato(item.SancionesID)"><i class="fa fa-edit"></i></button></td>' +
                    '</tr>');
        });
    }
}
function borrarSancionesLista(idN) {
    $.ajax({
        url: api + "SancionesSv/" + idN,

        type: "Delete"
    });
    console.log("borar: " + idN);
}
function actualizarSancionesLista(idN) {
    $.ajax({
        url: api + "SancionesSv/" + idN,
        type: "Get",
        success: function (data) {
            console.log(data);
            var datoEdit = data;

            var m = "'id02'";
            var b = "'none'";

            $("#id02").empty();
            if (datoEdit != null) {
                console.log("Prueba2 " + datoEdit);
                $("#id02").append(
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="container">' +
                        '<br>' +
                        '<form action="/action_page.php">' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="SancionesID�" value="' + datoEdit.SancionesID + '" readonly="readonly">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Descripcion:</label>' +
                        '<input type="text" class="form-control" id="Descripcion" value="' + datoEdit.Descripcion + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">NumeroConvocatria:</label>' +
                        '<input type="text" class="form-control" id="NumeroConvocatria" value="' + datoEdit.NumeroConvocatria + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">ConInicial:</label>' +
                        '<input type="text" class="form-control" id="ConInicial" value="' + datoEdit.ConInicial + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">ConFinal:</label>' +
                        '<input type="text" class="form-control" id="ConFinal" value="' + datoEdit.ConFinal + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">deporte:</label>' +
                        '<SELECT id="EstudianteslistaSELECT"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarSanciones()">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>');
            }

            selectEstudiantes();

        },
        error: function () {
            alert('Errror El formulario actualizarSancionesLista');
        }
    });
}

function crearFormPrincipal() {
    $.ajax({
        url: api + "PrincipalSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario");
            console.log("*****************");

            $("#Principalcrear").empty();
            $("#Principalcrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Nombre Principal :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Nombre" placeholder="Ingrese Nombre">' +
                    '</div>'
                    );


            $("#Principalcrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">deporte:</label>' +
                    '<SELECT id="EstudianteslistaSELECT"> ' +
                    '<OPTION value="errror">Error</OPTION>' +
                    '</SELECT>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">deporte:</label>' +
                    '<SELECT id="ConvocatoriaslistaSELECT"> ' +
                    '<OPTION value="errror">Error</OPTION>' +
                    '</SELECT>' +
                    '</div>'
                    );



            $("#Principalcrear").append(
                    '<button type="submit" class="btn btn-primary" onclick="crearPrincipal()">Crear3</button>'
                    );
            selectEstudiantes();
            selectConvocatorias();
        },

        error: function () {
            alert('Error function selectPrincipal');
        }
    });
}
function listaPrincipalLista() {
    $.ajax({
        url: api + "PrincipalSv",
        type: "Get",
        success: function (data) {
            console.log("Servicio Listar PrincipalSv");
            console.log(data);

            PintarPrincipalLista(data);

        },
        error: function () {
            alert('Error function listaPrincipalLista');
        }
    });

}


function PintarPrincipalLista(listasDatos) {
    console.log("Pintar la Lista de PrincipalSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Principallista").empty();

    if (listasDatos != null) {
        console.log("Prueba2 " + listasDatos.length);
        $("#Principallista").append('<thead>' +
                '<tr class="w3-light-grey w3-hover-red">' +
                '<th>id</th>' +
                '<th>Nombre</th>' +
                '<th colspan=2>Acciones</th>' +
                '</tr>' +
                '</thead>');

        listasDatos.PrincipalDTO.forEach(element => {
            $("#Principallista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.PrincipalID + ' </td>' +
                    '<td>' + element.Nombre + ' </td>' +
                    '<td><button type="submit" class="btn btn-secondary" onclick="borrarPrincipalLista(' + element.PrincipalID + ')"><i class="fa fa-trash"></i></button></td>' +
                    '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarPrincipalLista(' + element.PrincipalID + ')" class="btn btn-secondary" (click)="editarDato(item.PrincipalID)"><i class="fa fa-edit"></i></button></td>' +
                    '</tr>');
        });
    }
}
function borrarPrincipalLista(idN) {
    $.ajax({
        url: api + "PrincipalSv/" + idN,

        type: "Delete"
    });
    console.log("borar: " + idN);
}
function actualizarPrincipalLista(idN) {
    $.ajax({
        url: api + "PrincipalSv/" + idN,
        type: "Get",
        success: function (data) {
            console.log(data);
            var datoEdit = data;

            var m = "'id02'";
            var b = "'none'";

            $("#id02").empty();
            if (datoEdit != null) {
                console.log("Prueba2 " + datoEdit);
                $("#id02").append(
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="container">' +
                        '<br>' +
                        '<form action="/action_page.php">' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="PrincipalID�" value="' + datoEdit.PrincipalID + '" readonly="readonly">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Nombre:</label>' +
                        '<input type="text" class="form-control" id="Nombre" value="' + datoEdit.Nombre + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">deporte:</label>' +
                        '<SELECT id="EstudianteslistaSELECT"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">deporte:</label>' +
                        '<SELECT id="ConvocatoriaslistaSELECT"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarPrincipal()">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>');
            }

            selectEstudiantes();
            selectConvocatorias();

        },
        error: function () {
            alert('Errror El formulario actualizarPrincipalLista');
        }
    });
}

function crearFormReserva() {
    $.ajax({
        url: api + "ReservaSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario");
            console.log("*****************");

            $("#Reservacrear").empty();
            $("#Reservacrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Nombre Reserva :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Nombre" placeholder="Ingrese Nombre">' +
                    '</div>'
                    );


            $("#Reservacrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">deporte:</label>' +
                    '<SELECT id="EstudianteslistaSELECT"> ' +
                    '<OPTION value="errror">Error</OPTION>' +
                    '</SELECT>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">deporte:</label>' +
                    '<SELECT id="ConvocatoriaslistaSELECT"> ' +
                    '<OPTION value="errror">Error</OPTION>' +
                    '</SELECT>' +
                    '</div>'
                    );



            $("#Reservacrear").append(
                    '<button type="submit" class="btn btn-primary" onclick="crearReserva()">Crear3</button>'
                    );
            selectEstudiantes();
            selectConvocatorias();
        },

        error: function () {
            alert('Error function selectReserva');
        }
    });
}
function listaReservaLista() {
    $.ajax({
        url: api + "ReservaSv",
        type: "Get",
        success: function (data) {
            console.log("Servicio Listar ReservaSv");
            console.log(data);

            PintarReservaLista(data);

        },
        error: function () {
            alert('Error function listaReservaLista');
        }
    });

}


function PintarReservaLista(listasDatos) {
    console.log("Pintar la Lista de ReservaSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Reservalista").empty();

    if (listasDatos != null) {
        console.log("Prueba2 " + listasDatos.length);
        $("#Reservalista").append('<thead>' +
                '<tr class="w3-light-grey w3-hover-red">' +
                '<th>id</th>' +
                '<th>Nombre</th>' +
                '<th colspan=2>Acciones</th>' +
                '</tr>' +
                '</thead>');

        listasDatos.ReservaDTO.forEach(element => {
            $("#Reservalista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.ReservaID + ' </td>' +
                    '<td>' + element.Nombre + ' </td>' +
                    '<td><button type="submit" class="btn btn-secondary" onclick="borrarReservaLista(' + element.ReservaID + ')"><i class="fa fa-trash"></i></button></td>' +
                    '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarReservaLista(' + element.ReservaID + ')" class="btn btn-secondary" (click)="editarDato(item.ReservaID)"><i class="fa fa-edit"></i></button></td>' +
                    '</tr>');
        });
    }
}
function borrarReservaLista(idN) {
    $.ajax({
        url: api + "ReservaSv/" + idN,

        type: "Delete"
    });
    console.log("borar: " + idN);
}
function actualizarReservaLista(idN) {
    $.ajax({
        url: api + "ReservaSv/" + idN,
        type: "Get",
        success: function (data) {
            console.log(data);
            var datoEdit = data;

            var m = "'id02'";
            var b = "'none'";

            $("#id02").empty();
            if (datoEdit != null) {
                console.log("Prueba2 " + datoEdit);
                $("#id02").append(
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="container">' +
                        '<br>' +
                        '<form action="/action_page.php">' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="ReservaID�" value="' + datoEdit.ReservaID + '" readonly="readonly">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Nombre:</label>' +
                        '<input type="text" class="form-control" id="Nombre" value="' + datoEdit.Nombre + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">deporte:</label>' +
                        '<SELECT id="EstudianteslistaSELECT"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">deporte:</label>' +
                        '<SELECT id="ConvocatoriaslistaSELECT"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarReserva()">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>');
            }

            selectEstudiantes();
            selectConvocatorias();

        },
        error: function () {
            alert('Errror El formulario actualizarReservaLista');
        }
    });
}


function selectAdministrador() {
    $.ajax({
        url: api + "AdministradorSv",
        type: "Get",
        success: function (data) {

            var listasDatos = data;
            console.log(listasDatos);
            console.log("*****************");
            console.log(listasDatos.AdministradorDTO[0].Nombre);
            console.log("*****************");

            $("#AdministradorlistaSELECT").empty();
            if (listasDatos != null) {
                //$("#AdministradorlistaSELECT").append('<OPTION value="'+element.AdministradorID+'">'+element.Nombre+'</OPTION>');
                listasDatos.AdministradorDTO.forEach(element => {
                    $("#AdministradorlistaSELECT").append(
                            '<OPTION value="' + element.AdministradorID + '">' + element.Nombre + '</OPTION>'
                            );
                });
            }
        },
        error: function () {
            alert('Error function selectAdministrador');
        }
    });
}
function crearAdministrador() {

    console.log("crearDeporte");
    var Administrador = '{' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"Apellidos": "' + $("#Apellidos").val() + '"' + ', ' +
            '"Correo": "' + $("#Correo").val() + '"' + ', ' +
            '"Clave": "' + $("#Clave").val() + '"' + ', ' +
            '"FechaNacimiento": "' + $("#FechaNacimiento").val() + '"' + ', ' +
            '"Documento": "' + $("#Documento").val() + '"' + ', ' +
            '"Telefono": "' + $("#Telefono").val() + '"' + ', ' +
            '"Celular": "' + $("#Celular").val() + '"'

            + '}';

    console.log(Administrador);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "AdministradorSv",
        data: Administrador,
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            alert('Error En el Servicio Crar AdministradorSv');
        }
    });
}

function EditarAdministrador() {

    console.log("Servicio Editar");
    var Administrador = '{' +
            '"AdministradorID": "' + $("#AdministradorID").val() + '"' + ', ' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"Apellidos": "' + $("#Apellidos").val() + '"' + ', ' +
            '"Correo": "' + $("#Correo").val() + '"' + ', ' +
            '"Clave": "' + $("#Clave").val() + '"' + ', ' +
            '"FechaNacimiento": "' + $("#FechaNacimiento").val() + '"' + ', ' +
            '"Documento": "' + $("#Documento").val() + '"' + ', ' +
            '"Telefono": "' + $("#Telefono").val() + '"' + ', ' +
            '"Celular": "' + $("#Celular").val() + '"'
            + '}';

    console.log(Administrador);
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: api + "AdministradorSv",
        data: Administrador,
        dataType: "json",
        success: function (data) {
            console.log("Se enviaron los datos para actualizar la informacion");
            console.log(data);
        },
        error: function (data) {
            alert('Error En el Servicio Actualizar Informacion');
        }
    });

}
function selectEstudiantes() {
    $.ajax({
        url: api + "EstudiantesSv",
        type: "Get",
        success: function (data) {

            var listasDatos = data;
            console.log(listasDatos);
            console.log("*****************");
            console.log(listasDatos.EstudiantesDTO[0].Nombre);
            console.log("*****************");

            $("#EstudianteslistaSELECT").empty();
            if (listasDatos != null) {
                //$("#EstudianteslistaSELECT").append('<OPTION value="'+element.EstudiantesID+'">'+element.Nombre+'</OPTION>');
                listasDatos.EstudiantesDTO.forEach(element => {
                    $("#EstudianteslistaSELECT").append(
                            '<OPTION value="' + element.EstudiantesID + '">' + element.Nombre + '</OPTION>'
                            );
                });
            }
        },
        error: function () {
            alert('Error function selectEstudiantes');
        }
    });
}
function crearEstudiantes() {

    console.log("crearDeporte");
    var Estudiantes = '{' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"Apellidos": "' + $("#Apellidos").val() + '"' + ', ' +
            '"Correo": "' + $("#Correo").val() + '"' + ', ' +
            '"Clave": "' + $("#Clave").val() + '"' + ', ' +
            '"Documento": "' + $("#Documento").val() + '"' + ', ' +
            '"FechaNacimiento": "' + $("#FechaNacimiento").val() + '"' + ', ' +
            '"Telefono": "' + $("#Telefono").val() + '"' + ', ' +
            '"Celular": "' + $("#Celular").val() + '"' + ', ' +
            '"Escuela": "' + $("#Escuela").val() + '"' + ', ' +
            '"Carreara": "' + $("#Carreara").val() + '"'

            + '}';

    console.log(Estudiantes);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "EstudiantesSv",
        data: Estudiantes,
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            alert('Error En el Servicio Crar EstudiantesSv');
        }
    });
}

function EditarEstudiantes() {

    console.log("Servicio Editar");
    var Estudiantes = '{' +
            '"EstudiantesID": "' + $("#EstudiantesID").val() + '"' + ', ' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"Apellidos": "' + $("#Apellidos").val() + '"' + ', ' +
            '"Correo": "' + $("#Correo").val() + '"' + ', ' +
            '"Clave": "' + $("#Clave").val() + '"' + ', ' +
            '"Documento": "' + $("#Documento").val() + '"' + ', ' +
            '"FechaNacimiento": "' + $("#FechaNacimiento").val() + '"' + ', ' +
            '"Telefono": "' + $("#Telefono").val() + '"' + ', ' +
            '"Celular": "' + $("#Celular").val() + '"' + ', ' +
            '"Escuela": "' + $("#Escuela").val() + '"' + ', ' +
            '"Carreara": "' + $("#Carreara").val() + '"'
            + '}';

    console.log(Estudiantes);
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: api + "EstudiantesSv",
        data: Estudiantes,
        dataType: "json",
        success: function (data) {
            console.log("Se enviaron los datos para actualizar la informacion");
            console.log(data);
        },
        error: function (data) {
            alert('Error En el Servicio Actualizar Informacion');
        }
    });

}
function selectConvocatorias() {
    $.ajax({
        url: api + "ConvocatoriasSv",
        type: "Get",
        success: function (data) {

            var listasDatos = data;
            console.log(listasDatos);
            console.log("*****************");
            console.log(listasDatos.ConvocatoriasDTO[0].Nombre);
            console.log("*****************");

            $("#ConvocatoriaslistaSELECT").empty();
            if (listasDatos != null) {
                //$("#ConvocatoriaslistaSELECT").append('<OPTION value="'+element.ConvocatoriasID+'">'+element.Nombre+'</OPTION>');
                listasDatos.ConvocatoriasDTO.forEach(element => {
                    $("#ConvocatoriaslistaSELECT").append(
                            '<OPTION value="' + element.ConvocatoriasID + '">' + element.Nombre + '</OPTION>'
                            );
                });
            }
        },
        error: function () {
            alert('Error function selectConvocatorias');
        }
    });
}
function crearConvocatorias() {

    console.log("crearDeporte");
    var Convocatorias = '{' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"FechaInicio": "' + $("#FechaInicio").val() + '"' + ', ' +
            '"FechaFin": "' + $("#FechaFin").val() + '"' + ', ' +
            '"Hora": "' + $("#Hora").val() + '"' + ', ' +
            '"Encargado": "' + $("#Encargado").val() + '"' + ', ' +
            '"Descripcion": "' + $("#Descripcion").val() + '"' + ', ' +
            '"HorasGanadas": "' + $("#HorasGanadas").val() + '"'

            + '}';

    console.log(Convocatorias);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "ConvocatoriasSv",
        data: Convocatorias,
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            alert('Error En el Servicio Crar ConvocatoriasSv');
        }
    });
}

function EditarConvocatorias() {

    console.log("Servicio Editar");
    var Convocatorias = '{' +
            '"ConvocatoriasID": "' + $("#ConvocatoriasID").val() + '"' + ', ' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"FechaInicio": "' + $("#FechaInicio").val() + '"' + ', ' +
            '"FechaFin": "' + $("#FechaFin").val() + '"' + ', ' +
            '"Hora": "' + $("#Hora").val() + '"' + ', ' +
            '"Encargado": "' + $("#Encargado").val() + '"' + ', ' +
            '"Descripcion": "' + $("#Descripcion").val() + '"' + ', ' +
            '"HorasGanadas": "' + $("#HorasGanadas").val() + '"'
            + '}';

    console.log(Convocatorias);
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: api + "ConvocatoriasSv",
        data: Convocatorias,
        dataType: "json",
        success: function (data) {
            console.log("Se enviaron los datos para actualizar la informacion");
            console.log(data);
        },
        error: function (data) {
            alert('Error En el Servicio Actualizar Informacion');
        }
    });

}
function selectBitacora() {
    $.ajax({
        url: api + "BitacoraSv",
        type: "Get",
        success: function (data) {

            var listasDatos = data;
            console.log(listasDatos);
            console.log("*****************");
            console.log(listasDatos.BitacoraDTO[0].Nombre);
            console.log("*****************");

            $("#BitacoralistaSELECT").empty();
            if (listasDatos != null) {
                //$("#BitacoralistaSELECT").append('<OPTION value="'+element.BitacoraID+'">'+element.Nombre+'</OPTION>');
                listasDatos.BitacoraDTO.forEach(element => {
                    $("#BitacoralistaSELECT").append(
                            '<OPTION value="' + element.BitacoraID + '">' + element.Nombre + '</OPTION>'
                            );
                });
            }
        },
        error: function () {
            alert('Error function selectBitacora');
        }
    });
}
function crearBitacora() {

    console.log("crearDeporte");
    var Bitacora = '{' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"Fecha": "' + $("#Fecha").val() + '"' + ', ' +
            '"Hora": "' + $("#Hora").val() + '"' + ', ' +
            '"Descripcion": "' + $("#Descripcion").val() + '"'

            + '}';

    console.log(Bitacora);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "BitacoraSv",
        data: Bitacora,
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            alert('Error En el Servicio Crar BitacoraSv');
        }
    });
}

function EditarBitacora() {

    console.log("Servicio Editar");
    var Bitacora = '{' +
            '"BitacoraID": "' + $("#BitacoraID").val() + '"' + ', ' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"Fecha": "' + $("#Fecha").val() + '"' + ', ' +
            '"Hora": "' + $("#Hora").val() + '"' + ', ' +
            '"Descripcion": "' + $("#Descripcion").val() + '"'
            + '}';

    console.log(Bitacora);
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: api + "BitacoraSv",
        data: Bitacora,
        dataType: "json",
        success: function (data) {
            console.log("Se enviaron los datos para actualizar la informacion");
            console.log(data);
        },
        error: function (data) {
            alert('Error En el Servicio Actualizar Informacion');
        }
    });

}
function selectSanciones() {
    $.ajax({
        url: api + "SancionesSv",
        type: "Get",
        success: function (data) {

            var listasDatos = data;
            console.log(listasDatos);
            console.log("*****************");
            console.log(listasDatos.SancionesDTO[0].Nombre);
            console.log("*****************");

            $("#SancioneslistaSELECT").empty();
            if (listasDatos != null) {
                //$("#SancioneslistaSELECT").append('<OPTION value="'+element.SancionesID+'">'+element.Nombre+'</OPTION>');
                listasDatos.SancionesDTO.forEach(element => {
                    $("#SancioneslistaSELECT").append(
                            '<OPTION value="' + element.SancionesID + '">' + element.Nombre + '</OPTION>'
                            );
                });
            }
        },
        error: function () {
            alert('Error function selectSanciones');
        }
    });
}
function crearSanciones() {

    console.log("crearDeporte");
    var Sanciones = '{' +
            '"Descripcion": "' + $("#Descripcion").val() + '"' + ', ' +
            '"NumeroConvocatria": "' + $("#NumeroConvocatria").val() + '"' + ', ' +
            '"ConInicial": "' + $("#ConInicial").val() + '"' + ', ' +
            '"ConFinal": "' + $("#ConFinal").val() + '"'

            + '}';

    console.log(Sanciones);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "SancionesSv",
        data: Sanciones,
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            alert('Error En el Servicio Crar SancionesSv');
        }
    });
}

function EditarSanciones() {

    console.log("Servicio Editar");
    var Sanciones = '{' +
            '"SancionesID": "' + $("#SancionesID").val() + '"' + ', ' +
            '"Descripcion": "' + $("#Descripcion").val() + '"' + ', ' +
            '"NumeroConvocatria": "' + $("#NumeroConvocatria").val() + '"' + ', ' +
            '"ConInicial": "' + $("#ConInicial").val() + '"' + ', ' +
            '"ConFinal": "' + $("#ConFinal").val() + '"'
            + '}';

    console.log(Sanciones);
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: api + "SancionesSv",
        data: Sanciones,
        dataType: "json",
        success: function (data) {
            console.log("Se enviaron los datos para actualizar la informacion");
            console.log(data);
        },
        error: function (data) {
            alert('Error En el Servicio Actualizar Informacion');
        }
    });

}
function selectPrincipal() {
    $.ajax({
        url: api + "PrincipalSv",
        type: "Get",
        success: function (data) {

            var listasDatos = data;
            console.log(listasDatos);
            console.log("*****************");
            console.log(listasDatos.PrincipalDTO[0].Nombre);
            console.log("*****************");

            $("#PrincipallistaSELECT").empty();
            if (listasDatos != null) {
                //$("#PrincipallistaSELECT").append('<OPTION value="'+element.PrincipalID+'">'+element.Nombre+'</OPTION>');
                listasDatos.PrincipalDTO.forEach(element => {
                    $("#PrincipallistaSELECT").append(
                            '<OPTION value="' + element.PrincipalID + '">' + element.Nombre + '</OPTION>'
                            );
                });
            }
        },
        error: function () {
            alert('Error function selectPrincipal');
        }
    });
}
function crearPrincipal( idGestor,idConvocatoria) {

    console.log("CrearPrincipal");
    var Principal = '{' +
            '"Nombre": "' + $("#Nombre").val() + '"'

            + '}';

    console.log(Principal);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "PrincipalSv",
        data: Principal,
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            alert('Error En el Servicio Crar PrincipalSv');
        }
    });
}

function EditarPrincipal() {

    console.log("Servicio Editar");
    var Principal = '{' +
            '"PrincipalID": "' + $("#PrincipalID").val() + '"' + ', ' +
            '"Nombre": "' + $("#Nombre").val() + '"'
            + '}';

    console.log(Principal);
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: api + "PrincipalSv",
        data: Principal,
        dataType: "json",
        success: function (data) {
            console.log("Se enviaron los datos para actualizar la informacion");
            console.log(data);
        },
        error: function (data) {
            alert('Error En el Servicio Actualizar Informacion');
        }
    });

}
function selectReserva() {
    $.ajax({
        url: api + "ReservaSv",
        type: "Get",
        success: function (data) {

            var listasDatos = data;
            console.log(listasDatos);
            console.log("*****************");
            console.log(listasDatos.ReservaDTO[0].Nombre);
            console.log("*****************");

            $("#ReservalistaSELECT").empty();
            if (listasDatos != null) {
                //$("#ReservalistaSELECT").append('<OPTION value="'+element.ReservaID+'">'+element.Nombre+'</OPTION>');
                listasDatos.ReservaDTO.forEach(element => {
                    $("#ReservalistaSELECT").append(
                            '<OPTION value="' + element.ReservaID + '">' + element.Nombre + '</OPTION>'
                            );
                });
            }
        },
        error: function () {
            alert('Error function selectReserva');
        }
    });
}
function crearReserva() {

    console.log("crearDeporte");
    var Reserva = '{' +
            '"Nombre": "' + $("#Nombre").val() + '"'

            + '}';

    console.log(Reserva);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "ReservaSv",
        data: Reserva,
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            alert('Error En el Servicio Crar ReservaSv');
        }
    });
}

function EditarReserva() {

    console.log("Servicio Editar");
    var Reserva = '{' +
            '"ReservaID": "' + $("#ReservaID").val() + '"' + ', ' +
            '"Nombre": "' + $("#Nombre").val() + '"'
            + '}';

    console.log(Reserva);
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: api + "ReservaSv",
        data: Reserva,
        dataType: "json",
        success: function (data) {
            console.log("Se enviaron los datos para actualizar la informacion");
            console.log(data);
        },
        error: function (data) {
            alert('Error En el Servicio Actualizar Informacion');
        }
    });

}


    function InscribirGestor(idG, idC) {

        console.log("CrearPrincipal--------->"+idG+""+idC);
        var Principal = '{' +
                 '"Nombre": '+'" P'+idG+idC +'",'+
        '"EstudiantesFk":'+'{'+
                        '"EstudianteID":'+'"'+idG+'" '+'},'+
        '"ConvocatoriasFk":'+'{'+
                            '"ConvocatoriaID":'+'"'+idC+'"'+
                    '}'+      
            '}';

        console.log(Principal);

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: api + "PrincipalSv",
            data: Principal,
            dataType: "json",
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                alert('Error En el Servicio Crar PrincipalSv');
            }
        });



   
}

   