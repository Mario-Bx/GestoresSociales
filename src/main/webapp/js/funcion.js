var api = "http://localhost:8090/indexRest/rest/";

function excel(){
      var tmpElemento = document.createElement('a');
    // obtenemos la información desde el div que lo contiene en el html
    // Obtenemos la información de la tabla
    var data_type = 'data:application/vnd.ms-excel;charset=UTF-8';
    var tabla_div = document.getElementById('Convocatoriaslista2');
    var tabla_html = tabla_div.outerHTML.replace(/ /g, '%20');
    tmpElemento.href = data_type + ', ' + encodeURI("\ufeff"+tabla_div.outerHTML+"\r\n");
    // Asignamos el nombre a nuestro EXCEL
    tmpElemento.download = 'GestoresSociales.xls';
    // Simulamos el click al elemento creado para descargarlo
    tmpElemento.click();
    
}

function crearFormAdministrador() {
    $.ajax({
        url: api + "AdministradorSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario AdministradorSv");
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
                    '<label for="usr">Telefono Administrador :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Telefono" placeholder="Ingrese Telefono">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Celular Administrador :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Celular" placeholder="Ingrese Celular">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Estado Administrador :</label>' +
                    '<input type="radio"' +
                    'class="form-control" id="Estado" placeholder="Ingrese Estado">' +
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

            if (data !== null) {
                PintarAdminLista(data);
            } else {
                console.log("No existen Administrador");
            }
        },
        error: function () {
            alert('Error function listaAdminLista');
            console.log('Error function listaAdminLista');
        }
    });

}


function PintarAdminLista(listasDatos) {
    console.log("Pintar la Lista de AdministradorSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Administradorlista").empty();


    $("#Administradorlista").append('<thead>' +
            '<tr class="w3-light-grey w3-hover-red">' +
            '<th>id</th>' +
            '<th>Nombre</th>' +
            '<th>Apellidos</th>' +
            '<th>Correo</th>' +
            '<th>Clave</th>' +
            '<th>FechaNacimiento</th>' +
            '<th>Telefono</th>' +
            '<th>Celular</th>' +
            '<th>Estado</th>' +
            '<th colspan=2>Acciones</th>' +
            '</tr>' +
            '</thead>');

    if (listasDatos.AdministradorDTO instanceof Array !== false) {
        console.log("Entro a Pintar la Lista de AdministradorSv");
        listasDatos.AdministradorDTO.forEach(element => {
            $("#Administradorlista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.AdministradorID + ' </td>' +
                    '<td>' + element.Nombre + ' </td>' +
                    '<td>' + element.Apellidos + ' </td>' +
                    '<td>' + element.Correo + ' </td>' +
                    '<td>' + element.Clave + ' </td>' +
                    '<td>' + element.FechaNacimiento + ' </td>' +
                    '<td>' + element.Telefono + ' </td>' +
                    '<td>' + element.Celular + ' </td>' +
                    '<td>' + element.Estado + ' </td>' +
                    '<td><button type="submit" class="btn btn-secondary" onclick="borrarAdminLista(' + element.AdministradorID + ')"><i class="fa fa-trash"></i></button></td>' +
                    '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarAdminLista(' + element.AdministradorID + ')" class="btn btn-secondary" (click)="editarDato(item.AdministradorID)"><i class="fa fa-edit"></i></button></td>' +
                    '</tr>'
                    );
        });
    } else {
        var element = listasDatos.AdministradorDTO;
        console.log("Entro a Pintar Un AdministradorSv");
        $("#Administradorlista").append(
                '<tr class="w3-hover-blue">' +
                '<td>' + element.AdministradorID + ' </td>' +
                '<td>' + element.Nombre + ' </td>' +
                '<td>' + element.Apellidos + ' </td>' +
                '<td>' + element.Correo + ' </td>' +
                '<td>' + element.Clave + ' </td>' +
                '<td>' + element.FechaNacimiento + ' </td>' +
                '<td>' + element.Telefono + ' </td>' +
                '<td>' + element.Celular + ' </td>' +
                '<td>' + element.Estado + ' </td>' +
                '<td><button type="submit" class="btn btn-secondary" onclick="borrarAdminLista(' + element.AdministradorID + ')"><i class="fa fa-trash"></i></button></td>' +
                '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarAdminLista(' + element.AdministradorID + ')" class="btn btn-secondary" (click)="editarDato(item.AdministradorID)"><i class="fa fa-edit"></i></button></td>' +
                '</tr>'
                );
    }

}
function borrarAdminLista(idN) {
    $.ajax({
        url: api + "AdministradorSv/" + idN,
        type: "Delete"
    });
    console.log("Se borro AdminLista: " + idN);
    listaAdminLista()
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
            if (datoEdit !== null) {
                console.log("Acutualizar  AdministradorSv: " + idN);
                $("#id02").append(
                        '<br>' +
                        '<br>' +
                        '<br>' +
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="w3-container">' +
                        '<br>' +
                        '<form>' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="AdministradorID" value="' + datoEdit.AdministradorID + '" readonly="readonly">' +
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
                        '<label for="usr">Telefono:</label>' +
                        '<input type="text" class="form-control" id="Telefono" value="' + datoEdit.Telefono + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Celular:</label>' +
                        '<input type="text" class="form-control" id="Celular" value="' + datoEdit.Celular + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Estado:</label>' +
                        '<input type="text" class="form-control" id="Estado" value="' + datoEdit.Estado + ' ">' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarAdministrador(), document.getElementById(' + m + ').style.display=' + b + '">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>'
                        );
            }


        },
        error: function () {
            alert('Error El formulario actualizarAdminLista');
        }
    });
}

function crearFormEstudiantes() {
    $.ajax({
        url: api + "EstudiantesSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario EstudiantesSv");
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
                    '<label for="usr">TipoDocumento Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="TipoDocumento" placeholder="Ingrese TipoDocumento">' +
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
                    '<label for="usr">Celular Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Celular" placeholder="Ingrese Celular">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Telefono Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Telefono" placeholder="Ingrese Telefono">' +
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
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Semestre Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Semestre" placeholder="Ingrese Semestre">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Estado Estudiantes :</label>' +
                    '<input type="radio"' +
                    'class="form-control" id="Estado" placeholder="Ingrese Estado">' +
                    '</div>'
                    );


            $("#Estudiantescrear").append(
                    );



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

            if (data !== null) {
                PintarEstudiLista(data);
            } else {
                console.log("No existen Estudiantes");
            }
        },
        error: function () {
            alert('Error function listaEstudiLista');
            console.log('Error function listaEstudiLista');
        }
    });

}


