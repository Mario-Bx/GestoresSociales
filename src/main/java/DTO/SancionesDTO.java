package DTO;

import java.util.*;
import DatoClase.*;
import javax.xml.bind.annotation.*;

/**
 *
 * @author MARIOBX,jalba,renan,enumpaque
 */
@XmlRootElement(name = "SancionesDTO")
@XmlAccessorType(XmlAccessType.FIELD)
public class SancionesDTO {
	
	private int SancionesID;
	private String Descripcion;
	private int NumeroConvocatria;
	private int ConInicial;
	private int ConFinal;
	private EstudiantesDTO EstudiantesFk;
	
	public SancionesDTO() {
    }

    public SancionesDTO(SancionesClas objCL) {
    	 this.SancionesID = objCL.getSancionesID();
    	this.Descripcion = objCL.getDescripcion();
    	this.NumeroConvocatria = objCL.getNumeroConvocatria();
    	this.ConInicial = objCL.getConInicial();
    	this.ConFinal = objCL.getConFinal();
this.EstudiantesFk = new EstudiantesDTO(objCL.getEstudiantesFK());
    }
    
    public int getSancionesID() {
	return SancionesID;
	}
	
	public void setSancionesID(int SancionesID) {
	this.SancionesID = SancionesID;
	}
	
	public String getDescripcion() {
		return Descripcion;
	}
	
	public void setDescripcion(String Descripcion) {
		this.Descripcion = Descripcion;
	}
	public int getNumeroConvocatria() {
		return NumeroConvocatria;
	}
	
	public void setNumeroConvocatria(int NumeroConvocatria) {
		this.NumeroConvocatria = NumeroConvocatria;
	}
	public int getConInicial() {
		return ConInicial;
	}
	
	public void setConInicial(int ConInicial) {
		this.ConInicial = ConInicial;
	}
	public int getConFinal() {
		return ConFinal;
	}
	
	public void setConFinal(int ConFinal) {
		this.ConFinal = ConFinal;
	}
        
public EstudiantesDTO getEstudiantesFk() {
	return EstudiantesFk;
}

public void setEstudiantesFk(EstudiantesDTO estudiantesFk) {
	this.EstudiantesFk = estudiantesFk;
}
        
}
