package Fachadas;

import DaoGenerico.ConexionException;
import DaoGenerico.ServiceImpl;
import DaoGenerico.SingletonConnection;
import DatoClase.PrincipalClas;
import java.util.List;
import javax.persistence.EntityManager;

/**
 *
 * @author MARIO
 */
public class PrincipalFachada extends ServiceImpl<PrincipalClas> {

    public PrincipalFachada() throws ConexionException {
        super(PrincipalClas.class);
        try {
            EntityManager objetoEnty = SingletonConnection.getConnection();
            super.setEntityManager(objetoEnty);

        } catch (Exception e) {
            throw new ConexionException("Problemas en la realizacion de conexion con la base de datos en Principal Fachada");
        }
    }

    @Override
    public List<PrincipalClas> buscarTodoObj() {
        return super.buscarTodoObj();
    }
}
