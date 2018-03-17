<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="x" %>
<!DOCTYPE html>
<html lang="es">
    <head>
        <jsp:include page="/WEB-INF/views/template/importsDefault.jsp" />
        <link href="<c:url value="/css/Menu_Inicio/menu_inicio.css"/>" rel="stylesheet" type="text/css"/>
        <script src="<c:url value="/jQuery/jquery.mousewheel.min.js"/>" charset="UTF-8" type="text/javascript"></script>
        <script src="<c:url value="/js/menu/menu.js"/>" charset="UTF-8" type="text/javascript"></script>
    </head>
    <body>
        <jsp:include page="/WEB-INF/views/template/banner.jsp" />
       	<div id="menu_principal">
       	<div id="contentbody" class="contentmain">
       	<div id="contentmenuprincipal">
       	<!-- inicio del segemento de codigo  -->
       	 <div id="regresa" class="back_menu">
        	<button  onclick="javascript:window.location.href='/SISEG/Home'" type="button" class="btn btn-danger">Regresar</button>
        </div>
       	
       	<!-- inicio del segemento de codigo  -->
	      	<table >
                <tr>
              
                    <td class="td-dep">
                    <img id="opc_dependencia" src="<c:url value="/images/Seguimiento/_Consultar_Seguimiento.svg"/>" onclick="javascript:window.location.href = '<c:url value="/Seguimiento/Consulta"/>'">
                    </td>
       			</tr>
       			<tr>
           			<td class="td-dep">
                    <img id="opc_contacto"  src="<c:url value="/images/Seguimiento/_Add_Seguimiento.svg"/>" onclick="javascript:window.location.href = '<c:url value="/Seguimiento/Registro"/>'">
                    </td>
				</tr>
          </table>  

            

              	
       <!-- fin del segemento de codigo  -->
       </div>
       </div>
       </div>
    </body>
</html>