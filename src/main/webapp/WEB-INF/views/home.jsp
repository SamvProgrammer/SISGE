<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="x" %>
<!DOCTYPE html>
<html lang="es">
    <head>
        <jsp:include page="/WEB-INF/views/template/importsDefault.jsp" />
        	

		<link href="<c:url value="/css/Menu_Inicio/menu_inicio.css" />" rel="stylesheet" >

		
        <script src="<c:url value="/jQuery/jquery.mousewheel.min.js" />" charset="UTF-8" type="text/javascript"></script>
        
        <script src="<c:url value="/js/menu/menu.js" />" charset="UTF-8" type="text/javascript"></script>
        
    </head>
    <body>
        <jsp:include page="/WEB-INF/views/template/banner.jsp" />
       	<!-- inicio del segemento de codigo  -->

	<div id="menu_principal">
       <div id="contentbody" class="contentmain">
       		<div id="contentmenuprincipal">
       		<div>			
  
       		
       		<!-- SECCION DEL MODULO DE SEGUIMIENTO -->
       		
       			 <div id="seccionSeguimiento">
       			 
       			 	<div class="div-content-image">
        
        			<img src="<x:url value="/images/Menu/_Seguimiento.svg"/>" onclick="javascript:window.location.href='<c:url value="/Seguimiento"/>'">
        			
       				</div>
       			</div>
       
       		<!-- SECCION DEL MODULO DE ADMINISTRACION -->
       			<div id="seccionright" style="top: 0px; left: 550px; height: 624px; width: 416px;">
		       			<div id="section-right-help">
		       			
		       			<div id="div4" class="section-right-div">
		                       <div class="div-content-image">
		                       
		                         <img src="<x:url value="/images/Menu/_Administracion.svg"/>" onclick="javascript:window.location.href='<c:url value="/Administracion"/>'">
		                         	
		                         </div> 	
		                </div>
             
       		<!-- SECCION DEL MODULO DE DEPENDENCIA -->
		       			<div id="div5" class="section-right-div">
		                       <div class="div-content-image">
		                       
		                         <img src="<x:url value="/images/Menu/_Dependencia.svg"/>" onclick="javascript:window.location.href='<c:url value="/Dependencia"/>'">
		                         	
		                         </div> 	
		                </div>
             		</div>
       			</div>
       		</div>
        </div>
     </div>             	
              	
       <!-- fin del segemento de codigo  -->
    </body>
</html>