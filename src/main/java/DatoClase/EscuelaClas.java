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
@Table(name = "Escuela")
public class EscuelaClas implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int EscuelaID;
	
	private String Nombre;
	
	public EscuelaClas() {
		this.list_Dependencia = new ArrayList<DependenciaClas>();
	}
	
	public EscuelaClas(
String Nombre
		) {
    	this.Nombre = Nombre;

        this.list_Dependencia = new ArrayList<DependenciaClas>();
    }
    
    public int getEscuelaID() {
    	return EscuelaID;
    }
    public void setEscuelaID(int EscuelaID) {
    	this.EscuelaID = EscuelaID;
    }

public String getNombre() {
	return Nombre;
}
public void setNombre(String Nombre) {
	this.Nombre = Nombre;
}


	@Override
	public String toString() {
	return "Datos EscuelaClas{" + "EscuelaID=" + EscuelaID +
            ", Nombre=" + Nombre + 
	'}';
	}
	
	//Bi-dirreccional
	// Relacion de 1-M entre (Escuela-Dependencia)
	@OneToMany(mappedBy = "escuelaFK", cascade = CascadeType.ALL)
	private List<DependenciaClas> list_Dependencia;
	
	///Metodos de (Escuela-Dependencia)
	public List<DependenciaClas> getList_Dependencia() {
		return list_Dependencia;
	}
	
	public void setList_Dependencia(List<DependenciaClas> list_Dependencia) {
		this.list_Dependencia = list_Dependencia;
	}
	
	public void addDependencia(DependenciaClas dependencia) {
		dependencia.setEscuelaFK(this);
		this.list_Dependencia.add(dependencia);
	}
	//Realacoin de 1---1 entrew (Escuela --- Administrador)
	@ManyToOne
	@JoinColumn(name = "AdministradorFK")
	private AdministradorClas administradorFK;
	
	public AdministradorClas getAdministradorFK() {
	    return administradorFK;
	}
	
	public void setAdministradorFK(AdministradorClas administradorFK) {
	    this.administradorFK = administradorFK;
	}
}
