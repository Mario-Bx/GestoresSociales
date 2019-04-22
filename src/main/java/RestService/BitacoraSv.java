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
    public List<BitacoraDTO> getListaDto_JSON() throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de BitacoraSv, funcion Listar");
        System.out.println("%%%%%%%%%%%%%%");

        bitacoraFh = new BitacoraFachada();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada");
        System.out.println("%%%%%%%%%%%%%%");

        List<BitacoraClas> objetoCl = bitacoraFh.buscarTodoObj();
        List<BitacoraDTO> objetoDTO = new ArrayList<BitacoraDTO>();
        System.out.println("##############");
        System.out.println("Se Llamo la funcion Lista en la Fachada");
        System.out.println("%%%%%%%%%%%%%%");

        for (BitacoraClas objetoCLS : objetoCl) {
            dto = new BitacoraDTO(objetoCLS);
            objetoDTO.add(dto);
        }
        System.out.println("##############");
        System.out.println("Se Se convirtieron los Objetos en BitacoraDTO");
        System.out.println("%%%%%%%%%%%%%%");
        return objetoDTO;
    }

    /////
    /////
    @GET
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public BitacoraDTO buscarObjeto(@PathParam("ID") String id) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de BitacoraSv, funcion Buscar(ID)");
        System.out.println("%%%%%%%%%%%%%%");

        bitacoraFh = new BitacoraFachada();
        BitacoraClas objetoCLS = bitacoraFh.busacarObj(Integer.parseInt(id));
        dto = new BitacoraDTO(objetoCLS);
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
    public void addObjeto(BitacoraDTO objetoDto) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de BitacoraSv, funcion Crear");

        bitacoraFh = new BitacoraFachada();
        BitacoraClas objetoCLS = new BitacoraClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        objetoCLS.setNombre(objetoDto.getNombre());
        objetoCLS.setFecha(objetoDto.getFecha());
        objetoCLS.setHora(objetoDto.getHora());
        objetoCLS.setDescripcion(objetoDto.getDescripcion());
        objetoCLS.setEstado(objetoDto.getEstado());

        estudiantesFh = new EstudiantesFachada();
        EstudiantesClas estudiantesCLS = estudiantesFh.busacarObj(objetoDto.getEstudiantesFk().getEstudiantesID());
        objetoCLS.setEstudiantesFK(estudiantesCLS);
        System.out.println("##############");
        System.out.println("Se recivieron los parametros De BitacoraDTO");
        System.out.println("%%%%%%%%%%%%%%");

        bitacoraFh.crearObj(objetoCLS);
        System.out.println("##############");
        System.out.println("Se entro la Fachada y uso la funcion Crear");
        System.out.println("%%%%%%%%%%%%%%");
    }

    /////
    /////
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void actualizarObjeto(BitacoraDTO objetoDto) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de BitacoraSv, funcion Editar");
        System.out.println("%%%%%%%%%%%%%%");

        bitacoraFh = new BitacoraFachada();
        BitacoraClas objetoCLS = new BitacoraClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        objetoCLS.setBitacoraID(objetoDto.getBitacoraID());

        objetoCLS.setNombre(objetoDto.getNombre());
        objetoCLS.setFecha(objetoDto.getFecha());
        objetoCLS.setHora(objetoDto.getHora());
        objetoCLS.setDescripcion(objetoDto.getDescripcion());
        objetoCLS.setEstado(objetoDto.getEstado());

        estudiantesFh = new EstudiantesFachada();
        EstudiantesClas estudiantesCLS = estudiantesFh.busacarObj(objetoDto.getEstudiantesFk().getEstudiantesID());
        objetoCLS.setEstudiantesFK(estudiantesCLS);
        System.out.println("##############");
        System.out.println("Se recivieron los parametros De BitacoraDTO");
        System.out.println("%%%%%%%%%%%%%%");

        bitacoraFh.actualizarObj(objetoCLS);
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
        System.out.println("Se entro al servicio de BitacoraSv, funcion Eliminar");
        System.out.println("%%%%%%%%%%%%%%");

        bitacoraFh = new BitacoraFachada();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        BitacoraClas objetoCLS = bitacoraFh.busacarObj(Integer.parseInt(id));
        System.out.println("##############");
        System.out.println("Se entro la Fachada y uso la funcion BuscarID");
        System.out.println("%%%%%%%%%%%%%%");

        if (objetoCLS != null) {
            bitacoraFh.eliminarObje(objetoCLS);
            System.out.println("##############");
            System.out.println("Se entro la Fachada y uso la funcion Eliminar");
            System.out.println("%%%%%%%%%%%%%%");
        }

    }
}
