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
         <script src="<c:url value="/js/Dependencia/contacto.js"/>" charset="UTF-8" type="text/javascript"></script>
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
       	
       	
       	<form id="form_contacto"  class="form-horizontal">
       	
       	<h4 class="title">Formulario de Contacto</h4>
       
       <!-- SELECT DEPENDENCIA -->       	
		<div class="form-group">
			       	 
			 <div class="col-sm-2">
			    
			      <select id="select_dependencia"  name="select_dependencia"  class="form-control requerido" >
			       	   
			       	   <option selected disabled value="default">* Seleccionar Dependencia </option>
			       	   
			      </select>
			       	   
			 </div>
		       	
		 </div>
       	
       	<!-- NOMBRE CONTACTO -->
       	
       	<div class="form-group">
	       	 
	       	 <div class="col-sm-2">
	    
	       			<input type="text"  id="txt_nombre" name="txt_nombre" class="txts_letras form-control requerido" maxlength="50" placeholder="* Nombre"  />
	       	</div>
       	
       	</div>
       	

       <!-- DEPARTAMENTO -->
       	
       	<div class="form-group">
	       	 
	       	 <div class="col-sm-2">
	    
	       		<input type="text"  id="txt_departamento" name="txt_departamento" class="txts_letras form-control requerido" maxlength="250" placeholder="* Departamento"  />
	       		
	       	</div>
       	
       	</div>
       	
       	
     <!-- SELECT PUESTO -->
		       	
		<div class="form-group">
			       	 
			 <div class="col-sm-2">
			    
			      <select id="select_puesto" name="select_puesto"  class=" form-control requerido">
			       	   
			       	   <option selected disabled value="default">* Seleccionar Puesto</option>
			       	   
			      </select>
			       	   
			 </div>
		       	
		 </div>
		 
    <!-- SELECT PROFESION -->
		       	
		<div class="form-group">
			       	 
			 <div class="col-sm-2">
			    
			      <select id="select_profesion" name="select_profesion"  class=" form-control">
			       	   
			       	   <option selected disabled value="default">Seleccionar Profesion</option>
			       	   
			      </select>
			       	   
			 </div>
		       	
		 </div>
		 	
		 
   	<!-- TELEFONO -->
		       	
		<div class="form-group">
			       	 
	       	 <div class="col-sm-2">
	    
	       		<input type="tel"  id="txt_telefono" name="txt_telefono" class="txts_letras form-control requerido" maxlength="100"  placeholder="* Telefono"  />
	       		
	       	</div>
		       	
		 </div>		
		 
      	<!-- CELULAR -->
		       	
		<div class="form-group">
			       	 
	       	 <div class="col-sm-2">
	    
	       		<input type="teL"  id="txt_celular" name="txt_celular" class="txts_letras form-control" maxlength="100" placeholder="Celular"  />
	       		
	       	</div>
		       	
		 </div>		
	   
	   <!-- CORREO -->
		       	
		<div class="form-group">
			       	 
	       	 <div class="col-sm-2">
	    
	       		<input type="email"  id="txt_correo" name="txt_correo" class="txts_letras form-control requerido" maxlength="150" placeholder="* Correo"  />
	       		
	       	</div>
		       	
		 </div> 
		 

		 	 	  
       	 <div class="form-group">
       	 
       		<button id="btn_enviar_contacto" class="btn btn-success button_enviar" >Enviar</button>
       	 
       	  </div>
       	
       	</form>
       	
       	<!-- SECCION DE  TABLAS-->
       	
     <div id="div_tabla_contacto">
     <table id="table_contacto" class="table table-striped table-inverse bg-success text-center">
     
      <thead class="thead-inverse">
             <tr>
               <th class="text-center">NUM.</th>
                <th class="text-center">DEPENDENCIA</th>
                 <th class="text-center">NOMBRE</th>
                   <th class="text-center">DEPARTAMENTO</th>
                     <th class="text-center">PUESTO</th>
                   <th class="text-center">PROFESIÓN</th>
                     <th  class="text-center">TELEFONO</th>
                       <th class="text-center">CELULAR</th>
             			  <th class="text-center">CORREO ELECTRONICO</th>
             			  	 <th class="text-center">ESTADO</th>
             		  			 <th class="text-center">ACCIONES</th>
	
            </tr>
      </thead>                    
        <tbody id="tb_contacto">

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