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
    private String Hora;
    private String Encargado;
    private String Descripcion;
    private int HorasGanadas;
    private AdministradorDTO AdministradorFk;
    private List<PrincipalDTO> list_Principal;
    private List<ReservaDTO> list_Reserva;

    public ConvocatoriasDTO() {
    }

    public ConvocatoriasDTO(ConvocatoriasClas objCL) {
        this.ConvocatoriasID = objCL.getConvocatoriasID();
        this.Nombre = objCL.getNombre();
        this.FechaInicio = objCL.getFechaInicio();
        this.FechaFin = objCL.getFechaFin();
        this.Hora = objCL.getHora();
        this.Encargado = objCL.getEncargado();
        this.Descripcion = objCL.getDescripcion();
        this.HorasGanadas = objCL.getHorasGanadas();
        this.AdministradorFk = new AdministradorDTO(objCL.getAdministradorFK());
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

    public String getHora() {
        return Hora;
    }

    public void setHora(String Hora) {
        this.Hora = Hora;
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

    public AdministradorDTO getAdministradorFk() {
        return AdministradorFk;
    }

    public void setAdministradorFk(AdministradorDTO administradorFk) {
        this.AdministradorFk = administradorFk;
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
