var table;
$(function () {
	
	
	/*OBTIENE LA INFORMACION DE LA TABLA DE USUARIO*/
	llenaTabla();
	


	/*VALIDACION DE CAMPOS DE USUARIO/PASS*/
	
	 $("#txt_usuario,#txt_pass").validCampoFranz('1234567890abcdefghijklmnñopqrstuvwxyz_.');
	
	/*VALIDA EL FORMUALRIO DE USUARIO*/
	
	 $("#form_usuario").validate({
		 
		   rules: {

			   txt_usuario: {required: true,},
			   
			   txt_pass: {required: true}
	            
	        },
	        messages: {
	        	 
	        	txt_usuario:"Ingresar usuario",
				
	        	txt_pass:"Ingresar contrase&ntilde;a"
		              	
	        },
	 
		  submitHandler: function(form) {
			  
			  var ESTADO="INSERTA";
			  var OID_USUARIO=0;
			  
				if($("#btn_enviar_usuario").text()==="Actualizar"){
					
					ESTADO="ACTUALIZA"
						
					OID_USUARIO=$("#txt_usuario").attr("USER");/*OID_USUARIO*/
					
				}
			  
			  

		     $.ajax({
			        data:{'USUARIO':$("#txt_usuario").val().toUpperCase(),'PASS':$("#txt_pass").val().toUpperCase(),'ESTADO':ESTADO,'OID_USUARIO':OID_USUARIO},
			        url:"ADD_USUARIO",
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
				                message: "Usuario duplicado.",
				                detail: "Favor de ingresar un usuario diferente",
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
	
	
	
	
});//FINAL DE LA FUNCION JQUERY

function llenaTabla(){
	
    $(".fila_usuario").remove();
    
	
    $.ajax({
        data:{},
        url:"GET_USUARIO",
        type:"POST",
        success: function (response) {
        	

        var ESTADO="";
       $.each( response, function( key, value ) {
    	   
    	   if(value.ESTADO===true){
    		   
    		   ESTADO="ACTIVO";
    		   
    	   }else{
    		   ESTADO="INACTIVO";
    		   
    	   }
    	   
    	   
           $("#tb_usuario").append('<tr id='+value.OID_USUARIO+' class=fila_usuario><td>'+value.OID_USUARIO+'</td><td>'+value.USUARIO+'</td><td><a onclick=changeState('+value.OID_USUARIO+','+value.ESTADO+')>'+ESTADO+'</a></td><td><a onclick=update('+value.OID_USUARIO+',"'+value.USUARIO+'")>ACTUALIZAR</a></td></tr>');

        		});
       
   	/*PAGINACION DE LA TABLA*/
       table= $('#table_usuario').DataTable();

         
        }, error: function (err) {
            alert("Error en el AJAX  LLena tabla" + err.statusText);
        }
 });
     
	
	
	
}//FINAL DE LA FUNCION LLENA TABLA


/*FUNCION QUE CAMBIA EL ESTADO DEL REGISTRO*/
function changeState(OID_USUARIO,ESTADO){
	
    $.ajax({
        data:{'OID_USUARIO':OID_USUARIO,'ESTADO':ESTADO},
        url:"ESTADO_USUARIO",
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

function update(OID_USUARIO,USUARIO){
	
	/*INSERCION DE DATOS*/
	
	$("#txt_usuario").val(USUARIO);
	
	$("#txt_usuario").attr("USER",OID_USUARIO);
	
	$("#btn_enviar_usuario").text("Actualizar")
		
	
}//FINAL DE LA ACTUALIZACION DE UN REGISTRO

function limpieza(){
	
	$("#txt_usuario").val("");
	
	$("#txt_pass").val("");
	
	$("#btn_enviar_usuario").text("Enviar");
	
	 table.destroy();
  
	 llenaTabla();
	
	
}


