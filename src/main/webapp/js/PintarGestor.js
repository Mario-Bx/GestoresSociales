/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var api = "http://localhost:8090/indexRest/rest/";

function DatosEstudiLista(id) {
    $.ajax({
        url: api + "EstudiantesSv/" + id,
        type: "Get",
        success: function (data) {
            console.log("Servicio ID EstudiantesSv");
            console.log(data);

            PintarEstudiante(data);
            PintarMisConvocatoriaLista(data);
            PintarMisBitacoraLista(data);

        },
        error: function () {
            alert('Error function listaEstudiLista');
        }
    });

}
function PintarEstudiante(Datos) {
    console.log("Pintar la Lista de EstudiantesSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#InfoGestor").empty();

    if (Datos !== null) {



        $("#InfoGestor").append(
                '<p><i class="glyphicon glyphicon-user fa-fw w3-margin-right w3-large w3-text-teal"></i>' + Datos.Nombre + ' ' + Datos.Apellidos + '</p>' +
                '<p></p>' +
                '<p><i class="fa fa fa-address-card-o fa-fw w3-margin-right w3-large w3-text-teal"></i>' + Datos.Documento + '</p>' +
                '<p><i class="fa fa fa-birthday-cake fa-fw w3-margin-right w3-large w3-text-teal"></i>' + Datos.FechaNacimiento + '</p>' +
                '<p><i class="fa fa fa-university fa-fw w3-margin-right w3-large w3-text-teal"></i>' + Datos.Escuela + '</p>' +
                '<p><i class="fa fa-mortar-board fa-fw w3-margin-right w3-large w3-text-teal"></i>' + Datos.Carreara + '</p>' +
                '<p><i class="fa  fa-exclamation-triangle fa-fw w3-margin-right w3-large w3-text-teal"></i>' + " convocatorias de penalizacion : " + '</p>' +
                '<p><i class="fa fa-tachometer fa-fw w3-margin-right w3-large w3-text-teal"></i>' + "horas realizadas : " + " " + '</p>' +
                '<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>' + Datos.Correo + '</p>' +
                '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>' + Datos.Telefono + '</p>' +
                '<hr>' +
                '<a href="cerrarsesion.jsp" class="w3-bar-item w3-button">Cerrar sesion</a>'
                );

    }
}

function PintarMisConvocatoriaLista(listasDatos) {
    console.log("Pintar la Lista de ConvocatoriasSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#MisConvocatoriaslista").empty();

    if (listasDatos != null) {
        console.log("Prueba pintar mis convocatorias" + listasDatos.length);
        console.log(listasDatos.list_Principal);

        listasDatos.list_Principal.forEach(element => {
            $("#MisConvocatoriaslista").append(
                    ' <div  class="col-md-4 col-sm-6 ">' +
                    '<div class="card-container w3-card">' +
                    '<div class="card">' +
                    '<div class="front">' +
                    '<div class="cover">' +
                    '<img src="http://static.wixstatic.com/media/8585a6_68fbf14130fe716fcc357e44a27d175e.png_512"/>' +
                    '</div>' +
                    '<div class="content">' +
                    '<h3 class="name">' + element.ConvocatoriasFk.Nombre + '</h3>' +
                    '<h4  style="text-align: center"> Fecha:' + element.ConvocatoriasFk.FechaFin + '</h4>' +
                    '<h4  style="color: green; text-align: center" >Estado: Activo?</h4>' +
                    '<h4>' + element.ConvocatoriasFk.Descripcion + '</h4>' +
                    '</div>' +
                    '</div>' +
                    '<div class="back">' +
                    '<div class="header">' +
                    '<h5 class="motto">Gestores Sociales Universidad Sergio Arboleda</h5>' +
                    '</div>' +
                    '<h4 class="text-center">Ubicacion: Biblioteca Universidad Sergio Arboleda??</h4>' +
                    '<h4 class="text-center">' + element.ConvocatoriasFk.Hora + '</h4>' +
                    '<h4 class="text-center">Hora de fin: 6:00 PM agregar</h4>' +
                    '<h4 class="text-center">Horas reconocidas:' + element.ConvocatoriasFk.HorasGanadas + '</h4>' +
                    '<h4 class="text-center">Responsable:' + element.ConvocatoriasFk.Encargado + '</h4>' +
                    '<div class="stats-container">' +
                    '<div class="stats">' +
                    '<h4><button type="button" class="btn btn-outline-primary">Retirar</button></h4>' +
                    '</div>' +
                    '<div class="stats">' +
                    '<h4><button type="button" class="btn btn-outline-primary">Editar</button></h4>' +
                    '</div>' +
                    '</div> ' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                    );
        });
    }
}


function PintarMisBitacoraLista(listasDatos) {
    console.log("Pintar la Lista de ConvocatoriasSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#MisBitacoralista").empty();

    if (listasDatos != null) {
        console.log("Prueba pintar mis convocatorias" + listasDatos.length);

        listasDatos.list_Bitacora.forEach(element => {
            $("#MisBitacoralista").append(
                    ' <div  class="col-md-4 col-sm-6 ">' +
                    '<div class="card-container w3-card">' +
                    '<div class="card">' +
                    '<div class="front">' +
                    '<div class="cover">' +
                    '<img src="http://static.wixstatic.com/media/8585a6_68fbf14130fe716fcc357e44a27d175e.png_512"/>' +
                    '</div>' +
                    '<div class="content">' +
                    '<h3 class="name">' + element.Nombre + '</h3>' +
                    '<h4  style="text-align: center"> Fecha:' + element.Fecha + '</h4>' +
                    '<h4 style="text-align: center">' + element.Hora + '</h4>' +
                    '</div>' +
                    '</div>' +
                    '<div class="back ">' +
                    '<div class="header">' +
                    '<h5 class="motto">Gestores Sociales Universidad Sergio Arboleda</h5>' +
                    '</div>' +
                    '<center><textarea name="msg" required>' + element.Descripcion + '</textarea> </center>' +
                    '<div class="stats-container"align="center">' +
                    '<div class="stats">' +
                    '<h4><button type="button" class="btn btn-outline-primary">Inscribirse</button></h4>' +
                    '</div>' +
                    '<div class="stats">' +
                    '<h4><button type="button" class="btn btn-outline-primary">Guardar</button></h4>' +
                    '</div>' +
                    '</div> ' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                    );
        });
    }
}




