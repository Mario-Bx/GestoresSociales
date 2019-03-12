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
@Table(name = "Bitacora")
public class BitacoraClas implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int BitacoraID;

    private String Nombre;
    private String Fecha;
    private String Hora;
    private String Descripcion;

    public BitacoraClas() {
    }

    public BitacoraClas(
            String Nombre,
            String Fecha,
            String Hora,
            String Descripcion
    ) {
        this.Nombre = Nombre;
        this.Fecha = Fecha;
        this.Hora = Hora;
        this.Descripcion = Descripcion;

    }

    public int getBitacoraID() {
        return BitacoraID;
    }

    public void setBitacoraID(int BitacoraID) {
        this.BitacoraID = BitacoraID;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String Nombre) {
        this.Nombre = Nombre;
    }

    public String getFecha() {
        return Fecha;
    }

    public void setFecha(String Fecha) {
        this.Fecha = Fecha;
    }

    public String getHora() {
        return Hora;
    }

    public void setHora(String Hora) {
        this.Hora = Hora;
    }

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String Descripcion) {
        this.Descripcion = Descripcion;
    }

    @Override
    public String toString() {
        return "Datos BitacoraClas{" + "BitacoraID=" + BitacoraID
                + ", Nombre=" + Nombre
                + ", Fecha=" + Fecha
                + ", Hora=" + Hora
                + ", Descripcion=" + Descripcion
                + '}';
    }

    //Realacoin de 1---1 entrew (Bitacora --- Estudiantes)
    @ManyToOne
    @JoinColumn(name = "EstudiantesFK")
    private EstudiantesClas estudiantesFK;

    public EstudiantesClas getEstudiantesFK() {
        return estudiantesFK;
    }

    public void setEstudiantesFK(EstudiantesClas estudiantesFK) {
        this.estudiantesFK = estudiantesFK;
    }
}