function PintarEstudiLista(listasDatos) {
    console.log("Pintar la Lista de EstudiantesSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Estudianteslista").empty();


    $("#Estudianteslista").append('<thead>' +
            '<tr class="w3-light-grey w3-hover-red">' +
            '<th>id</th>' +"    "+
            '<th>Nombre</th>' +
            '<th>Apellidos</th>' +
            '<th>Correo</th>' +
            '<th>Documento</th>' +
            '<th>FechaNacimiento</th>' +
            '<th>Celular</th>' +
            '<th>Telefono</th>' +
            '<th>Escuela</th>' +
            '<th>Carreara</th>' +
            '<th>Semestre</th>' +
           
            '</tr>' +
            '</thead>');

    if (listasDatos.EstudiantesDTO instanceof Array !== false) {
        console.log("Entro a Pintar la Lista de EstudiantesSv");
        listasDatos.EstudiantesDTO.forEach(element => {
            $("#Estudianteslista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.EstudiantesID + ' </td>' +
                    '<td>' + element.Nombre + ' </td>' +
                    '<td>' + element.Apellidos + ' </td>' +
                    '<td>' + element.Correo + ' </td>' +
                    '<td>' + element.TipoDocumento +element.Documento+ ' </td>' +
                    '<td>' + element.FechaNacimiento + ' </td>' +
                    '<td>' + element.Celular + ' </td>' +
                    '<td>' + element.Telefono + ' </td>' +
                    '<td>' + element.Escuela + ' </td>' +
                    '<td>' + element.Carreara + ' </td>' +
                    '<td>' + element.Semestre + ' </td>' +
                    '<td>' + element.Estado + ' </td>' +
                    '</tr>'
                    );
        });
    } else {
        var element = listasDatos.EstudiantesDTO;
        console.log("Entro a Pintar Un EstudiantesSv");
        $("#Estudianteslista").append(
                '<tr class="w3-hover-blue">' +
                '<td>' + element.EstudiantesID + ' </td>' +
                '<td>' + element.Nombre + ' </td>' +
                '<td>' + element.Apellidos + ' </td>' +
                '<td>' + element.Correo + ' </td>' +
                '<td>' + element.Clave + ' </td>' +
                '<td>' + element.TipoDocumento + ' </td>' +
                '<td>' + element.Documento + ' </td>' +
                '<td>' + element.FechaNacimiento + ' </td>' +
                '<td>' + element.Celular + ' </td>' +
                '<td>' + element.Telefono + ' </td>' +
                '<td>' + element.Escuela + ' </td>' +
                '<td>' + element.Carreara + ' </td>' +
                '<td>' + element.Semestre + ' </td>' +
                '<td>' + element.Estado + ' </td>' +
                '</tr>'
                );
    }

}
function borrarEstudiLista(idN) {
    $.ajax({
        url: api + "EstudiantesSv/" + idN,
        type: "Delete"
    });
    console.log("Se borro EstudiLista: " + idN);
    listaEstudiLista()
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
            if (datoEdit !== null) {
                console.log("Acutualizar  EstudiantesSv: " + idN);
                $("#id02").append(
                        '<br>' +
                        '<br>' +
                        '<br>' +
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="w3-container">' +
                        '<br>' +
                        '<form>' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="EstudiantesID" value="' + datoEdit.EstudiantesID + '" readonly="readonly">' +
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
                        '<label for="usr">TipoDocumento:</label>' +
                        '<input type="text" class="form-control" id="TipoDocumento" value="' + datoEdit.TipoDocumento + ' ">' +
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
                        '<label for="usr">Celular:</label>' +
                        '<input type="text" class="form-control" id="Celular" value="' + datoEdit.Celular + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Telefono:</label>' +
                        '<input type="text" class="form-control" id="Telefono" value="' + datoEdit.Telefono + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Escuela:</label>' +
                        '<input type="text" class="form-control" id="Escuela" value="' + datoEdit.Escuela + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Carreara:</label>' +
                        '<input type="text" class="form-control" id="Carreara" value="' + datoEdit.Carreara + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Semestre:</label>' +
                        '<input type="text" class="form-control" id="Semestre" value="' + datoEdit.Semestre + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Estado:</label>' +
                        '<input type="text" class="form-control" id="Estado" value="' + datoEdit.Estado + ' ">' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarEstudiantes(), document.getElementById(' + m + ').style.display=' + b + '">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>'
                        );
            }


        },
        error: function () {
            alert('Error El formulario actualizarEstudiLista');
        }
    });
}

function crearFormConvocatorias() {
    $.ajax({
        url: api + "ConvocatoriasSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario ConvocatoriasSv");
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
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">NoEstudienates Convocatorias :</label>' +
                    '<input type="number"' +
                    'class="form-control" id="NoEstudienates" placeholder="Ingrese NoEstudienates">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">NoReserva Convocatorias :</label>' +
                    '<input type="number"' +
                    'class="form-control" id="NoReserva" placeholder="Ingrese NoReserva">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">PeriodoAcademico Convocatorias :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="PeriodoAcademico" placeholder="Ingrese PeriodoAcademico">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Estado Convocatorias :</label>' +
                    '<input type="radio"' +
                    'class="form-control" id="Estado" placeholder="Ingrese Estado">' +
                    '</div>'
                    );


            $("#Convocatoriascrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Administrador:</label>' +
                    '<SELECT class="form-control" id="AdministradorlistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                    '<OPTION value="errror">Error</OPTION>' +
                    '</SELECT>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Dependencia:</label>' +
                    '<SELECT class="form-control" id="DependencialistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                    '<OPTION value="errror">Error</OPTION>' +
                    '</SELECT>' +
                    '</div>'
                    );



            $("#Convocatoriascrear").append(
                    '<button type="submit" class="btn btn-primary" onclick="crearConvocatorias()">Crear3</button>'
                    );

            selectAdministrador();
            selectDependencia();
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

            if (data !== null) {
                PintarConvocatoriaLista(data);
            } else {
                console.log("No existen Convocatorias");
            }
        },
        error: function () {
            alert('Error function listaConvocatoriaLista');
            console.log('Error function listaConvocatoriaLista');
        }
    });

}


