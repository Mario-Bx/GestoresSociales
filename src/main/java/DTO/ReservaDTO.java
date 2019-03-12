package DTO;

import java.util.*;
import DatoClase.*;
import javax.xml.bind.annotation.*;

/**
 *
 * @author MARIO
 */
@XmlRootElement(name = "ReservaDTO")
@XmlAccessorType(XmlAccessType.FIELD)
public class ReservaDTO {

    private int ReservaID;
    private String Nombre;
    private EstudiantesDTO EstudiantesFk;
    private ConvocatoriasDTO ConvocatoriasFk;

    public ReservaDTO() {
    }

    public ReservaDTO(ReservaClas objCL) {
        this.ReservaID = objCL.getReservaID();
        this.Nombre = objCL.getNombre();
        this.EstudiantesFk = new EstudiantesDTO(objCL.getEstudiantesFK());
        this.ConvocatoriasFk = new ConvocatoriasDTO(objCL.getConvocatoriasFK());
    }

    public int getReservaID() {
        return ReservaID;
    }

    public void setReservaID(int ReservaID) {
        this.ReservaID = ReservaID;
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
