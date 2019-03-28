var api = "http://localhost:8090/indexRest/rest/";

function listaAdminLista(id) {
    $.ajax({
        url: api + "AdministradorSv",+id
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

    if (listasDatos != null) {
        console.log("Prueba2 " + listasDatos.length);
        $("#Administradorlista").append('<thead>' +Datos
                '<tr class="w3-light-grey w3-hover-red">' + 
                '<th>id</th>' +
                '<th>Nombre</th>' +
                '<th>Apellidos</th>' +
                '<th>Correo</th>' +
                '<th>Clave</th>' +
                '<th>FechaNacimiento</th>' +
                '<th>Documento</th>' +
                '<th>Telefono</th>' +
                '<th>Celular</th>' +
                '<th colspan=2>Acciones</th>' +
                '</tr>' +
                '</thead>');

        listasDatos.AdministradorDTO.forEach(element => {
            $("#Administradorlista").append(
                    '<tr class="cards">' +
                    '<td>' + element.AdministradorID + ' </td>' +
                    '<td>' + element.Nombre + ' </td>' +
                    '<td>' + element.Apellidos + ' </td>' +
                    '<td>' + element.Correo + ' </td>' +
                    '<td>' + element.Clave + ' </td>' +
                    '<td>' + element.FechaNacimiento + ' </td>' +
                    '<td>' + element.Documento + ' </td>' +
                    '<td>' + element.Telefono + ' </td>' +
                    '<td>' + element.Celular + ' </td>' +
                    '<td><button type="submit" class="btn btn-secondary" onclick="borrarAdminLista(' + element.AdministradorID + ')"><i class="fa fa-trash"></i></button></td>' +
                    '<td><button onclick="document.getElementById(' + m + ').style.display=' + b + ', actualizarAdminLista(' + element.AdministradorID + ')" class="btn btn-secondary" (click)="editarDato(item.AdministradorID)"><i class="fa fa-edit"></i></button></td>' +
                    '</tr>');
        });
    }
}