function PintarConvocatoriaLista(listasDatos) {
    console.log("Pintar la Lista de ConvocatoriasSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Convocatoriaslista2").empty();


    $("#Convocatoriaslista2").append(
            '<thead>' +
            '<tr class="w3-light-grey w3-hover-red">' +
            '<th>id</th>' +
            '<th>Nombre</th>' +
            '<th>FechaInicio</th>' +
            '<th>FechaFin</th>' +
            '<th>Encargado</th>' +
            '<th>Descripcion</th>' +
            '<th>HorasGanadas</th>' +
            '<th>NoEstudienates</th>' +
            '<th>NoReserva</th>' +
            '<th>PeriodoAcademico</th>' +
            '<th>Estado</th>' +
            '</tr>' +
            '</thead>');

    if (listasDatos.ConvocatoriasDTO instanceof Array !== false) {
        console.log("Entro a Pintar la Lista de ConvocatoriasSv");
        listasDatos.ConvocatoriasDTO.forEach(element => {
            $("#Convocatoriaslista2").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.ConvocatoriasID + ' </td>' +
                    '<td>' + element.Nombre + ' </td>' +
                    '<td>' + element.FechaInicio + ' </td>' +
                    '<td>' + element.FechaFin + ' </td>' +
                    '<td>' + element.Encargado + ' </td>' +
                    '<td>' + element.Descripcion + ' </td>' +
                    '<td>' + element.HorasGanadas + ' </td>' +
                    '<td>' + element.NoEstudienates + ' </td>' +
                    '<td>' + element.NoReserva + ' </td>' +
                    '<td>' + element.PeriodoAcademico + ' </td>' +
                    '<td>' + element.Estado + ' </td>' +
                    '</tr>'
                    );
        });
    } else {
        var element = listasDatos.ConvocatoriasDTO;
        console.log("Entro a Pintar Un ConvocatoriasSv");
        $("#Convocatoriaslista2").append(
                '<tr class="w3-hover-blue">' +
                '<td>' + element.ConvocatoriasID + ' </td>' +
                '<td>' + element.Nombre + ' </td>' +
                '<td>' + element.FechaInicio + ' </td>' +
                '<td>' + element.FechaFin + ' </td>' +
                '<td>' + element.Encargado + ' </td>' +
                '<td>' + element.Descripcion + ' </td>' +
                '<td>' + element.HorasGanadas + ' </td>' +
                '<td>' + element.NoEstudienates + ' </td>' +
                '<td>' + element.NoReserva + ' </td>' +
                '<td>' + element.PeriodoAcademico + ' </td>' +
                '<td>' + element.Estado + ' </td>' +
                '<td><button type="submit" class="btn btn-secondary" onclick="borrarConvocatoriaLista(' + element.ConvocatoriasID + ')"><i class="fa fa-trash"></i></button></td>' +
                '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarConvocatoriaLista(' + element.ConvocatoriasID + ')" class="btn btn-secondary" (click)="editarDato(item.ConvocatoriasID)"><i class="fa fa-edit"></i></button></td>' +
                '</tr>'
                );
    }

}
function borrarConvocatoriaLista(idN) {
    $.ajax({
        url: api + "ConvocatoriasSv/" + idN,
        type: "Delete"
    });
    console.log("Se borro ConvocatoriaLista: " + idN);
    listaConvocatoriaLista()
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
            if (datoEdit !== null) {
                console.log("Acutualizar  ConvocatoriasSv: " + idN);
                $("#id02").append(
                        '<br>' +
                        '<br>' +
                        '<br>' +
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="w3-container">' +
                        '<br>' +
                        '<form>' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="ConvocatoriasID" value="' + datoEdit.ConvocatoriasID + '" readonly="readonly">' +
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
                        '<label for="usr">NoEstudienates:</label>' +
                        '<input type="text" class="form-control" id="NoEstudienates" value="' + datoEdit.NoEstudienates + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">NoReserva:</label>' +
                        '<input type="text" class="form-control" id="NoReserva" value="' + datoEdit.NoReserva + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">PeriodoAcademico:</label>' +
                        '<input type="text" class="form-control" id="PeriodoAcademico" value="' + datoEdit.PeriodoAcademico + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Estado:</label>' +
                        '<input type="text" class="form-control" id="Estado" value="' + datoEdit.Estado + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Administrador :</label>' +
                        '<SELECT class="form-control" id="AdministradorlistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Dependencia :</label>' +
                        '<SELECT class="form-control" id="DependencialistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarConvocatorias(), document.getElementById(' + m + ').style.display=' + b + '">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>'
                        );
            }

            selectAdministrador();
            selectDependencia();

        },
        error: function () {
            alert('Error El formulario actualizarConvocatoriaLista');
        }
    });
}

function crearFormBitacora() {
    $.ajax({
        url: api + "BitacoraSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario BitacoraSv");
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
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Estado Bitacora :</label>' +
                    '<input type="radio"' +
                    'class="form-control" id="Estado" placeholder="Ingrese Estado">' +
                    '</div>'
                    );


            $("#Bitacoracrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Estudiantes:</label>' +
                    '<SELECT class="form-control" id="EstudianteslistaSELECT style="height: calc(2.25rem + 10px)"> ' +
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

            if (data !== null) {
                PintarBitacoraLista(data);
            } else {
                console.log("No existen Bitacora");
            }
        },
        error: function () {
            alert('Error function listaBitacoraLista');
            console.log('Error function listaBitacoraLista');
        }
    });

}


function PintarBitacoraLista(listasDatos) {
    console.log("Pintar la Lista de BitacoraSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Bitacoralista").empty();


    $("#Bitacoralista").append('<thead>' +
            '<tr class="w3-light-grey w3-hover-red">' +
            '<th>id</th>' +
            '<th>Nombre</th>' +
            '<th>Fecha</th>' +
            '<th>Hora</th>' +
            '<th>Descripcion</th>' +
            '<th>Estado</th>' +
            '<th colspan=2>Acciones</th>' +
            '</tr>' +
            '</thead>');

    if (listasDatos.BitacoraDTO instanceof Array !== false) {
        console.log("Entro a Pintar la Lista de BitacoraSv");
        listasDatos.BitacoraDTO.forEach(element => {
            $("#Bitacoralista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.BitacoraID + ' </td>' +
                    '<td>' + element.Nombre + ' </td>' +
                    '<td>' + element.Fecha + ' </td>' +
                    '<td>' + element.Hora + ' </td>' +
                    '<td>' + element.Descripcion + ' </td>' +
                    '<td>' + element.Estado + ' </td>' +
                    '<td><button type="submit" class="btn btn-secondary" onclick="borrarBitacoraLista(' + element.BitacoraID + ')"><i class="fa fa-trash"></i></button></td>' +
                    '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarBitacoraLista(' + element.BitacoraID + ')" class="btn btn-secondary" (click)="editarDato(item.BitacoraID)"><i class="fa fa-edit"></i></button></td>' +
                    '</tr>'
                    );
        });
    } else {
        var element = listasDatos.BitacoraDTO;
        console.log("Entro a Pintar Un BitacoraSv");
        $("#Bitacoralista").append(
                '<tr class="w3-hover-blue">' +
                '<td>' + element.BitacoraID + ' </td>' +
                '<td>' + element.Nombre + ' </td>' +
                '<td>' + element.Fecha + ' </td>' +
                '<td>' + element.Hora + ' </td>' +
                '<td>' + element.Descripcion + ' </td>' +
                '<td>' + element.Estado + ' </td>' +
                '<td><button type="submit" class="btn btn-secondary" onclick="borrarBitacoraLista(' + element.BitacoraID + ')"><i class="fa fa-trash"></i></button></td>' +
                '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarBitacoraLista(' + element.BitacoraID + ')" class="btn btn-secondary" (click)="editarDato(item.BitacoraID)"><i class="fa fa-edit"></i></button></td>' +
                '</tr>'
                );
    }

}
function borrarBitacoraLista(idN) {
    $.ajax({
        url: api + "BitacoraSv/" + idN,
        type: "Delete"
    });
    console.log("Se borro BitacoraLista: " + idN);
    listaBitacoraLista()
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
            if (datoEdit !== null) {
                console.log("Acutualizar  BitacoraSv: " + idN);
                $("#id02").append(
                        '<br>' +
                        '<br>' +
                        '<br>' +
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="w3-container">' +
                        '<br>' +
                        '<form>' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="BitacoraID" value="' + datoEdit.BitacoraID + '" readonly="readonly">' +
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
                        '<label for="usr">Estado:</label>' +
                        '<input type="text" class="form-control" id="Estado" value="' + datoEdit.Estado + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Estudiantes :</label>' +
                        '<SELECT class="form-control" id="EstudianteslistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarBitacora(), document.getElementById(' + m + ').style.display=' + b + '">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>'
                        );
            }

            selectEstudiantes();

        },
        error: function () {
            alert('Error El formulario actualizarBitacoraLista');
        }
    });
}

function crearFormSanciones() {
    $.ajax({
        url: api + "SancionesSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario SancionesSv");
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
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Estado Sanciones :</label>' +
                    '<input type="radio"' +
                    'class="form-control" id="Estado" placeholder="Ingrese Estado">' +
                    '</div>'
                    );


            $("#Sancionescrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Estudiantes:</label>' +
                    '<SELECT class="form-control" id="EstudianteslistaSELECT style="height: calc(2.25rem + 10px)"> ' +
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

            if (data !== null) {
                PintarSancionesLista(data);
            } else {
                console.log("No existen Sanciones");
            }
        },
        error: function () {
            alert('Error function listaSancionesLista');
            console.log('Error function listaSancionesLista');
        }
    });

}


