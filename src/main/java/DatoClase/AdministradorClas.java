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
@Table(name = "Administrador")
public class AdministradorClas implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int AdministradorID;

}
