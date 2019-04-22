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
@Path("/DependenciaSv")
public class DependenciaSv {

    DependenciaFachada dependenciaFh = null;
    EscuelaFachada escuelaFh = null;
    DependenciaDTO dto = null;
    EscuelaDTO escuelaFk = null;

    @GET
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public List<DependenciaDTO> getListaDto_JSON() throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de DependenciaSv, funcion Listar");
        System.out.println("%%%%%%%%%%%%%%");

        dependenciaFh = new DependenciaFachada();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada");
        System.out.println("%%%%%%%%%%%%%%");

        List<DependenciaClas> objetoCl = dependenciaFh.buscarTodoObj();
        List<DependenciaDTO> objetoDTO = new ArrayList<DependenciaDTO>();
        System.out.println("##############");
        System.out.println("Se Llamo la funcion Lista en la Fachada");
        System.out.println("%%%%%%%%%%%%%%");

        for (DependenciaClas objetoCLS : objetoCl) {
            dto = new DependenciaDTO(objetoCLS);
            objetoDTO.add(dto);
        }
        System.out.println("##############");
        System.out.println("Se Se convirtieron los Objetos en DependenciaDTO");
        System.out.println("%%%%%%%%%%%%%%");
        return objetoDTO;
    }

    /////
    /////
    @GET
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public DependenciaDTO buscarObjeto(@PathParam("ID") String id) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de DependenciaSv, funcion Buscar(ID)");
        System.out.println("%%%%%%%%%%%%%%");

        dependenciaFh = new DependenciaFachada();
        DependenciaClas objetoCLS = dependenciaFh.busacarObj(Integer.parseInt(id));
        dto = new DependenciaDTO(objetoCLS);
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y uso la funcion Buscar(ID)");
        System.out.println("%%%%%%%%%%%%%%");

        dto.list_Convocatorias(objetoCLS.getList_Convocatorias());
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
    public void addObjeto(DependenciaDTO objetoDto) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de DependenciaSv, funcion Crear");

        dependenciaFh = new DependenciaFachada();
        DependenciaClas objetoCLS = new DependenciaClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        objetoCLS.setNombre(objetoDto.getNombre());
        objetoCLS.setEstado(objetoDto.getEstado());

        escuelaFh = new EscuelaFachada();
        EscuelaClas escuelaCLS = escuelaFh.busacarObj(objetoDto.getEscuelaFk().getEscuelaID());
        objetoCLS.setEscuelaFK(escuelaCLS);
        System.out.println("##############");
        System.out.println("Se recivieron los parametros De DependenciaDTO");
        System.out.println("%%%%%%%%%%%%%%");

        dependenciaFh.crearObj(objetoCLS);
        System.out.println("##############");
        System.out.println("Se entro la Fachada y uso la funcion Crear");
        System.out.println("%%%%%%%%%%%%%%");
    }

    /////
    /////
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void actualizarObjeto(DependenciaDTO objetoDto) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de DependenciaSv, funcion Editar");
        System.out.println("%%%%%%%%%%%%%%");

        dependenciaFh = new DependenciaFachada();
        DependenciaClas objetoCLS = new DependenciaClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        objetoCLS.setDependenciaID(objetoDto.getDependenciaID());

        objetoCLS.setNombre(objetoDto.getNombre());
        objetoCLS.setEstado(objetoDto.getEstado());

        escuelaFh = new EscuelaFachada();
        EscuelaClas escuelaCLS = escuelaFh.busacarObj(objetoDto.getEscuelaFk().getEscuelaID());
        objetoCLS.setEscuelaFK(escuelaCLS);
        System.out.println("##############");
        System.out.println("Se recivieron los parametros De DependenciaDTO");
        System.out.println("%%%%%%%%%%%%%%");

        dependenciaFh.actualizarObj(objetoCLS);
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
        System.out.println("Se entro al servicio de DependenciaSv, funcion Eliminar");
        System.out.println("%%%%%%%%%%%%%%");

        dependenciaFh = new DependenciaFachada();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        DependenciaClas objetoCLS = dependenciaFh.busacarObj(Integer.parseInt(id));
        System.out.println("##############");
        System.out.println("Se entro la Fachada y uso la funcion BuscarID");
        System.out.println("%%%%%%%%%%%%%%");

        if (objetoCLS != null) {
            dependenciaFh.eliminarObje(objetoCLS);
            System.out.println("##############");
            System.out.println("Se entro la Fachada y uso la funcion Eliminar");
            System.out.println("%%%%%%%%%%%%%%");
        }

    }
}
