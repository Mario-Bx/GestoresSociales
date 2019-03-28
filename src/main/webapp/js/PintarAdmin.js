var api = "http://localhost:8090/indexRest/rest/";

function listaAdminLista(id) {
    $.ajax({
        url: api + "AdministradorSv/" + id,
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



    if (listasDatos !== null) {
  
                  

        $("#Administradorlista").append(
                
                    '<p><i class="glyphicon glyphicon-user fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ listasDatos.Nombre +' '+listasDatos.Apellidos +'</p>'+
                    '<p></p>'+
                    '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ listasDatos.Correo +'</p>'+
                    '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ listasDatos.Clave +'</p>'+
                     '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ listasDatos.FechaNacimiento +'</p>'+
                    '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ listasDatos.Documento +'</p>'+
                    '<p class="text"><span class="glyphicon glyphicon-dashboard"></span><em> horas realizadas : '+ '</em> </p>'+
                    '<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ listasDatos.Telefono +'</p>'+
                    '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ listasDatos.Celular +'</p>'+
                    '<hr>'+
                    '<a href="#" class="w3-bar-item w3-button">Cerrar sesion</a>'
                    );

    }
    }
    