function PintarSancionesLista(listasDatos) {
    console.log("Pintar la Lista de SancionesSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Sancioneslista").empty();


    $("#Sancioneslista").append('<thead>' +
            '<tr class="w3-light-grey w3-hover-red">' +
            '<th>id</th>' +
            '<th>Descripcion</th>' +
            '<th>NumeroConvocatria</th>' +
            '<th>ConInicial</th>' +
            '<th>ConFinal</th>' +
            '<th>Estado</th>' +
            '<th colspan=2>Acciones</th>' +
            '</tr>' +
            '</thead>');

    if (listasDatos.SancionesDTO instanceof Array !== false) {
        console.log("Entro a Pintar la Lista de SancionesSv");
        listasDatos.SancionesDTO.forEach(element => {
            $("#Sancioneslista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.SancionesID + ' </td>' +
                    '<td>' + element.Descripcion + ' </td>' +
                    '<td>' + element.NumeroConvocatria + ' </td>' +
                    '<td>' + element.ConInicial + ' </td>' +
                    '<td>' + element.ConFinal + ' </td>' +
                    '<td>' + element.Estado + ' </td>' +
                    '</tr>'
                    );
        });
    } else {
        var element = listasDatos.SancionesDTO;
        console.log("Entro a Pintar Un SancionesSv");
        $("#Sancioneslista").append(
                '<tr class="w3-hover-blue">' +
                '<td>' + element.SancionesID + ' </td>' +
                '<td>' + element.Descripcion + ' </td>' +
                '<td>' + element.NumeroConvocatria + ' </td>' +
                '<td>' + element.ConInicial + ' </td>' +
                '<td>' + element.ConFinal + ' </td>' +
                '<td>' + element.Estado + ' </td>' +
                '<td><button type="submit" class="btn btn-secondary" onclick="borrarSancionesLista(' + element.SancionesID + ')"><i class="fa fa-trash"></i></button></td>' +
                '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarSancionesLista(' + element.SancionesID + ')" class="btn btn-secondary" (click)="editarDato(item.SancionesID)"><i class="fa fa-edit"></i></button></td>' +
                '</tr>'
                );
    }

}
function borrarSancionesLista(idN) {
    $.ajax({
        url: api + "SancionesSv/" + idN,
        type: "Delete"
    });
    console.log("Se borro SancionesLista: " + idN);
    listaSancionesLista()
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
            if (datoEdit !== null) {
                console.log("Acutualizar  SancionesSv: " + idN);
                $("#id02").append(
                        '<br>' +
                        '<br>' +
                        '<br>' +
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="w3-container">' +
                        '<br>' +
                        '<form>' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="SancionesID" value="' + datoEdit.SancionesID + '" readonly="readonly">' +
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
                        '<label for="usr">Estado:</label>' +
                        '<input type="text" class="form-control" id="Estado" value="' + datoEdit.Estado + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Estudiantes :</label>' +
                        '<SELECT class="form-control" id="EstudianteslistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarSanciones(), document.getElementById(' + m + ').style.display=' + b + '">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>'
                        );
            }

            selectEstudiantes();

        },
        error: function () {
            alert('Error El formulario actualizarSancionesLista');
        }
    });
}

function crearFormPrincipal() {
    $.ajax({
        url: api + "PrincipalSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario PrincipalSv");
            console.log("*****************");

            $("#Principalcrear").empty();
            $("#Principalcrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Estado Principal :</label>' +
                    '<input type="radio"' +
                    'class="form-control" id="Estado" placeholder="Ingrese Estado">' +
                    '</div>'
                    );


            $("#Principalcrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Estudiantes:</label>' +
                    '<SELECT class="form-control" id="EstudianteslistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                    '<OPTION value="errror">Error</OPTION>' +
                    '</SELECT>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Convocatorias:</label>' +
                    '<SELECT class="form-control" id="ConvocatoriaslistaSELECT style="height: calc(2.25rem + 10px)"> ' +
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

            if (data !== null) {
                PintarPrincipalLista(data);
            } else {
                console.log("No existen Principal");
            }
        },
        error: function () {
            alert('Error function listaPrincipalLista');
            console.log('Error function listaPrincipalLista');
        }
    });

}


function PintarPrincipalLista(listasDatos) {
    console.log("Pintar la Lista de PrincipalSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Principallista").empty();


    $("#Principallista").append('<thead>' +
            '<tr class="w3-light-grey w3-hover-red">' +
            '<th>id</th>' +
            '<th>Estado</th>' +
            '<th colspan=2>Acciones</th>' +
            '</tr>' +
            '</thead>');

    if (listasDatos.PrincipalDTO instanceof Array !== false) {
        console.log("Entro a Pintar la Lista de PrincipalSv");
        listasDatos.PrincipalDTO.forEach(element => {
            $("#Principallista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.PrincipalID + ' </td>' +
                    '<td>' + element.Estado + ' </td>' +
                    '<td><button type="submit" class="btn btn-secondary" onclick="borrarPrincipalLista(' + element.PrincipalID + ')"><i class="fa fa-trash"></i></button></td>' +
                    '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarPrincipalLista(' + element.PrincipalID + ')" class="btn btn-secondary" (click)="editarDato(item.PrincipalID)"><i class="fa fa-edit"></i></button></td>' +
                    '</tr>'
                    );
        });
    } else {
        var element = listasDatos.PrincipalDTO;
        console.log("Entro a Pintar Un PrincipalSv");
        $("#Principallista").append(
                '<tr class="w3-hover-blue">' +
                '<td>' + element.PrincipalID + ' </td>' +
                '<td>' + element.Estado + ' </td>' +
                '<td><button type="submit" class="btn btn-secondary" onclick="borrarPrincipalLista(' + element.PrincipalID + ')"><i class="fa fa-trash"></i></button></td>' +
                '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarPrincipalLista(' + element.PrincipalID + ')" class="btn btn-secondary" (click)="editarDato(item.PrincipalID)"><i class="fa fa-edit"></i></button></td>' +
                '</tr>'
                );
    }

}
function borrarPrincipalLista(idN) {
    $.ajax({
        url: api + "PrincipalSv/" + idN,
        type: "Delete"
    });
    console.log("Se borro PrincipalLista: " + idN);
    listaPrincipalLista()
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
            if (datoEdit !== null) {
                console.log("Acutualizar  PrincipalSv: " + idN);
                $("#id02").append(
                        '<br>' +
                        '<br>' +
                        '<br>' +
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="w3-container">' +
                        '<br>' +
                        '<form>' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="PrincipalID" value="' + datoEdit.PrincipalID + '" readonly="readonly">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Estado:</label>' +
                        '<input type="text" class="form-control" id="Estado" value="' + datoEdit.Estado + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Estudiantes :</label>' +
                        '<SELECT class="form-control" id="EstudianteslistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Convocatorias :</label>' +
                        '<SELECT class="form-control" id="ConvocatoriaslistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarPrincipal(), document.getElementById(' + m + ').style.display=' + b + '">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>'
                        );
            }

            selectEstudiantes();
            selectConvocatorias();

        },
        error: function () {
            alert('Error El formulario actualizarPrincipalLista');
        }
    });
}

