/* 
 * Funcion que pinta las tarjetas de las Convocatorias
 */

var api = "http://localhost:8090/indexRest/rest/";

function PintarTarjetaCon(listasDatos, idAdm) {
    console.log("Pintar la Lista de ConvocatoriasSv");
    $("#TarjetaCon").empty();
    
    var c = "'id01'";
    var m = "'id02'";
    var b = "'block'";

    if (listasDatos instanceof  Array !== false) {        
        console.log("Se entro a pintar la lista de convocatorias");
        listasDatos.forEach(element => {
            $("#TarjetaCon").append(
               ' <div  class="col-md-4 col-sm-6 ">' +
                '<div class="card-container w3-card w3-hover-aqua">' +
                    '<div class="card">' +
                        '<div class="front">' +
                            '<div class="cover">' +
                                '<img src="http://static.wixstatic.com/media/8585a6_68fbf14130fe716fcc357e44a27d175e.png_512"/>' +
                                '</div>' +
                            '<div class="content">' +
                                '<h3 class="name">' + element.Nombre + '</h3>' +
                                '<h4  style="text-align: center"> Fecha Inicio: ' + element.FechaInicio + '</h4>' +
                                '<h4  style="text-align: center"> Fecha Fin: ' + element.FechaFin + '</h4>' +
                                '<h4 class="text-center">Cupos: ' + element.NoEstudienates + '</h4>' +
                                '<h4 class="text-center">Cupos Reserva: ' + element.NoReserva + '</h4>' +
                                '<h4  style="color: green; text-align: center" >Estado: ' + element.Estado + '</h4>' +
                                '</div>' +
                            '</div>' +
                        '<div class="back w3-pale-blue w3-responsive">' +
                            '<div class="header">' +
                                '<h5 class="motto">Gestores Sociales Universidad Sergio Arboleda</h5>' +
                                '</div>' +
                            '<div class="w3-container">' +
                            '<h4 class="text-center">Ubicacion: Biblioteca Universidad Sergio Arboleda??</h4>' +
                            '<h4 class="text-center">Responsable: ' + element.Encargado + '</h4>' +
                            '<h4 class="text-center">Horas reconocidas:' + element.HorasGanadas + '</h4>' +
                            '<hr>'+
                            '<hp class="text-center">' + element.Descripcion + '</hp>' +
                            '</div>' +
                            '<hr>'+
                            '<div class="w3-show-inline-block">'+
                                    '<button class="w3-btn w3-ripple w3-cyan w3-hover-purple" onclick="document.getElementById('+m+').style.display = '+b+', ActualizarConv('+element.ConvocatoriasID+'), PinPerfilAdmin('+idAdm+')">Editar <i class="fa fa-edit"></i></button>'+
                                    '<button class="w3-btn w3-ripple w3-red w3-hover-purple" onclick="borrarCon('+element.ConvocatoriasID+'), PinPerfilAdmin('+idAdm+')">Eliminar <i class="fa fa-trash"></i></button>'+
                                    '<button class="w3-btn w3-ripple w3-pink w3-hover-purple" onclick="document.getElementById('+c+').style.display = '+b+', DetallesCon('+element.ConvocatoriasID+')">Detalles <i class="fa fa-external-link"></i></button>'+
                                '</div>'+
                            '</div>'+
                        '</div>' +
                    '</div>' +
                '</div>'
                    );
        });
    }
    else{
        console.log("Solo Se encontro una convocatoria");
        $("#TarjetaCon").append(
               ' <div  class="col-md-4 col-sm-6 ">' +
                '<div class="card-container w3-card w3-hover-aqua">' +
                    '<div class="card">' +
                        '<div class="front">' +
                            '<div class="cover">' +
                                '<img src="http://static.wixstatic.com/media/8585a6_68fbf14130fe716fcc357e44a27d175e.png_512"/>' +
                                '</div>' +
                            '<div class="content">' +
                                '<h3 class="name">' + listasDatos.Nombre + '</h3>' +
                                '<h4  style="text-align: center"> Fecha Inicio: ' + listasDatos.FechaInicio + '</h4>' +
                                '<h4  style="text-align: center"> Fecha Fin: ' + listasDatos.FechaFin + '</h4>' +
                                '<h4 class="text-center">Cupos: ' + listasDatos.NoEstudienates + '</h4>' +
                                '<h4 class="text-center">Cupos Reserva: ' + listasDatos.NoReserva + '</h4>' +
                                '<h4  style="color: green; text-align: center" >Estado: ' + listasDatos.Estado + '</h4>' +
                                '</div>' +
                            '</div>' +
                        '<div class="back w3-pale-blue w3-responsive">' +
                            '<div class="header">' +
                                '<h5 class="motto">Gestores Sociales Universidad Sergio Arboleda</h5>' +
                                '</div>' +
                            '<div class="w3-container">' +
                            '<h4 class="text-center">Ubicacion: Biblioteca Universidad Sergio Arboleda??</h4>' +
                            '<h4 class="text-center">Responsable: ' + listasDatos.Encargado + '</h4>' +
                            '<h4 class="text-center">Horas reconocidas:' + listasDatos.HorasGanadas + '</h4>' +
                            '<hr>'+
                            '<hp class="text-center">' + listasDatos.Descripcion + '</hp>' +
                            '</div>' +
                            '<hr>'+
                            '<div class="w3-show-inline-block">'+
                                    '<button class="w3-btn w3-ripple w3-cyan w3-hover-purple" onclick="document.getElementById('+m+').style.display = '+b+', ActualizarConv('+listasDatos.ConvocatoriasID+'), PinPerfilAdmin('+idAdm+')">Editar <i class="fa fa-edit"></i></button>'+
                                    '<button class="w3-btn w3-ripple w3-red w3-hover-purple" onclick="borrarCon('+listasDatos.ConvocatoriasID+'), PinPerfilAdmin('+idAdm+')">Eliminar <i class="fa fa-trash"></i></button>'+
                                    '<button class="w3-btn w3-ripple w3-pink w3-hover-purple" onclick="document.getElementById('+c+').style.display = '+b+', DetallesCon('+listasDatos.ConvocatoriasID+')">Detalles <i class="fa fa-external-link"></i></button>'+
                                '</div>'+
                            '</div>'+
                        '</div>' +
                    '</div>' +
                '</div>'
                    );
    }
}

