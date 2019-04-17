package RestService;

import DTO.*;
import Fachadas.*;
import java.util.*;
import DatoClase.*;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import DaoGenerico.ConexionException;

/**
 *
 * @author MARIO
 */
@Path("/EscuelaSv")
public class EscuelaSv {
	
	EscuelaFachada escuelaFh = null;
	AdministradorFachada administradorFh = null;
	EscuelaDTO dto = null;
	AdministradorDTO administradorFk = null;
	
	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	   public List<EscuelaDTO> getListaDto_JSON() throws ConexionException{
	   System.out.println("?????????????????????????????????????????????????????????????????????????????");
	   System.out.println("?????????????????????????????????????????????????????????????????????????????");
	   System.out.println("##############");
	   System.out.println("Se entro al servicio de EscuelaSv, funcion Listar");
	   System.out.println("%%%%%%%%%%%%%%");
	   
	      escuelaFh = new EscuelaFachada();
	      System.out.println("##############");
	      System.out.println("Se inicio la Fachada");
	      System.out.println("%%%%%%%%%%%%%%");
	      
	      List<EscuelaClas> objetoCl =  escuelaFh.buscarTodoObj();
	      List<EscuelaDTO> objetoDTO = new ArrayList<EscuelaDTO>();
	      System.out.println("##############");
	      System.out.println("Se Llamo la funcion Lista en la Fachada");
	      System.out.println("%%%%%%%%%%%%%%");
	      
	      
	      for (EscuelaClas objetoCLS : objetoCl) {
	          dto = new EscuelaDTO(objetoCLS);
	          objetoDTO.add(dto);
	      }
	      System.out.println("##############");
	      System.out.println("Se Se convirtieron los Objetos en EscuelaDTO");
	      System.out.println("%%%%%%%%%%%%%%");
	      return objetoDTO;
	  }
	  
	  
	  /////
	  /////
	  @GET
	  @Path("/{ID}")
	  @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	     public EscuelaDTO buscarObjeto(@PathParam("ID") String id) throws ConexionException {
	     	System.out.println("?????????????????????????????????????????????????????????????????????????????");
	     	System.out.println("?????????????????????????????????????????????????????????????????????????????");
	     	System.out.println("##############");
	     	System.out.println("Se entro al servicio de EscuelaSv, funcion Buscar(ID)");
	     	System.out.println("%%%%%%%%%%%%%%");
	     	
	     	escuelaFh = new EscuelaFachada();
	     	   EscuelaClas objetoCLS = escuelaFh.busacarObj(Integer.parseInt(id));
	     	   dto = new EscuelaDTO(objetoCLS);
	     	   System.out.println("##############");
	     	   System.out.println("Se inicio la Fachada y uso la funcion Buscar(ID)");
	     	   System.out.println("%%%%%%%%%%%%%%");
	     	   
dto.list_Dependencia(objetoCLS.getList_Dependencia());
	  System.out.println("##############");
	  System.out.println("Se crearon las listas relacionales del Mapeo Uno a Muchos");
	  System.out.println("%%%%%%%%%%%%%%");
	  
	  return dto;
}

    /////
    /////
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void addObjeto(EscuelaDTO objetoDto) throws ConexionException {
    	System.out.println("?????????????????????????????????????????????????????????????????????????????");
    	System.out.println("?????????????????????????????????????????????????????????????????????????????");
    	System.out.println("##############");
    	System.out.println("Se entro al servicio de EscuelaSv, funcion Crear");

        escuelaFh = new EscuelaFachada();
        EscuelaClas objetoCLS = new EscuelaClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");
		
		objetoCLS.setNombre(objetoDto.getNombre());

   		administradorFh = new AdministradorFachada();
   		AdministradorClas administradorCLS = administradorFh.busacarObj(objetoDto.getAdministradorFk().getAdministradorID());
   		objetoCLS.setAdministradorFK(administradorCLS);
   		System.out.println("##############");
   		System.out.println("Se recivieron los parametros De EscuelaDTO");
   		System.out.println("%%%%%%%%%%%%%%");
   		
   		escuelaFh.crearObj(objetoCLS);
   		System.out.println("##############");
   		System.out.println("Se entro la Fachada y uso la funcion Crear");
   		System.out.println("%%%%%%%%%%%%%%");
    }

    /////
    /////
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void actualizarObjeto(EscuelaDTO objetoDto) throws ConexionException {
    	System.out.println("?????????????????????????????????????????????????????????????????????????????");
    	System.out.println("?????????????????????????????????????????????????????????????????????????????");
    	System.out.println("##############");
    	System.out.println("Se entro al servicio de EscuelaSv, funcion Editar");
    	System.out.println("%%%%%%%%%%%%%%");

        escuelaFh = new EscuelaFachada();
        EscuelaClas objetoCLS = new EscuelaClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");
        
        
        objetoCLS.setEscuelaID(objetoDto.getEscuelaID());
            		
        objetoCLS.setNombre(objetoDto.getNombre());
        
        administradorFh = new AdministradorFachada();
        AdministradorClas administradorCLS = administradorFh.busacarObj(objetoDto.getAdministradorFk().getAdministradorID());
        objetoCLS.setAdministradorFK(administradorCLS);
		System.out.println("##############");
		System.out.println("Se recivieron los parametros De EscuelaDTO");
		System.out.println("%%%%%%%%%%%%%%");
		
		escuelaFh.actualizarObj(objetoCLS);
		System.out.println("##############");
		System.out.println("Se entro la Fachada y uso la funcion Actualizar");
		System.out.println("%%%%%%%%%%%%%%");
		}
		
		/////
		/////
		@DELETE
		@Path("/{ID}")
		@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
		public void deleteObjeto(@PathParam("ID") String id) throws ConexionException {
	System.out.println("?????????????????????????????????????????????????????????????????????????????");
	System.out.println("?????????????????????????????????????????????????????????????????????????????");
	System.out.println("##############");
	System.out.println("Se entro al servicio de EscuelaSv, funcion Eliminar");
	System.out.println("%%%%%%%%%%%%%%");
	
	escuelaFh = new EscuelaFachada();
	System.out.println("##############");
	System.out.println("Se inicio la Fachada y ObjetoClas");
	System.out.println("%%%%%%%%%%%%%%");
	
	EscuelaClas objetoCLS =escuelaFh.busacarObj(Integer.parseInt(id));
	System.out.println("##############");
	System.out.println("Se entro la Fachada y uso la funcion BuscarID");
	System.out.println("%%%%%%%%%%%%%%");
	
	if (objetoCLS != null) {
		escuelaFh.eliminarObje(objetoCLS);
		System.out.println("##############");
		System.out.println("Se entro la Fachada y uso la funcion Eliminar");
		System.out.println("%%%%%%%%%%%%%%");
	}
	
		}
	}
