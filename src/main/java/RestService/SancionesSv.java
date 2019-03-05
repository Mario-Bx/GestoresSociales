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
 * @author MARIOBX,jalba,renan,enumpaque
 */
@Path("/SancionesSv")
public class SancionesSv {
	
	SancionesFachada sancionesFh = null;
	EstudiantesFachada estudiantesFh = null;
	SancionesDTO dto = null;
	EstudiantesDTO estudiantesFk = null;

	@GET
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public List<SancionesDTO> getListaDto_JSON() throws ConexionException{
        sancionesFh = new SancionesFachada();
        List<SancionesClas> objetoCl =  sancionesFh.buscarTodoObj();
        List<SancionesDTO> objetoDTO = new ArrayList<SancionesDTO>();
        for (SancionesClas objetoCLS : objetoCl) {
            dto = new SancionesDTO(objetoCLS);
            objetoDTO.add(dto);
        }
        return objetoDTO;
    }
    /////
        /////
    	@GET
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
        public SancionesDTO buscarObjeto(@PathParam("ID") String id) throws ConexionException {
           sancionesFh = new SancionesFachada();
            SancionesClas objetoCLS = sancionesFh.busacarObj(Integer.parseInt(id));
            dto = new SancionesDTO(objetoCLS);
            
            
            return dto;
}
//    
//    

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public SancionesDTO addObjeto(SancionesDTO objetoDto) throws ConexionException {

         sancionesFh = new SancionesFachada();
        SancionesClas objetoCLS = new SancionesClas();
		
objetoCLS.setDescripcion(objetoDto.getDescripcion());
objetoCLS.setNumeroConvocatria(objetoDto.getNumeroConvocatria());
objetoCLS.setConInicial(objetoDto.getConInicial());
objetoCLS.setConFinal(objetoDto.getConFinal());
    		
    		estudiantesFh = new EstudiantesFachada();
    		EstudiantesClas estudiantesCLS = estudiantesFh.busacarObj(objetoDto.getEstudiantesFk().getEstudiantesID());
    		objetoCLS.setEstudiantesFK(estudiantesCLS);

       sancionesFh.crearObj(objetoCLS);
        return dto;
    }

    /////
    /////
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public SancionesDTO actualizarObjeto(SancionesDTO objetoDto) throws ConexionException {

        sancionesFh = new SancionesFachada();
        SancionesClas objetoCLS = new SancionesClas();
        objetoCLS.setSancionesID(objetoDto.getSancionesID());
            		
objetoCLS.setDescripcion(objetoDto.getDescripcion());
objetoCLS.setNumeroConvocatria(objetoDto.getNumeroConvocatria());
objetoCLS.setConInicial(objetoDto.getConInicial());
objetoCLS.setConFinal(objetoDto.getConFinal());
    		
    		estudiantesFh = new EstudiantesFachada();
    		EstudiantesClas estudiantesCLS = estudiantesFh.busacarObj(objetoDto.getEstudiantesFk().getEstudiantesID());
    		objetoCLS.setEstudiantesFK(estudiantesCLS);

        sancionesFh.actualizarObj(objetoCLS);
        return dto;
    }

    /////
    /////
    @DELETE
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void deleteObjeto(@PathParam("ID") String id) throws ConexionException {

        sancionesFh = new SancionesFachada();
       	SancionesClas objetoCLS =sancionesFh.busacarObj(Integer.parseInt(id));
        sancionesFh.eliminarObje(objetoCLS);
    }
}
