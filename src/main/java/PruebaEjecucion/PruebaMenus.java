package PruebaEjecucion;

import DaoGenerico.ConexionException;
import java.io.IOException;

public class PruebaMenus {

    static int opcion = 0;

    public static void main(String[] args) throws IOException, ConexionException {

        menus menu = new menus();
        menu.menu();
    }
}
