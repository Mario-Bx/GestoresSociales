package DatoClase;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

/**
 *
 * @author MARIOBX
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
	private String Encargado;
	private String Descripcion;
	private int HorasGanadas;
	private int NoEstudienates;
	private int NoReserva;
	private String PeriodoAcademico;
	private Boolean Estado;
	
	public ConvocatoriasClas() {
		this.list_Principal = new ArrayList<PrincipalClas>();
		this.list_Reserva = new ArrayList<ReservaClas>();
	}
	
	public ConvocatoriasClas(
String Nombre,
String FechaInicio,
String FechaFin,
String Encargado,
String Descripcion,
int HorasGanadas,
int NoEstudienates,
int NoReserva,
String PeriodoAcademico,
Boolean Estado
		) {
    	this.Nombre = Nombre;
    	this.FechaInicio = FechaInicio;
    	this.FechaFin = FechaFin;
    	this.Encargado = Encargado;
    	this.Descripcion = Descripcion;
    	this.HorasGanadas = HorasGanadas;
    	this.NoEstudienates = NoEstudienates;
    	this.NoReserva = NoReserva;
    	this.PeriodoAcademico = PeriodoAcademico;
    	this.Estado = Estado;

        this.list_Principal = new ArrayList<PrincipalClas>();
        this.list_Reserva = new ArrayList<ReservaClas>();
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

public int getNoEstudienates() {
	return NoEstudienates;
}
public void setNoEstudienates(int NoEstudienates) {
	this.NoEstudienates = NoEstudienates;
}

public int getNoReserva() {
	return NoReserva;
}
public void setNoReserva(int NoReserva) {
	this.NoReserva = NoReserva;
}

public String getPeriodoAcademico() {
	return PeriodoAcademico;
}
public void setPeriodoAcademico(String PeriodoAcademico) {
	this.PeriodoAcademico = PeriodoAcademico;
}

public Boolean getEstado() {
	return Estado;
}
public void setEstado(Boolean Estado) {
	this.Estado = Estado;
}


	@Override
	public String toString() {
	return "Datos ConvocatoriasClas{" + "ConvocatoriasID=" + ConvocatoriasID +
            ", Nombre=" + Nombre + 
            ", FechaInicio=" + FechaInicio + 
            ", FechaFin=" + FechaFin + 
            ", Encargado=" + Encargado + 
            ", Descripcion=" + Descripcion + 
            ", HorasGanadas=" + HorasGanadas + 
            ", NoEstudienates=" + NoEstudienates + 
            ", NoReserva=" + NoReserva + 
            ", PeriodoAcademico=" + PeriodoAcademico + 
            ", Estado=" + Estado + 
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
	// Relacion de 1-M entre (Convocatorias-Principal)
	@OneToMany(mappedBy = "convocatoriasFK", cascade = CascadeType.ALL)
	private List<PrincipalClas> list_Principal;
	
	///Metodos de (Convocatorias-Principal)
	public List<PrincipalClas> getList_Principal() {
		return list_Principal;
	}
	
	public void setList_Principal(List<PrincipalClas> list_Principal) {
		this.list_Principal = list_Principal;
	}
	
	public void addPrincipal(PrincipalClas principal) {
		principal.setConvocatoriasFK(this);
		this.list_Principal.add(principal);
	}
	//Bi-dirreccional
	// Relacion de 1-M entre (Convocatorias-Reserva)
	@OneToMany(mappedBy = "convocatoriasFK", cascade = CascadeType.ALL)
	private List<ReservaClas> list_Reserva;
	
	///Metodos de (Convocatorias-Reserva)
	public List<ReservaClas> getList_Reserva() {
		return list_Reserva;
	}
	
	public void setList_Reserva(List<ReservaClas> list_Reserva) {
		this.list_Reserva = list_Reserva;
	}
	
	public void addReserva(ReservaClas reserva) {
		reserva.setConvocatoriasFK(this);
		this.list_Reserva.add(reserva);
	}
	//Realacoin de 1---1 entrew (Convocatorias --- Dependencia)
	@ManyToOne
	@JoinColumn(name = "DependenciaFK")
	private DependenciaClas dependenciaFK;
	
	public DependenciaClas getDependenciaFK() {
	    return dependenciaFK;
	}
	
	public void setDependenciaFK(DependenciaClas dependenciaFK) {
	    this.dependenciaFK = dependenciaFK;
	}
}
