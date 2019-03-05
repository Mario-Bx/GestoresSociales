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
@Path("/ParticipantesSv")
public class ParticipantesSv {
	
	ParticipantesFachada participantesFh = null;
	EstudiantesFachada estudiantesFh = null;
	ConvocatoriasFachada convocatoriasFh = null;
	ParticipantesDTO dto = null;
	EstudiantesDTO estudiantesFk = null;
	ConvocatoriasDTO convocatoriasFk = null;

	@GET
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public List<ParticipantesDTO> getListaDto_JSON() throws ConexionException{
        participantesFh = new ParticipantesFachada();
        List<ParticipantesClas> objetoCl =  participantesFh.buscarTodoObj();
        List<ParticipantesDTO> objetoDTO = new ArrayList<ParticipantesDTO>();
        for (ParticipantesClas objetoCLS : objetoCl) {
            dto = new ParticipantesDTO(objetoCLS);
            objetoDTO.add(dto);
        }
        return objetoDTO;
    }
    /////
        /////
    	@GET
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
        public ParticipantesDTO buscarObjeto(@PathParam("ID") String id) throws ConexionException {
           participantesFh = new ParticipantesFachada();
            ParticipantesClas objetoCLS = participantesFh.busacarObj(Integer.parseInt(id));
            dto = new ParticipantesDTO(objetoCLS);
            
            
            return dto;
}
//    
//    

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public ParticipantesDTO addObjeto(ParticipantesDTO objetoDto) throws ConexionException {

         participantesFh = new ParticipantesFachada();
        ParticipantesClas objetoCLS = new ParticipantesClas();
		
objetoCLS.setNombre(objetoDto.getNombre());
    		
    		estudiantesFh = new EstudiantesFachada();
    		EstudiantesClas estudiantesCLS = estudiantesFh.busacarObj(objetoDto.getEstudiantesFk().getEstudiantesID());
    		objetoCLS.setEstudiantesFK(estudiantesCLS);
    		convocatoriasFh = new ConvocatoriasFachada();
    		ConvocatoriasClas convocatoriasCLS = convocatoriasFh.busacarObj(objetoDto.getConvocatoriasFk().getConvocatoriasID());
    		objetoCLS.setConvocatoriasFK(convocatoriasCLS);

       participantesFh.crearObj(objetoCLS);
        return dto;
    }

    /////
    /////
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public ParticipantesDTO actualizarObjeto(ParticipantesDTO objetoDto) throws ConexionException {

        participantesFh = new ParticipantesFachada();
        ParticipantesClas objetoCLS = new ParticipantesClas();
        objetoCLS.setParticipantesID(objetoDto.getParticipantesID());
            		
objetoCLS.setNombre(objetoDto.getNombre());
    		
    		estudiantesFh = new EstudiantesFachada();
    		EstudiantesClas estudiantesCLS = estudiantesFh.busacarObj(objetoDto.getEstudiantesFk().getEstudiantesID());
    		objetoCLS.setEstudiantesFK(estudiantesCLS);
    		convocatoriasFh = new ConvocatoriasFachada();
    		ConvocatoriasClas convocatoriasCLS = convocatoriasFh.busacarObj(objetoDto.getConvocatoriasFk().getConvocatoriasID());
    		objetoCLS.setConvocatoriasFK(convocatoriasCLS);

        participantesFh.actualizarObj(objetoCLS);
        return dto;
    }

    /////
    /////
    @DELETE
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void deleteObjeto(@PathParam("ID") String id) throws ConexionException {

        participantesFh = new ParticipantesFachada();
       	ParticipantesClas objetoCLS =participantesFh.busacarObj(Integer.parseInt(id));
        participantesFh.eliminarObje(objetoCLS);
    }
}