function borrarCon(idN) {
    $.ajax({
        url: api + "ConvocatoriasSv/" + idN,
        type: "Delete"
    });
    console.log("Se borra la Convocatoria: #" + idN);
    PinPerfilAdmin();
}

function FormConvocatoria(idA, iDEsc) {
    
    $.ajax({
        url: api + "ConvocatoriasSv",
        type: "Get",
        success: function () {

            console.log("*****************");
            console.log("Funcion Pintar Formulario ConvocatoriasSv");
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
                                                '<label for="usr">Nombre Convocatorias :</label>'+
                                                '<input type="text" class="form-control" id="Nombre" placeholder="Ingrese Nombre">'+
                                        '</div>'+
                                        '<div class="form-group">'+
                                                '<label for="usr">FechaInicio Convocatorias :</label>'+
                                                '<input type="text" class="form-control" id="FechaInicio" placeholder="Ingrese FechaInicio">'+
                                        '</div>'+
                                        '<div class="form-group">'+
                                                '<label for="usr">FechaFin Convocatorias :</label>'+
                                                '<input type="text" class="form-control" id="FechaFin" placeholder="Ingrese FechaFin">'+
                                        '</div>'+
                                        '<div class="form-group">'+
                                                '<label for="usr">Encargado Convocatorias :</label>'+
                                                '<input type="text" class="form-control" id="Encargado" placeholder="Ingrese Encargado">'+
                                        '</div>'+
                                        '<div class="form-group">'+
                                                '<label for="usr">Descripcion Convocatorias :</label>'+
                                                '<input type="text" class="form-control" id="Descripcion" placeholder="Ingrese Descripcion">'+
                                        '</div>'+
                                        '<div class="form-group">'+
                                                '<label for="usr">HorasGanadas Convocatorias :</label>'+
                                                '<input type="number" class="form-control" id="HorasGanadas" placeholder="Ingrese HorasGanadas">'+
                                        '</div>'+
                                        '<div class="form-group">'+
                                                '<label for="usr">NoEstudienates Convocatorias :</label>'+
                                                '<input type="number" class="form-control" id="NoEstudienates" placeholder="Ingrese NoEstudienates">'+
                                        '</div>'+
                                        '<div class="form-group">'+
                                                '<label for="usr">NoReserva Convocatorias :</label>'+
                                                '<input type="number" class="form-control" id="NoReserva" placeholder="Ingrese NoReserva">'+
                                        '</div>'+
                                        '<div class="form-group">'+
                                                '<label for="usr">PeriodoAcademico Convocatorias :</label>'+
                                                '<input type="text" class="form-control" id="PeriodoAcademico" placeholder="Ingrese PeriodoAcademico">'+
                                        '</div>'+
                                        
                                        '<div class="form-group">'+
                                                '<label for="usr">Dependencia:</label>'+
                                                '<SELECT class="form-control" id="DependencialistaSELECT" style="height: calc(2.25rem + 10px)"> '+
                                                        '<OPTION value="errror">Error</OPTION>'+
                                                '</SELECT>'+
                                        '</div>'+
                                        '</div>'+
                                
                                ' <div  class="w3-container w3-center">'+
                                    '<button class="w3-btn w3-ripple w3-round-xlarge w3-hover-red w3-purple" onclick="document.getElementById('+m+').style.display='+b+', crearConv('+idA+')">Crear</button>'+
                                '</div>'+
                                '<br>'+
                        '<div class="w3-container w3-light-grey w3-padding">'+
                                '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById('+m+').style.display='+b+'">Close</button>'+
                        '</div>'+
                '</div>'
                    );
            if (iDEsc !== null) {
                BuscarEscuela(iDEsc);
            }

        },
        error: function () {
            alert('Error function FormConvocatoria');
            console.log("Error function FormConvocatoria");
        }
    });
}

