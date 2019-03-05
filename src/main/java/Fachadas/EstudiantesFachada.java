package Fachadas;

import DaoGenerico.ConexionException;
import DaoGenerico.ServiceImpl;
import DaoGenerico.SingletonConnection;
import DatoClase.EstudiantesClas;
import java.util.List;
import javax.persistence.EntityManager;

/**
 *
 * @author MARIO,jalba
 */
public class EstudiantesFachada extends ServiceImpl<EstudiantesClas> {

    public EstudiantesFachada() throws ConexionException {
        super(EstudiantesClas.class);
        try {
            EntityManager objetoEnty = SingletonConnection.getConnection();
            super.setEntityManager(objetoEnty);

        } catch (Exception e) {
            throw new ConexionException("Problemas en la realizacion de conexion con la base de datos en Estudiantes Fachada");
        }
    }

    @Override
    public List<EstudiantesClas> buscarTodoObj() {
        return super.buscarTodoObj();
    }
}
