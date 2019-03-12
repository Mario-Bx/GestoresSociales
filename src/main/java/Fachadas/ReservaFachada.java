package Fachadas;

import DaoGenerico.ConexionException;
import DaoGenerico.ServiceImpl;
import DaoGenerico.SingletonConnection;
import DatoClase.ReservaClas;
import java.util.List;
import javax.persistence.EntityManager;

/**
 *
 * @author MARIO
 */
public class ReservaFachada extends ServiceImpl<ReservaClas> {

    public ReservaFachada() throws ConexionException {
        super(ReservaClas.class);
        try {
            EntityManager objetoEnty = SingletonConnection.getConnection();
            super.setEntityManager(objetoEnty);

        } catch (Exception e) {
            throw new ConexionException("Problemas en la realizacion de conexion con la base de datos en Reserva Fachada");
        }
    }

    @Override
    public List<ReservaClas> buscarTodoObj() {
        return super.buscarTodoObj();
    }
}
