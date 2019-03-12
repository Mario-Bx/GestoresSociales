package Fachadas;

import DaoGenerico.ConexionException;
import DaoGenerico.ServiceImpl;
import DaoGenerico.SingletonConnection;
import DatoClase.BitacoraClas;
import java.util.List;
import javax.persistence.EntityManager;

/**
 *
 * @author MARIO
 */
public class BitacoraFachada extends ServiceImpl<BitacoraClas> {

    public BitacoraFachada() throws ConexionException {
        super(BitacoraClas.class);
        try {
            EntityManager objetoEnty = SingletonConnection.getConnection();
            super.setEntityManager(objetoEnty);

        } catch (Exception e) {
            throw new ConexionException("Problemas en la realizacion de conexion con la base de datos en Bitacora Fachada");
        }
    }

    @Override
    public List<BitacoraClas> buscarTodoObj() {
        return super.buscarTodoObj();
    }
}
