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

    if (Datos !== null) {
        console.log("Prueba" + Datos.length);
        

        Datos.EstudiantesDTO.forEach(element => {
            $("#Tarjetas").append(
                    ' <section class="container">'+
                    '<div class="row active-with-click">'+
                    ' <div class="col-md-4 col-sm-6 col-xs-12">'+
                    ' <article class="material-card Red">'+
                    '<h2>'+
                    '<span>Christopher Walken</span>'+
                    '<strong>'+
                    '<i class="fa fa-fw fa-star"></i>'+
                    'The Deer Hunter'+
                    '</strong>'+
                    '</h2>'+
                    '<div class="mc-content">'+
                    '<div class="img-container">'+
                    '<img class="img-responsive" src="http://u.lorenzoferrara.net/marlenesco/material-card/thumb-christopher-walken.jpg">'+
                    '</div>'+
                    '<div class="mc-description">'+
                    'He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall, The Prophecy trilogy, The Dogs of War ...'+
                    '</div>'+
                    '</div>'+
                    '<a class="mc-btn-action">'+
                    ' <i class="fa fa-bars"></i>'+
                    '</a>'+
                    '<div class="mc-footer">'+
                    '<h4>'+
                    'Social'+
                    '</h4>'+
                    ' <a class="fa fa-fw fa-facebook"></a>'+
                    ' <a class="fa fa-fw fa-twitter"></a>'+
                    '<a class="fa fa-fw fa-linkedin"></a>'+
                    '<a class="fa fa-fw fa-google-plus"></a>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</section>'
                     
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
 