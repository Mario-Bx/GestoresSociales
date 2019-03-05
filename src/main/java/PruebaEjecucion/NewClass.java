/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PruebaEjecucion;

import DTO.*;
import DaoGenerico.ConexionException;
import DatoClase.AdministradorClas;
import Fachadas.AdministradorFachada;

/**
 *
 * @author MARIO,jalba
 */
public class NewClass {
    
    public static void main(String[] args) throws ConexionException {
        AdministradorClas m;
        
        AdministradorFachada n= new AdministradorFachada();
        
        m= new AdministradorClas("juan", "albarracin", "jalbarracin62@gmail.com", "newclave", "28-02-1997", "1999999299"," 8156733", "30093743");
        
        n.crearObj(m);
    }

}
