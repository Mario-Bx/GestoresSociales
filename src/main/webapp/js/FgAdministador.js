var api = "http://localhost:8090/indexRest/rest/";

//Pinta los Datos Del Perfil
function PinPerfilAdmin(idN) {
    var color= 'Light-Blue';
    $.ajax({
        url: api + "AdministradorSv/" + idN,
        type: "Get",
        success: function (data) {
            console.log("Servicio Inf PerFil Administrador");
            console.log(data);
            var DatoPerfil = data;

            $("#PinPerfilAdmin").empty();
            if (DatoPerfil !== null) {
                console.log("Prueba2 " + DatoPerfil);
                $("#PinPerfilAdmin").append(
                '<br>'+
                '<div  class="w3-white w3-card-4 w3-animate-zoom">'+
                    '<div class="w3-display-container">'+
                        '<img src="https://tecnolatino.com/wp-content/uploads/2010/12/Crear-Avatar-para-perfil-de-FaceBook.jpg" style="width:100%" alt="Avatar">'+
                        '<div class="w3-display-bottomleft w3-container w3-text-white">'+
                            '<h2>'+DatoPerfil.Nombre+' '+DatoPerfil.Apellidos+'</h2>'+
                        '</div>'+
                    '</div>'+
                    '<div class="w3-container">'+
                        '<br>'+
                        '<p><i class="fa fa-calendar fa-fw w3-margin-right w3-large w3-text-'+color+'"></i>'+DatoPerfil.FechaNacimiento+'</p>'+
                        '<p><i class="fa fa-mobile fa-fw w3-margin-right w3-large w3-text-'+color+'"></i>'+DatoPerfil.Celular+'</p>'+
                        '<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-'+color+'"></i>'+DatoPerfil.Correo+'</p>'+
                        '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-'+color+'"></i>'+DatoPerfil.Telefono+'</p>'+
                        '<hr>'+

                        '<p>Horas Completadas</p>'+
                        '<div class="w3-light-grey w3-round-xlarge w3-small">'+
                            '<div class="w3-container w3-center w3-round-xlarge w3-'+color+'" style="width:90%">90%</div>'+
                        '</div>'+
                    '</div>'+
                    '<br>'+
                '</div>'
                );
            }
            if (data.list_Convocatorias !== undefined) {
                PintarTarjetaCon(data.list_Convocatorias);
            }else{
                $("#TarjetaRes").empty();
                console.log("No Has Creado Convocatorias" );
            }
            
        },
        error: function () {
            alert('Error Servicio Inf PerFil Administrador');
        }
    });
    
    
}
