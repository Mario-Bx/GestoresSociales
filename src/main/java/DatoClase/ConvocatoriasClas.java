package DatoClase;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

/**
 *
 * @author Mario-Bx, jalba
 */
@Entity
@Table(name = "Convocatorias")
public class ConvocatoriasClas implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ConvocatoriasID;

}
