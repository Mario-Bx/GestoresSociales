package DatoClase;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

/**
 *
 * @author MARIOBX
 */
@Entity
@Table(name = "Estudiantes")
public class EstudiantesClas implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int EstudiantesID;

    private String Nombre;
    private String Apellidos;
    private String Correo;
    private String Clave;
    private String TipoDocumento;
    private String Documento;
    private String FechaNacimiento;
    private String Celular;
    private String Telefono;
    private String Escuela;
    private String Carreara;
    private String Semestre;
    private Boolean Estado;

    public EstudiantesClas() {
        this.list_Sanciones = new ArrayList<SancionesClas>();
        this.list_Bitacora = new ArrayList<BitacoraClas>();
        this.list_Principal = new ArrayList<PrincipalClas>();
        this.list_Reserva = new ArrayList<ReservaClas>();
    }

    public EstudiantesClas(
            String Nombre,
            String Apellidos,
            String Correo,
            String Clave,
            String TipoDocumento,
            String Documento,
            String FechaNacimiento,
            String Celular,
            String Telefono,
            String Escuela,
            String Carreara,
            String Semestre,
            Boolean Estado
    ) {
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
        this.Correo = Correo;
        this.Clave = Clave;
        this.TipoDocumento = TipoDocumento;
        this.Documento = Documento;
        this.FechaNacimiento = FechaNacimiento;
        this.Celular = Celular;
        this.Telefono = Telefono;
        this.Escuela = Escuela;
        this.Carreara = Carreara;
        this.Semestre = Semestre;
        this.Estado = Estado;

        this.list_Sanciones = new ArrayList<SancionesClas>();
        this.list_Bitacora = new ArrayList<BitacoraClas>();
        this.list_Principal = new ArrayList<PrincipalClas>();
        this.list_Reserva = new ArrayList<ReservaClas>();
    }

    public int getEstudiantesID() {
        return EstudiantesID;
    }

    public void setEstudiantesID(int EstudiantesID) {
        this.EstudiantesID = EstudiantesID;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String Nombre) {
        this.Nombre = Nombre;
    }

    public String getApellidos() {
        return Apellidos;
    }

    public void setApellidos(String Apellidos) {
        this.Apellidos = Apellidos;
    }

    public String getCorreo() {
        return Correo;
    }

    public void setCorreo(String Correo) {
        this.Correo = Correo;
    }

    public String getClave() {
        return Clave;
    }

    public void setClave(String Clave) {
        this.Clave = Clave;
    }

    public String getTipoDocumento() {
        return TipoDocumento;
    }

    public void setTipoDocumento(String TipoDocumento) {
        this.TipoDocumento = TipoDocumento;
    }

    public String getDocumento() {
        return Documento;
    }

    public void setDocumento(String Documento) {
        this.Documento = Documento;
    }

    public String getFechaNacimiento() {
        return FechaNacimiento;
    }

    public void setFechaNacimiento(String FechaNacimiento) {
        this.FechaNacimiento = FechaNacimiento;
    }

    public String getCelular() {
        return Celular;
    }

    public void setCelular(String Celular) {
        this.Celular = Celular;
    }

    public String getTelefono() {
        return Telefono;
    }

    public void setTelefono(String Telefono) {
        this.Telefono = Telefono;
    }

    public String getEscuela() {
        return Escuela;
    }

    public void setEscuela(String Escuela) {
        this.Escuela = Escuela;
    }

    public String getCarreara() {
        return Carreara;
    }

    public void setCarreara(String Carreara) {
        this.Carreara = Carreara;
    }

    public String getSemestre() {
        return Semestre;
    }

    public void setSemestre(String Semestre) {
        this.Semestre = Semestre;
    }

    public Boolean getEstado() {
        return Estado;
    }

    public void setEstado(Boolean Estado) {
        this.Estado = Estado;
    }

    @Override
    public String toString() {
        return "Datos EstudiantesClas{" + "EstudiantesID=" + EstudiantesID
                + ", Nombre=" + Nombre
                + ", Apellidos=" + Apellidos
                + ", Correo=" + Correo
                + ", Clave=" + Clave
                + ", TipoDocumento=" + TipoDocumento
                + ", Documento=" + Documento
                + ", FechaNacimiento=" + FechaNacimiento
                + ", Celular=" + Celular
                + ", Telefono=" + Telefono
                + ", Escuela=" + Escuela
                + ", Carreara=" + Carreara
                + ", Semestre=" + Semestre
                + ", Estado=" + Estado
                + '}';
    }

    //Bi-dirreccional
    // Relacion de 1-M entre (Estudiantes-Sanciones)
    @OneToMany(mappedBy = "estudiantesFK", cascade = CascadeType.ALL)
    private List<SancionesClas> list_Sanciones;

    ///Metodos de (Estudiantes-Sanciones)
    public List<SancionesClas> getList_Sanciones() {
        return list_Sanciones;
    }

    public void setList_Sanciones(List<SancionesClas> list_Sanciones) {
        this.list_Sanciones = list_Sanciones;
    }

    public void addSanciones(SancionesClas sanciones) {
        sanciones.setEstudiantesFK(this);
        this.list_Sanciones.add(sanciones);
    }
    //Bi-dirreccional
    // Relacion de 1-M entre (Estudiantes-Bitacora)
    @OneToMany(mappedBy = "estudiantesFK", cascade = CascadeType.ALL)
    private List<BitacoraClas> list_Bitacora;

    ///Metodos de (Estudiantes-Bitacora)
    public List<BitacoraClas> getList_Bitacora() {
        return list_Bitacora;
    }

    public void setList_Bitacora(List<BitacoraClas> list_Bitacora) {
        this.list_Bitacora = list_Bitacora;
    }

    public void addBitacora(BitacoraClas bitacora) {
        bitacora.setEstudiantesFK(this);
        this.list_Bitacora.add(bitacora);
    }
    //Bi-dirreccional
    // Relacion de 1-M entre (Estudiantes-Principal)
    @OneToMany(mappedBy = "estudiantesFK", cascade = CascadeType.ALL)
    private List<PrincipalClas> list_Principal;

    ///Metodos de (Estudiantes-Principal)
    public List<PrincipalClas> getList_Principal() {
        return list_Principal;
    }

    public void setList_Principal(List<PrincipalClas> list_Principal) {
        this.list_Principal = list_Principal;
    }

    public void addPrincipal(PrincipalClas principal) {
        principal.setEstudiantesFK(this);
        this.list_Principal.add(principal);
    }
    //Bi-dirreccional
    // Relacion de 1-M entre (Estudiantes-Reserva)
    @OneToMany(mappedBy = "estudiantesFK", cascade = CascadeType.ALL)
    private List<ReservaClas> list_Reserva;

    ///Metodos de (Estudiantes-Reserva)
    public List<ReservaClas> getList_Reserva() {
        return list_Reserva;
    }

    public void setList_Reserva(List<ReservaClas> list_Reserva) {
        this.list_Reserva = list_Reserva;
    }

    public void addReserva(ReservaClas reserva) {
        reserva.setEstudiantesFK(this);
        this.list_Reserva.add(reserva);
    }
}
