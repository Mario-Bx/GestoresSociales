package DTO;

import java.util.*;
import DatoClase.*;
import javax.xml.bind.annotation.*;

/**
 *
 * @author MARIO
 */
@XmlRootElement(name = "EscuelaDTO")
@XmlAccessorType(XmlAccessType.FIELD)
public class EscuelaDTO {
	
	private int EscuelaID;
	private String Nombre;
	private List<DependenciaDTO> list_Dependencia;
	private AdministradorDTO AdministradorFk;
	
	public EscuelaDTO() {
    }

    public EscuelaDTO(EscuelaClas objCL) {
    	 this.EscuelaID = objCL.getEscuelaID();
    	this.Nombre = objCL.getNombre();
this.AdministradorFk = new AdministradorDTO(objCL.getAdministradorFK());
this.list_Dependencia = new ArrayList<DependenciaDTO>();
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
        
public AdministradorDTO getAdministradorFk() {
	return AdministradorFk;
}

public void setAdministradorFk(AdministradorDTO administradorFk) {
	this.AdministradorFk = administradorFk;
}
        
        public List<DependenciaDTO> list_Dependencia(List<DependenciaClas> list_Dependencia) {
        	for (DependenciaClas list : list_Dependencia) {
        		            DependenciaDTO compDTO = new DependenciaDTO(list);
        		this.list_Dependencia.add(compDTO);
        	}
        	return this.list_Dependencia;
        }
}
