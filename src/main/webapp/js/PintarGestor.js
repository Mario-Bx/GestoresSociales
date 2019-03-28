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
                
                    '<p><i class="glyphicon glyphicon-user fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ Datos.Nombre +' '+Datos.Apellidos +'</p>'+
                    '<p></p>'+
                    '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ Datos.Documento +'</p>'+
                    '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ Datos.FechaNacimiento +'</p>'+
                     '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ Datos.Escuela +'</p>'+
                    '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ Datos.Carreara +'</p>'+
                    '<p class="text"><span class="glyphicon glyphicon-exclamation-sign"></span><em> Horas de penalizacion restantes : '+'</em></p>'+
                    '<p class="text"><span class="glyphicon glyphicon-dashboard"></span><em> horas realizadas : '+ '</em> </p>'+
                    '<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ Datos.Correo +'</p>'+
                    '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ Datos.Telefono +'</p>'+
                    '<hr>'+
                    '<a href="cerrarsesion.jsp" class="w3-bar-item w3-button">Cerrar sesion</a>'
                    );

    }
}

