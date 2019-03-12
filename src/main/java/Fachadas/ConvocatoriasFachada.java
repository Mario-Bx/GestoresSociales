package Fachadas;

import DaoGenerico.ConexionException;
import DaoGenerico.ServiceImpl;
import DaoGenerico.SingletonConnection;
import DatoClase.ConvocatoriasClas;
import java.util.List;
import javax.persistence.EntityManager;

/**
 *
 * @author MARIO
 */
public class ConvocatoriasFachada extends ServiceImpl<ConvocatoriasClas> {

    public ConvocatoriasFachada() throws ConexionException {
        super(ConvocatoriasClas.class);
        try {
            EntityManager objetoEnty = SingletonConnection.getConnection();
            super.setEntityManager(objetoEnty);

        } catch (Exception e) {
            throw new ConexionException("Problemas en la realizacion de conexion con la base de datos en Convocatorias Fachada");
        }
    }

    @Override
    public List<ConvocatoriasClas> buscarTodoObj() {
        return super.buscarTodoObj();
    }
}
