package DTO;

import java.util.*;
import DatoClase.*;
import javax.xml.bind.annotation.*;

/**
 *
 * @author MARIOBX,jalba,renan,enumpaque
 */
@XmlRootElement(name = "ParticipantesDTO")
@XmlAccessorType(XmlAccessType.FIELD)
public class ParticipantesDTO {
	
	private int ParticipantesID;
	private String Nombre;
	private EstudiantesDTO EstudiantesFk;
	private ConvocatoriasDTO ConvocatoriasFk;
	
	public ParticipantesDTO() {
    }

    public ParticipantesDTO(ParticipantesClas objCL) {
    	 this.ParticipantesID = objCL.getParticipantesID();
    	this.Nombre = objCL.getNombre();
this.EstudiantesFk = new EstudiantesDTO(objCL.getEstudiantesFK());
this.ConvocatoriasFk = new ConvocatoriasDTO(objCL.getConvocatoriasFK());
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
        
public EstudiantesDTO getEstudiantesFk() {
	return EstudiantesFk;
}

public void setEstudiantesFk(EstudiantesDTO estudiantesFk) {
	this.EstudiantesFk = estudiantesFk;
}
public ConvocatoriasDTO getConvocatoriasFk() {
	return ConvocatoriasFk;
}

public void setConvocatoriasFk(ConvocatoriasDTO convocatoriasFk) {
	this.ConvocatoriasFk = convocatoriasFk;
}
        
}
