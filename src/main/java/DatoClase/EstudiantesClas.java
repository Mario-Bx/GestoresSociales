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
@Table(name = "Estudiantes")
public class EstudiantesClas implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int EstudiantesID;
	
	private String Nombre;
	private String Apellidos;
	private String Correo;
	private String Clave;
	private int Documento;
	private String FechaNacimiento;
	private int Telefono;
	private int Celular;
	private String Escuela;
	private String Carreara;
	
	public EstudiantesClas() {
		this.list_Participantes = new ArrayList<ParticipantesClas>();
		this.list_Sanciones = new ArrayList<SancionesClas>();
		this.list_Bitacora = new ArrayList<BitacoraClas>();
	}
	
	public EstudiantesClas(
String Nombre,
String Apellidos,
String Correo,
String Clave,
int Documento,
String FechaNacimiento,
int Telefono,
int Celular,
String Escuela,
String Carreara
		) {
    	this.Nombre = Nombre;
    	this.Apellidos = Apellidos;
    	this.Correo = Correo;
    	this.Clave = Clave;
    	this.Documento = Documento;
    	this.FechaNacimiento = FechaNacimiento;
    	this.Telefono = Telefono;
    	this.Celular = Celular;
    	this.Escuela = Escuela;
    	this.Carreara = Carreara;

        this.list_Participantes = new ArrayList<ParticipantesClas>();
        this.list_Sanciones = new ArrayList<SancionesClas>();
        this.list_Bitacora = new ArrayList<BitacoraClas>();
    }
    
    public int getEstudiantesID() {
    	return EstudiantesID;
    }
    public void setEstudiantesID(int EstudiantesID) {
    	this.EstudiantesID = EstudiantesID;
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

public int getDocumento() {
	return Documento;
}
public void setDocumento(int Documento) {
	this.Documento = Documento;
}

public String getFechaNacimiento() {
	return FechaNacimiento;
}
public void setFechaNacimiento(String FechaNacimiento) {
	this.FechaNacimiento = FechaNacimiento;
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

public String getEscuela() {
	return Escuela;
}
public void setEscuela(String Escuela) {
	this.Escuela = Escuela;
}

public String getCarreara() {
	return Carreara;
}
public void setCarreara(String Carreara) {
	this.Carreara = Carreara;
}


	@Override
	public String toString() {
	return "Datos EstudiantesClas{" + "EstudiantesID=" + EstudiantesID +
            ", Nombre=" + Nombre + 
            ", Apellidos=" + Apellidos + 
            ", Correo=" + Correo + 
            ", Clave=" + Clave + 
            ", Documento=" + Documento + 
            ", FechaNacimiento=" + FechaNacimiento + 
            ", Telefono=" + Telefono + 
            ", Celular=" + Celular + 
            ", Escuela=" + Escuela + 
            ", Carreara=" + Carreara + 
	'}';
	}
	
	//Bi-dirreccional
	// Relacion de 1-M entre (Estudiantes-Participantes)
	@OneToMany(mappedBy = "estudiantesFK", cascade = CascadeType.ALL)
	private List<ParticipantesClas> list_Participantes;
	
	///Metodos de (Estudiantes-Participantes)
	public List<ParticipantesClas> getList_Participantes() {
		return list_Participantes;
	}
	
	public void setList_Participantes(List<ParticipantesClas> list_Participantes) {
		this.list_Participantes = list_Participantes;
	}
	
	public void addParticipantes(ParticipantesClas participantes) {
		participantes.setEstudiantesFK(this);
		this.list_Participantes.add(participantes);
	}
	//Bi-dirreccional
	// Relacion de 1-M entre (Estudiantes-Sanciones)
	@OneToMany(mappedBy = "estudiantesFK", cascade = CascadeType.ALL)
	private List<SancionesClas> list_Sanciones;
	
	///Metodos de (Estudiantes-Sanciones)
	public List<SancionesClas> getList_Sanciones() {
		return list_Sanciones;
	}
	
	public void setList_Sanciones(List<SancionesClas> list_Sanciones) {
		this.list_Sanciones = list_Sanciones;
	}
	
	public void addSanciones(SancionesClas sanciones) {
		sanciones.setEstudiantesFK(this);
		this.list_Sanciones.add(sanciones);
	}
	//Bi-dirreccional
	// Relacion de 1-M entre (Estudiantes-Bitacora)
	@OneToMany(mappedBy = "estudiantesFK", cascade = CascadeType.ALL)
	private List<BitacoraClas> list_Bitacora;
	
	///Metodos de (Estudiantes-Bitacora)
	public List<BitacoraClas> getList_Bitacora() {
		return list_Bitacora;
	}
	
	public void setList_Bitacora(List<BitacoraClas> list_Bitacora) {
		this.list_Bitacora = list_Bitacora;
	}
	
	public void addBitacora(BitacoraClas bitacora) {
		bitacora.setEstudiantesFK(this);
		this.list_Bitacora.add(bitacora);
	}
}
