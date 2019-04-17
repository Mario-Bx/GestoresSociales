package Fachadas;

import DaoGenerico.ConexionException;
import DaoGenerico.ServiceImpl;
import DaoGenerico.SingletonConnection;
import DatoClase.EscuelaClas;
import java.util.List;
import javax.persistence.EntityManager;

/**
 *
 * @author MARIO
 */
public class EscuelaFachada extends ServiceImpl<EscuelaClas> {

    public EscuelaFachada() throws ConexionException {
        super(EscuelaClas.class);
        try {
            EntityManager objetoEnty = SingletonConnection.getConnection();
            super.setEntityManager(objetoEnty);

        } catch (Exception e) {
            throw new ConexionException("Problemas en la realizacion de conexion con la base de datos en Escuela Fachada");
        }
    }

    @Override
    public List<EscuelaClas> buscarTodoObj() {
        return super.buscarTodoObj();
    }
}
