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
        estudiantesFh = new EstudiantesFachada();
        List<EstudiantesClas> objetoCl =  estudiantesFh.buscarTodoObj();
        List<EstudiantesDTO> objetoDTO = new ArrayList<EstudiantesDTO>();
        for (EstudiantesClas objetoCLS : objetoCl) {
            dto = new EstudiantesDTO(objetoCLS);
            objetoDTO.add(dto);
        }
        return objetoDTO;
    }
    /////
        /////
    	@GET
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
        public EstudiantesDTO buscarObjeto(@PathParam("ID") String id) throws ConexionException {
           estudiantesFh = new EstudiantesFachada();
            EstudiantesClas objetoCLS = estudiantesFh.busacarObj(Integer.parseInt(id));
            dto = new EstudiantesDTO(objetoCLS);
            
dto.list_Participantes(objetoCLS.getList_Participantes());
dto.list_Sanciones(objetoCLS.getList_Sanciones());
dto.list_Bitacora(objetoCLS.getList_Bitacora());
            
            return dto;
}
//    
//    

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public EstudiantesDTO addObjeto(EstudiantesDTO objetoDto) throws ConexionException {

         estudiantesFh = new EstudiantesFachada();
        EstudiantesClas objetoCLS = new EstudiantesClas();
		
objetoCLS.setNombre(objetoDto.getNombre());
objetoCLS.setApellidos(objetoDto.getApellidos());
objetoCLS.setCorreo(objetoDto.getCorreo());
objetoCLS.setClave(objetoDto.getClave());
objetoCLS.setFechaNacimiento(objetoDto.getFechaNacimiento());
objetoCLS.setDocumento(objetoDto.getDocumento());
objetoCLS.setTelefono(objetoDto.getTelefono());
objetoCLS.setCelular(objetoDto.getCelular());
objetoCLS.setEscuela(objetoDto.getEscuela());
objetoCLS.setCarreara(objetoDto.getCarreara());
    		

       estudiantesFh.crearObj(objetoCLS);
        return dto;
    }

    /////
    /////
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public EstudiantesDTO actualizarObjeto(EstudiantesDTO objetoDto) throws ConexionException {

        estudiantesFh = new EstudiantesFachada();
        EstudiantesClas objetoCLS = new EstudiantesClas();
        objetoCLS.setEstudiantesID(objetoDto.getEstudiantesID());
            		
objetoCLS.setNombre(objetoDto.getNombre());
objetoCLS.setApellidos(objetoDto.getApellidos());
objetoCLS.setCorreo(objetoDto.getCorreo());
objetoCLS.setClave(objetoDto.getClave());
objetoCLS.setFechaNacimiento(objetoDto.getFechaNacimiento());
objetoCLS.setDocumento(objetoDto.getDocumento());
objetoCLS.setTelefono(objetoDto.getTelefono());
objetoCLS.setCelular(objetoDto.getCelular());
objetoCLS.setEscuela(objetoDto.getEscuela());
objetoCLS.setCarreara(objetoDto.getCarreara());
    		

        estudiantesFh.actualizarObj(objetoCLS);
        return dto;
    }

    /////
    /////
    @DELETE
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void deleteObjeto(@PathParam("ID") String id) throws ConexionException {

        estudiantesFh = new EstudiantesFachada();
       	EstudiantesClas objetoCLS =estudiantesFh.busacarObj(Integer.parseInt(id));
        estudiantesFh.eliminarObje(objetoCLS);
    }
}
