/* 
 * Funcion que pinta las tarjetas de los estudaintes
 */

var api = "http://localhost:8090/indexRest/rest/";

function listaTarjetaEst() {
    $.ajax({
        url: api + "EstudiantesSv",
        type: "Get",
        success: function (data) {
            console.log("Servicio Listar EstudiantesSv");

            if (data !== null) {
                PintarTarjetaEstu(data);
                Pintarinforme(data);
            } else {
                console.log("No existen estudiantes");
            }

        },
        error: function () {
            alert('Error function listaEstudiLista');
            console.log("Error Servicio Listar EstudiantesSv");
        }
    });

}

function PintarTarjetaEstu(listasDatos) {
    console.log("Pintar la Lista de EstudiantesSv");
    $("#TarjetaEst").empty();

    if (listasDatos.EstudiantesDTO instanceof  Array !== false) {
        console.log("Entro a Pintar la lista de EstudiantesSv");
        listasDatos.EstudiantesDTO.forEach(element => {
            $("#TarjetaEst").append(
                    '<hr>' +
                    '<div class="blog-card">' +
                    '<div class="meta">' +
                    '<div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>' +
                    '<ul class="details w3-medium w3-center">' +
                    '<li class="fa fa-graduation-cap w3-margin-top"><a href="#">' + element.Escuela + '</a></li>' +
                    '<br>' +
                    '<li class="fa fa-calendar w3-margin-top">' + element.FechaNacimiento + '</li>' +
                    '<br>' +
                    '<li class="fa fa-comments w3-margin-top">' + element.Correo + '</li>' +
                    '<br>' +
                    '<li class="fa fa-phone w3-margin-top">' +
                    '<ul>' +
                    '<li><a href="#">' + element.Telefono + ' - </a></li>' +
                    '<li><a href="#">' + element.Celular + '</a></li>' +
                    '</ul>' +
                    '</li>' +
                    '<br>' +
                    '<li class="fa fa-drivers-license-o w3-margin-top">' +
                    '<ul>' +
                    '<li>' + element.TipoDocumento + ': </li>' +
                    '<li>' + element.Documento + '</li>' +
                    '</ul>' +
                    '</li>' +
                    '</ul>' +
                    '</div>' +
                    '<div class="description">' +
                    '<h1>' + element.Nombre + ' ' + element.Apellidos + '</h1>' +
                    '<h2>' + element.Carreara + ' (' + element.Semestre + ')</h2>' +
                    '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>' +
                    '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>' +
                    '<p class="read-more">' +
                    '<a href="#">Mas Detalles</a>' +
                    '</p>' +
                    '</div>' +
                    '</div>'
                    );
        });
    } else {
        var element = listasDatos.EstudiantesDTO;
        console.log("Entro a Pintar Un EstudiantesSv");
        $("#TarjetaEst").append(
                '<hr>' +
                '<div class="blog-card">' +
                '<div class="meta">' +
                '<div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>' +
                '<ul class="details w3-medium w3-center">' +
                '<li class="fa fa-graduation-cap w3-margin-top"><a href="#">' + element.Escuela + '</a></li>' +
                '<br>' +
                '<li class="fa fa-calendar w3-margin-top">' + element.FechaNacimiento + '</li>' +
                '<br>' +
                '<li class="fa fa-comments w3-margin-top">' + element.Correo + '</li>' +
                '<br>' +
                '<li class="fa fa-phone w3-margin-top">' +
                '<ul>' +
                '<li><a href="#">' + element.Telefono + ' - </a></li>' +
                '<li><a href="#">' + element.Celular + '</a></li>' +
                '</ul>' +
                '</li>' +
                '<br>' +
                '<li class="fa fa-drivers-license-o w3-margin-top">' +
                '<ul>' +
                '<li>' + element.TipoDocumento + ': </li>' +
                '<li>' + element.Documento + '</li>' +
                '</ul>' +
                '</li>' +
                '</ul>' +
                '</div>' +
                '<div class="description">' +
                '<h1>' + element.Nombre + ' ' + element.Apellidos + '</h1>' +
                '<h2>' + element.Carreara + ' (' + element.Semestre + ')</h2>' +
                '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>' +
                '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>' +
                '<p class="read-more">' +
                '<a href="#">Mas Detalles</a>' +
                '</p>' +
                '</div>' +
                '</div>'
                );
    }
}

