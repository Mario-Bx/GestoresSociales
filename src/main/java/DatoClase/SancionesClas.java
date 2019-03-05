package DatoClase;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

/**
 *
 * @author MARIOBX,jalba,renan,enumpaque
 */
@Entity
@Table(name = "Sanciones")
public class SancionesClas implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int SancionesID;
	
	private String Descripcion;
	private int NumeroConvocatria;
	private int ConInicial;
	private int ConFinal;
	
	public SancionesClas() {
	}
	
	public SancionesClas(
String Descripcion,
int NumeroConvocatria,
int ConInicial,
int ConFinal
		) {
    	this.Descripcion = Descripcion;
    	this.NumeroConvocatria = NumeroConvocatria;
    	this.ConInicial = ConInicial;
    	this.ConFinal = ConFinal;

    }
    
    public int getSancionesID() {
    	return SancionesID;
    }
    public void setSancionesID(int SancionesID) {
    	this.SancionesID = SancionesID;
    }

public String getDescripcion() {
	return Descripcion;
}
public void setDescripcion(String Descripcion) {
	this.Descripcion = Descripcion;
}

public int getNumeroConvocatria() {
	return NumeroConvocatria;
}
public void setNumeroConvocatria(int NumeroConvocatria) {
	this.NumeroConvocatria = NumeroConvocatria;
}

public int getConInicial() {
	return ConInicial;
}
public void setConInicial(int ConInicial) {
	this.ConInicial = ConInicial;
}

public int getConFinal() {
	return ConFinal;
}
public void setConFinal(int ConFinal) {
	this.ConFinal = ConFinal;
}


	@Override
	public String toString() {
	return "Datos SancionesClas{" + "SancionesID=" + SancionesID +
            ", Descripcion=" + Descripcion + 
            ", NumeroConvocatria=" + NumeroConvocatria + 
            ", ConInicial=" + ConInicial + 
            ", ConFinal=" + ConFinal + 
	'}';
	}
	
	//Realacoin de 1---1 entrew (Sanciones --- Estudiantes)
	@ManyToOne
	@JoinColumn(name = "EstudiantesFK")
	private EstudiantesClas estudiantesFK;
	
	public EstudiantesClas getEstudiantesFK() {
	    return estudiantesFK;
	}
	
	public void setEstudiantesFK(EstudiantesClas estudiantesFK) {
	    this.estudiantesFK = estudiantesFK;
	}
}
