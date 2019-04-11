package PruebaEjecucion;

import DaoGenerico.ConexionException;
import DatoClase.AdministradorClas;
import Fachadas.AdministradorFachada;
import java.io.IOException;

public class PruebaMenus {

    static int opcion = 0;

    public static void main(String[] args) throws IOException, ConexionException {

        AdministradorClas b = new AdministradorClas();
        AdministradorFachada mm = new AdministradorFachada();
        
        b= mm.busacarObj(1);
        
        System.out.println(b);
    }
}
