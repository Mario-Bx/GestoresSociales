package Fachadas;

import DaoGenerico.ConexionException;
import DaoGenerico.ServiceImpl;
import DaoGenerico.SingletonConnection;
import DatoClase.SancionesClas;
import java.util.List;
import javax.persistence.EntityManager;

/**
 *
 * @author MARIO
 */
public class SancionesFachada extends ServiceImpl<SancionesClas> {

    public SancionesFachada() throws ConexionException {
        super(SancionesClas.class);
        try {
            EntityManager objetoEnty = SingletonConnection.getConnection();
            super.setEntityManager(objetoEnty);

        } catch (Exception e) {
            throw new ConexionException("Problemas en la realizacion de conexion con la base de datos en Sanciones Fachada");
        }
    }

    @Override
    public List<SancionesClas> buscarTodoObj() {
        return super.buscarTodoObj();
    }
}
