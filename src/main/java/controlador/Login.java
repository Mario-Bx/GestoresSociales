/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controlador;

import DaoGenerico.ConexionException;
import DatoClase.AdministradorClas;
import Fachadas.AdministradorFachada;
import dao.UsuarioDAO;
import java.io.IOException;
import java.net.URISyntaxException;
import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author jalba
 */
public class Login extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);

            HttpSession sesion = request.getSession();

            String usuario = request.getParameter("usuario");
            String clave = request.getParameter("clave");

            UsuarioDAO usuariodao = new UsuarioDAO();

//            AdministradorFachada fh = new AdministradorFachada();
//            
//            List<AdministradorClas> correoVX = fh.findByProperty("Correo", usuario);
//            if (correoVX.get(0).getClave().equals(clave2)){
//                
//            }
            String clave2 = usuariodao.getUsuarioById(usuario).getClave();

            if (clave.equals(clave2)) {
                //si coincide usuario y password y además no hay sesión iniciada.
                sesion.setAttribute("usuario", usuario);
                //redirijo a página con información de login exitoso.
                response.sendRedirect("vistaloginprofesores.jsp");
            } else {
                response.sendRedirect("login_1.jsp");
            }

        } catch (URISyntaxException | SQLException ex) {
            Logger.getLogger(Login.class.getName()).log(Level.SEVERE, null, ex);
        }
//        } catch (ConexionException ex) {
//            Logger.getLogger(Login.class.getName()).log(Level.SEVERE, null, ex);
//        }

    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
