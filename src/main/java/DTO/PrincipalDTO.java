package DTO;

import java.util.*;
import DatoClase.*;
import javax.xml.bind.annotation.*;

/**
 *
 * @author MARIO
 */
@XmlRootElement(name = "PrincipalDTO")
@XmlAccessorType(XmlAccessType.FIELD)
public class PrincipalDTO {

    private int PrincipalID;
    private String Nombre;
    private EstudiantesDTO EstudiantesFk;
    private ConvocatoriasDTO ConvocatoriasFk;

    public PrincipalDTO() {
    }

    public PrincipalDTO(PrincipalClas objCL) {
        this.PrincipalID = objCL.getPrincipalID();
        this.Nombre = objCL.getNombre();
        this.EstudiantesFk = new EstudiantesDTO(objCL.getEstudiantesFK());
        this.ConvocatoriasFk = new ConvocatoriasDTO(objCL.getConvocatoriasFK());
    }

    public int getPrincipalID() {
        return PrincipalID;
    }

    public void setPrincipalID(int PrincipalID) {
        this.PrincipalID = PrincipalID;
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