function crearFormReserva() {
    $.ajax({
        url: api + "ReservaSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario ReservaSv");
            console.log("*****************");

            $("#Reservacrear").empty();
            $("#Reservacrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Estado Reserva :</label>' +
                    '<input type="radio"' +
                    'class="form-control" id="Estado" placeholder="Ingrese Estado">' +
                    '</div>'
                    );


            $("#Reservacrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Estudiantes:</label>' +
                    '<SELECT class="form-control" id="EstudianteslistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                    '<OPTION value="errror">Error</OPTION>' +
                    '</SELECT>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Convocatorias:</label>' +
                    '<SELECT class="form-control" id="ConvocatoriaslistaSELECT style="height: calc(2.25rem + 10px)"> ' +
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

            if (data !== null) {
                PintarReservaLista(data);
            } else {
                console.log("No existen Reserva");
            }
        },
        error: function () {
            alert('Error function listaReservaLista');
            console.log('Error function listaReservaLista');
        }
    });

}


function PintarReservaLista(listasDatos) {
    console.log("Pintar la Lista de ReservaSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Reservalista").empty();


    $("#Reservalista").append('<thead>' +
            '<tr class="w3-light-grey w3-hover-red">' +
            '<th>id</th>' +
            '<th>Estado</th>' +
            '<th colspan=2>Acciones</th>' +
            '</tr>' +
            '</thead>');

    if (listasDatos.ReservaDTO instanceof Array !== false) {
        console.log("Entro a Pintar la Lista de ReservaSv");
        listasDatos.ReservaDTO.forEach(element => {
            $("#Reservalista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.ReservaID + ' </td>' +
                    '<td>' + element.Estado + ' </td>' +
                    '<td><button type="submit" class="btn btn-secondary" onclick="borrarReservaLista(' + element.ReservaID + ')"><i class="fa fa-trash"></i></button></td>' +
                    '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarReservaLista(' + element.ReservaID + ')" class="btn btn-secondary" (click)="editarDato(item.ReservaID)"><i class="fa fa-edit"></i></button></td>' +
                    '</tr>'
                    );
        });
    } else {
        var element = listasDatos.ReservaDTO;
        console.log("Entro a Pintar Un ReservaSv");
        $("#Reservalista").append(
                '<tr class="w3-hover-blue">' +
                '<td>' + element.ReservaID + ' </td>' +
                '<td>' + element.Estado + ' </td>' +
                '<td><button type="submit" class="btn btn-secondary" onclick="borrarReservaLista(' + element.ReservaID + ')"><i class="fa fa-trash"></i></button></td>' +
                '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarReservaLista(' + element.ReservaID + ')" class="btn btn-secondary" (click)="editarDato(item.ReservaID)"><i class="fa fa-edit"></i></button></td>' +
                '</tr>'
                );
    }

}
function borrarReservaLista(idN) {
    $.ajax({
        url: api + "ReservaSv/" + idN,
        type: "Delete"
    });
    console.log("Se borro ReservaLista: " + idN);
    listaReservaLista()
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
            if (datoEdit !== null) {
                console.log("Acutualizar  ReservaSv: " + idN);
                $("#id02").append(
                        '<br>' +
                        '<br>' +
                        '<br>' +
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="w3-container">' +
                        '<br>' +
                        '<form>' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="ReservaID" value="' + datoEdit.ReservaID + '" readonly="readonly">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Estado:</label>' +
                        '<input type="text" class="form-control" id="Estado" value="' + datoEdit.Estado + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Estudiantes :</label>' +
                        '<SELECT class="form-control" id="EstudianteslistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Convocatorias :</label>' +
                        '<SELECT class="form-control" id="ConvocatoriaslistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarReserva(), document.getElementById(' + m + ').style.display=' + b + '">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>'
                        );
            }

            selectEstudiantes();
            selectConvocatorias();

        },
        error: function () {
            alert('Error El formulario actualizarReservaLista');
        }
    });
}

function crearFormEscuela() {
    $.ajax({
        url: api + "EscuelaSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario EscuelaSv");
            console.log("*****************");

            $("#Escuelacrear").empty();
            $("#Escuelacrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Nombre Escuela :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Nombre" placeholder="Ingrese Nombre">' +
                    '</div>'
                    );


            $("#Escuelacrear").append(+
                    '<div class="form-group">' +
                    '<label for="usr">Administrador:</label>' +
                    '<SELECT class="form-control" id="AdministradorlistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                    '<OPTION value="errror">Error</OPTION>' +
                    '</SELECT>' +
                    '</div>'
                    );



            $("#Escuelacrear").append(
                    '<button type="submit" class="btn btn-primary" onclick="crearEscuela()">Crear3</button>'
                    );

            selectAdministrador();
        },

        error: function () {
            alert('Error function selectEscuela');
        }
    });
}
function listaEscuelaLista() {
    $.ajax({
        url: api + "EscuelaSv",
        type: "Get",
        success: function (data) {
            console.log("Servicio Listar EscuelaSv");
            console.log(data);

            if (data !== null) {
                PintarEscuelaLista(data);
            } else {
                console.log("No existen Escuela");
            }
        },
        error: function () {
            alert('Error function listaEscuelaLista');
            console.log('Error function listaEscuelaLista');
        }
    });

}


function PintarEscuelaLista(listasDatos) {
    console.log("Pintar la Lista de EscuelaSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Escuelalista").empty();


    $("#Escuelalista").append('<thead>' +
            '<tr class="w3-light-grey w3-hover-red">' +
            '<th>id</th>' +
            '<th>Nombre</th>' +
            '<th colspan=2>Acciones</th>' +
            '</tr>' +
            '</thead>');

    if (listasDatos.EscuelaDTO instanceof Array !== false) {
        console.log("Entro a Pintar la Lista de EscuelaSv");
        listasDatos.EscuelaDTO.forEach(element => {
            $("#Escuelalista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.EscuelaID + ' </td>' +
                    '<td>' + element.Nombre + ' </td>' +
                    '<td><button type="submit" class="btn btn-secondary" onclick="borrarEscuelaLista(' + element.EscuelaID + ')"><i class="fa fa-trash"></i></button></td>' +
                    '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarEscuelaLista(' + element.EscuelaID + ')" class="btn btn-secondary" (click)="editarDato(item.EscuelaID)"><i class="fa fa-edit"></i></button></td>' +
                    '</tr>'
                    );
        });
    } else {
        var element = listasDatos.EscuelaDTO;
        console.log("Entro a Pintar Un EscuelaSv");
        $("#Escuelalista").append(
                '<tr class="w3-hover-blue">' +
                '<td>' + element.EscuelaID + ' </td>' +
                '<td>' + element.Nombre + ' </td>' +
                '<td><button type="submit" class="btn btn-secondary" onclick="borrarEscuelaLista(' + element.EscuelaID + ')"><i class="fa fa-trash"></i></button></td>' +
                '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarEscuelaLista(' + element.EscuelaID + ')" class="btn btn-secondary" (click)="editarDato(item.EscuelaID)"><i class="fa fa-edit"></i></button></td>' +
                '</tr>'
                );
    }

}
function borrarEscuelaLista(idN) {
    $.ajax({
        url: api + "EscuelaSv/" + idN,
        type: "Delete"
    });
    console.log("Se borro EscuelaLista: " + idN);
    listaEscuelaLista()
}
function actualizarEscuelaLista(idN) {
    $.ajax({
        url: api + "EscuelaSv/" + idN,
        type: "Get",
        success: function (data) {
            console.log(data);
            var datoEdit = data;

            var m = "'id02'";
            var b = "'none'";

            $("#id02").empty();
            if (datoEdit !== null) {
                console.log("Acutualizar  EscuelaSv: " + idN);
                $("#id02").append(
                        '<br>' +
                        '<br>' +
                        '<br>' +
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="w3-container">' +
                        '<br>' +
                        '<form>' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="EscuelaID" value="' + datoEdit.EscuelaID + '" readonly="readonly">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Nombre:</label>' +
                        '<input type="text" class="form-control" id="Nombre" value="' + datoEdit.Nombre + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Administrador :</label>' +
                        '<SELECT class="form-control" id="AdministradorlistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarEscuela(), document.getElementById(' + m + ').style.display=' + b + '">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>'
                        );
            }

            selectAdministrador();

        },
        error: function () {
            alert('Error El formulario actualizarEscuelaLista');
        }
    });
}

