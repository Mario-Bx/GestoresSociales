    var api = "http://localhost:8090/indexRest/rest/";
    
    function DatosEstudiLista() {
    $.ajax({
        url: api + "EstudiantesSv" ,
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
function PintarTarjetas(Datos) {
    console.log("Pintar la Lista de EstudiantesSv");


    var m = "'id02'";
    var b = "'block'";
    var e = "'empty'";

    $("#Tarjetas").empty();



    if (Datos !== null) {
  
                  

        $("#Tarjetas").append(
                 console.log("Prueba " + Datos.length);
                      Datos.EstudiantesDTO.forEach(element => {
                         
            $("#Tarjetas").append(
            
                                 '<div class="card">'+
                
                
               
               ' <div class="card-title">'+
                    
                   ' <a href="#" class="toggle-info btn">'+
                        '<span class="left"></span>'+
                        '<span class="right"></span>'+
                    '</a>'+
                    '<h2>'+
                       element.Nombre +' '+ element.Apellido+
                        '<small>element.carrera</small>'+
                    '</h2>'+
               ' </div>'+
                
               ' <div class="card-flap flap1">'+
                    
                    '<div class="card-description">'+
                        element.Escuela+
                        element.Correo+
                        element.Telefono + element.Celular+
                    '</div>'+
                    '<div class="card-flap flap2">'+
                        '<div class="card-actions">'+
                            '<a href="#" class="btn">Read more</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            
            
                   );
        });
                    );

    }
    }

