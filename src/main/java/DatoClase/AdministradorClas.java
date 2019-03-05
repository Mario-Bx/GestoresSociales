package DatoClase;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

/**
 *
 * @author MARIOBX,jalba
 */
@Entity
@Table(name = "Administrador")
public class AdministradorClas implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int AdministradorID;
	
	private String Nombre;
	private String Apellidos;
	private String Correo;
	private String Clave;
	private String FechaNacimiento;
	private int Documento;
	private int Telefono;
	private int Celular;
	
	public AdministradorClas() {
		this.list_Convocatorias = new ArrayList<ConvocatoriasClas>();
	}
	
	public AdministradorClas(
String Nombre,
String Apellidos,
String Correo,
String Clave,
String FechaNacimiento,
int Documento,
int Telefono,
int Celular
		) {
    	this.Nombre = Nombre;
    	this.Apellidos = Apellidos;
    	this.Correo = Correo;
    	this.Clave = Clave;
    	this.FechaNacimiento = FechaNacimiento;
    	this.Documento = Documento;
    	this.Telefono = Telefono;
    	this.Celular = Celular;

        this.list_Convocatorias = new ArrayList<ConvocatoriasClas>();
    }
    
    public int getAdministradorID() {
    	return AdministradorID;
    }
    public void setAdministradorID(int AdministradorID) {
    	this.AdministradorID = AdministradorID;
    }

public String getNombre() {
	return Nombre;
}
public void setNombre(String Nombre) {
	this.Nombre = Nombre;
}

public String getApellidos() {
	return Apellidos;
}
public void setApellidos(String Apellidos) {
	this.Apellidos = Apellidos;
}

public String getCorreo() {
	return Correo;
}
public void setCorreo(String Correo) {
	this.Correo = Correo;
}

public String getClave() {
	return Clave;
}
public void setClave(String Clave) {
	this.Clave = Clave;
}

public String getFechaNacimiento() {
	return FechaNacimiento;
}
public void setFechaNacimiento(String FechaNacimiento) {
	this.FechaNacimiento = FechaNacimiento;
}

public int getDocumento() {
	return Documento;
}
public void setDocumento(int Documento) {
	this.Documento = Documento;
}

public int getTelefono() {
	return Telefono;
}
public void setTelefono(int Telefono) {
	this.Telefono = Telefono;
}

public int getCelular() {
	return Celular;
}
public void setCelular(int Celular) {
	this.Celular = Celular;
}


	@Override
	public String toString() {
	return "Datos AdministradorClas{" + "AdministradorID=" + AdministradorID +
            ", Nombre=" + Nombre + 
            ", Apellidos=" + Apellidos + 
            ", Correo=" + Correo + 
            ", Clave=" + Clave + 
            ", FechaNacimiento=" + FechaNacimiento + 
            ", Documento=" + Documento + 
            ", Telefono=" + Telefono + 
            ", Celular=" + Celular + 
	'}';
	}
	
	//Bi-dirreccional
	// Relacion de 1-M entre (Administrador-Convocatorias)
	@OneToMany(mappedBy = "administradorFK", cascade = CascadeType.ALL)
	private List<ConvocatoriasClas> list_Convocatorias;
	
	///Metodos de (Administrador-Convocatorias)
	public List<ConvocatoriasClas> getList_Convocatorias() {
		return list_Convocatorias;
	}
	
	public void setList_Convocatorias(List<ConvocatoriasClas> list_Convocatorias) {
		this.list_Convocatorias = list_Convocatorias;
	}
	
	public void addConvocatorias(ConvocatoriasClas convocatorias) {
		convocatorias.setAdministradorFK(this);
		this.list_Convocatorias.add(convocatorias);
	}
}
