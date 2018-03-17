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
        <link href="<c:url value="/css/Administracion/inicio.css"/>" rel="stylesheet" type="text/css"/>
        <script src="<c:url value="/jQuery/jquery.mousewheel.min.js"/>" charset="UTF-8" type="text/javascript"></script>
        <script src="<c:url value="/js/menu/menu.js"/>" charset="UTF-8" type="text/javascript"></script>
    </head>
    <body>
        <jsp:include page="/WEB-INF/views/template/banner.jsp" />
       	<div id="menu_principal">
       	<div id="contentbody" class="contentmain">
       	<div id="contentmenuprincipal">
       	
       	<div id="regresa" class="back_menu">
        	<button  onclick="javascript:window.location.href='/SISEG/Home'" type="button" class="btn btn-danger">Regresar</button>
        </div>
       	<!-- inicio del segemento de codigo  -->
       	
       	<!-- USUARIO -->
       	 <div id="admon_usuario" class="seccion-administracion">
              <div  class="div-content-image" >                                               
                 <img id="opc_usuarios" class="imagenes-administracion" src="<c:url value="/images/Administracion/usuario.svg"/>" onclick="javascript:window.location.href = '<c:url value="/Administracion/Usuario"/>'">
              </div>
         </div>
         
         <!-- CATALOGO -->
         <div id="admon_catalogo" class="seccion-administracion">
              <div  class="div-content-image" >                                               
                 <img id="opc_catalogos" class="imagenes-administracion" src="<c:url value="/images/Administracion/Catalogos.svg"/>" onclick="javascript:window.location.href = '<c:url value="/Administracion/Catalogos"/>'">
              </div>
         </div>
         


              	
       <!-- fin del segemento de codigo  -->
       </div>
       </div>
       </div>
    </body>
</html>