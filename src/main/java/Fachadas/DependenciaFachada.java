package Fachadas;

import DaoGenerico.ConexionException;
import DaoGenerico.ServiceImpl;
import DaoGenerico.SingletonConnection;
import DatoClase.DependenciaClas;
import java.util.List;
import javax.persistence.EntityManager;

/**
 *
 * @author MARIO
 */
public class DependenciaFachada extends ServiceImpl<DependenciaClas> {

    public DependenciaFachada() throws ConexionException {
        super(DependenciaClas.class);
        try {
            EntityManager objetoEnty = SingletonConnection.getConnection();
            super.setEntityManager(objetoEnty);

        } catch (Exception e) {
            throw new ConexionException("Problemas en la realizacion de conexion con la base de datos en Dependencia Fachada");
        }
    }

    @Override
    public List<DependenciaClas> buscarTodoObj() {
        return super.buscarTodoObj();
    }
}
