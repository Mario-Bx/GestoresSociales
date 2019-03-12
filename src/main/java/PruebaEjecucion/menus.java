package PruebaEjecucion;

import DaoGenerico.ConexionException;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import DatoClase.*;
import Fachadas.*;
import java.util.ArrayList;
import java.util.List;

public class menus {

    int opcion = 0;
    boolean salir = false;

    public void menu() throws IOException, ConexionException {
        BufferedReader leer = new BufferedReader(new InputStreamReader(System.in));

        while (!salir) {

            System.out.println("0. Administrador");
            System.out.println("1. Estudiantes");
            System.out.println("2. Convocatorias");
            System.out.println("3. Bitacora");
            System.out.println("4. Sanciones");
            System.out.println("5. Principal");
            System.out.println("6. Reserva");
            //0
            System.out.println("8. TiempoCompetencia");
            opcion = Integer.parseInt(leer.readLine());

            switch (opcion) {
                case 0:
                    subMenuAdministrador();
                    break;
                case 1:
                    subMenuEstudiantes();
                    break;
                case 2:
                    subMenuConvocatorias();
                    break;
                case 3:
                    subMenuBitacora();
                    break;
                case 4:
                    subMenuSanciones();
                    break;
                case 5:
                    subMenuPrincipal();
                    break;
                case 6:
                    subMenuReserva();
                    break;
                case 8:
                    salir = true;
                    break;
                default:
                    System.out.println("Opcion Incorrecta");
            }
        }
    }

    public int subMenuAdministrador() throws IOException, ConexionException {
        BufferedReader leer = new BufferedReader(new InputStreamReader(System.in));
        AdministradorFachada administradorFh = new AdministradorFachada();
        while (!salir) {
            System.out.println("1. Inserta Registro para la Administrador: ");
            System.out.println("2. Buscar Administrador: ");
            System.out.println("3. Modificar en la Administrador: ");
            System.out.println("4. Eliminar la Administrador: ");
            System.out.println("5. Atras");
            opcion = Integer.parseInt(leer.readLine());
            switch (opcion) {
                case 1:
                    System.out.println("Inserta Registro");
                    System.out.println("ingrese Nombre: ");
                    String NombreATT = leer.readLine();
                    System.out.println("ingrese Apellidos: ");
                    String ApellidosATT = leer.readLine();
                    System.out.println("ingrese Correo: ");
                    String CorreoATT = leer.readLine();
                    System.out.println("ingrese Clave: ");
                    String ClaveATT = leer.readLine();
                    System.out.println("ingrese FechaNacimiento: ");
                    String FechaNacimientoATT = leer.readLine();
                    System.out.println("ingrese Documento: ");
                    String DocumentoATT = leer.readLine();
                    System.out.println("ingrese Telefono: ");
                    String TelefonoATT = leer.readLine();
                    System.out.println("ingrese Celular: ");
                    String CelularATT = leer.readLine();

                    AdministradorClas administrador = new AdministradorClas(
                            NombreATT,
                            ApellidosATT,
                            CorreoATT,
                            ClaveATT,
                            FechaNacimientoATT,
                            DocumentoATT,
                            TelefonoATT,
                            CelularATT
                    );
                    administradorFh.crearObj(administrador);
                    break;
                case 2:
                    System.out.println("Ingrese ID");
                    int iDI = Integer.parseInt(leer.readLine());
                    administrador = administradorFh.busacarObj(iDI);
                    break;
                case 3:
                    System.out.println("Modifico en Administrador: ");
                    break;
                case 4:
                    System.out.println("Ingrese ID");
                    int iDE = Integer.parseInt(leer.readLine());
                    administrador = administradorFh.busacarObj(iDE);
                    break;
                case 5:
                    System.out.println("Salio");
                    this.menu();
                    break;
                default:
                    System.out.println("Opcion Incorrecta");
            }
        }
        return opcion;
    }

