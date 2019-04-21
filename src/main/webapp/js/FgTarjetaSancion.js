/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var api = "http://localhost:8090/indexRest/rest/";

function listaTarjetaSan() {
    $.ajax({
        url: api + "SancionesSv",
        type: "Get",
        success: function (data) {
            console.log("Servicio Listar SancionesSv");
            console.log(data);

            if (data !== undefined) {
                PintarTarjetaSan(data);
            }else{
                console.log("No Hay SancionesSv" );
            }

        },
        error: function () {
            alert('Error function listaSancionesLista');
        }
    });
}

function PintarTarjetaSan(listasDatos) {
    console.log("Pintar la Lista de SancionesSv");


    var m = "'id02'";
    var b = "'block'";

    $("#TarjetaSan").empty();

    if (listasDatos instanceof  Array !== false) {

        listasDatos.SancionesDTO.forEach(element => {
            $("#TarjetaSan").append(
                    '<div  class="col-md-4 col-sm-8 ">'+
                        '<div class="card border-primary mb-3" style="max-width: 100rem;">'+
                            '<div class="card-header bg-primary">Sancion</div>'+
                            '<div class="card-body text-success">'+
                                '<h3 class="card-title">Descrippcion</h3>'+
                                '<p class="card-text">'+element.Descripcion+'</p>'+
                                '<p class="card-text">#Convocatorias: '+element.NumeroConvocatria+'</p>'+
                                '<hr>'+
                                '<p class="card-text">Estudiante: '+element.EstudiantesFk.Nombre+' '+element.EstudiantesFk.Apellidos+'</p>'+
                            '</div>'+
                            '<div class="card-footer bg-transparent border-success">'+
                                '<div class="w3-bar">'+
                                    '<button class="w3-bar-item w3-button w3-ripple w3-cyan w3-hover-purple" onclick="document.getElementById('+m+').style.display = '+b+', actualizarSan('+element.SancionesID+')"> <i class="fa fa-edit"></i></button>'+
                                    '<button class="w3-bar-item w3-button w3-ripple w3-red w3-hover-purple" onclick="borrarSan('+element.SancionesID+')"> <i class="fa fa-trash"></i></button>'+
                                    '<button class="w3-bar-item w3-button w3-ripple w3-pink w3-hover-purple"> <i class="fa fa-external-link"></i></button>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                    );
        });
    }
    else{
            $("#TarjetaSan").append(
                    '<div  class="col-md-4 col-sm-8 ">'+
                        '<div class="card border-primary mb-3" style="max-width: 100rem;">'+
                            '<div class="card-header bg-primary">Sancion</div>'+
                            '<div class="card-body text-success">'+
                                '<h3 class="card-title">Descrippcion</h3>'+
                                '<p class="card-text">'+listasDatos.Descripcion+'</p>'+
                                '<p class="card-text">#Convocatorias: '+listasDatos.NumeroConvocatria+'</p>'+
                                '<hr>'+
                                '<p class="card-text">Estudiante: '+listasDatos.EstudiantesFk.Nombre+' '+listasDatos.EstudiantesFk.Apellidos+'</p>'+
                            '</div>'+
                            '<div class="card-footer bg-transparent border-success">'+
                                '<div class="w3-bar">'+
                                    '<button class="w3-bar-item w3-button w3-ripple w3-cyan w3-hover-purple" onclick="document.getElementById('+m+').style.display = '+b+', actualizarSan('+listasDatos.SancionesID+')"> <i class="fa fa-edit"></i></button>'+
                                    '<button class="w3-bar-item w3-button w3-ripple w3-red w3-hover-purple" onclick="borrarSan('+listasDatos.SancionesID+')"> <i class="fa fa-trash"></i></button>'+
                                    '<button class="w3-bar-item w3-button w3-ripple w3-pink w3-hover-purple"> <i class="fa fa-external-link"></i></button>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                    );
    }
}

function FormSancion() {
    $.ajax({
        url: api + "SancionesSv",
        type: "Get",
        success: function () {

            console.log("*****************");
            console.log("Funcion Pintar Formulario SancionesSv");
            console.log("*****************");
            
            var m = "'id02'";
            var b = "'none'";

            $("#id02").empty();
            $("#id02").append(
                    '<br>'+
                    '<br>'+
                    '<br>'+
                    '<div class="w3-modal-content w3-card-4 w3-animate-zoom">'+
                                '<header class="w3-container w3-blue">'+
                                        '<span onclick="document.getElementById('+m+').style.display='+b+'" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>'+
                                        '<h2>Editar </h2>'+
                                '</header>'+

                                '<div class="w3-container">'+
                                '<br>'+

                                    '<div class="form-group">'+
                                            '<label for="usr">Descripcion Sanciones :</label>'+
                                            '<input type="text"'+
                                             'class="form-control" id="Descripcion" placeholder="Ingrese Descripcion">'+
                                    '</div>'+
                                    '<div class="form-group">'+
                                            '<label for="usr">NumeroConvocatria Sanciones :</label>'+
                                            '<input type="number"'+
                                             'class="form-control" id="NumeroConvocatria" placeholder="Ingrese NumeroConvocatria">'+
                                    '</div>'+
                                    '<div class="form-group">'+
                                            '<label for="usr">ConInicial Sanciones :</label>'+
                                            '<input type="number"'+
                                             'class="form-control" id="ConInicial" placeholder="Ingrese ConInicial">'+
                                    '</div>'+
                                    '<div class="form-group">'+
                                            '<label for="usr">ConFinal Sanciones :</label>'+
                                            '<input type="number"'+
                                             'class="form-control" id="ConFinal" placeholder="Ingrese ConFinal">'+
                                    '</div>'+
                                    
                                    '<div class="form-group">'+
                                            '<label for="usr">Estudiantes:</label>'+
                                            '<SELECT class="form-control" id="EstudianteslistaSELECT" style="height: calc(2.25rem + 10px)"> '+
                                                    '<OPTION value="errror">Error</OPTION>'+
                                            '</SELECT>'+
                                    '</div>'+
                                    '</div>'+
                                
                                ' <div  class="w3-container w3-center">'+
                                    '<button class="w3-btn w3-ripple w3-round-xlarge w3-hover-red w3-purple" onclick="document.getElementById('+m+').style.display='+b+', crearSan()">Crear</button>'+
                                '</div>'+
                                '<br>'+
                        '<div class="w3-container w3-light-grey w3-padding">'+
                                '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById('+m+').style.display='+b+'">Close</button>'+
                        '</div>'+
                '</div>'
            );

            selectEstudiantes();
        },

        error: function () {
            alert('Error function selectSanciones');
        }
    });
}

function crearSan() {

    console.log("Servicio Crear SancionesSv");
    var Sanciones = '{' +
            '"Descripcion": "' + $("#Descripcion").val() + '"' + ', ' +
            '"NumeroConvocatria": "' + $("#NumeroConvocatria").val() + '"' + ', ' +
            '"ConInicial": "' + $("#ConInicial").val() + '"' + ', ' +
            '"ConFinal": "' + $("#ConFinal").val() + '"' + ', ' +
            '"Estado": "' + 1 + '"'

            + ', ' +
            '"EstudiantesFk": {' +
            '"EstudiantesID": "' + $("#EstudianteslistaSELECT").val() + '"}'

            + '}';

    console.log(Sanciones);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "SancionesSv",
        data: Sanciones,
        dataType: "json",
        success: function (data) {
            console.log(data);
            listaTarjetaSan();
        },
        error: function () {
            alert('Error En el Servicio Crar SancionesSv');
        }
    });
}

