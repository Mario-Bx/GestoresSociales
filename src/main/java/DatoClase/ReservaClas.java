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
@Table(name = "Reserva")
public class ReservaClas implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ReservaID;

    private String Nombre;

    public ReservaClas() {
    }

    public ReservaClas(
            String Nombre
    ) {
        this.Nombre = Nombre;

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

    @Override
    public String toString() {
        return "Datos ReservaClas{" + "ReservaID=" + ReservaID
                + ", Nombre=" + Nombre
                + '}';
    }

    //Realacoin de 1---1 entrew (Reserva --- Estudiantes)
    @ManyToOne
    @JoinColumn(name = "EstudiantesFK")
    private EstudiantesClas estudiantesFK;

    public EstudiantesClas getEstudiantesFK() {
        return estudiantesFK;
    }

    public void setEstudiantesFK(EstudiantesClas estudiantesFK) {
        this.estudiantesFK = estudiantesFK;
    }
    //Realacoin de 1---1 entrew (Reserva --- Convocatorias)
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