    public int subMenuEstudiantes() throws IOException, ConexionException {
        BufferedReader leer = new BufferedReader(new InputStreamReader(System.in));
        EstudiantesFachada estudiantesFh = new EstudiantesFachada();
        while (!salir) {
            System.out.println("1. Inserta Registro para la Estudiantes: ");
            System.out.println("2. Buscar Estudiantes: ");
            System.out.println("3. Modificar en la Estudiantes: ");
            System.out.println("4. Eliminar la Estudiantes: ");
            System.out.println("5. Atras");
            opcion = Integer.parseInt(leer.readLine());
            switch (opcion) {
                case 1:
                    System.out.println("Inserta Registro");
                    System.out.println("ingrese Nombre: ");
                    String NombreATT = leer.readLine();
                    System.out.println("ingrese Apellidos: ");
                    String ApellidosATT = leer.readLine();
                    System.out.println("ingrese Correo: ");
                    String CorreoATT = leer.readLine();
                    System.out.println("ingrese Clave: ");
                    String ClaveATT = leer.readLine();
                    System.out.println("ingrese Documento: ");
                    String DocumentoATT = leer.readLine();
                    System.out.println("ingrese FechaNacimiento: ");
                    String FechaNacimientoATT = leer.readLine();
                    System.out.println("ingrese Telefono: ");
                    String TelefonoATT = leer.readLine();
                    System.out.println("ingrese Celular: ");
                    String CelularATT = leer.readLine();
                    System.out.println("ingrese Escuela: ");
                    String EscuelaATT = leer.readLine();
                    System.out.println("ingrese Carreara: ");
                    String CarrearaATT = leer.readLine();

                    EstudiantesClas estudiantes = new EstudiantesClas(
                            NombreATT,
                            ApellidosATT,
                            CorreoATT,
                            ClaveATT,
                            DocumentoATT,
                            FechaNacimientoATT,
                            TelefonoATT,
                            CelularATT,
                            EscuelaATT,
                            CarrearaATT
                    );
                    estudiantesFh.crearObj(estudiantes);
                    break;
                case 2:
                    System.out.println("Ingrese ID");
                    int iDI = Integer.parseInt(leer.readLine());
                    estudiantes = estudiantesFh.busacarObj(iDI);
                    break;
                case 3:
                    System.out.println("Modifico en Estudiantes: ");
                    break;
                case 4:
                    System.out.println("Ingrese ID");
                    int iDE = Integer.parseInt(leer.readLine());
                    estudiantes = estudiantesFh.busacarObj(iDE);
                    break;
                case 5:
                    System.out.println("Salio");
                    this.menu();
                    break;
                default:
                    System.out.println("Opcion Incorrecta");
            }
        }
        return opcion;
    }

    public int subMenuConvocatorias() throws IOException, ConexionException {
        BufferedReader leer = new BufferedReader(new InputStreamReader(System.in));
        ConvocatoriasFachada convocatoriasFh = new ConvocatoriasFachada();
        while (!salir) {
            System.out.println("1. Inserta Registro para la Convocatorias: ");
            System.out.println("2. Buscar Convocatorias: ");
            System.out.println("3. Modificar en la Convocatorias: ");
            System.out.println("4. Eliminar la Convocatorias: ");
            System.out.println("5. Atras");
            opcion = Integer.parseInt(leer.readLine());
            switch (opcion) {
                case 1:
                    System.out.println("Inserta Registro");
                    System.out.println("ingrese Nombre: ");
                    String NombreATT = leer.readLine();
                    System.out.println("ingrese FechaInicio: ");
                    String FechaInicioATT = leer.readLine();
                    System.out.println("ingrese FechaFin: ");
                    String FechaFinATT = leer.readLine();
                    System.out.println("ingrese Hora: ");
                    String HoraATT = leer.readLine();
                    System.out.println("ingrese Encargado: ");
                    String EncargadoATT = leer.readLine();
                    System.out.println("ingrese Descripcion: ");
                    String DescripcionATT = leer.readLine();
                    System.out.println("ingrese HorasGanadas: ");
                    int HorasGanadasATT = Integer.parseInt(leer.readLine());

                    ConvocatoriasClas convocatorias = new ConvocatoriasClas(
                            NombreATT,
                            FechaInicioATT,
                            FechaFinATT,
                            HoraATT,
                            EncargadoATT,
                            DescripcionATT,
                            HorasGanadasATT
                    );
                    convocatoriasFh.crearObj(convocatorias);
                    break;
                case 2:
                    System.out.println("Ingrese ID");
                    int iDI = Integer.parseInt(leer.readLine());
                    convocatorias = convocatoriasFh.busacarObj(iDI);
                    break;
                case 3:
                    System.out.println("Modifico en Convocatorias: ");
                    break;
                case 4:
                    System.out.println("Ingrese ID");
                    int iDE = Integer.parseInt(leer.readLine());
                    convocatorias = convocatoriasFh.busacarObj(iDE);
                    break;
                case 5:
                    System.out.println("Salio");
                    this.menu();
                    break;
                default:
                    System.out.println("Opcion Incorrecta");
            }
        }
        return opcion;
    }