function crearFormDependencia() {
    $.ajax({
        url: api + "DependenciaSv",
        type: "Get",
        success: function (data) {

            console.log("*****************");
            console.log("Funcion Pintar Formulario DependenciaSv");
            console.log("*****************");

            $("#Dependenciacrear").empty();
            $("#Dependenciacrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Nombre Dependencia :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Nombre" placeholder="Ingrese Nombre">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Estado Dependencia :</label>' +
                    '<input type="radio"' +
                    'class="form-control" id="Estado" placeholder="Ingrese Estado">' +
                    '</div>'
                    );


            $("#Dependenciacrear").append(
                    '<div class="form-group">' +
                    '<label for="usr">Escuela:</label>' +
                    '<SELECT class="form-control" id="EscuelalistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                    '<OPTION value="errror">Error</OPTION>' +
                    '</SELECT>' +
                    '</div>'
                    );



            $("#Dependenciacrear").append(
                    '<button type="submit" class="btn btn-primary" onclick="crearDependencia()">Crear3</button>'
                    );

            selectEscuela();
        },

        error: function () {
            alert('Error function selectDependencia');
        }
    });
}
function listaDependenciaLista() {
    $.ajax({
        url: api + "DependenciaSv",
        type: "Get",
        success: function (data) {
            console.log("Servicio Listar DependenciaSv");
            console.log(data);

            if (data !== null) {
                PintarDependenciaLista(data);
            } else {
                console.log("No existen Dependencia");
            }
        },
        error: function () {
            alert('Error function listaDependenciaLista');
            console.log('Error function listaDependenciaLista');
        }
    });

}


function PintarDependenciaLista(listasDatos) {
    console.log("Pintar la Lista de DependenciaSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Dependencialista").empty();


    $("#Dependencialista").append('<thead>' +
            '<tr class="w3-light-grey w3-hover-red">' +
            '<th>id</th>' +
            '<th>Nombre</th>' +
            '<th>Estado</th>' +
            '<th colspan=2>Acciones</th>' +
            '</tr>' +
            '</thead>');

    if (listasDatos.DependenciaDTO instanceof Array !== false) {
        console.log("Entro a Pintar la Lista de DependenciaSv");
        listasDatos.DependenciaDTO.forEach(element => {
            $("#Dependencialista").append(
                    '<tr class="w3-hover-blue">' +
                    '<td>' + element.DependenciaID + ' </td>' +
                    '<td>' + element.Nombre + ' </td>' +
                    '<td>' + element.Estado + ' </td>' +
                    '<td><button type="submit" class="btn btn-secondary" onclick="borrarDependenciaLista(' + element.DependenciaID + ')"><i class="fa fa-trash"></i></button></td>' +
                    '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarDependenciaLista(' + element.DependenciaID + ')" class="btn btn-secondary" (click)="editarDato(item.DependenciaID)"><i class="fa fa-edit"></i></button></td>' +
                    '</tr>'
                    );
        });
    } else {
        var element = listasDatos.DependenciaDTO;
        console.log("Entro a Pintar Un DependenciaSv");
        $("#Dependencialista").append(
                '<tr class="w3-hover-blue">' +
                '<td>' + element.DependenciaID + ' </td>' +
                '<td>' + element.Nombre + ' </td>' +
                '<td>' + element.Estado + ' </td>' +
                '<td><button type="submit" class="btn btn-secondary" onclick="borrarDependenciaLista(' + element.DependenciaID + ')"><i class="fa fa-trash"></i></button></td>' +
                '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarDependenciaLista(' + element.DependenciaID + ')" class="btn btn-secondary" (click)="editarDato(item.DependenciaID)"><i class="fa fa-edit"></i></button></td>' +
                '</tr>'
                );
    }

}
function borrarDependenciaLista(idN) {
    $.ajax({
        url: api + "DependenciaSv/" + idN,
        type: "Delete"
    });
    console.log("Se borro DependenciaLista: " + idN);
    listaDependenciaLista()
}
function actualizarDependenciaLista(idN) {
    $.ajax({
        url: api + "DependenciaSv/" + idN,
        type: "Get",
        success: function (data) {
            console.log(data);
            var datoEdit = data;

            var m = "'id02'";
            var b = "'none'";

            $("#id02").empty();
            if (datoEdit !== null) {
                console.log("Acutualizar  DependenciaSv: " + idN);
                $("#id02").append(
                        '<br>' +
                        '<br>' +
                        '<br>' +
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                        '<header class="w3-container w3-blue">' +
                        '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                        '<h2>Editar </h2>' +
                        '</header>' +
                        '<div class="w3-container">' +
                        '<br>' +
                        '<form>' +
                        '<div class="form-group">' +
                        '<label for="usr">Identificador:</label>' +
                        '<input type="text" class="form-control" id="DependenciaID" value="' + datoEdit.DependenciaID + '" readonly="readonly">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Nombre:</label>' +
                        '<input type="text" class="form-control" id="Nombre" value="' + datoEdit.Nombre + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Estado:</label>' +
                        '<input type="text" class="form-control" id="Estado" value="' + datoEdit.Estado + ' ">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="usr">Escuela :</label>' +
                        '<SELECT class="form-control" id="EscuelalistaSELECT style="height: calc(2.25rem + 10px)"> ' +
                        '<OPTION value="errror">Error</OPTION>' +
                        '</SELECT>' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" onclick="EditarDependencia(), document.getElementById(' + m + ').style.display=' + b + '">Actualizar</button>' +
                        '</form>' +
                        '</div>' +
                        '<div class="w3-container w3-light-grey w3-padding">' +
                        '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                        '</div>' +
                        '</div>'
                        );
            }

            selectEscuela();

        },
        error: function () {
            alert('Error El formulario actualizarDependenciaLista');
        }
    });
}


function selectEscuela() {
    $.ajax({
        url: api + "EscuelaSv",
        type: "Get",
        success: function (data) {

            var listasDatos = data;
            console.log(listasDatos);
            console.log("*****************");
            console.log(listasDatos.EscuelaDTO);
            console.log("*****************");

            $("#EscuelalistaSELECT").empty();
            if (listasDatos !== null) {
                listasDatos.EscuelaDTO.forEach(element => {
                    $("#EscuelalistaSELECT").append(
                            '<OPTION value="' + element.EscuelaID + '">' + element.Nombre + '</OPTION>'
                            );
                });
            }
        },
        error: function () {
            alert('Error function selectEscuela');
        }
    });
}
function crearEscuela() {

    console.log("Servicio Crear EscuelaSv");
    var Escuela = '{' +
            '"Nombre": "' + $("#Nombre").val() + '"'

            + ', ' +
            '"AdministradorFk": {"AdministradorID": "' + $("#AdministradorlistaSELECT").val() + '"}'


            + '}';

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "EscuelaSv",
        data: Escuela,
        dataType: "json",
        success: function (data) {
            console.log("Felicidades ha creado EscuelaSv");
            listaEscuela();
        },
        error: function (data) {
            alert('Error En el Servicio Crear EscuelaSv');
        }
    });
}

