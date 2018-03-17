
var table;
$(function(){
	
	
/*VALIDA LOS CAMPOS DEL FOMRULARIO*/
		
$("#txt_dependencia,#txt_delegacion,#txt_colonia,#txt_calle,#txt_num_interior,#txt_num_exterior,#txt_estatus").validCampoFranz(' 1234567890abcdefghijklmnñopqrstuvwxyz_.-/áéíóú');
		 
$("#txt_telefono").validCampoFranz('1234567890');	

$("#txt_correo").validCampoFranz(' 1234567890abcdefghijklmnñopqrstuvwxyz_.áéíóú@');

$("#txt_pagina_web").validCampoFranz(' 1234567890abcdefghijklmnñopqrstuvwxyz_.-áéíóú/\:');
	
/*OBTIENE LA INFORMACION DE LA TABLA DE ESTADO*/
	llenaTabla();
		
/*RELLENA EL SELECT DE PARTIDO POLITICO*/	
	Select_Entidad();
	
/*OBTIENE EL SELECT DE MUNICIPIO*/	
	
	$("#select_entidad").on("change",function(){
		
		$('#select_municipio option').remove();
		
		$("#select_municipio").append('<option DISABLED SELECTED >-Seleccionar Municipio-</option>');
		
	    $.ajax({
	        data:{OID_ESTADO:$(this).val()},
	        url:"GET_MUNICIPIO",
	        type:"POST",
	        success: function (response) {
	        	
	        	  $.each(response, function(key, value){
	        			$("#select_municipio").append('<option value="'+value.OID_MUNICIPIO+'">'+value.NOMBRE_MUNICIPIO+' </option>');
	        		    });
	        	
	        	
	        	
	        }, error: function (err) {
	        	
	        	alert("Error en en select_entidad "+ err.statusText);
	        }});
		
		
		
		
	});/*FINAL DE LA FUCNION DE CHANGE ENTIDAD*/
	

	
	

    /*******VALIDA FORMULARIO DE ESTADO**********/

	
	 $("#form_dependencia").validate({
		 
		   rules: {

			   txt_dependencia: {required: true},
			   
			   select_entidad: {required: true},
			   
			   select_municipio: {required: true},
				   
			   txt_estatus: {required: true}
	            
	        },
	        messages: {
	        	 

	   txt_dependencia: "Ingresar Dependencia",
			   
			   txt_telefono:"Ingresar Teléfono",
			   
			   txt_correo:"Ingresar correo",
  
			   select_entidad:"Ingresar entidad",
			   
			   select_municipio:"Ingresar municipio",
			  			   
			   txt_estatus: "Ingresar estatus"
	            
				   
		              	
	        },
	 
		  submitHandler: function(form) {
			  
			  
			  var ESTADO="INSERTA";
			  var OID_DEPENDENCIA=0;
			  
				if($("#btn_enviar_dependencia").text()==="Actualizar"){
					
					ESTADO="ACTUALIZA"
						
					OID_DEPENDENCIA=$("#txt_dependencia").attr("DEPENDENCIA");/*OID_DEPENDENCIA*/
					
				}

			  

		     $.ajax({
			        data:{'DEPENDENCIA':$("#txt_dependencia").val().toUpperCase(),'TELEFONO':$("#txt_telefono").val(),'CORREO':$("#txt_correo").val().toUpperCase(),'PAGINA_WEB':$("#txt_pagina_web").val().toUpperCase(),'OID_ESTADO':$("#select_entidad").val(),'OID_MUNICIPIO':$("#select_municipio").val(),'DELEGACION':$("#txt_delegacion").val().toUpperCase(),'COLONIA':$("#txt_colonia").val().toUpperCase(),'CALLE':$("#txt_calle").val().toUpperCase(),'NUMERO_INTERIOR':$("#txt_num_interior").val().toUpperCase(),'NUMERO_EXTERIOR':$("#txt_num_exterior").val().toUpperCase(),'ESTATUS':$("#txt_estatus").val().toUpperCase(),'ESTADO':ESTADO,'OID_DEPENDENCIA':OID_DEPENDENCIA},
			        url:"ADD_DEPENDENCIA",
			        type:"POST",
			        success: function (response) {
			        	
		
			       if(response==="1"){
			     	   
			    	   customAlert({
			                message: "Registro insertado correctamente.",
			                detail: "",
			                showAcept: false,
			                closeByEscape: true,
			                closeByTimer: true,
			                timer: 1500
			            });  
			    	   
			       	   setTimeout(function(){limpieza()}, 1500);
			    	   
			       }else  	
				       if(response==="2"){
			    	   /*SE TIENE QUE LIMPIAR LAS CAJAS DE TEXTO*/
			
				    	   customAlert({
				                message: "Dependencia duplicada.",
				                detail: "Favor de ingresar una dependencia diferente",
				                showAcept: false,
				                closeByEscape: true,
				                closeByTimer: true,
				                timer: 3000
				            }); 
				    	   

				       }
				       else if(response==="3"){
				    	   
				    	   customAlert({
				                message: "Actualizacion correcta.",
				                detail: "",
				                showAcept: false,
				                closeByEscape: true,
				                closeByTimer: true,
				                timer: 2500
				            }); 
				    	   
				    	   setTimeout(function(){limpieza()}, 2500);
				    	   
				       }
			        
			        }
		     });
			        

		 }/*FINAL DEL SUBMIT*/
		 });/*FINAL DEL VALIDATE*/
	
    
    
    
    
    
    
    
});/*FINAL DE LA FUNCION DE JQUERY*/