function Pintarinforme(listasDatos) {
    console.log("Pintar la Lista de EstudiantesSv");
    $("#Informe").empty();
  

    if (listasDatos.EstudiantesDTO instanceof  Array !== false) {
        console.log("Entro a Pintar la lista de EstudiantesSv");

        listasDatos.EstudiantesDTO.forEach(element => {
            $("#Informe").append(
                    '<head>'+
'<style>'+
'table {'+
  'font-family: arial, sans-serif;'+
  'border-collapse: collapse;'+
  'width: 100%;'+
'}'+

'td, th {'+
  'border: 1px solid #dddddd;'+
  'text-align: left;'+
  'padding: 8px;'+
'}'+

'tr:nth-child(even) {'+
  'background-color: #dddddd;'+
'}'+
'</style>'+
'</head>'+
'<body>'+


'<table>'+

'<tr>'+
'  <td>'+element.EstudiantesID+'</td>'+
  '  <td>'+element.Nombre+'</td>'+
  '  <td>'+element.Apellidos+'</td>'+
  '  <td>'+element.Correo+'y</td>'+
    '  <td>'+element.TipoDocumento+  element.Documento+'y</td>'+
      '  <td>'+element.FechaNacimiento+'y</td>'+
        '  <td>'+element.Celular+'y</td>'+
          '  <td>'+element.Telefono+'y</td>'+
            '  <td>'+element.Escuela+'y</td>'+
              '  <td>'+element.Carreara+'y</td>'+
                '  <td>'+element.Semestre+'y</td>'+
  '</tr>'+
'</table>'+
'</body>'
                 );
        });
    } else {
        var element = listasDatos.EstudiantesDTO;
        console.log("Entro a Pintar Un EstudiantesSv");
        $("#Informe").append(
                   '<head>'+
'<style>'+
'table {'+
  'font-family: arial, sans-serif;'+
  'border-collapse: collapse;'+
  'width: 100%;'+
'}'+

'td, th {'+
  'border: 1px solid #dddddd;'+
  'text-align: left;'+
  'padding: 8px;'+
'}'+

'tr:nth-child(even) {'+
  'background-color: #dddddd;'+
'}'+
'</style>'+
'</head>'+
'<body>'+


'<table>'+

'<tr>'+
  '  <td>'+element.Nombre+'</td>'+
  '  <td>'+element.Apellidos+'</td>'+
  '  <td>'+element.Correo+'y</td>'+
    '  <td>'+element.TipoDocumento+  element.Documento+'y</td>'+
      '  <td>'+element.FechaNacimiento+'y</td>'+
        '  <td>'+element.Celular+'y</td>'+
          '  <td>'+element.Telefono+'y</td>'+
            '  <td>'+element.Escuela+'y</td>'+
              '  <td>'+element.Carreara+'y</td>'+
                '  <td>'+element.Semestre+'y</td>'+
  '</tr>'+
'</table>'+
'</body>'
                );
    }
     
    
    
  
}
function excel(){
      var tmpElemento = document.createElement('a');
    // obtenemos la información desde el div que lo contiene en el html
    // Obtenemos la información de la tabla
    var data_type = 'data:application/vnd.ms-excel;charset=UTF-8';
    var tabla_div = document.getElementById('allDataGrid');
    var tabla_html = tabla_div.outerHTML.replace(/ /g, '%20');
    tmpElemento.href = data_type + ', ' + encodeURI("\ufeff"+tabla_div.outerHTML+"\r\n");
    // Asignamos el nombre a nuestro EXCEL
    tmpElemento.download = 'GestoresSociales.xls';
    // Simulamos el click al elemento creado para descargarlo
    tmpElemento.click();
    
}
function FormEstudiente() {
    $.ajax({
        url: api + "AdministradorSv/1",
        type: "Get",
        success: function () {

            console.log("*****************");
            console.log("Funcion Pintar Formulario EstudienteSv");
            console.log("*****************");

            var m = "'id02'";
            var b = "'none'";

            $("#id02").empty();
            $("#id02").append(
                    '<div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
                    '<header class="w3-container w3-blue">' +
                    '<span onclick="document.getElementById(' + m + ').style.display=' + b + '" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>' +
                    '<h2>Editar </h2>' +
                    '</header>' +
                    '<div class="w3-container">' +
                    '<br>' +
                    '<div class="form-group">' +
                    '<label for="usr">Nombre Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control " id="Nombre" placeholder="Ingrese Nombre">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Apellidos Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Apellidos" placeholder="Ingrese Apellidos">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Correo Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Correo" placeholder="Ingrese Correo">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Clave Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Clave" placeholder="Ingrese Clave">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">TipoDocumento Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="TipoDocumento" placeholder="Ingrese TipoDocumento">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Documento Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Documento" placeholder="Ingrese Documento">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">FechaNacimiento Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="FechaNacimiento" placeholder="Ingrese FechaNacimiento">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Celular Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Celular" placeholder="Ingrese Celular">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Telefono Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Telefono" placeholder="Ingrese Telefono">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Escuela Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Escuela" placeholder="Ingrese Escuela">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Carreara Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Carreara" placeholder="Ingrese Carreara">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="usr">Semestre Estudiantes :</label>' +
                    '<input type="text"' +
                    'class="form-control" id="Semestre" placeholder="Ingrese Semestre">' +
                    '</div>' +
                    '</div>' +
                    ' <div  class="w3-container w3-center">' +
                    '<button class="w3-btn w3-ripple w3-round-xlarge w3-hover-red w3-purple" onclick="crearEstudiantes(), listaTarjetaEst()">Crear</button>' +
                    '</div>' +
                    '<br>' +
                    '<div class="w3-container w3-light-grey w3-padding">' +
                    '<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById(' + m + ').style.display=' + b + '">Close</button>' +
                    '</div>' +
                    '</div>'
                    );

        },
        error: function () {
            alert('Errror El formulario actualizarEstudiante');
        }
    });
}

