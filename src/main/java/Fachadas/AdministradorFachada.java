package Fachadas;

import DaoGenerico.ConexionException;
import DaoGenerico.ServiceImpl;
import DaoGenerico.SingletonConnection;
import DatoClase.AdministradorClas;
import java.util.List;
import javax.persistence.EntityManager;

/**
 *
 * @author MARIO,jalba
 */
public class AdministradorFachada extends ServiceImpl<AdministradorClas> {

    public AdministradorFachada() throws ConexionException {
        super(AdministradorClas.class);
        try {
            EntityManager objetoEnty = SingletonConnection.getConnection();
            super.setEntityManager(objetoEnty);

        } catch (Exception e) {
            throw new ConexionException("Problemas en la realizacion de conexion con la base de datos en Administrador Fachada");
        }
    }

    @Override
    public List<AdministradorClas> buscarTodoObj() {
        return super.buscarTodoObj();
    }
}
