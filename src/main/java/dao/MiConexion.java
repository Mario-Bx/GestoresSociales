package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MiConexion {

    private static Connection CONEXION = null;

    public static Connection getConnection() throws SQLException {

        if (CONEXION == null) {

            try {
                Class.forName("com.mysql.jdbc.Driver").newInstance();

            } catch (ClassNotFoundException | InstantiationException | IllegalAccessException e) {
                throw new SQLException(e);
            }

            try {
                CONEXION = DriverManager.getConnection("jdbc:mysql://gestores.cqkfsnsurroc.us-east-2.rds.amazonaws.com:3306/gestores", "root", "gestoresociales");
              } catch (SQLException e) {
                throw new SQLException(e);
            }

        }

        return CONEXION;
    }

}
