var api = "http://localhost:8090/indexRest/rest/";

function listaEstudiLista() {
    $.ajax({
        url: api + "EstudiantesSv",
        type: "Get",
        success: function (data) {
            console.log("Servicio Listar EstudiantesSv");
            console.log(data);

            PintarEstduaintesLista(data);

        },
        error: function () {
            alert('Error function listaEstudiLista');
        }
    });

}

function PintarEstduaintesLista(Datos) {
    console.log("Pintar la Lista de EstudiantesSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Tarjetas").empty();

    if (Datos != null) {
        console.log("Prueba2" + Datos.length);
        

        Datos.EstudiantesDTO.forEach(elemento => {
            $("#Tarjetas").append(
                    '<div class="cards">'+
                    '<div class="card">'+
                        '<div class="card-title">'+

                            '<a href="#" class="toggle-info btn">'+
                                '<span class="left"></span>'+
                                '<span class="right"></span>'+
                            '</a>'+
                            '<h2>'+
                                'Mario Bolaños'+
                                '<small>Ingenieria de Sistemas y Telecomunicaicones</small>'+
                            '</h2>'+
                        '</div>'+

                        '<div class="card-flap flap1">'+

                            '<div class="card-description">'+
                                'Semestre: Sexto'+
                                'Correo:Mario.Bolaños@correo.usa.edu.co'+
                                'telefono:3165245125'+
                            '</div>'+
                            '<div class="card-flap flap2">'+
                                '<div class="card-actions">'+
                                    '<a href="#" class="btn">Read more</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '</div>'
                     
                           );
        });
    }
}

 function PintarSancionesLista(Datos) {
    console.log("Pintar la Lista de SancionesSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#SancionesLista").empty();

    if (Datos != null) {
        console.log("Prueba3" + Datos.length);
        

        Datos.SancionesDTO.forEach(elementos => {
            $("#SancionesLista").append(
                    
                     '<div class="cards">'+
                    
               '<div class="card">'+
                
                
               
               ' <div class="card-title">'+
                    
                   ' <a href="#" class="toggle-info btn">'+
                        '<span class="left"></span>'+
                        '<span class="right"></span>'+
                    '</a>'+
                    '<h2>'+
                       '<p><i class="glyphicon glyphicon-user fa-fw w3-margin-right w3-large w3-text-teal"></i>'+elementos.EstudiantesFk.Nombre +' '+ elementos.EstudiantesFk.Apellidos+
                        '<small>'+'<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+ elementos.EstudiantesFk.Carreara+'</small>'+
                    '</h2>'+
               ' </div>'+
              
               ' <div class="card-flap flap1">'+
                    
                    '<div class="card-description">'+
                         'Descripcion'+elementos.Descripcion+
                      'Numero de Convocatoria'+ elementos.NumeroConvocatria+
                       
                        'Condicion inicial'+ elementos.ConInicial +
                         'Condicion Final'+elementos.ConFinal+
                    '</div>'+
                    '<div class="card-flap flap2">'+
                        '<div class="card-actions">'+
                            '<a href="#" class="btn">Editar</a>'+'        '+ '<a href="#" class="btn">Borrar</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+   
            '</div>'+
            '</div>'
            
                           );
        });
    }
}
 