function EditarEscuela() {

    console.log("Servicio Editar");
    var Escuela = '{' +
            '"EscuelaID": "' + $("#EscuelaID").val() + '"' + ', ' +
            '"Nombre": "' + $("#Nombre").val() + '"'

            + ', ' +
            '"AdministradorFk": {"AdministradorID": "' + $("#AdministradorlistaSELECT").val() + '"}'

            + '}';

    console.log(Escuela);
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: api + "EscuelaSv",
        data: Escuela,
        dataType: "json",
        success: function (data) {
            console.log("Se enviaron los datos para actualizar la informacion");
            console.log(data);
            listaEscuela();
        },
        error: function (data) {
            alert('Error En el Servicio Actualizar Informacion');
        }
    });

}
function selectDependencia() {
    $.ajax({
        url: api + "DependenciaSv",
        type: "Get",
        success: function (data) {

            var listasDatos = data;
            console.log(listasDatos);
            console.log("*****************");
            console.log(listasDatos.DependenciaDTO);
            console.log("*****************");

            $("#DependencialistaSELECT").empty();
            if (listasDatos !== null) {
                listasDatos.DependenciaDTO.forEach(element => {
                    $("#DependencialistaSELECT").append(
                            '<OPTION value="' + element.DependenciaID + '">' + element.Nombre + '</OPTION>'
                            );
                });
            }
        },
        error: function () {
            alert('Error function selectDependencia');
        }
    });
}
function crearDependencia() {

    console.log("Servicio Crear DependenciaSv");
    var Dependencia = '{' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"Estado": "' + $("#Estado").val() + '"'

            + ', ' +
            '"EscuelaFk": {"EscuelaID": "' + $("#EscuelalistaSELECT").val() + '"}' + ', ' +
            +'}';

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "DependenciaSv",
        data: Dependencia,
        dataType: "json",
        success: function (data) {
            console.log("Felicidades ha creado DependenciaSv");
            listaDependencia();
        },
        error: function (data) {
            alert('Error En el Servicio Crear DependenciaSv');
        }
    });
}