function Select_Entidad(){
	
    $.ajax({
        data:{},
        url:"GET_ENTIDAD",
        type:"POST",
        success: function (response) {
        	
        	  $.each(response, function(key, value){
        			$("#select_entidad").append('<option value="'+value.OID_ESTADO+'">'+value.NOMBRE_ESTADO+' </option>');
        		    });
        	
        	
        	
        }, error: function (err) {
        	
        	alert("Error en en select_entidad "+ err.statusText);
        }});
	
	
	
	
}//Final de la funcion que llena el select de partido politico

function llenaTabla(){
	
    $(".fila_dependencia").remove();
    
	
    $.ajax({
        data:{},
        url:"GET_DEPENDENCIA",
        type:"POST",
        success: function (response) {
        	

        var ESTADO="";
       $.each( response, function( key, value ) {
    	   
    	   if(value.ESTADO===true){
    		   
    		   ESTADO="ACTIVO";
    		   
    	   }else{
    		   ESTADO="INACTIVO";
    		   
    	   }
    	   
    	   
           $("#tb_dependencia").append('<tr id='+value.OID_DEPENDENCIA+' class=fila_dependencia><td>'+value.OID_DEPENDENCIA+'</td><td>'+value.NOMBRE_DEPENDENCIA+'</td><td>'+value.TELEFONO+'</td><td>'+value.CORREO_ELECTRONICO+'</td><td>'+value.PAGINA_WEB+'</td><td>'+value.ENTIDAD+'</td><td>'+value.MUNICIPIO+'</td><td>'+value.DELEGACION+'</td><td>'+value.COLONIA+'</td><td>'+value.CALLE+'</td><td>'+value.NUMERO_INTERIOR+'</td><td>'+value.NUMERO_EXTERIOR+'</td><td>'+value.ESTATUS+'</td><td><a onclick=changeState('+value.OID_DEPENDENCIA+','+value.ESTADO+')>'+ESTADO+'</a></td><td><a id=link'+value.OID_DEPENDENCIA+' onclick=update('+value.OID_DEPENDENCIA+',"'+value.TELEFONO+'","'+value.CORREO_ELECTRONICO+'","'+value.PAGINA_WEB+'","'+value.OID_ESTADO+'","'+value.OID_MUNICIPIO+'","'+value.NUMERO_INTERIOR+'","'+value.NUMERO_EXTERIOR+'","'+value.ESTATUS+'")>ACTUALIZAR</a></td></tr>');

           $("#link"+value.OID_DEPENDENCIA).attr("DEPENDENCIA",value.NOMBRE_DEPENDENCIA);
           $("#link"+value.OID_DEPENDENCIA).attr("DELEGACION",value.DELEGACION);
           $("#link"+value.OID_DEPENDENCIA).attr("COLONIA",value.COLONIA);
           $("#link"+value.OID_DEPENDENCIA).attr("CALLE",value.CALLE);
           
        		});
       
   	/*PAGINACION DE LA TABLA*/
       table=$('#table_dependencia').DataTable();

         
        }, error: function (err) {
            alert("Error en el AJAX  LLena tabla" + err.statusText);
        }
 });
    
	
}//FINAL DE LA FUNCION LLENA TABLA

