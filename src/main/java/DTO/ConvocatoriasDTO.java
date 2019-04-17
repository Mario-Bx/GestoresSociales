package DTO;

import java.util.*;
import DatoClase.*;
import javax.xml.bind.annotation.*;

/**
 *
 * @author MARIO
 */
@XmlRootElement(name = "ConvocatoriasDTO")
@XmlAccessorType(XmlAccessType.FIELD)
public class ConvocatoriasDTO {
	
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
	private boolean Estado;
	private AdministradorDTO AdministradorFk;
	private List<PrincipalDTO> list_Principal;
	private List<ReservaDTO> list_Reserva;
	private DependenciaDTO DependenciaFk;
	
	public ConvocatoriasDTO() {
    }

    public ConvocatoriasDTO(ConvocatoriasClas objCL) {
    	 this.ConvocatoriasID = objCL.getConvocatoriasID();
    	this.Nombre = objCL.getNombre();
    	this.FechaInicio = objCL.getFechaInicio();
    	this.FechaFin = objCL.getFechaFin();
    	this.Encargado = objCL.getEncargado();
    	this.Descripcion = objCL.getDescripcion();
    	this.HorasGanadas = objCL.getHorasGanadas();
    	this.NoEstudienates = objCL.getNoEstudienates();
    	this.NoReserva = objCL.getNoReserva();
    	this.PeriodoAcademico = objCL.getPeriodoAcademico();
    	this.Estado = objCL.getEstado();
this.AdministradorFk = new AdministradorDTO(objCL.getAdministradorFK());
this.DependenciaFk = new DependenciaDTO(objCL.getDependenciaFK());
this.list_Principal = new ArrayList<PrincipalDTO>();
this.list_Reserva = new ArrayList<ReservaDTO>();
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
	public boolean getEstado() {
		return Estado;
	}
	
	public void setEstado(boolean Estado) {
		this.Estado = Estado;
	}
        
public AdministradorDTO getAdministradorFk() {
	return AdministradorFk;
}

public void setAdministradorFk(AdministradorDTO administradorFk) {
	this.AdministradorFk = administradorFk;
}
public DependenciaDTO getDependenciaFk() {
	return DependenciaFk;
}

public void setDependenciaFk(DependenciaDTO dependenciaFk) {
	this.DependenciaFk = dependenciaFk;
}
        
        public List<PrincipalDTO> list_Principal(List<PrincipalClas> list_Principal) {
        	for (PrincipalClas list : list_Principal) {
        		            PrincipalDTO compDTO = new PrincipalDTO(list);
        		this.list_Principal.add(compDTO);
        	}
        	return this.list_Principal;
        }
        public List<ReservaDTO> list_Reserva(List<ReservaClas> list_Reserva) {
        	for (ReservaClas list : list_Reserva) {
        		            ReservaDTO compDTO = new ReservaDTO(list);
        		this.list_Reserva.add(compDTO);
        	}
        	return this.list_Reserva;
        }
}
