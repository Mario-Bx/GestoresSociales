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
@Path("/AdministradorSv")
public class AdministradorSv {
	
	AdministradorFachada administradorFh = null;
	AdministradorDTO dto = null;

	@GET
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public List<AdministradorDTO> getListaDto_JSON() throws ConexionException{
        administradorFh = new AdministradorFachada();
        List<AdministradorClas> objetoCl =  administradorFh.buscarTodoObj();
        List<AdministradorDTO> objetoDTO = new ArrayList<AdministradorDTO>();
        for (AdministradorClas objetoCLS : objetoCl) {
            dto = new AdministradorDTO(objetoCLS);
            objetoDTO.add(dto);
        }
        return objetoDTO;
    }
    /////
        /////
    	@GET
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
        public AdministradorDTO buscarObjeto(@PathParam("ID") String id) throws ConexionException {
           administradorFh = new AdministradorFachada();
            AdministradorClas objetoCLS = administradorFh.busacarObj(Integer.parseInt(id));
            dto = new AdministradorDTO(objetoCLS);
            
dto.list_Convocatorias(objetoCLS.getList_Convocatorias());
            
            return dto;
}
//    
//    

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public AdministradorDTO addObjeto(AdministradorDTO objetoDto) throws ConexionException {

         administradorFh = new AdministradorFachada();
        AdministradorClas objetoCLS = new AdministradorClas();
		
objetoCLS.setNombre(objetoDto.getNombre());
objetoCLS.setApellidos(objetoDto.getApellidos());
objetoCLS.setCorreo(objetoDto.getCorreo());
objetoCLS.setClave(objetoDto.getClave());
objetoCLS.setFechaNacimiento(objetoDto.getFechaNacimiento());
objetoCLS.setDocumento(objetoDto.getDocumento());
objetoCLS.setTelefono(objetoDto.getTelefono());
objetoCLS.setCelular(objetoDto.getCelular());
    		

       administradorFh.crearObj(objetoCLS);
        return dto;
    }

    /////
    /////
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public AdministradorDTO actualizarObjeto(AdministradorDTO objetoDto) throws ConexionException {

        administradorFh = new AdministradorFachada();
        AdministradorClas objetoCLS = new AdministradorClas();
        objetoCLS.setAdministradorID(objetoDto.getAdministradorID());
            		
objetoCLS.setNombre(objetoDto.getNombre());
objetoCLS.setApellidos(objetoDto.getApellidos());
objetoCLS.setCorreo(objetoDto.getCorreo());
objetoCLS.setClave(objetoDto.getClave());
objetoCLS.setFechaNacimiento(objetoDto.getFechaNacimiento());
objetoCLS.setDocumento(objetoDto.getDocumento());
objetoCLS.setTelefono(objetoDto.getTelefono());
objetoCLS.setCelular(objetoDto.getCelular());
    		

        administradorFh.actualizarObj(objetoCLS);
        return dto;
    }

    /////
    /////
    @DELETE
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void deleteObjeto(@PathParam("ID") String id) throws ConexionException {

        administradorFh = new AdministradorFachada();
       	AdministradorClas objetoCLS =administradorFh.busacarObj(Integer.parseInt(id));
        administradorFh.eliminarObje(objetoCLS);
    }
}
