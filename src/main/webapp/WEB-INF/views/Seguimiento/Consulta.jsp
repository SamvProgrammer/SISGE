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
         <script src="<c:url value="/js/Seguimiento/consulta.js"/>" charset="UTF-8" type="text/javascript"></script>
		<!--INICIANDO LA REFERENCIA DEL CALENDAR  -->
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
        	<button  onclick="javascript:window.location.href='/SISEG/Seguimiento'" type="button" class="btn btn-danger">Regresar</button>
        </div>
       	
       	
       	<div id="div_seguimiento"  >
       	
       	<h4 class="title" align="left">Formulario de Consulta de  Seguimiento </h4>
       	
       	<!-- SELECT DEPENDENCIA -->
		  
	<div  id="row_one" class="row">       
	
			 <div class="col-sm-2">
			    
			      <select id="select_dependencia" name="select_dependencia"  class=" form-control">
			       	   
			       	   <option selected disabled value="default">-Seleccionar Dependencia-</option>
			       	   
			      </select>
			       	   
			 </div>

		 
    <!-- SELECT CONTACTO -->
			       	 
			 <div class="col-sm-2">
			    
			      <select id="select_contacto" name="select_contacto"  class=" form-control">
			       	   
			       	   <option selected disabled value="default">-Seleccionar Contacto-</option>
			       	   
			      </select>
			       	   
			 </div>
			 
  <!-- SELECT ENTIDAD -->
			       	 
			 <div class="col-sm-2">
			    
			      <select id="select_entidad" name="select_entidad"  class=" form-control">
			       	   
			       	   <option selected disabled value="default">-Seleccionar Entidad-</option>
			       	   
			      </select>
			       	   
			 </div>

  <!-- SELECT MUNICIPIO -->
			       	 
			 <div class="col-sm-2">
			    
			      <select id="select_municipio" name="select_municipio"  class=" form-control">
			       	   
			       	   <option selected disabled value="0">-Seleccionar Municipio-</option>
			       	   
			      </select>
			       	   
			 </div>
			 
			 

			 
	</div>	 

   <div  id="row_two"  class="row">         
   
      	<!-- FECHA INICIAL -->	 
			 <div class="col-sm-2">
			    
			      <input type="text" class="txts_letras form-control"  id="fecha_inicio" name="fecha_inicio" placeholder="Fecha inicio" readonly /><br>
			       		
			  </div>
			  
	   <!-- FECHA FINAL -->	 
			  <div class="col-sm-2">
			    
			      <input type="text" class="txts_letras form-control"  id="fecha_fin" name="fecha_fin" placeholder="Fecha fin" readonly /><br>
			       		
			  </div>
			  
		     
		<!-- SELECT ESTADO -->
			       	 
			 <div class="col-sm-2">
			    
			      <select id="select_estado" name="select_estado"  class=" form-control">
			       	   
			       	   <option selected disabled value="default">-Seleccionar Estatus-</option>
			       	   <option   value="ACTIVO">ACTIVO</option>
			       	   <option   value="PENDIENTE">PENDIENTE</option>
			       	   <option   value="CANCELADO">CANCELADO</option>
			       	   
			      </select>	   
			 </div>
				
		<!-- SELECT PARTIDO POLITICO -->
			
		  <div class="col-sm-2">
			    
			      <select id="select_partido" name="select_partido"  class=" form-control">
			       	   
			       	   <option selected disabled value="default">-Seleccionar Partido-</option>
			       	   
			      </select>	   
			 </div>

			
			</div>
		 	 
	   <div  id="row_three"  class="row">   
	    
		<!-- RADIO VIVIENDA -->
					 
				 <div class="col-sm-2">
						
		 			<label class="btn btn-primary">
		 			
							<input type="radio" name="group1" value="VIVIENDA">VIVIENDA
							
					</label>		
					
				</div>



	   <!-- RADIO HABITANTES -->
	   
		<div class="col-sm-2">
		
 
 			<label class="btn btn-primary">
				
					<input type="radio" name="group1" value="HABITANTES">HABITANTES
					
			</label>		
		</div>
        
	   	
	   	<!-- OPERADOR INICIAL -->
	   	 <div class="col-sm-2">
			    
			      <select id="select_operador_inicial" name="select_operador_inicial"  class=" form-control">
			       	   
			       	   <option selected disabled value="default" >-Operador Inicial-</option>
			       	   <option   value=">">MAYOR</option>
			       	   <option   value="<">MENOR</option>
			       	   <option   value=">=">MAYOR IGUAL</option>
			       	   <option   value="<=">MENOR IGUAL</option>
			       	   <option   value="<=">IGUAL</option>
			       	   
			      </select>	   
			 </div>
			 
	   
		  <!-- INTERVALO INICIAL -->	   
	   	  <div class="col-sm-2">
	   		
	   		<input type='text' id='intervalo_inicial' name='intervalo_inicial' class='txts_letras form-control'  placeholder="Intervalo inicial" >
	   
	   	 </div>
	   
	   	 
	   	 		<div class="col-sm-2">
			 
		     	<button id="btn_enviar_seguimiento" class="btn btn-success button_enviar" >Buscar</button>
		     	
		      </div>

       	</div>
       	

    
       
       	
       	<!-- SECCION DE  TABLAS-->
       	
     <div id="div_tabla_seguimiento">
      	
     <h4 align="center" class="title title_seg">Seguimiento General</h4>
       	
     <table id="table_seguimiento" class="table table-striped table-inverse bg-success text-center">
     
      <thead class="thead-inverse">
             <tr>
               <th class="text-center">NUM.</th>
					  <th class="text-center">ENTIDAD</th>
                		   <th class="text-center">MUNICIPIO</th>
                		       <th class="text-center">PARTIDO POLITICO</th>
                		 	    <th class="text-center">HABITANTES</th>
                		 			  <th class="text-center">VIVIENDAS</th>
               
               
                 <th class="text-center">DEPENDENCIA</th>
                   <th class="text-center">CONTACTO</th>
                     <th  class="text-center">MOTIVO</th>
                    	<th class="text-center">OBSERVACIÓN</th>
                   			<th class="text-center">FECHA</th>
                     			<th  class="text-center">ESTADO</th>
                     				<th  class="text-center">ACCIÓN</th>

	
            </tr>
      </thead>                    
        <tbody id="tb_seguimiento">

       </tbody>
      </table>
      <div class="paging"></div>
       	
       	</div>      	
       	
       	     <!-- SECCION DE  TABLAS-->
       	
     <div id="div_consulta_seg">
     
     <h4 align="center" id="title_seguimiento"  class="title title_add_seg"></h4>
     
     <table id="table_add_seg" class="table table-striped table-inverse bg-success text-center">
     
      <thead class="thead-inverse">
             <tr>
               <th class="text-center">NUM.</th>
                     <th  class="text-center">MOTIVO</th>
                    	<th class="text-center">OBSERVACIÓN</th>
                   			<th class="text-center">FECHA</th>
                     			<th  class="text-center">ESTADO</th>

	
            </tr>
      </thead>                    
        <tbody id="tb_add_seg">

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