function crearEstudiantes() {

    console.log("Servicio Crear EstudiantesSv");
    var Estudiantes = '{' +
            '"Nombre": "' + $("#Nombre").val() + '"' + ', ' +
            '"Apellidos": "' + $("#Apellidos").val() + '"' + ', ' +
            '"Correo": "' + $("#Correo").val() + '"' + ', ' +
            '"Clave": "' + $("#Clave").val() + '"' + ', ' +
            '"TipoDocumento": "' + $("#TipoDocumento").val() + '"' + ', ' +
            '"Documento": "' + $("#Documento").val() + '"' + ', ' +
            '"FechaNacimiento": "' + $("#FechaNacimiento").val() + '"' + ', ' +
            '"Celular": "' + $("#Celular").val() + '"' + ', ' +
            '"Telefono": "' + $("#Telefono").val() + '"' + ', ' +
            '"Escuela": "' + $("#Escuela").val() + '"' + ', ' +
            '"Carreara": "' + $("#Carreara").val() + '"' + ', ' +
            '"Semestre": "' + $("#Semestre").val() + '"' + ', ' +
            '"Estado": "' + 1 + '"'

            + '}';

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: api + "EstudiantesSv",
        data: Estudiantes,
        dataType: "json",
        success: function (data) {
            console.log(data);
            console.log("Se ha creado un estudiante");
        },
        error: function () {
            alert('Error En el Servicio Crear EstudiantesSv');
        }
    });
}
