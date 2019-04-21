package DTO;

import java.util.*;
import DatoClase.*;
import javax.xml.bind.annotation.*;

/**
 *
 * @author MARIO
 */
@XmlRootElement(name = "DependenciaDTO")
@XmlAccessorType(XmlAccessType.FIELD)
public class DependenciaDTO {

    private int DependenciaID;
    private String Nombre;
    private boolean Estado;
    private EscuelaDTO EscuelaFk;
    private List<ConvocatoriasDTO> list_Convocatorias;

    public DependenciaDTO() {
    }

    public DependenciaDTO(DependenciaClas objCL) {
        this.DependenciaID = objCL.getDependenciaID();
        this.Nombre = objCL.getNombre();
        this.Estado = objCL.getEstado();
        this.EscuelaFk = new EscuelaDTO(objCL.getEscuelaFK());
        this.list_Convocatorias = new ArrayList<ConvocatoriasDTO>();
    }

    public int getDependenciaID() {
        return DependenciaID;
    }

    public void setDependenciaID(int DependenciaID) {
        this.DependenciaID = DependenciaID;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String Nombre) {
        this.Nombre = Nombre;
    }

    public boolean getEstado() {
        return Estado;
    }

    public void setEstado(boolean Estado) {
        this.Estado = Estado;
    }

    public EscuelaDTO getEscuelaFk() {
        return EscuelaFk;
    }

    public void setEscuelaFk(EscuelaDTO escuelaFk) {
        this.EscuelaFk = escuelaFk;
    }

    public List<ConvocatoriasDTO> list_Convocatorias(List<ConvocatoriasClas> list_Convocatorias) {
        for (ConvocatoriasClas list : list_Convocatorias) {
            ConvocatoriasDTO compDTO = new ConvocatoriasDTO(list);
            this.list_Convocatorias.add(compDTO);
        }
        return this.list_Convocatorias;
    }
}