function crearConv(idAdm) {
    console.log("Servicio Crear ConvocatoriasSv");
    var Convocatorias = '{' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"FechaInicio": "' + $("#FechaInicio").val() + '"' + ', ' +
            '"FechaFin": "' + $("#FechaFin").val() + '"' + ', ' +
            '"Encargado": "' + $("#Encargado").val() + '"' + ', ' +
            '"Descripcion": "' + $("#Descripcion").val() + '"' + ', ' +
            '"HorasGanadas": "' + $("#HorasGanadas").val() + '"' + ', ' +
            '"NoEstudienates": "' + $("#NoEstudienates").val() + '"' + ', ' +
            '"NoReserva": "' + $("#NoReserva").val() + '"' + ', ' +
            '"PeriodoAcademico": "' + $("#PeriodoAcademico").val() + '"' + ', ' +
            '"Estado": "' + 1 + '"'

            + ', ' +
            '"AdministradorFk": {"' +
            'AdministradorID": "' + idAdm + '"}' + ', ' +
            '"DependenciaFk": {"' +
            'DependenciaID": "' + $("#DependencialistaSELECT").val() + '"}'

            + '}';

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "ConvocatoriasSv",
        data: Convocatorias,
        dataType: "json",
        success: function (data) {
            console.log(data);
            console.log("SFelicidades HAcreado una Convocatoria");
            alert('Felicidades HAcreado una Convocatoria');
        },
        error: function () {
            alert('Error En el Servicio Crar ConvocatoriasSv');
            console.log("Error En el Servicio Crar ConvocatoriasSv");
        }
    });
    PinPerfilAdmin(idAdm);
}
            
