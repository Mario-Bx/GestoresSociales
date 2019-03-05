package DatoClase;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

/**
 *
 * @author MARIOBX,jalba,renan,enumpaque
 */
@Entity
@Table(name = "Participantes")
public class ParticipantesClas implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ParticipantesID;
	
	private String Nombre;
	
	public ParticipantesClas() {
	}
	
	public ParticipantesClas(
String Nombre
		) {
    	this.Nombre = Nombre;

    }
    
    public int getParticipantesID() {
    	return ParticipantesID;
    }
    public void setParticipantesID(int ParticipantesID) {
    	this.ParticipantesID = ParticipantesID;
    }

public String getNombre() {
	return Nombre;
}
public void setNombre(String Nombre) {
	this.Nombre = Nombre;
}


	@Override
	public String toString() {
	return "Datos ParticipantesClas{" + "ParticipantesID=" + ParticipantesID +
            ", Nombre=" + Nombre + 
	'}';
	}
	
	//Realacoin de 1---1 entrew (Participantes --- Estudiantes)
	@ManyToOne
	@JoinColumn(name = "EstudiantesFK")
	private EstudiantesClas estudiantesFK;
	
	public EstudiantesClas getEstudiantesFK() {
	    return estudiantesFK;
	}
	
	public void setEstudiantesFK(EstudiantesClas estudiantesFK) {
	    this.estudiantesFK = estudiantesFK;
	}
	//Realacoin de 1---1 entrew (Participantes --- Convocatorias)
	@ManyToOne
	@JoinColumn(name = "ConvocatoriasFK")
	private ConvocatoriasClas convocatoriasFK;
	
	public ConvocatoriasClas getConvocatoriasFK() {
	    return convocatoriasFK;
	}
	
	public void setConvocatoriasFK(ConvocatoriasClas convocatoriasFK) {
	    this.convocatoriasFK = convocatoriasFK;
	}
}