/*FUNCION QUE CAMBIA EL ESTADO DEL REGISTRO*/
function changeState(OID_DEPENDENCIA,ESTADO){
	
    $.ajax({
        data:{'OID_DEPENDENCIA':OID_DEPENDENCIA,'ESTADO':ESTADO},
        url:"ESTADO_DEPENDENCIA",
        type:"POST",
        success: function (response) {
        
	    	   customAlert({
	                message: "El estado se ha cambiado.",
	                detail: "",
	                showAcept: false,
	                closeByEscape: true,
	                closeByTimer: true,
	                timer: 1500
	            });
	    	   
	       	   setTimeout(function(){limpieza()}, 1500);
        	
        	
        }
        	, error: function (err) {
        		
        	alert("Error en changeState "+err);
        	
        	}
	
	
    	});

}/*FUNCION QUE ACTUALIZA UN REGISTRO*/

function update(OID_DEPENDENCIA,TELEFONO,CORREO_ELECTRONICO,PAGINA_WEB,OID_ESTADO,OID_MUNICIPIO,NUMERO_INTERIOR,NUMERO_EXTERIOR,ESTATUS){
	


	   
	$("#txt_dependencia").val($("#link"+OID_DEPENDENCIA).attr("DEPENDENCIA"));
	
	$("#txt_dependencia").attr("DEPENDENCIA",OID_DEPENDENCIA);
	
	$("#txt_telefono").val(TELEFONO);
	
	$("#txt_correo").val(CORREO_ELECTRONICO);
	
	$("#txt_pagina_web").val(PAGINA_WEB);
	
	$("#select_entidad").val(OID_ESTADO);
	
	$("#select_entidad" ).trigger("change");
	
	$("#select_municipio").val(OID_MUNICIPIO);
	
	
	$("#txt_delegacion").val($("#link"+OID_DEPENDENCIA).attr("DELEGACION"));
	
	$("#txt_colonia").val($("#link"+OID_DEPENDENCIA).attr("COLONIA"));
	
	$("#txt_calle").val($("#link"+OID_DEPENDENCIA).attr("CALLE"));
	
	$("#txt_num_interior").val(NUMERO_INTERIOR);
	
	$("#txt_num_exterior").val(NUMERO_EXTERIOR);
	
	$("#txt_estatus").val(ESTATUS);
	
	$("#btn_enviar_dependencia").text("Actualizar")
		
	
}//FINAL DE LA ACTUALIZACION DE UN REGISTRO

function limpieza(){
	
	
	$("#txt_dependencia").val("");
	
	$("#txt_telefono").val("");
	
	$("#txt_correo").val("");
	
	$("#txt_pagina_web").val("");
	
	$("#select_entidad").val("default");
	
	$("#select_municipio").val("default");
	
	$("#txt_delegacion").val("");
	
	$("#txt_colonia").val("");
	
	$("#txt_calle").val("");
	
	$("#txt_num_interior").val("");
	
	$("#txt_num_exterior").val("");
	
	$("#txt_estatus").val("");
	
	table.destroy();
	   
	llenaTabla();
	
	$("#btn_enviar_dependencia").text("Enviar")
	

	
	
}
