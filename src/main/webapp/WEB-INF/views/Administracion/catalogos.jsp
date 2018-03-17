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
		<!-- INICIANDO LA REFERNCIA DE DATATABLE -->


		<link rel="stylesheet" href="//cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css" /> 
			
		<script type="text/javascript" src="//cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js" ></script> 

		
		<!-- FINAL DE LA REFERENCIA DE DATATBLE -->
    </head>
    <body>
        <jsp:include page="/WEB-INF/views/template/banner.jsp" />
       	<div id="menu_principal">
       	<div id="contentbody" class="contentmain">
       	<div id="contentmenuprincipal">
       	
       	<div id="regresa" class="back_menu">
        	<button  onclick="javascript:window.location.href='/SISEG/Administracion'" type="button" class="btn btn-danger">Regresar</button>
        </div>
       	<!-- inicio del segemento de codigo  -->
       	
       	<table border-collapse: separate border-spacing:10px5px>
                <tr>
              
                    <td class="td-catalogo">
                        <img onclick="javascript:window.location.href = '<c:url value="Estado"/>'" id="vistaEstado"  src="../images/Administracion/catalogos/_Estado.svg" >
                    </td>
                    <td class="td-catalogo">
                        <img onclick="javascript:window.location.href = '<c:url value="Motivo"/>'" id="vistaMotivo"  src="../images/Administracion/catalogos/_Motivo.svg"  >
                    </td>
                    <td class="td-catalogo">
                        <img onclick="javascript:window.location.href = '<c:url value="Municipio"/>'" id="vistaMunicipio"  src="../images/Administracion/catalogos/_Municipio.svg" >
                    </td>
                                
                </tr>
                <tr>
                     <td class="td-catalogo">
                        <img onclick="javascript:window.location.href = '<c:url value="Partido"/>'" id="vistaPartidoPolitico"  src="../images/Administracion/catalogos/_Partido_Politico.svg" >
                    </td>   
                    
                     <td class="td-catalogo">
                        <img onclick="javascript:window.location.href = '<c:url value="Profesion"/>'" id="vistaProfesion"  src="../images/Administracion/catalogos/_Profesion.svg" >
                    </td>   
                    
                    
                     <td class="td-catalogo">
                        <img onclick="javascript:window.location.href = '<c:url value="Puesto"/>'" id="vistaPuesto"  src="../images/Administracion/catalogos/_Puesto.svg" >
                    </td>   
                    
                    
                    
                
                </tr>
          </table>      
       	

      	
       <!-- fin del segemento de codigo  -->
       </div>
       </div>
       </div>
    </body>
</html>