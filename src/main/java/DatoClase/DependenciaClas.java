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
@Table(name = "Dependencia")
public class DependenciaClas implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int DependenciaID;
	
	private String Nombre;
	private Boolean Estado;
	
	public DependenciaClas() {
		this.list_Convocatorias = new ArrayList<ConvocatoriasClas>();
	}
	
	public DependenciaClas(
String Nombre,
Boolean Estado
		) {
    	this.Nombre = Nombre;
    	this.Estado = Estado;

        this.list_Convocatorias = new ArrayList<ConvocatoriasClas>();
    }
    
    public int getDependenciaID() {
    	return DependenciaID;
    }
    public void setDependenciaID(int DependenciaID) {
    	this.DependenciaID = DependenciaID;
    }

public String getNombre() {
	return Nombre;
}
public void setNombre(String Nombre) {
	this.Nombre = Nombre;
}

public Boolean getEstado() {
	return Estado;
}
public void setEstado(Boolean Estado) {
	this.Estado = Estado;
}


	@Override
	public String toString() {
	return "Datos DependenciaClas{" + "DependenciaID=" + DependenciaID +
            ", Nombre=" + Nombre + 
            ", Estado=" + Estado + 
	'}';
	}
	
	//Realacoin de 1---1 entrew (Dependencia --- Escuela)
	@ManyToOne
	@JoinColumn(name = "EscuelaFK")
	private EscuelaClas escuelaFK;
	
	public EscuelaClas getEscuelaFK() {
	    return escuelaFK;
	}
	
	public void setEscuelaFK(EscuelaClas escuelaFK) {
	    this.escuelaFK = escuelaFK;
	}
	//Bi-dirreccional
	// Relacion de 1-M entre (Dependencia-Convocatorias)
	@OneToMany(mappedBy = "dependenciaFK", cascade = CascadeType.ALL)
	private List<ConvocatoriasClas> list_Convocatorias;
	
	///Metodos de (Dependencia-Convocatorias)
	public List<ConvocatoriasClas> getList_Convocatorias() {
		return list_Convocatorias;
	}
	
	public void setList_Convocatorias(List<ConvocatoriasClas> list_Convocatorias) {
		this.list_Convocatorias = list_Convocatorias;
	}
	
	public void addConvocatorias(ConvocatoriasClas convocatorias) {
		convocatorias.setDependenciaFK(this);
		this.list_Convocatorias.add(convocatorias);
	}
}
