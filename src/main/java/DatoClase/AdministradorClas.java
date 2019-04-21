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
@Table(name = "Administrador")
public class AdministradorClas implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int AdministradorID;

    private String Nombre;
    private String Apellidos;
    private String Correo;
    private String Clave;
    private String FechaNacimiento;
    private String Telefono;
    private String Celular;
    private Boolean Estado;

    public AdministradorClas() {
        this.list_Convocatorias = new ArrayList<ConvocatoriasClas>();
        this.list_Escuela = new ArrayList<EscuelaClas>();
    }

    public AdministradorClas(
            String Nombre,
            String Apellidos,
            String Correo,
            String Clave,
            String FechaNacimiento,
            String Telefono,
            String Celular,
            Boolean Estado
    ) {
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
        this.Correo = Correo;
        this.Clave = Clave;
        this.FechaNacimiento = FechaNacimiento;
        this.Telefono = Telefono;
        this.Celular = Celular;
        this.Estado = Estado;

        this.list_Convocatorias = new ArrayList<ConvocatoriasClas>();
        this.list_Escuela = new ArrayList<EscuelaClas>();
    }

    public int getAdministradorID() {
        return AdministradorID;
    }

    public void setAdministradorID(int AdministradorID) {
        this.AdministradorID = AdministradorID;
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

    public String getFechaNacimiento() {
        return FechaNacimiento;
    }

    public void setFechaNacimiento(String FechaNacimiento) {
        this.FechaNacimiento = FechaNacimiento;
    }

    public String getTelefono() {
        return Telefono;
    }

    public void setTelefono(String Telefono) {
        this.Telefono = Telefono;
    }

    public String getCelular() {
        return Celular;
    }

    public void setCelular(String Celular) {
        this.Celular = Celular;
    }

    public Boolean getEstado() {
        return Estado;
    }

    public void setEstado(Boolean Estado) {
        this.Estado = Estado;
    }

    @Override
    public String toString() {
        return "Datos AdministradorClas{" + "AdministradorID=" + AdministradorID
                + ", Nombre=" + Nombre
                + ", Apellidos=" + Apellidos
                + ", Correo=" + Correo
                + ", Clave=" + Clave
                + ", FechaNacimiento=" + FechaNacimiento
                + ", Telefono=" + Telefono
                + ", Celular=" + Celular
                + ", Estado=" + Estado
                + '}';
    }

    //Bi-dirreccional
    // Relacion de 1-M entre (Administrador-Convocatorias)
    @OneToMany(mappedBy = "administradorFK", cascade = CascadeType.ALL)
    private List<ConvocatoriasClas> list_Convocatorias;

    ///Metodos de (Administrador-Convocatorias)
    public List<ConvocatoriasClas> getList_Convocatorias() {
        return list_Convocatorias;
    }

    public void setList_Convocatorias(List<ConvocatoriasClas> list_Convocatorias) {
        this.list_Convocatorias = list_Convocatorias;
    }

    public void addConvocatorias(ConvocatoriasClas convocatorias) {
        convocatorias.setAdministradorFK(this);
        this.list_Convocatorias.add(convocatorias);
    }
    //Bi-dirreccional
    // Relacion de 1-M entre (Administrador-Escuela)
    @OneToMany(mappedBy = "administradorFK", cascade = CascadeType.ALL)
    private List<EscuelaClas> list_Escuela;

    ///Metodos de (Administrador-Escuela)
    public List<EscuelaClas> getList_Escuela() {
        return list_Escuela;
    }

    public void setList_Escuela(List<EscuelaClas> list_Escuela) {
        this.list_Escuela = list_Escuela;
    }

    public void addEscuela(EscuelaClas escuela) {
        escuela.setAdministradorFK(this);
        this.list_Escuela.add(escuela);
    }
}