    public int subMenuBitacora() throws IOException, ConexionException {
        BufferedReader leer = new BufferedReader(new InputStreamReader(System.in));
        BitacoraFachada bitacoraFh = new BitacoraFachada();
        while (!salir) {
            System.out.println("1. Inserta Registro para la Bitacora: ");
            System.out.println("2. Buscar Bitacora: ");
            System.out.println("3. Modificar en la Bitacora: ");
            System.out.println("4. Eliminar la Bitacora: ");
            System.out.println("5. Atras");
            opcion = Integer.parseInt(leer.readLine());
            switch (opcion) {
                case 1:
                    System.out.println("Inserta Registro");
                    System.out.println("ingrese Nombre: ");
                    String NombreATT = leer.readLine();
                    System.out.println("ingrese Fecha: ");
                    String FechaATT = leer.readLine();
                    System.out.println("ingrese Hora: ");
                    String HoraATT = leer.readLine();
                    System.out.println("ingrese Descripcion: ");
                    String DescripcionATT = leer.readLine();

                    BitacoraClas bitacora = new BitacoraClas(
                            NombreATT,
                            FechaATT,
                            HoraATT,
                            DescripcionATT
                    );
                    bitacoraFh.crearObj(bitacora);
                    break;
                case 2:
                    System.out.println("Ingrese ID");
                    int iDI = Integer.parseInt(leer.readLine());
                    bitacora = bitacoraFh.busacarObj(iDI);
                    break;
                case 3:
                    System.out.println("Modifico en Bitacora: ");
                    break;
                case 4:
                    System.out.println("Ingrese ID");
                    int iDE = Integer.parseInt(leer.readLine());
                    bitacora = bitacoraFh.busacarObj(iDE);
                    break;
                case 5:
                    System.out.println("Salio");
                    this.menu();
                    break;
                default:
                    System.out.println("Opcion Incorrecta");
            }
        }
        return opcion;
    }

    public int subMenuSanciones() throws IOException, ConexionException {
        BufferedReader leer = new BufferedReader(new InputStreamReader(System.in));
        SancionesFachada sancionesFh = new SancionesFachada();
        while (!salir) {
            System.out.println("1. Inserta Registro para la Sanciones: ");
            System.out.println("2. Buscar Sanciones: ");
            System.out.println("3. Modificar en la Sanciones: ");
            System.out.println("4. Eliminar la Sanciones: ");
            System.out.println("5. Atras");
            opcion = Integer.parseInt(leer.readLine());
            switch (opcion) {
                case 1:
                    System.out.println("Inserta Registro");
                    System.out.println("ingrese Descripcion: ");
                    String DescripcionATT = leer.readLine();
                    System.out.println("ingrese NumeroConvocatria: ");
                    int NumeroConvocatriaATT = Integer.parseInt(leer.readLine());
                    System.out.println("ingrese ConInicial: ");
                    int ConInicialATT = Integer.parseInt(leer.readLine());
                    System.out.println("ingrese ConFinal: ");
                    int ConFinalATT = Integer.parseInt(leer.readLine());

                    SancionesClas sanciones = new SancionesClas(
                            DescripcionATT,
                            NumeroConvocatriaATT,
                            ConInicialATT,
                            ConFinalATT
                    );
                    sancionesFh.crearObj(sanciones);
                    break;
                case 2:
                    System.out.println("Ingrese ID");
                    int iDI = Integer.parseInt(leer.readLine());
                    sanciones = sancionesFh.busacarObj(iDI);
                    break;
                case 3:
                    System.out.println("Modifico en Sanciones: ");
                    break;
                case 4:
                    System.out.println("Ingrese ID");
                    int iDE = Integer.parseInt(leer.readLine());
                    sanciones = sancionesFh.busacarObj(iDE);
                    break;
                case 5:
                    System.out.println("Salio");
                    this.menu();
                    break;
                default:
                    System.out.println("Opcion Incorrecta");
            }
        }
        return opcion;
    }

