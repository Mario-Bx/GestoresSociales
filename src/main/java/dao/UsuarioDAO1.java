/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import modelo.Usuario1;

/**
 *
 * @author juanalbarracinbarreto
 */
public class UsuarioDAO1 {

    private final Connection connection;

    public UsuarioDAO1() throws URISyntaxException, SQLException {
        connection = dao.MiConexion.getConnection();
    }

    public Usuario1 getUsuarioById(String usuario) throws SQLException {
        Statement statement = connection.createStatement();
        ResultSet rs = statement.executeQuery("select * from estudiantes where Correo=" + "\"" + usuario + "\"");
        Usuario1 user = new Usuario1();
        if (rs.next()) {
            user.setUsuario(rs.getString("Correo"));
            user.setClave(rs.getString("Clave"));
            user.setId(rs.getInt("EstudiantesID"));
            System.out.println("entro a usuariodao1");
            System.out.println(rs.getString("Correo"));
            System.out.println(rs.getString("Clave"));
            System.out.println(rs.getInt("EstudiantesID"));
        }
        return user;

    }

}
