package DTO;

import java.util.*;
import DatoClase.*;
import javax.xml.bind.annotation.*;

/**
 *
 * @author MARIOBX,jalba,renan,enumpaque
 */
@XmlRootElement(name = "BitacoraDTO")
@XmlAccessorType(XmlAccessType.FIELD)
public class BitacoraDTO {
	
	private int BitacoraID;
	private String Nombre;
	private String Fecha;
	private String Hora;
	private String Descripcion;
	private EstudiantesDTO EstudiantesFk;
	
	public BitacoraDTO() {
    }

    public BitacoraDTO(BitacoraClas objCL) {
    	 this.BitacoraID = objCL.getBitacoraID();
    	this.Nombre = objCL.getNombre();
    	this.Fecha = objCL.getFecha();
    	this.Hora = objCL.getHora();
    	this.Descripcion = objCL.getDescripcion();
this.EstudiantesFk = new EstudiantesDTO(objCL.getEstudiantesFK());
    }
    
    public int getBitacoraID() {
	return BitacoraID;
	}
	
	public void setBitacoraID(int BitacoraID) {
	this.BitacoraID = BitacoraID;
	}
	
	public String getNombre() {
		return Nombre;
	}
	
	public void setNombre(String Nombre) {
		this.Nombre = Nombre;
	}
	public String getFecha() {
		return Fecha;
	}
	
	public void setFecha(String Fecha) {
		this.Fecha = Fecha;
	}
	public String getHora() {
		return Hora;
	}
	
	public void setHora(String Hora) {
		this.Hora = Hora;
	}
	public String getDescripcion() {
		return Descripcion;
	}
	
	public void setDescripcion(String Descripcion) {
		this.Descripcion = Descripcion;
	}
        
public EstudiantesDTO getEstudiantesFk() {
	return EstudiantesFk;
}

public void setEstudiantesFk(EstudiantesDTO estudiantesFk) {
	this.EstudiantesFk = estudiantesFk;
}
        
}