    public int subMenuPrincipal() throws IOException, ConexionException {
        BufferedReader leer = new BufferedReader(new InputStreamReader(System.in));
        PrincipalFachada principalFh = new PrincipalFachada();
        while (!salir) {
            System.out.println("1. Inserta Registro para la Principal: ");
            System.out.println("2. Buscar Principal: ");
            System.out.println("3. Modificar en la Principal: ");
            System.out.println("4. Eliminar la Principal: ");
            System.out.println("5. Atras");
            opcion = Integer.parseInt(leer.readLine());
            switch (opcion) {
                case 1:
                    System.out.println("Inserta Registro");
                    System.out.println("ingrese Nombre: ");
                    String NombreATT = leer.readLine();

                    PrincipalClas principal = new PrincipalClas(
                            NombreATT
                    );
                    principalFh.crearObj(principal);
                    break;
                case 2:
                    System.out.println("Ingrese ID");
                    int iDI = Integer.parseInt(leer.readLine());
                    principal = principalFh.busacarObj(iDI);
                    break;
                case 3:
                    System.out.println("Modifico en Principal: ");
                    break;
                case 4:
                    System.out.println("Ingrese ID");
                    int iDE = Integer.parseInt(leer.readLine());
                    principal = principalFh.busacarObj(iDE);
                    break;
                case 5:
                    System.out.println("Salio");
                    this.menu();
                    break;
                default:
                    System.out.println("Opcion Incorrecta");
            }
        }
        return opcion;
    }

    public int subMenuReserva() throws IOException, ConexionException {
        BufferedReader leer = new BufferedReader(new InputStreamReader(System.in));
        ReservaFachada reservaFh = new ReservaFachada();
        while (!salir) {
            System.out.println("1. Inserta Registro para la Reserva: ");
            System.out.println("2. Buscar Reserva: ");
            System.out.println("3. Modificar en la Reserva: ");
            System.out.println("4. Eliminar la Reserva: ");
            System.out.println("5. Atras");
            opcion = Integer.parseInt(leer.readLine());
            switch (opcion) {
                case 1:
                    System.out.println("Inserta Registro");
                    System.out.println("ingrese Nombre: ");
                    String NombreATT = leer.readLine();

                    ReservaClas reserva = new ReservaClas(
                            NombreATT
                    );
                    reservaFh.crearObj(reserva);
                    break;
                case 2:
                    System.out.println("Ingrese ID");
                    int iDI = Integer.parseInt(leer.readLine());
                    reserva = reservaFh.busacarObj(iDI);
                    break;
                case 3:
                    System.out.println("Modifico en Reserva: ");
                    break;
                case 4:
                    System.out.println("Ingrese ID");
                    int iDE = Integer.parseInt(leer.readLine());
                    reserva = reservaFh.busacarObj(iDE);
                    break;
                case 5:
                    System.out.println("Salio");
                    this.menu();
                    break;
                default:
                    System.out.println("Opcion Incorrecta");
            }
        }
        return opcion;
    }

}
