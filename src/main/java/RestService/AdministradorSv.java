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
    public List<AdministradorDTO> getListaDto_JSON() throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de AdministradorSv, funcion Listar");
        System.out.println("%%%%%%%%%%%%%%");

        administradorFh = new AdministradorFachada();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada");
        System.out.println("%%%%%%%%%%%%%%");

        List<AdministradorClas> objetoCl = administradorFh.buscarTodoObj();
        List<AdministradorDTO> objetoDTO = new ArrayList<AdministradorDTO>();
        System.out.println("##############");
        System.out.println("Se Llamo la funcion Lista en la Fachada");
        System.out.println("%%%%%%%%%%%%%%");

        for (AdministradorClas objetoCLS : objetoCl) {
            dto = new AdministradorDTO(objetoCLS);
            objetoDTO.add(dto);
        }
        System.out.println("##############");
        System.out.println("Se Se convirtieron los Objetos en AdministradorDTO");
        System.out.println("%%%%%%%%%%%%%%");
        return objetoDTO;
    }

    /////
    /////
    @GET
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public AdministradorDTO buscarObjeto(@PathParam("ID") String id) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de AdministradorSv, funcion Buscar(ID)");
        System.out.println("%%%%%%%%%%%%%%");

        administradorFh = new AdministradorFachada();
        AdministradorClas objetoCLS = administradorFh.busacarObj(Integer.parseInt(id));
        dto = new AdministradorDTO(objetoCLS);
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y uso la funcion Buscar(ID)");
        System.out.println("%%%%%%%%%%%%%%");

        dto.list_Convocatorias(objetoCLS.getList_Convocatorias());
        dto.list_Escuela(objetoCLS.getList_Escuela());
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
    public void addObjeto(AdministradorDTO objetoDto) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de AdministradorSv, funcion Crear");

        administradorFh = new AdministradorFachada();
        AdministradorClas objetoCLS = new AdministradorClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        objetoCLS.setNombre(objetoDto.getNombre());
        objetoCLS.setApellidos(objetoDto.getApellidos());
        objetoCLS.setCorreo(objetoDto.getCorreo());
        objetoCLS.setClave(objetoDto.getClave());
        objetoCLS.setFechaNacimiento(objetoDto.getFechaNacimiento());
        objetoCLS.setTelefono(objetoDto.getTelefono());
        objetoCLS.setCelular(objetoDto.getCelular());
        objetoCLS.setEstado(objetoDto.getEstado());

        System.out.println("##############");
        System.out.println("Se recivieron los parametros De AdministradorDTO");
        System.out.println("%%%%%%%%%%%%%%");

        administradorFh.crearObj(objetoCLS);
        System.out.println("##############");
        System.out.println("Se entro la Fachada y uso la funcion Crear");
        System.out.println("%%%%%%%%%%%%%%");
    }

    /////
    /////
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void actualizarObjeto(AdministradorDTO objetoDto) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de AdministradorSv, funcion Editar");
        System.out.println("%%%%%%%%%%%%%%");

        administradorFh = new AdministradorFachada();
        AdministradorClas objetoCLS = new AdministradorClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        objetoCLS.setAdministradorID(objetoDto.getAdministradorID());

        objetoCLS.setNombre(objetoDto.getNombre());
        objetoCLS.setApellidos(objetoDto.getApellidos());
        objetoCLS.setCorreo(objetoDto.getCorreo());
        objetoCLS.setClave(objetoDto.getClave());
        objetoCLS.setFechaNacimiento(objetoDto.getFechaNacimiento());
        objetoCLS.setTelefono(objetoDto.getTelefono());
        objetoCLS.setCelular(objetoDto.getCelular());
        objetoCLS.setEstado(objetoDto.getEstado());

        System.out.println("##############");
        System.out.println("Se recivieron los parametros De AdministradorDTO");
        System.out.println("%%%%%%%%%%%%%%");

        administradorFh.actualizarObj(objetoCLS);
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
        System.out.println("Se entro al servicio de AdministradorSv, funcion Eliminar");
        System.out.println("%%%%%%%%%%%%%%");

        administradorFh = new AdministradorFachada();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        AdministradorClas objetoCLS = administradorFh.busacarObj(Integer.parseInt(id));
        System.out.println("##############");
        System.out.println("Se entro la Fachada y uso la funcion BuscarID");
        System.out.println("%%%%%%%%%%%%%%");

        if (objetoCLS != null) {
            administradorFh.eliminarObje(objetoCLS);
            System.out.println("##############");
            System.out.println("Se entro la Fachada y uso la funcion Eliminar");
            System.out.println("%%%%%%%%%%%%%%");
        }

    }
}
