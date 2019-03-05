package DTO;

import java.util.*;
import DatoClase.*;
import javax.xml.bind.annotation.*;

/**
 *
 * @author MARIO
 */
@XmlRootElement(name = "AdministradorDTO")
@XmlAccessorType(XmlAccessType.FIELD)
public class AdministradorDTO {
	
	private int AdministradorID;
	private String Nombre;
	private String Apellidos;
	private String Correo;
	private String Clave;
	private String FechaNacimiento;
	private String Documento;
	private String Telefono;
	private String Celular;
	private List<ConvocatoriasDTO> list_Convocatorias;
	
	public AdministradorDTO() {
    }

    public AdministradorDTO(AdministradorClas objCL) {
    	 this.AdministradorID = objCL.getAdministradorID();
    	this.Nombre = objCL.getNombre();
    	this.Apellidos = objCL.getApellidos();
    	this.Correo = objCL.getCorreo();
    	this.Clave = objCL.getClave();
    	this.FechaNacimiento = objCL.getFechaNacimiento();
    	this.Documento = objCL.getDocumento();
    	this.Telefono = objCL.getTelefono();
    	this.Celular = objCL.getCelular();
this.list_Convocatorias = new ArrayList<ConvocatoriasDTO>();
    }
    
    public int getAdministradorID() {
	return AdministradorID;
	}
	
	public void setAdministradorID(int AdministradorID) {
	this.AdministradorID = AdministradorID;
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
	public String getFechaNacimiento() {
		return FechaNacimiento;
	}
	
	public void setFechaNacimiento(String FechaNacimiento) {
		this.FechaNacimiento = FechaNacimiento;
	}
	public String getDocumento() {
		return Documento;
	}
	
	public void setDocumento(String Documento) {
		this.Documento = Documento;
	}
	public String getTelefono() {
		return Telefono;
	}
	
	public void setTelefono(String Telefono) {
		this.Telefono = Telefono;
	}
	public String getCelular() {
		return Celular;
	}
	
	public void setCelular(String Celular) {
		this.Celular = Celular;
	}
        
        
        public List<ConvocatoriasDTO> list_Convocatorias(List<ConvocatoriasClas> list_Convocatorias) {
        	for (ConvocatoriasClas list : list_Convocatorias) {
        		            ConvocatoriasDTO compDTO = new ConvocatoriasDTO(list);
        		this.list_Convocatorias.add(compDTO);
        	}
        	return this.list_Convocatorias;
        }
}
