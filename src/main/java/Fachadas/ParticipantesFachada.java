package Fachadas;

import DaoGenerico.ConexionException;
import DaoGenerico.ServiceImpl;
import DaoGenerico.SingletonConnection;
import DatoClase.ParticipantesClas;
import java.util.List;
import javax.persistence.EntityManager;

/**
 *
 * @author MARIOBX,jalba,renan,enumpaque
 */
public class ParticipantesFachada extends ServiceImpl<ParticipantesClas> {

    public ParticipantesFachada() throws ConexionException {
        super(ParticipantesClas.class);
        try {
            EntityManager objetoEnty = SingletonConnection.getConnection();
            super.setEntityManager(objetoEnty);

        } catch (Exception e) {
            throw new ConexionException("Problemas en la realizacion de conexion con la base de datos en Participantes Fachada");
        }
    }

    @Override
    public List<ParticipantesClas> buscarTodoObj() {
        return super.buscarTodoObj();
    }
}
