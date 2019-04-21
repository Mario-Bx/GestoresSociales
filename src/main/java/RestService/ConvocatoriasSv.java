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
    DependenciaFachada dependenciaFh = null;
    ConvocatoriasDTO dto = null;
    AdministradorDTO administradorFk = null;
    DependenciaDTO dependenciaFk = null;

    @GET
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public List<ConvocatoriasDTO> getListaDto_JSON() throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de ConvocatoriasSv, funcion Listar");
        System.out.println("%%%%%%%%%%%%%%");

        convocatoriasFh = new ConvocatoriasFachada();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada");
        System.out.println("%%%%%%%%%%%%%%");

        List<ConvocatoriasClas> objetoCl = convocatoriasFh.buscarTodoObj();
        List<ConvocatoriasDTO> objetoDTO = new ArrayList<ConvocatoriasDTO>();
        System.out.println("##############");
        System.out.println("Se Llamo la funcion Lista en la Fachada");
        System.out.println("%%%%%%%%%%%%%%");

        for (ConvocatoriasClas objetoCLS : objetoCl) {
            dto = new ConvocatoriasDTO(objetoCLS);
            objetoDTO.add(dto);
        }
        System.out.println("##############");
        System.out.println("Se Se convirtieron los Objetos en ConvocatoriasDTO");
        System.out.println("%%%%%%%%%%%%%%");
        return objetoDTO;
    }

    /////
    /////
    @GET
    @Path("/{ID}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public ConvocatoriasDTO buscarObjeto(@PathParam("ID") String id) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de ConvocatoriasSv, funcion Buscar(ID)");
        System.out.println("%%%%%%%%%%%%%%");

        convocatoriasFh = new ConvocatoriasFachada();
        ConvocatoriasClas objetoCLS = convocatoriasFh.busacarObj(Integer.parseInt(id));
        dto = new ConvocatoriasDTO(objetoCLS);
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y uso la funcion Buscar(ID)");
        System.out.println("%%%%%%%%%%%%%%");

        dto.list_Principal(objetoCLS.getList_Principal());
        dto.list_Reserva(objetoCLS.getList_Reserva());
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
    public void addObjeto(ConvocatoriasDTO objetoDto) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de ConvocatoriasSv, funcion Crear");

        convocatoriasFh = new ConvocatoriasFachada();
        ConvocatoriasClas objetoCLS = new ConvocatoriasClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        objetoCLS.setNombre(objetoDto.getNombre());
        objetoCLS.setFechaInicio(objetoDto.getFechaInicio());
        objetoCLS.setFechaFin(objetoDto.getFechaFin());
        objetoCLS.setEncargado(objetoDto.getEncargado());
        objetoCLS.setDescripcion(objetoDto.getDescripcion());
        objetoCLS.setHorasGanadas(objetoDto.getHorasGanadas());
        objetoCLS.setNoEstudienates(objetoDto.getNoEstudienates());
        objetoCLS.setNoReserva(objetoDto.getNoReserva());
        objetoCLS.setPeriodoAcademico(objetoDto.getPeriodoAcademico());
        objetoCLS.setEstado(objetoDto.getEstado());

        administradorFh = new AdministradorFachada();
        AdministradorClas administradorCLS = administradorFh.busacarObj(objetoDto.getAdministradorFk().getAdministradorID());
        objetoCLS.setAdministradorFK(administradorCLS);
        dependenciaFh = new DependenciaFachada();
        DependenciaClas dependenciaCLS = dependenciaFh.busacarObj(objetoDto.getDependenciaFk().getDependenciaID());
        objetoCLS.setDependenciaFK(dependenciaCLS);
        System.out.println("##############");
        System.out.println("Se recivieron los parametros De ConvocatoriasDTO");
        System.out.println("%%%%%%%%%%%%%%");

        convocatoriasFh.crearObj(objetoCLS);
        System.out.println("##############");
        System.out.println("Se entro la Fachada y uso la funcion Crear");
        System.out.println("%%%%%%%%%%%%%%");
    }

    /////
    /////
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public void actualizarObjeto(ConvocatoriasDTO objetoDto) throws ConexionException {
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("?????????????????????????????????????????????????????????????????????????????");
        System.out.println("##############");
        System.out.println("Se entro al servicio de ConvocatoriasSv, funcion Editar");
        System.out.println("%%%%%%%%%%%%%%");

        convocatoriasFh = new ConvocatoriasFachada();
        ConvocatoriasClas objetoCLS = new ConvocatoriasClas();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        objetoCLS.setConvocatoriasID(objetoDto.getConvocatoriasID());

        objetoCLS.setNombre(objetoDto.getNombre());
        objetoCLS.setFechaInicio(objetoDto.getFechaInicio());
        objetoCLS.setFechaFin(objetoDto.getFechaFin());
        objetoCLS.setEncargado(objetoDto.getEncargado());
        objetoCLS.setDescripcion(objetoDto.getDescripcion());
        objetoCLS.setHorasGanadas(objetoDto.getHorasGanadas());
        objetoCLS.setNoEstudienates(objetoDto.getNoEstudienates());
        objetoCLS.setNoReserva(objetoDto.getNoReserva());
        objetoCLS.setPeriodoAcademico(objetoDto.getPeriodoAcademico());
        objetoCLS.setEstado(objetoDto.getEstado());

        administradorFh = new AdministradorFachada();
        AdministradorClas administradorCLS = administradorFh.busacarObj(objetoDto.getAdministradorFk().getAdministradorID());
        objetoCLS.setAdministradorFK(administradorCLS);
        dependenciaFh = new DependenciaFachada();
        DependenciaClas dependenciaCLS = dependenciaFh.busacarObj(objetoDto.getDependenciaFk().getDependenciaID());
        objetoCLS.setDependenciaFK(dependenciaCLS);
        System.out.println("##############");
        System.out.println("Se recivieron los parametros De ConvocatoriasDTO");
        System.out.println("%%%%%%%%%%%%%%");

        convocatoriasFh.actualizarObj(objetoCLS);
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
        System.out.println("Se entro al servicio de ConvocatoriasSv, funcion Eliminar");
        System.out.println("%%%%%%%%%%%%%%");

        convocatoriasFh = new ConvocatoriasFachada();
        System.out.println("##############");
        System.out.println("Se inicio la Fachada y ObjetoClas");
        System.out.println("%%%%%%%%%%%%%%");

        ConvocatoriasClas objetoCLS = convocatoriasFh.busacarObj(Integer.parseInt(id));
        System.out.println("##############");
        System.out.println("Se entro la Fachada y uso la funcion BuscarID");
        System.out.println("%%%%%%%%%%%%%%");

        if (objetoCLS != null) {
            convocatoriasFh.eliminarObje(objetoCLS);
            System.out.println("##############");
            System.out.println("Se entro la Fachada y uso la funcion Eliminar");
            System.out.println("%%%%%%%%%%%%%%");
        }

    }
}
