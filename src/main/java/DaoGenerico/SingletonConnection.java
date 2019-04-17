package DaoGenerico;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author MARIOBX
 */
public class SingletonConnection {

    private static EntityManager em;
        private static EntityManagerFactory emf;
    
        private static void initConnection() {
            emf = Persistence.createEntityManagerFactory("Jpa");
        }
    
        public static EntityManager getConnection() {
            if (em == null) {
    
                initConnection();
                em = emf.createEntityManager();
                em.getTransaction().begin();
            }
            return em;
        }
    
        public static void closeEmf() {
            if (emf.isOpen() || emf != null) {
                em.close();
                emf.close();
            }
            emf = null;
        }
}
