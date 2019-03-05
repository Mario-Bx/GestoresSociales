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
@Path("/ConvocatoriasSv")
public class ConvocatoriasSv {
	
	ConvocatoriasFachada convocatoriasFh = null;
	AdministradorFachada administradorFh = null;
	ConvocatoriasDTO dto = null;
	AdministradorDTO administradorFk = null;

	@GET
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public List<ConvocatoriasDTO> getListaDto_JSON() throws ConexionException{
        convocatoriasFh = new ConvocatoriasFachada();
        List<ConvocatoriasClas> objetoCl =  convocatoriasFh.buscarTodoObj();
        List<ConvocatoriasDTO> objetoDTO = new ArrayList<ConvocatoriasDTO>();
        for (ConvocatoriasClas objetoCLS : objetoCl) {
            dto = new ConvocatoriasDTO(objetoCLS);
            objetoDTO.add(dto);
        }
        return objetoDTO;
    }
    /////
        /////
    	@GET
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
        public ConvocatoriasDTO buscarObjeto(@PathParam("ID") String id) throws ConexionException {
           convocatoriasFh = new ConvocatoriasFachada();
            ConvocatoriasClas objetoCLS = convocatoriasFh.busacarObj(Integer.parseInt(id));
            dto = new ConvocatoriasDTO(objetoCLS);
            
dto.list_Participantes(objetoCLS.getList_Participantes());
            
            return dto;
}
//    
//    

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public ConvocatoriasDTO addObjeto(ConvocatoriasDTO objetoDto) throws ConexionException {

         convocatoriasFh = new ConvocatoriasFachada();
        ConvocatoriasClas objetoCLS = new ConvocatoriasClas();
		
objetoCLS.setNombre(objetoDto.getNombre());
objetoCLS.setFechaInicio(objetoDto.getFechaInicio());
objetoCLS.setFechaFin(objetoDto.getFechaFin());
objetoCLS.setHora(objetoDto.getHora());
objetoCLS.setEncargado(objetoDto.getEncargado());
objetoCLS.setDescripcion(objetoDto.getDescripcion());
objetoCLS.setHorasGanadas(objetoDto.getHorasGanadas());
    		
    		administradorFh = new AdministradorFachada();
    		AdministradorClas administradorCLS = administradorFh.busacarObj(objetoDto.getAdministradorFk().getAdministradorID());
    		objetoCLS.setAdministradorFK(administradorCLS);

       convocatoriasFh.crearObj(objetoCLS);
        return dto;
    }

    /////
    /////
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public ConvocatoriasDTO actualizarObjeto(ConvocatoriasDTO objetoDto) throws ConexionException {

        convocatoriasFh = new ConvocatoriasFachada();
        ConvocatoriasClas objetoCLS = new ConvocatoriasClas();
        objetoCLS.setConvocatoriasID(objetoDto.getConvocatoriasID());
            		
objetoCLS.setNombre(objetoDto.getNombre());
objetoCLS.setFechaInicio(objetoDto.getFechaInicio());
objetoCLS.setFechaFin(objetoDto.getFechaFin());
objetoCLS.setHora(objetoDto.getHora());
objetoCLS.setEncargado(objetoDto.getEncargado());
objetoCLS.setDescripcion(objetoDto.getDescripcion());
objetoCLS.setHorasGanadas(objetoDto.getHorasGanadas());
    		
    		administradorFh = new AdministradorFachada();
    		AdministradorClas administradorCLS = administradorFh.busacarObj(objetoDto.getAdministradorFk().getAdministradorID());
    		objetoCLS.setAdministradorFK(administradorCLS);

        convocatoriasFh.actualizarObj(objetoCLS);
        return dto;
    }

    /////
    /////
    @DELETE
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void deleteObjeto(@PathParam("ID") String id) throws ConexionException {

        convocatoriasFh = new ConvocatoriasFachada();
       	ConvocatoriasClas objetoCLS =convocatoriasFh.busacarObj(Integer.parseInt(id));
        convocatoriasFh.eliminarObje(objetoCLS);
    }
}