function EditarDependencia() {

    console.log("Servicio Editar");
    var Dependencia = '{' +
            '"DependenciaID": "' + $("#DependenciaID").val() + '"' + ', ' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"Estado": "' + $("#Estado").val() + '"'

            + ', ' +
            '"EscuelaFk": {"EscuelaID": "' + $("#EscuelalistaSELECT").val() + '"}' + ', ' +
            +'}';

    console.log(Dependencia);
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: api + "DependenciaSv",
        data: Dependencia,
        dataType: "json",
        success: function (data) {
            console.log("Se enviaron los datos para actualizar la informacion");
            console.log(data);
            listaDependencia();
        },
        error: function (data) {
            alert('Error En el Servicio Actualizar Informacion');
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
            console.log(listasDatos.AdministradorDTO);
            console.log("*****************");

            $("#AdministradorlistaSELECT").empty();
            if (listasDatos !== null) {
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

    console.log("Servicio Crear AdministradorSv");
    var Administrador = '{' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"Apellidos": "' + $("#Apellidos").val() + '"' + ', ' +
            '"Correo": "' + $("#Correo").val() + '"' + ', ' +
            '"Clave": "' + $("#Clave").val() + '"' + ', ' +
            '"FechaNacimiento": "' + $("#FechaNacimiento").val() + '"' + ', ' +
            '"Telefono": "' + $("#Telefono").val() + '"' + ', ' +
            '"Celular": "' + $("#Celular").val() + '"' + ', ' +
            '"Estado": "' + $("#Estado").val() + '"'




            + '}';

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "AdministradorSv",
        data: Administrador,
        dataType: "json",
        success: function (data) {
            console.log("Felicidades ha creado AdministradorSv");
            listaAdministrador();
        },
        error: function (data) {
            alert('Error En el Servicio Crear AdministradorSv');
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
            '"Telefono": "' + $("#Telefono").val() + '"' + ', ' +
            '"Celular": "' + $("#Celular").val() + '"' + ', ' +
            '"Estado": "' + $("#Estado").val() + '"'



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
            listaAdministrador();
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
            console.log(listasDatos.EstudiantesDTO);
            console.log("*****************");

            $("#EstudianteslistaSELECT").empty();
            if (listasDatos !== null) {
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

    console.log("Servicio Crear EstudiantesSv");
    var Estudiantes = '{' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"Apellidos": "' + $("#Apellidos").val() + '"' + ', ' +
            '"Correo": "' + $("#Correo").val() + '"' + ', ' +
            '"Clave": "' + $("#Clave").val() + '"' + ', ' +
            '"TipoDocumento": "' + $("#TipoDocumento").val() + '"' + ', ' +
            '"Documento": "' + $("#Documento").val() + '"' + ', ' +
            '"FechaNacimiento": "' + $("#FechaNacimiento").val() + '"' + ', ' +
            '"Celular": "' + $("#Celular").val() + '"' + ', ' +
            '"Telefono": "' + $("#Telefono").val() + '"' + ', ' +
            '"Escuela": "' + $("#Escuela").val() + '"' + ', ' +
            '"Carreara": "' + $("#Carreara").val() + '"' + ', ' +
            '"Semestre": "' + $("#Semestre").val() + '"' + ', ' +
            '"Estado": "' + $("#Estado").val() + '"'

            + '}';

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "EstudiantesSv",
        data: Estudiantes,
        dataType: "json",
        success: function (data) {
            console.log("Felicidades ha creado EstudiantesSv");
            listaEstudiantes();
        },
        error: function (data) {
            alert('Error En el Servicio Crear EstudiantesSv');
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
            '"TipoDocumento": "' + $("#TipoDocumento").val() + '"' + ', ' +
            '"Documento": "' + $("#Documento").val() + '"' + ', ' +
            '"FechaNacimiento": "' + $("#FechaNacimiento").val() + '"' + ', ' +
            '"Celular": "' + $("#Celular").val() + '"' + ', ' +
            '"Telefono": "' + $("#Telefono").val() + '"' + ', ' +
            '"Escuela": "' + $("#Escuela").val() + '"' + ', ' +
            '"Carreara": "' + $("#Carreara").val() + '"' + ', ' +
            '"Semestre": "' + $("#Semestre").val() + '"' + ', ' +
            '"Estado": "' + $("#Estado").val() + '"'


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
            listaEstudiantes();
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
            console.log(listasDatos.ConvocatoriasDTO);
            console.log("*****************");

            $("#ConvocatoriaslistaSELECT").empty();
            if (listasDatos !== null) {
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

    console.log("Servicio Crear ConvocatoriasSv");
    var Convocatorias = '{' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"FechaInicio": "' + $("#FechaInicio").val() + '"' + ', ' +
            '"FechaFin": "' + $("#FechaFin").val() + '"' + ', ' +
            '"Encargado": "' + $("#Encargado").val() + '"' + ', ' +
            '"Descripcion": "' + $("#Descripcion").val() + '"' + ', ' +
            '"HorasGanadas": "' + $("#HorasGanadas").val() + '"' + ', ' +
            '"NoEstudienates": "' + $("#NoEstudienates").val() + '"' + ', ' +
            '"NoReserva": "' + $("#NoReserva").val() + '"' + ', ' +
            '"PeriodoAcademico": "' + $("#PeriodoAcademico").val() + '"' + ', ' +
            '"Estado": "' + $("#Estado").val() + '"'

            + ', ' +
            '"AdministradorFk": {"AdministradorID": "' + $("#AdministradorlistaSELECT").val() + '"}' + ', ' +
            '"DependenciaFk": {"DependenciaID": "' + $("#DependencialistaSELECT").val() + '"}'


            + '}';

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "ConvocatoriasSv",
        data: Convocatorias,
        dataType: "json",
        success: function (data) {
            console.log("Felicidades ha creado ConvocatoriasSv");
            listaConvocatorias();
        },
        error: function (data) {
            alert('Error En el Servicio Crear ConvocatoriasSv');
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
            '"Encargado": "' + $("#Encargado").val() + '"' + ', ' +
            '"Descripcion": "' + $("#Descripcion").val() + '"' + ', ' +
            '"HorasGanadas": "' + $("#HorasGanadas").val() + '"' + ', ' +
            '"NoEstudienates": "' + $("#NoEstudienates").val() + '"' + ', ' +
            '"NoReserva": "' + $("#NoReserva").val() + '"' + ', ' +
            '"PeriodoAcademico": "' + $("#PeriodoAcademico").val() + '"' + ', ' +
            '"Estado": "' + $("#Estado").val() + '"'

            + ', ' +
            '"AdministradorFk": {"AdministradorID": "' + $("#AdministradorlistaSELECT").val() + '"}' + ', ' +
            '"DependenciaFk": {"DependenciaID": "' + $("#DependencialistaSELECT").val() + '"}'

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
            listaConvocatorias();
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
            console.log(listasDatos.BitacoraDTO);
            console.log("*****************");

            $("#BitacoralistaSELECT").empty();
            if (listasDatos !== null) {
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

    console.log("Servicio Crear BitacoraSv");
    var Bitacora = '{' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"Fecha": "' + $("#Fecha").val() + '"' + ', ' +
            '"Hora": "' + $("#Hora").val() + '"' + ', ' +
            '"Descripcion": "' + $("#Descripcion").val() + '"' + ', ' +
            '"Estado": "' + $("#Estado").val() + '"'

            + ', ' +
            '"EstudiantesFk": {"EstudiantesID": "' + $("#EstudianteslistaSELECT").val() + '"}'


            + '}';

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "BitacoraSv",
        data: Bitacora,
        dataType: "json",
        success: function (data) {
            console.log("Felicidades ha creado BitacoraSv");
            listaBitacora();
        },
        error: function (data) {
            alert('Error En el Servicio Crear BitacoraSv');
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
            '"Descripcion": "' + $("#Descripcion").val() + '"' + ', ' +
            '"Estado": "' + $("#Estado").val() + '"'

            + ', ' +
            '"EstudiantesFk": {"EstudiantesID": "' + $("#EstudianteslistaSELECT").val() + '"}'

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
            listaBitacora();
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
            console.log(listasDatos.SancionesDTO);
            console.log("*****************");

            $("#SancioneslistaSELECT").empty();
            if (listasDatos !== null) {
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

    console.log("Servicio Crear SancionesSv");
    var Sanciones = '{' +
            '"Descripcion": "' + $("#Descripcion").val() + '"' + ', ' +
            '"NumeroConvocatria": "' + $("#NumeroConvocatria").val() + '"' + ', ' +
            '"ConInicial": "' + $("#ConInicial").val() + '"' + ', ' +
            '"ConFinal": "' + $("#ConFinal").val() + '"' + ', ' +
            '"Estado": "' + $("#Estado").val() + '"'

            + ', ' +
            '"EstudiantesFk": {"EstudiantesID": "' + $("#EstudianteslistaSELECT").val() + '"}'


            + '}';

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "SancionesSv",
        data: Sanciones,
        dataType: "json",
        success: function (data) {
            console.log("Felicidades ha creado SancionesSv");
            listaSanciones();
        },
        error: function (data) {
            alert('Error En el Servicio Crear SancionesSv');
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
            '"ConFinal": "' + $("#ConFinal").val() + '"' + ', ' +
            '"Estado": "' + $("#Estado").val() + '"'

            + ', ' +
            '"EstudiantesFk": {"EstudiantesID": "' + $("#EstudianteslistaSELECT").val() + '"}'

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
            listaSanciones();
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
            console.log(listasDatos.PrincipalDTO);
            console.log("*****************");

            $("#PrincipallistaSELECT").empty();
            if (listasDatos !== null) {
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
function crearPrincipal() {

    console.log("Servicio Crear PrincipalSv");
    var Principal = '{' +
            '"Estado": "' + $("#Estado").val() + '"'

            + ', ' +
            '"EstudiantesFk": {"EstudiantesID": "' + $("#EstudianteslistaSELECT").val() + '"}' + ', ' +
            '"ConvocatoriasFk": {"ConvocatoriasID": "' + $("#ConvocatoriaslistaSELECT").val() + '"}'


            + '}';

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "PrincipalSv",
        data: Principal,
        dataType: "json",
        success: function (data) {
            console.log("Felicidades ha creado PrincipalSv");
            listaPrincipal();
        },
        error: function (data) {
            alert('Error En el Servicio Crear PrincipalSv');
        }
    });
}

function EditarPrincipal() {

    console.log("Servicio Editar");
    var Principal = '{' +
            '"PrincipalID": "' + $("#PrincipalID").val() + '"' + ', ' +
            '"Estado": "' + $("#Estado").val() + '"'

            + ', ' +
            '"EstudiantesFk": {"EstudiantesID": "' + $("#EstudianteslistaSELECT").val() + '"}' + ', ' +
            '"ConvocatoriasFk": {"ConvocatoriasID": "' + $("#ConvocatoriaslistaSELECT").val() + '"}'

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
            listaPrincipal();
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
            console.log(listasDatos.ReservaDTO);
            console.log("*****************");

            $("#ReservalistaSELECT").empty();
            if (listasDatos !== null) {
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

    console.log("Servicio Crear ReservaSv");
    var Reserva = '{' +
            '"Estado": "' + $("#Estado").val() + '"'

            + ', ' +
            '"EstudiantesFk": {"EstudiantesID": "' + $("#EstudianteslistaSELECT").val() + '"}' + ', ' +
            '"ConvocatoriasFk": {"ConvocatoriasID": "' + $("#ConvocatoriaslistaSELECT").val() + '"}'


            + '}';

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "ReservaSv",
        data: Reserva,
        dataType: "json",
        success: function (data) {
            console.log("Felicidades ha creado ReservaSv");
            listaReserva();
        },
        error: function (data) {
            alert('Error En el Servicio Crear ReservaSv');
        }
    });
}

function EditarReserva() {

    console.log("Servicio Editar");
    var Reserva = '{' +
            '"ReservaID": "' + $("#ReservaID").val() + '"' + ', ' +
            '"Estado": "' + $("#Estado").val() + '"'

            + ', ' +
            '"EstudiantesFk": {"EstudiantesID": "' + $("#EstudianteslistaSELECT").val() + '"}' + ', ' +
            '"ConvocatoriasFk": {"ConvocatoriasID": "' + $("#ConvocatoriaslistaSELECT").val() + '"}'

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
            listaReserva();
        },
        error: function (data) {
            alert('Error En el Servicio Actualizar Informacion');
        }
    });

}
