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

    var color = 'Light-Blue';
    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#InfoGestor").empty();

    if (Datos !== null) {



        $("#InfoGestor").append(
                 '<br>' +
                        '<div  class="w3-white w3-card-4 w3-animate-zoom">' +
                        '<div class="w3-display-container">' +
                        '<img src="https://tecnolatino.com/wp-content/uploads/2010/12/Crear-Avatar-para-perfil-de-FaceBook.jpg" style="width:100%" alt="Avatar">' +
                        '<div class="w3-display-bottomleft w3-container w3-text-white">' +
                        '<h2>' + Datos.Nombre + ' ' + Datos.Apellidos + '</h2>' +
                        '</div>' +
                        '</div>' +
                        '<div class="w3-container">' +
                        '<br>' +
                        '<p><i class="fa fa fa-university fa-fw w3-margin-right w3-large w3-text-' + color + '"></i>' + Datos.FechaNacimiento + '</p>' +
                        '<p><i class="fa fa-calendar fa-fw w3-margin-right w3-large w3-text-' + color + '"></i>' + Datos.FechaNacimiento + '</p>' +
                        '<p><i class="fa fa-mortar-board fa-fw w3-margin-right w3-large w3-text-' + color + '"></i>'+ Datos.Carreara + '</p>' +
                        '<p><i class="fa fa-mobile fa-fw w3-margin-right w3-large w3-text-' + color + '"></i>'+ Datos.Escuela + '</p>' +
                        '<p><i class="fa fa-mobile fa-fw w3-margin-right w3-large w3-text-' + color + '"></i>' + Datos.Celular + '</p>' +
                        '<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-' + color + '"></i>' + Datos.Correo + '</p>' +
                        '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-' + color + '"></i>' + Datos.Telefono + '</p>' +
                        '<hr>' +
                        '<p>Horas Completadas</p>' +
                        '<div class="w3-light-grey w3-round-xlarge w3-small">' +
                        '<div class="w3-container w3-center w3-round-xlarge w3-' + color + '" style="width:90%">90%</div>' +
                        '</div>' +
                        '</div>' +
                        '<br>' +
                        '</div>' +
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
                    '<div  class="col-md-4 col-sm-6 ">' +
                    '<div class="card-container w3-card">' +
                    '<div class="card">' +
                    '<div class="front">' +
                    '<div class="cover">' +
                    '<img src="http://static.wixstatic.com/media/8585a6_68fbf14130fe716fcc357e44a27d175e.png_512"/>' +
                    '</div>' +
                    '<div class="content">' +
                    '<h3 class="name">' + element.Nombre + '</h3>' +
                    '<h4  style="text-align: center"> Fecha:' + element.FechaFin + '</h4>' +
                    '<h4  style="color: green; text-align: center" >Estado: Activo?</h4>' +
                    '<h4>' + element.Descripcion + '</h4>' +
                    '</div>' +
                    '</div>' +
                    '<div class="back w3-pale-blue w3-responsive">' +
                    '<div class="header">' +
                    '<h5 class="motto">Gestores Sociales Universidad Sergio Arboleda</h5>' +
                    '</div>' +
                     '<div class="w3-container">' +
                    '<h4 class="text-center">Ubicacion: Biblioteca Universidad Sergio Arboleda??</h4>' +
                    '<h4 class="text-center">' + element.Hora + '</h4>' +
                    '<h4 class="text-center">Hora de fin: 6:00 PM agregar</h4>' +
                    '<h4 class="text-center">Horas reconocidas:' + element.HorasGanadas + '</h4>' +
                    '<h4 class="text-center">Responsable:' + element.Encargado + '</h4>' +
                    '</div>' +
                    '<div class="w3-show-inline-block">' +
                    '<button class="w3-btn w3-ripple w3-cyan w3-hover-purple w3-border-red w3-round-large"onclick="borrarPrincipalLista(' + 27 + ')">Retirar</button>' +
                    
                    '<button class="w3-btn w3-ripple w3-cyan w3-hover-purple w3-border-red w3-round-large">ver</button></h4>' +
                    '</div>' +
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
                     '<div class="w3-bar">' +
                    '<button class="w3-bar-item w3-button w3-ripple w3-cyan w3-hover-purple" >Guardar<i class="fas fa-table"></i></button>' +
                    '<button class="w3-bar-item w3-button w3-ripple w3-cyan w3-hover-purple"  onclick="borrarBitacoraLista(' + element.BitacoraID + ')"><i class="fa fa-trash"></i></button>' +
                    '<button class="w3-bar-item w3-button w3-ripple w3-cyan w3-hover-purple" onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarBitacoraLista(' + element.BitacoraID + ')" class="btn btn-secondary" (click)="editarDato(item.BitacoraID)"><i class="fa fa-edit"></i></button>' +
                    
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                    );
        });
    }
}



