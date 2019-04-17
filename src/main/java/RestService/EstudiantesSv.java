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
@Path("/EstudiantesSv")
public class EstudiantesSv {
	
	EstudiantesFachada estudiantesFh = null;
	EstudiantesDTO dto = null;
	
	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	   public List<EstudiantesDTO> getListaDto_JSON() throws ConexionException{
	   System.out.println("?????????????????????????????????????????????????????????????????????????????");
	   System.out.println("?????????????????????????????????????????????????????????????????????????????");
	   System.out.println("##############");
	   System.out.println("Se entro al servicio de EstudiantesSv, funcion Listar");
	   System.out.println("%%%%%%%%%%%%%%");
	   
	      estudiantesFh = new EstudiantesFachada();
	      System.out.println("##############");
	      System.out.println("Se inicio la Fachada");
	      System.out.println("%%%%%%%%%%%%%%");
	      
	      List<EstudiantesClas> objetoCl =  estudiantesFh.buscarTodoObj();
	      List<EstudiantesDTO> objetoDTO = new ArrayList<EstudiantesDTO>();
	      System.out.println("##############");
	      System.out.println("Se Llamo la funcion Lista en la Fachada");
	      System.out.println("%%%%%%%%%%%%%%");
	      
	      
	      for (EstudiantesClas objetoCLS : objetoCl) {
	          dto = new EstudiantesDTO(objetoCLS);
	          objetoDTO.add(dto);
	      }
	      System.out.println("##############");
	      System.out.println("Se Se convirtieron los Objetos en EstudiantesDTO");
	      System.out.println("%%%%%%%%%%%%%%");
	      return objetoDTO;
	  }
	  
	  
	  /////
	  /////
	  @GET
	  @Path("/{ID}")
	  @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	     public EstudiantesDTO buscarObjeto(@PathParam("ID") String id) throws ConexionException {
	     	System.out.println("?????????????????????????????????????????????????????????????????????????????");
	     	System.out.println("?????????????????????????????????????????????????????????????????????????????");
	     	System.out.println("##############");
	     	System.out.println("Se entro al servicio de EstudiantesSv, funcion Buscar(ID)");
	     	System.out.println("%%%%%%%%%%%%%%");
	     	
	     	estudiantesFh = new EstudiantesFachada();
	     	   EstudiantesClas objetoCLS = estudiantesFh.busacarObj(Integer.parseInt(id));
	     	   dto = new EstudiantesDTO(objetoCLS);
	     	   System.out.println("##############");
	     	   System.out.println("Se inicio la Fachada y uso la funcion Buscar(ID)");
	     	   System.out.println("%%%%%%%%%%%%%%");
	     	   
dto.list_Sanciones(objetoCLS.getList_Sanciones());
dto.list_Bitacora(objetoCLS.getList_Bitacora());
dto.list_Principal(objetoCLS.getList_Principal());
dto.list_Reserva(objetoCLS.getList_Reserva());
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
    public void addObjeto(EstudiantesDTO objetoDto) throws ConexionException {
    	System.out.println("?????????????????????????????????????????????????????????????????????????????");
    	System.out.println("?????????????????????????????????????????????????????????????????????????????");
    	System.out.println("##############");
    	System.out.println("Se entro al servicio de EstudiantesSv, funcion Crear");

        estudiantesFh = new EstudiantesFachada();
        EstudiantesClas objetoCLS = new EstudiantesClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");
		
		objetoCLS.setNombre(objetoDto.getNombre());
		objetoCLS.setApellidos(objetoDto.getApellidos());
		objetoCLS.setCorreo(objetoDto.getCorreo());
		objetoCLS.setClave(objetoDto.getClave());
		objetoCLS.setTipoDocumento(objetoDto.getTipoDocumento());
		objetoCLS.setDocumento(objetoDto.getDocumento());
		objetoCLS.setFechaNacimiento(objetoDto.getFechaNacimiento());
		objetoCLS.setCelular(objetoDto.getCelular());
		objetoCLS.setTelefono(objetoDto.getTelefono());
		objetoCLS.setEscuela(objetoDto.getEscuela());
		objetoCLS.setCarreara(objetoDto.getCarreara());
		objetoCLS.setSemestre(objetoDto.getSemestre());
		objetoCLS.setEstado(objetoDto.getEstado());

   		System.out.println("##############");
   		System.out.println("Se recivieron los parametros De EstudiantesDTO");
   		System.out.println("%%%%%%%%%%%%%%");
   		
   		estudiantesFh.crearObj(objetoCLS);
   		System.out.println("##############");
   		System.out.println("Se entro la Fachada y uso la funcion Crear");
   		System.out.println("%%%%%%%%%%%%%%");
    }

    /////
    /////
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void actualizarObjeto(EstudiantesDTO objetoDto) throws ConexionException {
    	System.out.println("?????????????????????????????????????????????????????????????????????????????");
    	System.out.println("?????????????????????????????????????????????????????????????????????????????");
    	System.out.println("##############");
    	System.out.println("Se entro al servicio de EstudiantesSv, funcion Editar");
    	System.out.println("%%%%%%%%%%%%%%");

        estudiantesFh = new EstudiantesFachada();
        EstudiantesClas objetoCLS = new EstudiantesClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");
        
        
        objetoCLS.setEstudiantesID(objetoDto.getEstudiantesID());
            		
        objetoCLS.setNombre(objetoDto.getNombre());
        objetoCLS.setApellidos(objetoDto.getApellidos());
        objetoCLS.setCorreo(objetoDto.getCorreo());
        objetoCLS.setClave(objetoDto.getClave());
        objetoCLS.setTipoDocumento(objetoDto.getTipoDocumento());
        objetoCLS.setDocumento(objetoDto.getDocumento());
        objetoCLS.setFechaNacimiento(objetoDto.getFechaNacimiento());
        objetoCLS.setCelular(objetoDto.getCelular());
        objetoCLS.setTelefono(objetoDto.getTelefono());
        objetoCLS.setEscuela(objetoDto.getEscuela());
        objetoCLS.setCarreara(objetoDto.getCarreara());
        objetoCLS.setSemestre(objetoDto.getSemestre());
        objetoCLS.setEstado(objetoDto.getEstado());
        
		System.out.println("##############");
		System.out.println("Se recivieron los parametros De EstudiantesDTO");
		System.out.println("%%%%%%%%%%%%%%");
		
		estudiantesFh.actualizarObj(objetoCLS);
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
	System.out.println("Se entro al servicio de EstudiantesSv, funcion Eliminar");
	System.out.println("%%%%%%%%%%%%%%");
	
	estudiantesFh = new EstudiantesFachada();
	System.out.println("##############");
	System.out.println("Se inicio la Fachada y ObjetoClas");
	System.out.println("%%%%%%%%%%%%%%");
	
	EstudiantesClas objetoCLS =estudiantesFh.busacarObj(Integer.parseInt(id));
	System.out.println("##############");
	System.out.println("Se entro la Fachada y uso la funcion BuscarID");
	System.out.println("%%%%%%%%%%%%%%");
	
	if (objetoCLS != null) {
		estudiantesFh.eliminarObje(objetoCLS);
		System.out.println("##############");
		System.out.println("Se entro la Fachada y uso la funcion Eliminar");
		System.out.println("%%%%%%%%%%%%%%");
	}
	
		}
	}
