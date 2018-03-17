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
        <script src="<c:url value="/js/Administracion/catalogos/Puesto.js"/>" charset="UTF-8" type="text/javascript"></script>
		<!-- PLUGIN PARA EL CALENDARIO -->
		  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
		  
		  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

		<!-- FINAL DEL PLUGIN PARA EL CALENDARIO -->
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
       	<!-- inicio del segemento de codigo  -->
       	<div id="regresa" class="back">
        	<button  onclick="javascript:window.location.href='/SISEG/Administracion/Catalogos'" type="button" class="btn btn-danger">Regresar</button>
        </div>
       	
        <form id="form_puesto"  class="form-horizontal">
       	
		       	<h4 class="title">Registro de Puesto </h4>
		       	
		       	<div class="form-group">
			       	 
			       	 <div class="col-sm-2">
			    
			       			<input type="text"  id="txt_puesto" name="txt_puesto" class="txts_letras form-control" maxlength="50" placeholder="Puesto"  />
			       	</div>
		       	
		       	</div>
		       	
		       	 <div class="form-group">
		       	 
		       		<button id="btn_enviar_puesto" class="btn btn-success button_enviar" >Enviar</button>
		       	 
		       	  </div>
       	
       	</form>
       	<!-- INICIO DE LA SECCION DE TABLAS  -->
       	<div id="div_tabla_puesto">
		     <table id="table_puesto" class="table table-striped table-inverse bg-success text-center">
		     
		      <thead class="thead-inverse">
		             <tr>
		                 <th class="text-center">NUMERO</th>
		                    <th class="text-center">PUESTO</th>
		                        <th  class="text-center">ACTIVO</th>
		                            <th  class="text-center">ACCIONES</th>
		            </tr>
		      </thead>                    
		        <tbody id="tb_puesto">
		
		       </tbody>
		      </table>
		      <div class="paging"></div>
       	
       	</div> 
       	

      	
       <!-- fin del segemento de codigo  -->
       </div>
       </div>
       </div>
    </body>
</html>