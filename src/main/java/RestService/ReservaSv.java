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
@Path("/ReservaSv")
public class ReservaSv {
	
	ReservaFachada reservaFh = null;
	EstudiantesFachada estudiantesFh = null;
	ConvocatoriasFachada convocatoriasFh = null;
	ReservaDTO dto = null;
	EstudiantesDTO estudiantesFk = null;
	ConvocatoriasDTO convocatoriasFk = null;
	
	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	   public List<ReservaDTO> getListaDto_JSON() throws ConexionException{
	   System.out.println("?????????????????????????????????????????????????????????????????????????????");
	   System.out.println("?????????????????????????????????????????????????????????????????????????????");
	   System.out.println("##############");
	   System.out.println("Se entro al servicio de ReservaSv, funcion Listar");
	   System.out.println("%%%%%%%%%%%%%%");
	   
	      reservaFh = new ReservaFachada();
	      System.out.println("##############");
	      System.out.println("Se inicio la Fachada");
	      System.out.println("%%%%%%%%%%%%%%");
	      
	      List<ReservaClas> objetoCl =  reservaFh.buscarTodoObj();
	      List<ReservaDTO> objetoDTO = new ArrayList<ReservaDTO>();
	      System.out.println("##############");
	      System.out.println("Se Llamo la funcion Lista en la Fachada");
	      System.out.println("%%%%%%%%%%%%%%");
	      
	      
	      for (ReservaClas objetoCLS : objetoCl) {
	          dto = new ReservaDTO(objetoCLS);
	          objetoDTO.add(dto);
	      }
	      System.out.println("##############");
	      System.out.println("Se Se convirtieron los Objetos en ReservaDTO");
	      System.out.println("%%%%%%%%%%%%%%");
	      return objetoDTO;
	  }
	  
	  
	  /////
	  /////
	  @GET
	  @Path("/{ID}")
	  @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	     public ReservaDTO buscarObjeto(@PathParam("ID") String id) throws ConexionException {
	     	System.out.println("?????????????????????????????????????????????????????????????????????????????");
	     	System.out.println("?????????????????????????????????????????????????????????????????????????????");
	     	System.out.println("##############");
	     	System.out.println("Se entro al servicio de ReservaSv, funcion Buscar(ID)");
	     	System.out.println("%%%%%%%%%%%%%%");
	     	
	     	reservaFh = new ReservaFachada();
	     	   ReservaClas objetoCLS = reservaFh.busacarObj(Integer.parseInt(id));
	     	   dto = new ReservaDTO(objetoCLS);
	     	   System.out.println("##############");
	     	   System.out.println("Se inicio la Fachada y uso la funcion Buscar(ID)");
	     	   System.out.println("%%%%%%%%%%%%%%");
	     	   
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
    public void addObjeto(ReservaDTO objetoDto) throws ConexionException {
    	System.out.println("?????????????????????????????????????????????????????????????????????????????");
    	System.out.println("?????????????????????????????????????????????????????????????????????????????");
    	System.out.println("##############");
    	System.out.println("Se entro al servicio de ReservaSv, funcion Crear");

        reservaFh = new ReservaFachada();
        ReservaClas objetoCLS = new ReservaClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");
		
		objetoCLS.setNombre(objetoDto.getNombre());
		objetoCLS.setEstado(objetoDto.getEstado());

   		estudiantesFh = new EstudiantesFachada();
   		EstudiantesClas estudiantesCLS = estudiantesFh.busacarObj(objetoDto.getEstudiantesFk().getEstudiantesID());
   		objetoCLS.setEstudiantesFK(estudiantesCLS);
   		convocatoriasFh = new ConvocatoriasFachada();
   		ConvocatoriasClas convocatoriasCLS = convocatoriasFh.busacarObj(objetoDto.getConvocatoriasFk().getConvocatoriasID());
   		objetoCLS.setConvocatoriasFK(convocatoriasCLS);
   		System.out.println("##############");
   		System.out.println("Se recivieron los parametros De ReservaDTO");
   		System.out.println("%%%%%%%%%%%%%%");
   		
   		reservaFh.crearObj(objetoCLS);
   		System.out.println("##############");
   		System.out.println("Se entro la Fachada y uso la funcion Crear");
   		System.out.println("%%%%%%%%%%%%%%");
    }

    /////
    /////
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void actualizarObjeto(ReservaDTO objetoDto) throws ConexionException {
    	System.out.println("?????????????????????????????????????????????????????????????????????????????");
    	System.out.println("?????????????????????????????????????????????????????????????????????????????");
    	System.out.println("##############");
    	System.out.println("Se entro al servicio de ReservaSv, funcion Editar");
    	System.out.println("%%%%%%%%%%%%%%");

        reservaFh = new ReservaFachada();
        ReservaClas objetoCLS = new ReservaClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");
        
        
        objetoCLS.setReservaID(objetoDto.getReservaID());
            		
        objetoCLS.setNombre(objetoDto.getNombre());
        objetoCLS.setEstado(objetoDto.getEstado());
        
        estudiantesFh = new EstudiantesFachada();
        EstudiantesClas estudiantesCLS = estudiantesFh.busacarObj(objetoDto.getEstudiantesFk().getEstudiantesID());
        objetoCLS.setEstudiantesFK(estudiantesCLS);
        convocatoriasFh = new ConvocatoriasFachada();
        ConvocatoriasClas convocatoriasCLS = convocatoriasFh.busacarObj(objetoDto.getConvocatoriasFk().getConvocatoriasID());
        objetoCLS.setConvocatoriasFK(convocatoriasCLS);
		System.out.println("##############");
		System.out.println("Se recivieron los parametros De ReservaDTO");
		System.out.println("%%%%%%%%%%%%%%");
		
		reservaFh.actualizarObj(objetoCLS);
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
	System.out.println("Se entro al servicio de ReservaSv, funcion Eliminar");
	System.out.println("%%%%%%%%%%%%%%");
	
	reservaFh = new ReservaFachada();
	System.out.println("##############");
	System.out.println("Se inicio la Fachada y ObjetoClas");
	System.out.println("%%%%%%%%%%%%%%");
	
	ReservaClas objetoCLS =reservaFh.busacarObj(Integer.parseInt(id));
	System.out.println("##############");
	System.out.println("Se entro la Fachada y uso la funcion BuscarID");
	System.out.println("%%%%%%%%%%%%%%");
	
	if (objetoCLS != null) {
		reservaFh.eliminarObje(objetoCLS);
		System.out.println("##############");
		System.out.println("Se entro la Fachada y uso la funcion Eliminar");
		System.out.println("%%%%%%%%%%%%%%");
	}
	
		}
	}
