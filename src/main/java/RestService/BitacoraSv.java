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
@Path("/BitacoraSv")
public class BitacoraSv {
	
	BitacoraFachada bitacoraFh = null;
	EstudiantesFachada estudiantesFh = null;
	BitacoraDTO dto = null;
	EstudiantesDTO estudiantesFk = null;

	@GET
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public List<BitacoraDTO> getListaDto_JSON() throws ConexionException{
        bitacoraFh = new BitacoraFachada();
        List<BitacoraClas> objetoCl =  bitacoraFh.buscarTodoObj();
        List<BitacoraDTO> objetoDTO = new ArrayList<BitacoraDTO>();
        for (BitacoraClas objetoCLS : objetoCl) {
            dto = new BitacoraDTO(objetoCLS);
            objetoDTO.add(dto);
        }
        return objetoDTO;
    }
    /////
        /////
    	@GET
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
        public BitacoraDTO buscarObjeto(@PathParam("ID") String id) throws ConexionException {
           bitacoraFh = new BitacoraFachada();
            BitacoraClas objetoCLS = bitacoraFh.busacarObj(Integer.parseInt(id));
            dto = new BitacoraDTO(objetoCLS);
            
            
            return dto;
}
//    
//    

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public BitacoraDTO addObjeto(BitacoraDTO objetoDto) throws ConexionException {

         bitacoraFh = new BitacoraFachada();
        BitacoraClas objetoCLS = new BitacoraClas();
		
objetoCLS.setNombre(objetoDto.getNombre());
objetoCLS.setFecha(objetoDto.getFecha());
objetoCLS.setHora(objetoDto.getHora());
objetoCLS.setDescripcion(objetoDto.getDescripcion());
    		
    		estudiantesFh = new EstudiantesFachada();
    		EstudiantesClas estudiantesCLS = estudiantesFh.busacarObj(objetoDto.getEstudiantesFk().getEstudiantesID());
    		objetoCLS.setEstudiantesFK(estudiantesCLS);

       bitacoraFh.crearObj(objetoCLS);
        return dto;
    }

    /////
    /////
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public BitacoraDTO actualizarObjeto(BitacoraDTO objetoDto) throws ConexionException {

        bitacoraFh = new BitacoraFachada();
        BitacoraClas objetoCLS = new BitacoraClas();
        objetoCLS.setBitacoraID(objetoDto.getBitacoraID());
            		
objetoCLS.setNombre(objetoDto.getNombre());
objetoCLS.setFecha(objetoDto.getFecha());
objetoCLS.setHora(objetoDto.getHora());
objetoCLS.setDescripcion(objetoDto.getDescripcion());
    		
    		estudiantesFh = new EstudiantesFachada();
    		EstudiantesClas estudiantesCLS = estudiantesFh.busacarObj(objetoDto.getEstudiantesFk().getEstudiantesID());
    		objetoCLS.setEstudiantesFK(estudiantesCLS);

        bitacoraFh.actualizarObj(objetoCLS);
        return dto;
    }

    /////
    /////
    @DELETE
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void deleteObjeto(@PathParam("ID") String id) throws ConexionException {

        bitacoraFh = new BitacoraFachada();
       	BitacoraClas objetoCLS =bitacoraFh.busacarObj(Integer.parseInt(id));
        bitacoraFh.eliminarObje(objetoCLS);
    }
}
