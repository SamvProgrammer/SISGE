var table;
$(function(){
	
	
/*VALIDA LOS CAMPOS DEL FOMRULARIO*/
		
$("#txt_nombre").validCampoFranz(' abcdefghijklmnñopqrstuvwxyz_.áéíóú');
		 
$("#txt_telefono,#txt_celular").validCampoFranz('1234567890-().,;');	

$("#txt_correo").validCampoFranz(' 1234567890abcdefghijklmnñopqrstuvwxyz_.-/áéíóú@');


	
/*OBTIENE LA INFORMACION DE LA TABLA DE ESTADO*/
	llenaTabla();
		
/*RELLENA EL SELECT DE PUESTO*/	
	Select_Puesto();
	
/*RELLENA EL SELECT DE PROFESION*/	
	Select_Profesion();
	
/*RELLENA EL SELECT DE DEPENDENCIA*/	
	Select_Dependencia();

    /*******VALIDA FORMULARIO DE ESTADO**********/

	
	 $("#form_contacto").validate({
		 
		   rules: {

			   select_dependencia:{required:true},
			   
			   txt_nombre: {required: true,},
			   
			   txt_departamento: {required: true},
  
			   select_puesto: {required: true},
			   			   
			   txt_telefono:{required:true},
			   
			   txt_correo:{required:true},
	            
	        },
	        messages: {
	        	 

	        	 	select_dependencia:"Seleccionar dependencia",	
	        					   
				   txt_nombre:"Ingresar nombre",
				   
				   txt_departamento:"Ingresar departamento",
	  
				   select_puesto:"Seleccione puesto",
				   	   
				   txt_telefono:"Ingresar teléfono",
				   
				   txt_correo:"ingresar correo."
				   
		              	
	        },
	 
		  submitHandler: function(form) {
			
			  
			  
			  var ESTADO="INSERTA";
			  var OID_CONTACTO=0;
			  
				if($("#btn_enviar_contacto").text()==="Actualizar"){
					
					ESTADO="ACTUALIZA"
						
					OID_CONTACTO=$("#txt_nombre").attr("CONTACTO");/*OID_CONTACTO*/
					
				}
				

			  

		     $.ajax({
			        data:{'DEPENDENCIA':$("#select_dependencia").val(),'NOMBRE':$("#txt_nombre").val().toUpperCase(),'DEPARTAMENTO':$("#txt_departamento").val().toUpperCase(),'OID_PUESTO':$("#select_puesto").val(),'OID_PROFESION':$("#select_profesion").val(),'TELEFONO':$("#txt_telefono").val(),'CELULAR':$("#txt_celular").val(),'CORREO':$("#txt_correo").val().toUpperCase(),'ESTADO':ESTADO,'OID_CONTACTO':OID_CONTACTO},
			        url:"ADD_CONTACTO",
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
				                message: "Contacto duplicado.",
				                detail: "Favor de ingresar un contacto diferente",
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
/*RELLENA EL SELECT DE DEPENDENCIA*/

function Select_Dependencia(){
	
    $.ajax({
        data:{},
        url:"GET_DEPENDENCIA_ACTIVO",
        type:"POST",
        success: function (response) {
        	
        	
        	  $.each(response, function(key, value){
        		
        			$("#select_dependencia").append('<option value="'+value.OID_DEPENDENCIA+'">'+value.NOMBRE_DEPENDENCIA+' </option>');
        		    });
        	
        	
        	
        }, error: function (err) {
        	
        	alert("Error en en select_entidad "+ err.statusText);
        }});

	
}

/*RELLENA EL SELECT DE PUESTO*/

function Select_Profesion(){
	
    $.ajax({
        data:{},
        url:"GET_PROFESION_ACTIVO",
        type:"POST",
        success: function (response) {
        	
        	  $.each(response, function(key, value){
        			$("#select_profesion").append('<option value="'+value.OID_PROFESION+'">'+value.PROFESION+' </option>');
        		    });
        	
        	
        	
        }, error: function (err) {
        	
        	alert("Error en en select_entidad "+ err.statusText);
        }});

	
}

/*RELLENA EL SELECT DE PUESTO*/

function Select_Puesto(){
	
    $.ajax({
        data:{},
        url:"GET_PUESTO_ACTIVO",
        type:"POST",
        success: function (response) {
        	
        	  $.each(response, function(key, value){
        			$("#select_puesto").append('<option value="'+value.OID_PUESTO+'">'+value.PUESTO+' </option>');
        		    });
        	
        	
        	
        }, error: function (err) {
        	
        	alert("Error en en select_entidad "+ err.statusText);
        }});

	
	
}//Fin

function llenaTabla(){
	
    $(".fila_contacto").remove();
    $.ajax({
        data:{},
        url:"GET_CONTACTO",
        type:"POST",
        success: function (response) {
        	

        var ESTADO="",PROFESION="";
       $.each( response, function( key, value ) {
    	   
    	   if(value.ESTADO===true){
    		   
    		   ESTADO="ACTIVO";
    		   
    	   }else{
    		   ESTADO="INACTIVO";
    		   
    	   }

           $("#tb_contacto").append('<tr id='+value.OID_CONTACTO_DEPENDENCIA+' class=fila_contacto><td>'+value.OID_CONTACTO_DEPENDENCIA+'</td><td>'+value.NOMBRE_DEPENDENCIA+'</td><td>'+value.NOMBRE+'</td><td>'+value.DEPARTAMENTO+'</td><td>'+value.PUESTO+'</td><td>'+value.PROFESION+'</td><td>'+value.TELEFONO+'</td><td>'+value.CELULAR+'</td><td>'+value.CORREO_ELECTRONICO+'</td></td><td><a onclick=changeState('+value.OID_DEPENDENCIA+','+value.OID_CONTACTO_DEPENDENCIA+','+value.ESTADO+')>'+ESTADO+'</a></td><td><a id=link'+value.OID_CONTACTO_DEPENDENCIA+' onclick=update('+value.OID_DEPENDENCIA+','+value.OID_CONTACTO_DEPENDENCIA+',"'+value.CORREO_ELECTRONICO+'","'+value.OID_PUESTO+'","'+value.OID_PROFESION+'")>ACTUALIZAR</a></td></tr>');

           $("#link"+value.OID_CONTACTO_DEPENDENCIA).attr("NOMBRE",value.NOMBRE);
           
           $("#link"+value.OID_CONTACTO_DEPENDENCIA).attr("DEPARTAMENTO",value.DEPARTAMENTO);
           
           $("#link"+value.OID_CONTACTO_DEPENDENCIA).attr("TELEFONO",value.TELEFONO);
           
           $("#link"+value.OID_CONTACTO_DEPENDENCIA).attr("CELULAR",value.CELULAR);

        		});
       
   	/*PAGINACION DE LA TABLA*/
       table=$('#table_contacto').DataTable();

         
        }, error: function (err) {
            alert("Error en el AJAX  LLena tabla" + err.statusText);
        }
 });
    
	
}//FINAL DE LA FUNCION LLENA TABLA

/*FUNCION QUE CAMBIA EL ESTADO DEL REGISTRO*/
function changeState(OID_CONTACTO,ESTADO){
	
    $.ajax({
        data:{'OID_CONTACTO':OID_CONTACTO,'ESTADO':ESTADO},
        url:"ESTADO_CONTACTO",
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

function update(OID_DEPENDENCIA,OID_CONTACTO,CORREO_ELECTRONICO,OID_PUESTO,OID_PROFESION){
	
	   
	$("#select_dependencia").val(OID_DEPENDENCIA);
	
	$("#txt_nombre").val($("#link"+OID_CONTACTO).attr("NOMBRE"));
	
	$("#txt_nombre").attr("CONTACTO",OID_CONTACTO);

	$("#txt_departamento").val($("#link"+OID_CONTACTO).attr("NOMBRE"));
	
	$("#txt_telefono").val($("#link"+OID_CONTACTO).attr("TELEFONO"));
	
	$("#txt_celular").val($("#link"+OID_CONTACTO).attr("CELULAR"));
	
	$("#txt_correo").val(CORREO_ELECTRONICO);
	
	$("#select_puesto").val(OID_PUESTO);
	
	$("#select_profesion").val(OID_PROFESION);
	
	$("#btn_enviar_contacto").text("Actualizar");
		
	
}//FINAL DE LA ACTUALIZACION DE UN REGISTRO

function limpieza(){

	$("#txt_nombre").val("");
	
	$("#txt_departamento").val("");
	
	$("#txt_telefono").val("");
	
	$("#txt_celular").val("");
	
	$("#txt_correo").val("");
	
	$("#select_puesto").val("default");
	
	$("#select_profesion").val("default");
	
	$("#select_dependencia").val("default");
	
	$("#btn_enviar_contacto").text("Enviar");
	
	 table.destroy();
	   
	 llenaTabla();
	
}
