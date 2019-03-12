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
    private String Documento;
    private String Telefono;
    private String Celular;

    public AdministradorClas() {
        this.list_Convocatorias = new ArrayList<ConvocatoriasClas>();
    }

    public AdministradorClas(
            String Nombre,
            String Apellidos,
            String Correo,
            String Clave,
            String FechaNacimiento,
            String Documento,
            String Telefono,
            String Celular
    ) {
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
        this.Correo = Correo;
        this.Clave = Clave;
        this.FechaNacimiento = FechaNacimiento;
        this.Documento = Documento;
        this.Telefono = Telefono;
        this.Celular = Celular;

        this.list_Convocatorias = new ArrayList<ConvocatoriasClas>();
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

    public String getDocumento() {
        return Documento;
    }

    public void setDocumento(String Documento) {
        this.Documento = Documento;
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

    @Override
    public String toString() {
        return "Datos AdministradorClas{" + "AdministradorID=" + AdministradorID
                + ", Nombre=" + Nombre
                + ", Apellidos=" + Apellidos
                + ", Correo=" + Correo
                + ", Clave=" + Clave
                + ", FechaNacimiento=" + FechaNacimiento
                + ", Documento=" + Documento
                + ", Telefono=" + Telefono
                + ", Celular=" + Celular
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
}
