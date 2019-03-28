package dao;

import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import modelo.Usuario;

/**
 *
 * @author jalba
 */
public class UsuarioDAO {

    private final Connection connection;

    public UsuarioDAO() throws URISyntaxException, SQLException {
        connection = dao.MiConexion.getConnection();
    }

    public Usuario getUsuarioById(String usuario) throws SQLException {
        Statement statement = connection.createStatement();
        ResultSet rs = statement.executeQuery("select * from Administrador where Correo=" + "\"" + usuario + "\"");
        Usuario user = new Usuario();
        if (rs.next()) {
            user.setUsuario(rs.getString("Correo"));
            user.setClave(rs.getString("Clave"));
             user.setId(rs.getInt("AdministradorID"));
              System.out.println(rs.getInt("AdministradorID"));

        }
        return user;
    }

}
