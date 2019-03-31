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
@Path("/PrincipalSv")
public class PrincipalSv {

    PrincipalFachada principalFh = null;
    EstudiantesFachada estudiantesFh = null;
    ConvocatoriasFachada convocatoriasFh = null;
    PrincipalDTO dto = null;
    EstudiantesDTO estudiantesFk = null;
    ConvocatoriasDTO convocatoriasFk = null;

    @GET
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public List<PrincipalDTO> getListaDto_JSON() throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de PrincipalSv, funcion Listar");
        System.out.println("%%%%%%%%%%%%%%");

        principalFh = new PrincipalFachada();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada");
        System.out.println("%%%%%%%%%%%%%%");

        List<PrincipalClas> objetoCl = principalFh.buscarTodoObj();
        List<PrincipalDTO> objetoDTO = new ArrayList<PrincipalDTO>();
        System.out.println("##############");
        System.out.println("Se Llamo la funcion Lista en la Fachada");
        System.out.println("%%%%%%%%%%%%%%");

        for (PrincipalClas objetoCLS : objetoCl) {
            dto = new PrincipalDTO(objetoCLS);
            objetoDTO.add(dto);
        }
        System.out.println("##############");
        System.out.println("Se Se convirtieron los Objetos en PrincipalDTO");
        System.out.println("%%%%%%%%%%%%%%");
        return objetoDTO;
    }

    /////
    /////
    @GET
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public PrincipalDTO buscarObjeto(@PathParam("ID") String id) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de PrincipalSv, funcion Buscar(ID)");
        System.out.println("%%%%%%%%%%%%%%");

        principalFh = new PrincipalFachada();
        PrincipalClas objetoCLS = principalFh.busacarObj(Integer.parseInt(id));
        dto = new PrincipalDTO(objetoCLS);
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
    public void addObjeto(PrincipalDTO objetoDto) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de PrincipalSv, funcion Crear");

        principalFh = new PrincipalFachada();
        PrincipalClas objetoCLS = new PrincipalClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        objetoCLS.setNombre(objetoDto.getNombre());

        estudiantesFh = new EstudiantesFachada();
        EstudiantesClas estudiantesCLS = estudiantesFh.busacarObj(objetoDto.getEstudiantesFk().getEstudiantesID());
        objetoCLS.setEstudiantesFK(estudiantesCLS);
        convocatoriasFh = new ConvocatoriasFachada();
        ConvocatoriasClas convocatoriasCLS = convocatoriasFh.busacarObj(objetoDto.getConvocatoriasFk().getConvocatoriasID());
        objetoCLS.setConvocatoriasFK(convocatoriasCLS);
        System.out.println("##############");
        System.out.println("Se recivieron los parametros De PrincipalDTO");
        System.out.println("%%%%%%%%%%%%%%");

        principalFh.crearObj(objetoCLS);
        System.out.println("##############----"+objetoCLS);
        System.out.println("Se entro la Fachada y uso la funcion Crear");
        System.out.println("%%%%%%%%%%%%%%");
    }

    /////
    /////
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void actualizarObjeto(PrincipalDTO objetoDto) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de PrincipalSv, funcion Editar");
        System.out.println("%%%%%%%%%%%%%%");

        principalFh = new PrincipalFachada();
        PrincipalClas objetoCLS = new PrincipalClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        objetoCLS.setPrincipalID(objetoDto.getPrincipalID());

        objetoCLS.setNombre(objetoDto.getNombre());

        estudiantesFh = new EstudiantesFachada();
        EstudiantesClas estudiantesCLS = estudiantesFh.busacarObj(objetoDto.getEstudiantesFk().getEstudiantesID());
        objetoCLS.setEstudiantesFK(estudiantesCLS);
        convocatoriasFh = new ConvocatoriasFachada();
        ConvocatoriasClas convocatoriasCLS = convocatoriasFh.busacarObj(objetoDto.getConvocatoriasFk().getConvocatoriasID());
        objetoCLS.setConvocatoriasFK(convocatoriasCLS);
        System.out.println("##############");
        System.out.println("Se recivieron los parametros De PrincipalDTO");
        System.out.println("%%%%%%%%%%%%%%");

        principalFh.actualizarObj(objetoCLS);
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
        System.out.println("##############");
        System.out.println("Se entro al servicio de PrincipalSv, funcion Eliminar");
        System.out.println("%%%%%%%%%%%%%%");

        principalFh = new PrincipalFachada();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        PrincipalClas objetoCLS = principalFh.busacarObj(Integer.parseInt(id));
        System.out.println("##############");
        System.out.println("Se entro la Fachada y uso la funcion BuscarID");
        System.out.println("%%%%%%%%%%%%%%");

        if (objetoCLS != null) {
            principalFh.eliminarObje(objetoCLS);
            System.out.println("##############");
            System.out.println("Se entro la Fachada y uso la funcion Eliminar");
            System.out.println("%%%%%%%%%%%%%%");
        }

    }
}