function borrarSan(idN) {
    $.ajax({
        url: api + "SancionesSv/" + idN,
        type: "Delete"
    });
    console.log("borar: " + idN);
    listaTarjetaSan();
}

function actualizarSan(idN) {
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
                console.log("Prueba2 " + datoEdit);
                $("#id02").append(
                        '<br>'+
                    '<br>'+
                    '<br>'+
                        '<div class="w3-modal-content w3-card-4 w3-animate-zoom">'+
                                '<header class="w3-container w3-blue">'+
                                        '<span onclick="document.getElementById('+m+').style.display='+b+'" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>'+
                                        '<h2>Editar </h2>'+
                                '</header>'+

                                '<div class="w3-container">'+
                                '<br>'+
                                        '<form action="/action_page.php">'+
                                                '<div class="form-group">'+
                                                        '<label for="usr">Identificador:</label>'+
                                                        '<input type="text" class="form-control" id="SancionesID" value="'+datoEdit.SancionesID+'" readonly="readonly">'+
                                                '</div>'+


                                                '<div class="form-group">'+
                                                        '<label for="usr">Descripcion:</label>'+
                                                        '<input type="text" class="form-control" id="Descripcion" value="'+datoEdit.Descripcion+'">'+
                                                '</div>'+

                                                '<div class="form-group">'+
                                                        '<label for="usr">NumeroConvocatria:</label>'+
                                                        '<input type="text" class="form-control" id="NumeroConvocatria" value="'+datoEdit.NumeroConvocatria+'">'+
                                                '</div>'+

                                                '<div class="form-group">'+
                                                        '<label for="usr">ConInicial:</label>'+
                                                        '<input type="text" class="form-control" id="ConInicial" value="'+datoEdit.ConInicial+'">'+
                                                '</div>'+

                                                '<div class="form-group">'+
                                                        '<label for="usr">ConFinal:</label>'+
                                                        '<input type="text" class="form-control" id="ConFinal" value="'+datoEdit.ConFinal+'">'+
                                                '</div>'+								

                                                '<div class="form-group">'+
                                                        '<label for="usr">Estudiantes :</label>'+
                                                        '<SELECT class="form-control" id="EstudianteslistaSELECT" style="height: calc(2.25rem + 10px)"> '+
                                                                '<OPTION value="errror">Error</OPTION>'+
                                                        '</SELECT>'+
                                                '</div>'+

                                                '<button type="submit" class="btn btn-primary" onclick="EditarSan(), document.getElementById('+m+').style.display='+b+'">Actualizar</button>'+
                                        '</form>'+
                                '</div>'+
                        '<div class="w3-container w3-light-grey w3-padding">'+
                                '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById('+m+').style.display='+b+'">Close</button>'+
                        '</div>'+
                '</div>'
                        );
            }

            selectEstudiantes();

        },
        error: function () {
            alert('Errror El formulario actualizarSancionesLista');
        }
    });
}

function EditarSan() {

    console.log("Servicio Editar");
    var Sanciones = '{' +
            '"SancionesID": "' + $("#SancionesID").val() + '"' + ', ' +
            '"Descripcion": "' + $("#Descripcion").val() + '"' + ', ' +
            '"NumeroConvocatria": "' + $("#NumeroConvocatria").val() + '"' + ', ' +
            '"ConInicial": "' + $("#ConInicial").val() + '"' + ', ' +
            '"ConFinal": "' + $("#ConFinal").val() + '"' + ', ' +
            '"Estado": "' + 1 + '"'

            + ', ' +
            '"EstudiantesFk": {' +
            '"EstudiantesID": "' + $("#EstudianteslistaSELECT").val() + '"}'

            + '}';

    console.log(Sanciones);

    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: api + "SancionesSv",
        data: Sanciones,
        dataType: "json",
        success: function (data) {
            console.log(data);
           // listaTarjetaSan();
            console.log("Se enviaron los datos para actualizar la informacion");
        },
        error: function () {
            alert('Error En el Servicio Actualizar Informacion');
        }
    });
}