function BuscarEscuela(idN) {
    console.log("Function Busca Escuela");
    $.ajax({
        url: api + "EscuelaSv/" + idN,
        type: "Get",
        success: function (data) {
                selectDependencia(data);
        },
        error: function () {
            alert('Error En Busca Escuela');
            console.log('Error En Busca Escuela');
        }
    });
}

function selectDependencia(IdEcu) {

    var listasDatos = IdEcu;
    console.log("*****************");
    console.log("listasDatos.list_Dependencia");
    console.log("*****************");

    $("#DependencialistaSELECT").empty();
    if (listasDatos !== null) {
        listasDatos.list_Dependencia.forEach(element => {
            $("#DependencialistaSELECT").append(
                    '<OPTION value="' + element.DependenciaID + '">' + element.Nombre + '</OPTION>'
                    );
        });
    }

}

function ActualizarConv(idN) {
    console.log("Actualizar Datos" );
    $.ajax({
        url: api + "ConvocatoriasSv/" + idN,
        type: "Get",
        success: function (data) {
            console.log(data);
            var datoEdit = data;

            var m = "'id02'";
            var b = "'none'";

            $("#id02").empty();
            if (datoEdit !== null) {
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
                                                        '<input type="text" class="form-control" id="ConvocatoriasID" value="'+datoEdit.ConvocatoriasID+'" readonly="readonly">'+
                                                '</div>'+


                                                '<div class="form-group">'+
                                                        '<label for="usr">Nombre:</label>'+
                                                        '<input type="text" class="form-control" id="Nombre" value="'+datoEdit.Nombre+' ">'+
                                                '</div>'+

                                                '<div class="form-group">'+
                                                        '<label for="usr">FechaInicio:</label>'+
                                                        '<input type="text" class="form-control" id="FechaInicio" value="'+datoEdit.FechaInicio+' ">'+
                                                '</div>'+

                                                '<div class="form-group">'+
                                                        '<label for="usr">FechaFin:</label>'+
                                                        '<input type="text" class="form-control" id="FechaFin" value="'+datoEdit.FechaFin+' ">'+
                                                '</div>'+

                                                '<div class="form-group">'+
                                                        '<label for="usr">Encargado:</label>'+
                                                        '<input type="text" class="form-control" id="Encargado" value="'+datoEdit.Encargado+' ">'+
                                                '</div>'+

                                                '<div class="form-group">'+
                                                        '<label for="usr">Descripcion:</label>'+
                                                        '<input type="text" class="form-control" id="Descripcion" value="'+datoEdit.Descripcion+' ">'+
                                                '</div>'+

                                                '<div class="form-group">'+
                                                        '<label for="usr">HorasGanadas:</label>'+
                                                        '<input type="text" class="form-control" id="HorasGanadas" value="'+datoEdit.HorasGanadas+' ">'+
                                                '</div>'+

                                                '<div class="form-group">'+
                                                        '<label for="usr">NoEstudienates:</label>'+
                                                        '<input type="text" class="form-control" id="NoEstudienates" value="'+datoEdit.NoEstudienates+' ">'+
                                                '</div>'+

                                                '<div class="form-group">'+
                                                        '<label for="usr">NoReserva:</label>'+
                                                        '<input type="text" class="form-control" id="NoReserva" value="'+datoEdit.NoReserva+' ">'+
                                                '</div>'+

                                                '<div class="form-group">'+
                                                        '<label for="usr">PeriodoAcademico:</label>'+
                                                        '<input type="text" class="form-control" id="PeriodoAcademico" value="'+datoEdit.PeriodoAcademico+' ">'+
                                                '</div>'+
                                                
                                                '<div class="form-group">'+
                                                        '<label for="usr">Dependencia:</label>'+
                                                        '<SELECT class="form-control" id="DependencialistaSELECT" style="height: calc(2.25rem + 10px)"> '+
                                                                '<OPTION value="errror">Error</OPTION>'+
                                                        '</SELECT>'+
                                                '</div>'+

                                                '<button type="submit" class="btn btn-primary" onclick="EditarConv('+datoEdit.AdministradorFk.AdministradorID+')">Actualizar</button>'+
                                        '</form>'+
                                '</div>'+
                        '<div class="w3-container w3-light-grey w3-padding">'+
                                '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById('+m+').style.display='+b+'">Close</button>'+
                        '</div>'+
                '</div>'
                        );
            }

                BuscarEscuela(datoEdit.DependenciaFk.EscuelaFk.EscuelaID);
        },
        error: function () {
            alert('Errror El formulario actualizarConv');
        }
    });
}

