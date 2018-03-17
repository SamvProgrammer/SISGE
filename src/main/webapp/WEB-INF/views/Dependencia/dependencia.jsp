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
         <script src="<c:url value="/js/Dependencia/dependencia.js"/>" charset="UTF-8" type="text/javascript"></script>
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
        	<button  onclick="javascript:window.location.href='/SISEG/Dependencia'" type="button" class="btn btn-danger">Regresar</button>
        </div>
       	
       	<form id="form_dependencia"  class="form-horizontal">
       	
       	<h4 class="title">Formulario de Dependencia</h4>
       	
       	<!-- DEPENDENCIA -->
       	
       	<div class="form-group">
	       	 
	       	 <div class="col-sm-2">
	    
	       			<input type="text"  id="txt_dependencia" name="txt_dependencia" class="txts_letras form-control requerido" maxlength="250" placeholder="* Dependencia"  />
	       	</div>
       	
       	</div>
       	
       	<!-- TELEFONO -->
       	
       	<div class="form-group">
	       	 
	       	 <div class="col-sm-2">
	    
	       		<input type="tel"  id="txt_telefono" name="txt_telefono" class="txts_letras form-control" maxlength="100" placeholder="Teléfono"  />
	       		
	       	</div>
       	
       	</div>
       	
       <!-- E-MAIL -->
       	
       	<div class="form-group">
	       	 
	       	 <div class="col-sm-2">
	    
	       		<input type="email"  id="txt_correo" name="txt_correo" class="txts_letras form-control" maxlength="150" placeholder="Correo Electrónico"  />
	       		
	       	</div>
       	
       	</div>
       
      <!--PAGINAS WEB -->
       	
       	<div class="form-group">
	       	 
	       	 <div class="col-sm-2">
	    
	       		<input type="text"  id="txt_pagina_web" name="txt_pagina_web" class="txts_letras form-control" maxlength="150" placeholder="Página Web"  />
	       		
	       	</div>
       	
       	</div>
       	
     <!-- ESTADOS DE LA REPUBLICA -->
		       	
		<div class="form-group">
			       	 
			 <div class="col-sm-2">
			    
			      <select id="select_entidad" name="select_entidad "  class=" form-control requerido">
			       	   
			       	   <option selected disabled value="default">* Seleccionar Entidad</option>
			       	   
			      </select>
			       	   
			 </div>
		       	
		 </div>
		 
	<!-- MUNICIPIO -->
		       	
		<div class="form-group">
			       	 
			 <div class="col-sm-2">
			    
			      <select id="select_municipio" name="select_municipio"  class="form-control requerido">
			       	   
			       	   <option selected disabled value="default">* Seleccionar Municipio</option>
			       	   
			      </select>
			       	   
			 </div>
		       	
		 </div>
		 
   	<!-- DELEGACION -->
		       	
		<div class="form-group">
			       	 
	       	 <div class="col-sm-2">
	    
	       		<input type="text"  id="txt_delegacion" name="txt_delegacion" class="txts_letras form-control" maxlength="150" placeholder="Delegación"  />
	       		
	       	</div>
		       	
		 </div>		
		 
      	<!-- COLONIA -->
		       	
		<div class="form-group">
			       	 
	       	 <div class="col-sm-2">
	    
	       		<input type="text"  id="txt_colonia" name="txt_colonia" class="txts_letras form-control" maxlength="150" placeholder="Colonia"  />
	       		
	       	</div>
		       	
		 </div>		
	   
	   <!-- CALLE -->
		       	
		<div class="form-group">
			       	 
	       	 <div class="col-sm-2">
	    
	       		<input type="text"  id="txt_calle" name="txt_calle" class="txts_letras form-control" maxlength="250" placeholder="Calle"  />
	       		
	       	</div>
		       	
		 </div> 
		 
	 <!-- NUMERO INTERIOR -->
		       	
		<div class="form-group">
			       	 
	       	 <div class="col-sm-2">
	    
	       		<input type="text"  id="txt_num_interior" name="txt_num_interior" class="txts_letras form-control" maxlength="10" placeholder="Número Interior"  />
	       		
	       	</div>
		       	
		 </div> 
		 
    	 <!-- NUMERO EXTERIOR -->
		       	
		<div class="form-group">
			       	 
	       	 <div class="col-sm-2">
	    
	       		<input type="text"  id="txt_num_exterior" name="txt_num_exterior" class="txts_letras form-control" maxlength="10" placeholder="Número Exterior"  />
	       		
	       	</div>
		       	
		 </div> 
		 
		<!-- ESTATUS -->
		       	
		<div class="form-group">
			       	 
	       	 <div class="col-sm-2">
	    
	       		<input type="text"  id="txt_estatus" name="txt_estatus" class="txts_letras form-control requerido" maxlength="10" placeholder="* Estatus"  />
	       	
	       	</div>
		       	
		 </div> 
		 		 
		 
		 
		 
		 	 	  
       	 <div class="form-group">
       	 
       		<button id="btn_enviar_dependencia" class="btn btn-success button_enviar" >Enviar</button>
       	 
       	  </div>
       	
       	</form>
       	
       	<!-- SECCION DE  TABLAS-->
       	
     <div id="div_tabla_dependencia">
     <table id="table_dependencia" class="table table-striped table-inverse bg-success text-center">
     
      <thead class="thead-inverse">
             <tr>
               <th class="text-center">NUM.</th>
                 <th class="text-center">DEPENDENCIA</th>
                   <th class="text-center">TELÉFONO</th>
                     <th  class="text-center">CORREO ELECTRÓNICO</th>
               <th class="text-center">PAGINA WEB</th>
                 <th class="text-center">ENTIDAD</th>
                   <th class="text-center">MUNICIPIO</th>
                     <th  class="text-center">DELEGACIÓN</th>
                       <th class="text-center">COLONIA</th>
               <th class="text-center">CALLE</th>
                 <th class="text-center">NUM. INT.</th>
                   <th class="text-center">NUM. EXT</th>
                     <th  class="text-center">ESTATUS</th>
                       <th class="text-center">ESTADO</th>
                          <th class="text-center">ACCIÓN</th>
   
            </tr>
      </thead>                    
        <tbody id="tb_dependencia">

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