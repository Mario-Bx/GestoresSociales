/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var api = "http://localhost:8090/indexRest/rest/";

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
        

        listasDatos.ConvocatoriasDTO.forEach(element => {
            $("#Convocatoriaslista").append(
                    
                ' <div  class="col-md-4 col-sm-6 ">'+ 
               '<div class="card-container w3-card">'+
                                   '<div class="card">'+
                                       '<div class="front">'+
                                           '<div class="cover">'+
                                               '<img src="http://static.wixstatic.com/media/8585a6_68fbf14130fe716fcc357e44a27d175e.png_512"/>'+
                                           '</div>'+

                                           '<div class="content">'+
                                               '<h3 class="name">'+ element.Nombre +'</h3>'+
                                               '<h4  style="text-align: center"> Fecha:'+ element.FechaFin +'</h4>'+
                                               '<h4  style="color: green; text-align: center" >Estado: Activo?</h4>'+
                                               '<h4>'+ element.Descripcion +'</h4>'+

                                           '</div>'+
                                       '</div>'+
                                       '<div class="back">'+
                                           '<div class="header">'+
                                               '<h5 class="motto">Gestores Sociales Universidad Sergio Arboleda</h5>'+
                                           '</div>'+
                                            
                                          '<h4 class="text-center">Ubicacion: Biblioteca Universidad Sergio Arboleda??</h4>'+

                                           '<h4 class="text-center">'+ element.Hora +'</h4>'+
                                           '<h4 class="text-center">Hora de fin: 6:00 PM agregar</h4>'+
                                           '<h4 class="text-center">Horas reconocidas:'+ element.HorasGanadas +'</h4>'+
                                           '<h4 class="text-center">Responsable:'+ element.Encargado +'</h4>'+


                                           '<div class="stats-container">'+
                                               '<div class="stats">'+
                                               
                                                   '<h4><button type="button" class="btn btn-outline-primary"><a onclick="InscribirGestor('+1+""+','+ 1+""  +')">Inscribirse</a></button></h4>'+

                                               '</div>'+
                                               '<div class="stats">'+
                                                   '<h4><button type="button" class="btn btn-outline-primary">Editar</button></h4>'+

                                               '</div>'+
                                               

                                       '</div> '+
                                   '</div>'+
                               '</div>'+
                           '</div>'+
                        '</div>'
                           );
        });
    }
}

 