function EditarConv(iDAdm) {

    console.log("Servicio Editar");
    var Convocatorias = '{' +
            '"ConvocatoriasID": "' + $("#ConvocatoriasID").val() + '"' + ', ' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"FechaInicio": "' + $("#FechaInicio").val() + '"' + ', ' +
            '"FechaFin": "' + $("#FechaFin").val() + '"' + ', ' +
            '"Encargado": "' + $("#Encargado").val() + '"' + ', ' +
            '"Descripcion": "' + $("#Descripcion").val() + '"' + ', ' +
            '"HorasGanadas": "' + $("#HorasGanadas").val() + '"' + ', ' +
            '"NoEstudienates": "' + $("#NoEstudienates").val() + '"' + ', ' +
            '"NoReserva": "' + $("#NoReserva").val() + '"' + ', ' +
            '"PeriodoAcademico": "' + $("#PeriodoAcademico").val() + '"' + ', ' +
            '"Estado": "' + 1 + '"'

            + ', ' +
            '"AdministradorFk": {"' +
            'AdministradorID": "' + iDAdm + '"}' + ', ' +
            '"DependenciaFk": {"' +
            'DependenciaID": "' + $("#DependencialistaSELECT").val() + '"}'

            + '}';

    console.log(Convocatorias);
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: api + "ConvocatoriasSv",
        data: Convocatorias,
        dataType: "json",
        success: function (data) {
            console.log("Se enviaron los datos para actualizar la informacion");
            console.log(data);
        },
        error: function () {
            alert('Error En el Servicio Actualizar Informacion');
        }
    });

}

function DetallesCon(idN) {
    console.log("Estudiantes Inscritos Datos" );
    $.ajax({
        url: api + "ConvocatoriasSv/" + idN,
        type: "Get",
        success: function (data) {            
            var ListPrin = data.list_Principal;
            var ListRes = data.list_Reserva;

            if (ListPrin !== undefined) {
                PintarTarjetaEstuPri(ListPrin);
            }else{
                $("#TarjetaPri").empty();
                console.log("No hay Estudiantes Inscritos" );
            }
            
            if (ListRes !== undefined) {
                PintarTarjetaEstuRes(ListRes);
            }else{
                $("#TarjetaRes").empty();
                console.log("No hay Estudiantes Inscritos de Reserva" );
            }
        },
        error: function () {
            alert('Errror El formulario actualizarConv');
        }
    });
}

