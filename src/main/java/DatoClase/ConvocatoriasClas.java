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
@Table(name = "Convocatorias")
public class ConvocatoriasClas implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ConvocatoriasID;
	
	private String Nombre;
	private String FechaInicio;
	private String FechaFin;
	private String Hora;
	private String Encargado;
	private String Descripcion;
	private int HorasGanadas;
	
	public ConvocatoriasClas() {
		this.list_Participantes = new ArrayList<ParticipantesClas>();
	}
	
	public ConvocatoriasClas(
String Nombre,
String FechaInicio,
String FechaFin,
String Hora,
String Encargado,
String Descripcion,
int HorasGanadas
		) {
    	this.Nombre = Nombre;
    	this.FechaInicio = FechaInicio;
    	this.FechaFin = FechaFin;
    	this.Hora = Hora;
    	this.Encargado = Encargado;
    	this.Descripcion = Descripcion;
    	this.HorasGanadas = HorasGanadas;

        this.list_Participantes = new ArrayList<ParticipantesClas>();
    }
    
    public int getConvocatoriasID() {
    	return ConvocatoriasID;
    }
    public void setConvocatoriasID(int ConvocatoriasID) {
    	this.ConvocatoriasID = ConvocatoriasID;
    }

public String getNombre() {
	return Nombre;
}
public void setNombre(String Nombre) {
	this.Nombre = Nombre;
}

public String getFechaInicio() {
	return FechaInicio;
}
public void setFechaInicio(String FechaInicio) {
	this.FechaInicio = FechaInicio;
}

public String getFechaFin() {
	return FechaFin;
}
public void setFechaFin(String FechaFin) {
	this.FechaFin = FechaFin;
}

public String getHora() {
	return Hora;
}
public void setHora(String Hora) {
	this.Hora = Hora;
}

public String getEncargado() {
	return Encargado;
}
public void setEncargado(String Encargado) {
	this.Encargado = Encargado;
}

public String getDescripcion() {
	return Descripcion;
}
public void setDescripcion(String Descripcion) {
	this.Descripcion = Descripcion;
}

public int getHorasGanadas() {
	return HorasGanadas;
}
public void setHorasGanadas(int HorasGanadas) {
	this.HorasGanadas = HorasGanadas;
}


	@Override
	public String toString() {
	return "Datos ConvocatoriasClas{" + "ConvocatoriasID=" + ConvocatoriasID +
            ", Nombre=" + Nombre + 
            ", FechaInicio=" + FechaInicio + 
            ", FechaFin=" + FechaFin + 
            ", Hora=" + Hora + 
            ", Encargado=" + Encargado + 
            ", Descripcion=" + Descripcion + 
            ", HorasGanadas=" + HorasGanadas + 
	'}';
	}
	
	//Realacoin de 1---1 entrew (Convocatorias --- Administrador)
	@ManyToOne
	@JoinColumn(name = "AdministradorFK")
	private AdministradorClas administradorFK;
	
	public AdministradorClas getAdministradorFK() {
	    return administradorFK;
	}
	
	public void setAdministradorFK(AdministradorClas administradorFK) {
	    this.administradorFK = administradorFK;
	}
	//Bi-dirreccional
	// Relacion de 1-M entre (Convocatorias-Participantes)
	@OneToMany(mappedBy = "convocatoriasFK", cascade = CascadeType.ALL)
	private List<ParticipantesClas> list_Participantes;
	
	///Metodos de (Convocatorias-Participantes)
	public List<ParticipantesClas> getList_Participantes() {
		return list_Participantes;
	}
	
	public void setList_Participantes(List<ParticipantesClas> list_Participantes) {
		this.list_Participantes = list_Participantes;
	}
	
	public void addParticipantes(ParticipantesClas participantes) {
		participantes.setConvocatoriasFK(this);
		this.list_Participantes.add(participantes);
	}
}
