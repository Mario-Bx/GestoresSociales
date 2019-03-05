var api="http://localhost:8090/indexRest/rest/";
	function crearFormAdministrador() {
				$.ajax({
					url: api+"AdministradorSv",
					type: "Get",
					success: function (data) {
			
						var listasDatos = data; 
						console.log(listasDatos);
						console.log("*****************");
						console.log(listasDatos.AdministradorDTO[1].nombre);
						console.log("*****************");
						            
						$("#Administradorcrear").empty();  
								$("#Administradorcrear").append(
									'<div class="form-group">'+
										'<label for="usr">Nombre Administrador :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Nombre" placeholder="Ingrese Nombre" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">Apellidos Administrador :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Apellidos" placeholder="Ingrese Apellidos" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">Correo Administrador :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Correo" placeholder="Ingrese Correo" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">Clave Administrador :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Clave" placeholder="Ingrese Clave" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">FechaNacimiento Administrador :</label>'+
										'<input type="text"'+
										 'class="form-control" id="FechaNacimiento" placeholder="Ingrese FechaNacimiento" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">Documento Administrador :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Documento" placeholder="Ingrese Documento" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">Telefono Administrador :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Telefono" placeholder="Ingrese Telefono" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">Celular Administrador :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Celular" placeholder="Ingrese Celular" d #html1>'+
									'</div>'
						);
						
						
						$("#Administradorcrear").append(
						);
						
						
						
						$("#Administradorcrear").append(
								'<button type="submit" class="btn btn-primary" onclick="crearAdministrador()">Crear3</button>'
						);
					},
					
					
					
					error: function () {
						alert('Error function selectAdministrador');
					}
				});
	}
	function listaAdminLista() {
		$.ajax({
			url: api+"AdministradorSv",
	        type: "Get",
	        success: function (data) {
	            console.log(data);
	            var listasDatos = data;        
	            console.log(listasDatos.AdministradorDTO[1].nombre);
	            console.log("Prueba");
	            
	            var m = "'id02'"
	            var b = "'block'"
	            var e = "'empty'"
	            
	            $("#Administradorlista").empty();
	            
	            if (listasDatos != null) {
	            	console.log("Prueba2 "+listasDatos.length);
	                $("#Administradorlista").append('<thead>'+
	                '<tr class="w3-light-grey w3-hover-red">'+
	                '<th>id</th>'+
	                
	                '<th>Nombre</th>'+
	                '<th>Apellidos</th>'+
	                '<th>Correo</th>'+
	                '<th>Clave</th>'+
	                '<th>FechaNacimiento</th>'+
	                '<th>Documento</th>'+
	                '<th>Telefono</th>'+
	                '<th>Celular</th>'+
	                
	                '<th colspan=2>Acciones</th>'+
	                '</tr>'+
	                '</thead>');
	                
	                listasDatos.AdministradorDTO.forEach(element => {
	                	$("#Administradorlista").append(
	                        '<tr class="w3-hover-blue">'+
	                        '<td>'+element.AdministradorID+' </td>'+
	                        
	                        '<td>'+element.Nombre+' </td>'+
	                        '<td>'+element.Apellidos+' </td>'+
	                        '<td>'+element.Correo+' </td>'+
	                        '<td>'+element.Clave+' </td>'+
	                        '<td>'+element.FechaNacimiento+' </td>'+
	                        '<td>'+element.Documento+' </td>'+
	                        '<td>'+element.Telefono+' </td>'+
	                        '<td>'+element.Celular+' </td>'+
							
	                        '<td><button type="submit" class="btn btn-secondary" onclick="borrarAdminLista('+element.AdministradorID+')"><i class="fa fa-trash"></i></button></td>'+
	                        '<td><button onclick="document.getElementById('+m+').style.display='+b+', actualizarAdminLista('+element.AdministradorID+')" class="btn btn-secondary" (click)="editarDato(item.AdministradorID)"><i class="fa fa-edit"></i></button></td>'+
	                        
	                       '</tr>');
	                });
	            }
	        },
	        error: function () {
	            alert('Error function listaAdminLista');
	        }
	    });
	}
	function borrarAdminLista(idN){
		$.ajax({
			url: api+"AdministradorSv/"+idN,
			
			type: "Delete"
		});
		console.log("borar: "+idN);
	}
	function actualizarAdminLista(idN) {
		$.ajax({
				url: api+"AdministradorSv/"+idN,
				type: "Get",
				success: function (data) { 
					console.log(data);
					var datoEdit = data;        
					
					var m = "'id02'";
					var b = "'none'";
					
					$("#id02").empty();
					if (datoEdit != null) {
						console.log("Prueba2 "+datoEdit);
						$("#id02").append(
							'<div class="w3-modal-content w3-card-4 w3-animate-zoom">'+
								'<header class="w3-container w3-blue">'+
									'<span onclick="document.getElementById('+m+').style.display='+b+'" class="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>'+
									'<h2>Editar </h2>'+
								'</header>'+
								
								'<div class="container">'+
								'<br>'+
									'<form action="/action_page.php">'+
										'<div class="form-group">'+
											'<input type="text" class="form-control" value="'+datoEdit.AdminListaID+'" readonly="readonly">'+
										'</div>'+
										
										
										'<div class="form-group">'+
											'<label for="usr">Nombre:</label>'+
											'<input type="text" class="form-control" value="'+datoEdit.Nombre+' ">'+
										'</div>'+
	
										'<div class="form-group">'+
											'<label for="usr">Apellidos:</label>'+
											'<input type="text" class="form-control" value="'+datoEdit.Apellidos+' ">'+
										'</div>'+
	
										'<div class="form-group">'+
											'<label for="usr">Correo:</label>'+
											'<input type="text" class="form-control" value="'+datoEdit.Correo+' ">'+
										'</div>'+
	
										'<div class="form-group">'+
											'<label for="usr">Clave:</label>'+
											'<input type="text" class="form-control" value="'+datoEdit.Clave+' ">'+
										'</div>'+
	
										'<div class="form-group">'+
											'<label for="usr">FechaNacimiento:</label>'+
											'<input type="text" class="form-control" value="'+datoEdit.FechaNacimiento+' ">'+
										'</div>'+
	
										'<div class="form-group">'+
											'<label for="usr">Documento:</label>'+
											'<input type="text" class="form-control" value="'+datoEdit.Documento+' ">'+
										'</div>'+
	
										'<div class="form-group">'+
											'<label for="usr">Telefono:</label>'+
											'<input type="text" class="form-control" value="'+datoEdit.Telefono+' ">'+
										'</div>'+
	
										'<div class="form-group">'+
											'<label for="usr">Celular:</label>'+
											'<input type="text" class="form-control" value="'+datoEdit.Celular+' ">'+
										'</div>'+
	
										
										
										
										'<button type="submit" class="btn btn-primary" (click)="actualizar( html1.value, html2.value, html3.value, html4.value, html5.value, html6.value )">Crear</button>'+
									'</form>'+
								'</div>'+
							'<div class="w3-container w3-light-grey w3-padding">'+
								'<button class="w3-button w3-right w3-white w3-border" onclick="document.getElementById('+m+').style.display='+b+'">Close</button>'+
							'</div>'+
						'</div>');
					}
					
					
				},
			error: function () {
				alert('Errror actualizarAdminLista');
			}
		});
	}
	
	function crearFormEstudiantes() {
				$.ajax({
					url: api+"EstudiantesSv",
					type: "Get",
					success: function (data) {
			
						var listasDatos = data; 
						console.log(listasDatos);
						console.log("*****************");
						console.log(listasDatos.EstudiantesDTO[1].nombre);
						console.log("*****************");
						            
						$("#Estudiantescrear").empty();  
								$("#Estudiantescrear").append(
									'<div class="form-group">'+
										'<label for="usr">Nombre Estudiantes :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Nombre" placeholder="Ingrese Nombre" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">Apellidos Estudiantes :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Apellidos" placeholder="Ingrese Apellidos" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">Correo Estudiantes :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Correo" placeholder="Ingrese Correo" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">Clave Estudiantes :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Clave" placeholder="Ingrese Clave" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">FechaNacimiento Estudiantes :</label>'+
										'<input type="text"'+
										 'class="form-control" id="FechaNacimiento" placeholder="Ingrese FechaNacimiento" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">Documento Estudiantes :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Documento" placeholder="Ingrese Documento" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">Telefono Estudiantes :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Telefono" placeholder="Ingrese Telefono" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">Celular Estudiantes :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Celular" placeholder="Ingrese Celular" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">Escuela Estudiantes :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Escuela" placeholder="Ingrese Escuela" d #html1>'+
									'</div>'+
									'<div class="form-group">'+
										'<label for="usr">Carreara Estudiantes :</label>'+
										'<input type="text"'+
										 'class="form-control" id="Carreara" placeholder="Ingrese Carreara" d #html1>'+
									'</div>'
						);
						
						
						$("#Estudiantescrear").append(++
						);
						
						
						
						$("#Estudiantescrear").append(
								'<button type="submit" class="btn btn-primary" onclick="crearEstudiantes()">Crear3</button>'
						);
					},
					
					
					
					error: function () {
						alert('Error function selectEstudiantes');
					}
				});
	}
		
	function selectAdministrador() {
		$.ajax({
			url: api+"AdministradorSv",
			type: "Get",
			success: function (data) {
	
				var listasDatos = data; 
				console.log(listasDatos);
				console.log("*****************");
				console.log(listasDatos.AdministradorDTO[1].nombre);
				console.log("*****************");
				            
				$("#AdministradorlistaSELECT").empty();    
				if (listasDatos != null) {
					//$("#AdministradorlistaSELECT").append('<OPTION value="'+element.AdministradorID+'">'+element.nombre+'</OPTION>');
					listasDatos.AdministradorDTO.forEach(element => {
						$("#AdministradorlistaSELECT").append(
							'<OPTION value="'+element.AdministradorID+'">'+element.nombre+'</OPTION>'
						);
					});
				}
			},
			error: function () {
				alert('Error function selectAdministrador');
			}
		});
	}
	function crearAdministrador(){
						
		console.log("crearDeporte");
		var Administrador = '{'+
		'"Nombre": "'+$("#Nombre").val()+'"'+', '+
		'"Apellidos": "'+$("#Apellidos").val()+'"'+', '+
		'"Correo": "'+$("#Correo").val()+'"'+', '+
		'"Clave": "'+$("#Clave").val()+'"'+', '+
		'"FechaNacimiento": "'+$("#FechaNacimiento").val()+'"'+', '+
		'"Documento": "'+$("#Documento").val()+'"'+', '+
		'"Telefono": "'+$("#Telefono").val()+'"'+', '+
		'"Celular": "'+$("#Celular").val()+'"'
		+'}';
		
		console.log(Administrador);
	
		$.ajax({
			type:"POST",
			contentType: "application/json",
			url: api+"DeporteSv/",
			data:Administrador,
			dataType: "json",
			success: function (data) {
			console.log(data);
			},
			        error: function (data) {
			            alert('error FCREar');
			        }
		});
				}
	function selectEstudiantes() {
		$.ajax({
			url: api+"EstudiantesSv",
			type: "Get",
			success: function (data) {
	
				var listasDatos = data; 
				console.log(listasDatos);
				console.log("*****************");
				console.log(listasDatos.EstudiantesDTO[1].nombre);
				console.log("*****************");
				            
				$("#EstudianteslistaSELECT").empty();    
				if (listasDatos != null) {
					//$("#EstudianteslistaSELECT").append('<OPTION value="'+element.EstudiantesID+'">'+element.nombre+'</OPTION>');
					listasDatos.EstudiantesDTO.forEach(element => {
						$("#EstudianteslistaSELECT").append(
							'<OPTION value="'+element.EstudiantesID+'">'+element.nombre+'</OPTION>'
						);
					});
				}
			},
			error: function () {
				alert('Error function selectEstudiantes');
			}
		});
	}
	function crearEstudiantes(){
						
		console.log("crearDeporte");
		var Estudiantes = '{'+
		'"Nombre": "'+$("#Nombre").val()+'"'+', '+
		'"Apellidos": "'+$("#Apellidos").val()+'"'+', '+
		'"Correo": "'+$("#Correo").val()+'"'+', '+
		'"Clave": "'+$("#Clave").val()+'"'+', '+
		'"FechaNacimiento": "'+$("#FechaNacimiento").val()+'"'+', '+
		'"Documento": "'+$("#Documento").val()+'"'+', '+
		'"Telefono": "'+$("#Telefono").val()+'"'+', '+
		'"Celular": "'+$("#Celular").val()+'"'+', '+
		'"Escuela": "'+$("#Escuela").val()+'"'+', '+
		'"Carreara": "'+$("#Carreara").val()+'"'
		+'}';
		
		console.log(Estudiantes);
	
		$.ajax({
			type:"POST",
			contentType: "application/json",
			url: api+"DeporteSv/",
			data:Estudiantes,
			dataType: "json",
			success: function (data) {
			console.log(data);
			},
			        error: function (data) {
			            alert('error FCREar');
			        }
		});
				}
	function selectConvocatorias() {
		$.ajax({
			url: api+"ConvocatoriasSv",
			type: "Get",
			success: function (data) {
	
				var listasDatos = data; 
				console.log(listasDatos);
				console.log("*****************");
				console.log(listasDatos.ConvocatoriasDTO[1].nombre);
				console.log("*****************");
				            
				$("#ConvocatoriaslistaSELECT").empty();    
				if (listasDatos != null) {
					//$("#ConvocatoriaslistaSELECT").append('<OPTION value="'+element.ConvocatoriasID+'">'+element.nombre+'</OPTION>');
					listasDatos.ConvocatoriasDTO.forEach(element => {
						$("#ConvocatoriaslistaSELECT").append(
							'<OPTION value="'+element.ConvocatoriasID+'">'+element.nombre+'</OPTION>'
						);
					});
				}
			},
			error: function () {
				alert('Error function selectConvocatorias');
			}
		});
	}
	function crearConvocatorias(){
						
		console.log("crearDeporte");
		var Convocatorias = '{'+
		'"Nombre": "'+$("#Nombre").val()+'"'+', '+
		'"FechaInicio": "'+$("#FechaInicio").val()+'"'+', '+
		'"FechaFin": "'+$("#FechaFin").val()+'"'+', '+
		'"Hora": "'+$("#Hora").val()+'"'+', '+
		'"Encargado": "'+$("#Encargado").val()+'"'+', '+
		'"Descripcion": "'+$("#Descripcion").val()+'"'+', '+
		'"HorasGanadas": "'+$("#HorasGanadas").val()+'"'
		+'}';
		
		console.log(Convocatorias);
	
		$.ajax({
			type:"POST",
			contentType: "application/json",
			url: api+"DeporteSv/",
			data:Convocatorias,
			dataType: "json",
			success: function (data) {
			console.log(data);
			},
			        error: function (data) {
			            alert('error FCREar');
			        }
		});
				}
	function selectParticipantes() {
		$.ajax({
			url: api+"ParticipantesSv",
			type: "Get",
			success: function (data) {
	
				var listasDatos = data; 
				console.log(listasDatos);
				console.log("*****************");
				console.log(listasDatos.ParticipantesDTO[1].nombre);
				console.log("*****************");
				            
				$("#ParticipanteslistaSELECT").empty();    
				if (listasDatos != null) {
					//$("#ParticipanteslistaSELECT").append('<OPTION value="'+element.ParticipantesID+'">'+element.nombre+'</OPTION>');
					listasDatos.ParticipantesDTO.forEach(element => {
						$("#ParticipanteslistaSELECT").append(
							'<OPTION value="'+element.ParticipantesID+'">'+element.nombre+'</OPTION>'
						);
					});
				}
			},
			error: function () {
				alert('Error function selectParticipantes');
			}
		});
	}
	function crearParticipantes(){
						
		console.log("crearDeporte");
		var Participantes = '{'+
		'"Nombre": "'+$("#Nombre").val()+'"'
		+'}';
		
		console.log(Participantes);
	
		$.ajax({
			type:"POST",
			contentType: "application/json",
			url: api+"DeporteSv/",
			data:Participantes,
			dataType: "json",
			success: function (data) {
			console.log(data);
			},
			        error: function (data) {
			            alert('error FCREar');
			        }
		});
				}
	function selectBitacora() {
		$.ajax({
			url: api+"BitacoraSv",
			type: "Get",
			success: function (data) {
	
				var listasDatos = data; 
				console.log(listasDatos);
				console.log("*****************");
				console.log(listasDatos.BitacoraDTO[1].nombre);
				console.log("*****************");
				            
				$("#BitacoralistaSELECT").empty();    
				if (listasDatos != null) {
					//$("#BitacoralistaSELECT").append('<OPTION value="'+element.BitacoraID+'">'+element.nombre+'</OPTION>');
					listasDatos.BitacoraDTO.forEach(element => {
						$("#BitacoralistaSELECT").append(
							'<OPTION value="'+element.BitacoraID+'">'+element.nombre+'</OPTION>'
						);
					});
				}
			},
			error: function () {
				alert('Error function selectBitacora');
			}
		});
	}
	function crearBitacora(){
						
		console.log("crearDeporte");
		var Bitacora = '{'+
		'"Nombre": "'+$("#Nombre").val()+'"'+', '+
		'"Fecha": "'+$("#Fecha").val()+'"'+', '+
		'"Hora": "'+$("#Hora").val()+'"'+', '+
		'"Descripcion": "'+$("#Descripcion").val()+'"'
		+'}';
		
		console.log(Bitacora);
	
		$.ajax({
			type:"POST",
			contentType: "application/json",
			url: api+"DeporteSv/",
			data:Bitacora,
			dataType: "json",
			success: function (data) {
			console.log(data);
			},
			        error: function (data) {
			            alert('error FCREar');
			        }
		});
				}
	function selectSanciones() {
		$.ajax({
			url: api+"SancionesSv",
			type: "Get",
			success: function (data) {
	
				var listasDatos = data; 
				console.log(listasDatos);
				console.log("*****************");
				console.log(listasDatos.SancionesDTO[1].nombre);
				console.log("*****************");
				            
				$("#SancioneslistaSELECT").empty();    
				if (listasDatos != null) {
					//$("#SancioneslistaSELECT").append('<OPTION value="'+element.SancionesID+'">'+element.nombre+'</OPTION>');
					listasDatos.SancionesDTO.forEach(element => {
						$("#SancioneslistaSELECT").append(
							'<OPTION value="'+element.SancionesID+'">'+element.nombre+'</OPTION>'
						);
					});
				}
			},
			error: function () {
				alert('Error function selectSanciones');
			}
		});
	}
	function crearSanciones(){
						
		console.log("crearDeporte");
		var Sanciones = '{'+
		'"Descripcion": "'+$("#Descripcion").val()+'"'+', '+
		'"NumeroConvocatria": "'+$("#NumeroConvocatria").val()+'"'+', '+
		'"ConInicial": "'+$("#ConInicial").val()+'"'+', '+
		'"ConFinal": "'+$("#ConFinal").val()+'"'
		+'}';
		
		console.log(Sanciones);
	
		$.ajax({
			type:"POST",
			contentType: "application/json",
			url: api+"DeporteSv/",
			data:Sanciones,
			dataType: "json",
			success: function (data) {
			console.log(data);
			},
			        error: function (data) {
			            alert('error FCREar');
			        }
		});
				}
