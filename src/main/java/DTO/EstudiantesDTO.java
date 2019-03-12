package DTO;

import java.util.*;
import DatoClase.*;
import javax.xml.bind.annotation.*;

/**
 *
 * @author MARIO
 */
@XmlRootElement(name = "EstudiantesDTO")
@XmlAccessorType(XmlAccessType.FIELD)
public class EstudiantesDTO {

    private int EstudiantesID;
    private String Nombre;
    private String Apellidos;
    private String Correo;
    private String Clave;
    private String Documento;
    private String FechaNacimiento;
    private String Telefono;
    private String Celular;
    private String Escuela;
    private String Carreara;
    private List<SancionesDTO> list_Sanciones;
    private List<BitacoraDTO> list_Bitacora;
    private List<PrincipalDTO> list_Principal;
    private List<ReservaDTO> list_Reserva;

    public EstudiantesDTO() {
    }

    public EstudiantesDTO(EstudiantesClas objCL) {
        this.EstudiantesID = objCL.getEstudiantesID();
        this.Nombre = objCL.getNombre();
        this.Apellidos = objCL.getApellidos();
        this.Correo = objCL.getCorreo();
        this.Clave = objCL.getClave();
        this.Documento = objCL.getDocumento();
        this.FechaNacimiento = objCL.getFechaNacimiento();
        this.Telefono = objCL.getTelefono();
        this.Celular = objCL.getCelular();
        this.Escuela = objCL.getEscuela();
        this.Carreara = objCL.getCarreara();
        this.list_Sanciones = new ArrayList<SancionesDTO>();
        this.list_Bitacora = new ArrayList<BitacoraDTO>();
        this.list_Principal = new ArrayList<PrincipalDTO>();
        this.list_Reserva = new ArrayList<ReservaDTO>();
    }

    public int getEstudiantesID() {
        return EstudiantesID;
    }

    public void setEstudiantesID(int EstudiantesID) {
        this.EstudiantesID = EstudiantesID;
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

    public String getDocumento() {
        return Documento;
    }

    public void setDocumento(String Documento) {
        this.Documento = Documento;
    }

    public String getFechaNacimiento() {
        return FechaNacimiento;
    }

    public void setFechaNacimiento(String FechaNacimiento) {
        this.FechaNacimiento = FechaNacimiento;
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

    public String getEscuela() {
        return Escuela;
    }

    public void setEscuela(String Escuela) {
        this.Escuela = Escuela;
    }

    public String getCarreara() {
        return Carreara;
    }

    public void setCarreara(String Carreara) {
        this.Carreara = Carreara;
    }

    public List<SancionesDTO> list_Sanciones(List<SancionesClas> list_Sanciones) {
        for (SancionesClas list : list_Sanciones) {
            SancionesDTO compDTO = new SancionesDTO(list);
            this.list_Sanciones.add(compDTO);
        }
        return this.list_Sanciones;
    }

    public List<BitacoraDTO> list_Bitacora(List<BitacoraClas> list_Bitacora) {
        for (BitacoraClas list : list_Bitacora) {
            BitacoraDTO compDTO = new BitacoraDTO(list);
            this.list_Bitacora.add(compDTO);
        }
        return this.list_Bitacora;
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
