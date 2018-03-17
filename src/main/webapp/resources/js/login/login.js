$(function () {
	
	/*VALIDACION DE LA CAJA DE USUARIO Y CONTRASEÑA*/
	
	 $("#txt_usuario,#txt_pass").validCampoFranz('1234567890abcdefghijklmnñopqrstuvwxyz_.');
	

	
	 $("#form-login").validate({
		 
		   rules: {

			   txt_usuario: {required: true,},
			   
			   txt_pass: {required: true}
	            
	        },
	        messages: {
	        	 
	        	txt_usuario:"Ingresar usuario",
				
	        	txt_pass:"Ingresar contrase&ntilde;a"
		              	
	        },
	 
		  submitHandler: function(form) {
			  
		     $.ajax({
			        data:{'USUARIO':$("#txt_usuario").val().toUpperCase(),'PASS':$("#txt_pass").val()},
			        url:"login",
			        type:"POST",
			        success: function (response) {
			        	
			        	alert("response "+response);
			        	
			       if(response==="1"){
			    	   
			       $(location).attr('href', 'Home');
			    	   
			       }else{
			    	   /*SE TIENE QUE LIMPIAR LAS CAJAS DE TEXTO*/
			    	   $("#txt_usuario").val("");
			    	   $("#txt_pass").val("");
			    	   customAlert({
			                message: "Datos incorrectos.",
			                detail: "",
			                showAcept: false,
			                closeByEscape: true,
			                closeByTimer: true,
			                timer: 3000
			            });  
			    	
			       }
			        
			        }
		     });
			        

		 }/*FINAL DEL SUBMIT*/
		 });/*FINAL DEL VALIDATE*/
	
	
	
	
	
});/*FINAL DE LA FUNCION DE JQUERY*/