function PintarTarjetaEstuPri(listasDatos) {
    console.log("Pintar la Lista de EstudiantesSv Principal");
    $("#TarjetaPri").empty();
    

    if (listasDatos instanceof  Array !== false) {
        console.log("Lista Estudiantes Inscritos" );
        listasDatos.forEach(element => {
            $("#TarjetaPri").append(
                    '<hr>'+
                    '<div class="blog-card">'+
                        '<div class="meta">'+
                            '<div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>'+
                                '<ul class="details w3-medium w3-center">'+
                                    '<li class="fa fa-graduation-cap w3-margin-top"><a href="#">'+element.EstudiantesFk.Escuela+'</a></li>'+
                                    '<br>'+
                                    '<li class="fa fa-calendar w3-margin-top">'+element.EstudiantesFk.FechaNacimiento+'</li>'+
                                    '<br>'+
                                    '<li class="fa fa-comments w3-margin-top">'+element.EstudiantesFk.Correo+'</li>'+
                                    '<br>'+
                                    '<li class="fa fa-phone w3-margin-top">'+
                                        '<ul>'+
                                            '<li><a href="#">'+element.EstudiantesFk.Telefono+' - </a></li>'+
                                            '<li><a href="#">'+element.EstudiantesFk.Celular+'</a></li>'+
                                        '</ul>'+
                                    '</li>'+
                                    '<br>'+
                                    '<li class="fa fa-drivers-license-o w3-margin-top">'+
                                        '<ul>'+
                                            '<li>'+element.EstudiantesFk.TipoDocumento+': </li>'+
                                            '<li>'+element.EstudiantesFk.Documento+'</li>'+
                                        '</ul>'+
                                    '</li>'+
                                '</ul>'+
                        '</div>'+
                            '<div class="description">'+
                                '<h1>'+element.EstudiantesFk.Nombre+' '+element.EstudiantesFk.Apellidos+'</h1>'+
                                '<h2>'+element.EstudiantesFk.Carreara+' ('+element.EstudiantesFk.Semestre+')</h2>'+
                                '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>'+
                                '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>'+
                                '<p class="read-more">'+
                                    '<a href="#">Mas Detalles</a>'+
                                '</p>'+
                            '</div>'+
                    '</div>'
                    );
        });
    }
    else{
        console.log("Solo Un Estudiante Inscrito" );
        $("#TarjetaPri").append(
                    '<hr>'+
                    '<div class="blog-card">'+
                        '<div class="meta">'+
                            '<div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>'+
                                '<ul class="details w3-medium w3-center">'+
                                    '<li class="fa fa-graduation-cap w3-margin-top"><a href="#">'+listasDatos.EstudiantesFk.Escuela+'</a></li>'+
                                    '<br>'+
                                    '<li class="fa fa-calendar w3-margin-top">'+listasDatos.EstudiantesFk.FechaNacimiento+'</li>'+
                                    '<br>'+
                                    '<li class="fa fa-comments w3-margin-top">'+listasDatos.EstudiantesFk.Correo+'</li>'+
                                    '<br>'+
                                    '<li class="fa fa-phone w3-margin-top">'+
                                        '<ul>'+
                                            '<li><a href="#">'+listasDatos.EstudiantesFk.Telefono+' - </a></li>'+
                                            '<li><a href="#">'+listasDatos.EstudiantesFk.Celular+'</a></li>'+
                                        '</ul>'+
                                    '</li>'+
                                    '<br>'+
                                    '<li class="fa fa-drivers-license-o w3-margin-top">'+
                                        '<ul>'+
                                            '<li>'+listasDatos.EstudiantesFk.TipoDocumento+': </li>'+
                                            '<li>'+listasDatos.EstudiantesFk.Documento+'</li>'+
                                        '</ul>'+
                                    '</li>'+
                                '</ul>'+
                        '</div>'+
                            '<div class="description">'+
                                '<h1>'+listasDatos.EstudiantesFk.Nombre+' '+listasDatos.EstudiantesFk.Apellidos+'</h1>'+
                                '<h2>'+listasDatos.EstudiantesFk.Carreara+' ('+listasDatos.EstudiantesFk.Semestre+')</h2>'+
                                '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>'+
                                '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>'+
                                '<p class="read-more">'+
                                    '<a href="#">Mas Detalles</a>'+
                                '</p>'+
                            '</div>'+
                    '</div>'
                    );
    }
}
function PintarTarjetaEstuRes(listasDatos) {
    console.log("Pintar la Lista de EstudiantesSv Reserva");
    $("#TarjetaRes").empty();

    if (listasDatos instanceof  Array !== false) {
        console.log("Lista Estudiantes Inscritos De Reserva" );
        listasDatos.forEach(element => {
            $("#TarjetaRes").append(
                    '<hr>'+
                    '<div class="blog-card">'+
                        '<div class="meta">'+
                            '<div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>'+
                                '<ul class="details w3-medium w3-center">'+
                                    '<li class="fa fa-graduation-cap w3-margin-top"><a href="#">'+element.EstudiantesFk.Escuela+'</a></li>'+
                                    '<br>'+
                                    '<li class="fa fa-calendar w3-margin-top">'+element.EstudiantesFk.FechaNacimiento+'</li>'+
                                    '<br>'+
                                    '<li class="fa fa-comments w3-margin-top">'+element.EstudiantesFk.Correo+'</li>'+
                                    '<br>'+
                                    '<li class="fa fa-phone w3-margin-top">'+
                                        '<ul>'+
                                            '<li><a href="#">'+element.EstudiantesFk.Telefono+' - </a></li>'+
                                            '<li><a href="#">'+element.EstudiantesFk.Celular+'</a></li>'+
                                        '</ul>'+
                                    '</li>'+
                                    '<br>'+
                                    '<li class="fa fa-drivers-license-o w3-margin-top">'+
                                        '<ul>'+
                                            '<li>'+element.EstudiantesFk.TipoDocumento+': </li>'+
                                            '<li>'+element.EstudiantesFk.Documento+'</li>'+
                                        '</ul>'+
                                    '</li>'+
                                '</ul>'+
                        '</div>'+
                            '<div class="description">'+
                                '<h1>'+element.EstudiantesFk.Nombre+' '+element.EstudiantesFk.Apellidos+'</h1>'+
                                '<h2>'+element.EstudiantesFk.Carreara+' ('+element.EstudiantesFk.Semestre+')</h2>'+
                                '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>'+
                                '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>'+
                                '<p class="read-more">'+
                                    '<a href="#">Mas Detalles</a>'+
                                '</p>'+
                            '</div>'+
                    '</div>'
                    );
        });
    }
    else{
        console.log("solo un Estudiante Inscrito De Reserva" );
        $("#TarjetaRes").append(
                    '<hr>'+
                    '<div class="blog-card">'+
                        '<div class="meta">'+
                            '<div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>'+
                                '<ul class="details w3-medium w3-center">'+
                                    '<li class="fa fa-graduation-cap w3-margin-top"><a href="#">'+listasDatos.EstudiantesFk.Escuela+'</a></li>'+
                                    '<br>'+
                                    '<li class="fa fa-calendar w3-margin-top">'+listasDatos.EstudiantesFk.FechaNacimiento+'</li>'+
                                    '<br>'+
                                    '<li class="fa fa-comments w3-margin-top">'+listasDatos.EstudiantesFk.Correo+'</li>'+
                                    '<br>'+
                                    '<li class="fa fa-phone w3-margin-top">'+
                                        '<ul>'+
                                            '<li><a href="#">'+listasDatos.EstudiantesFk.Telefono+' - </a></li>'+
                                            '<li><a href="#">'+listasDatos.EstudiantesFk.Celular+'</a></li>'+
                                        '</ul>'+
                                    '</li>'+
                                    '<br>'+
                                    '<li class="fa fa-drivers-license-o w3-margin-top">'+
                                        '<ul>'+
                                            '<li>'+listasDatos.EstudiantesFk.TipoDocumento+': </li>'+
                                            '<li>'+listasDatos.EstudiantesFk.Documento+'</li>'+
                                        '</ul>'+
                                    '</li>'+
                                '</ul>'+
                        '</div>'+
                            '<div class="description">'+
                                '<h1>'+listasDatos.EstudiantesFk.Nombre+' '+listasDatos.EstudiantesFk.Apellidos+'</h1>'+
                                '<h2>'+listasDatos.EstudiantesFk.Carreara+' ('+listasDatos.EstudiantesFk.Semestre+')</h2>'+
                                '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>'+
                                '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>'+
                                '<p class="read-more">'+
                                    '<a href="#">Mas Detalles</a>'+
                                '</p>'+
                            '</div>'+
                    '</div>'
                    );
    }
}
