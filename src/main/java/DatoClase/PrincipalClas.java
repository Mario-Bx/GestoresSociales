package DatoClase;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

/**
 *
 * @author MARIOBX
 */
@Entity
@Table(name = "Principal")
public class PrincipalClas implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int PrincipalID;

    private String Nombre;

    public PrincipalClas() {
    }

    public PrincipalClas(
            String Nombre
    ) {
        this.Nombre = Nombre;

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

    @Override
    public String toString() {
        return "Datos PrincipalClas{" + "PrincipalID=" + PrincipalID
                + ", Nombre=" + Nombre
                + '}';
    }

    //Realacoin de 1---1 entrew (Principal --- Estudiantes)
    @ManyToOne
    @JoinColumn(name = "EstudiantesFK")
    private EstudiantesClas estudiantesFK;

    public EstudiantesClas getEstudiantesFK() {
        return estudiantesFK;
    }

    public void setEstudiantesFK(EstudiantesClas estudiantesFK) {
        this.estudiantesFK = estudiantesFK;
    }
    //Realacoin de 1---1 entrew (Principal --- Convocatorias)
    @ManyToOne
    @JoinColumn(name = "ConvocatoriasFK")
    private ConvocatoriasClas convocatoriasFK;

    public ConvocatoriasClas getConvocatoriasFK() {
        return convocatoriasFK;
    }

    public void setConvocatoriasFK(ConvocatoriasClas convocatoriasFK) {
        this.convocatoriasFK = convocatoriasFK;
    }
}
