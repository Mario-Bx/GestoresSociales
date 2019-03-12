<%-- 
    Document   : inicio
    Created on : 02-mar-2019, 16:19:48
    Author     : jalba
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Inicio</title>
    </head>

    <%

        HttpSession misession = request.getSession(true);

        if (misession.getAttribute("usuario") == null) {
            response.sendRedirect("login.jsp");
        }

    %>

    <body>
        
        <h1>Sesión activa: <%= misession.getAttribute("usuario")%></h1>
        
    </body>
    
</html>
