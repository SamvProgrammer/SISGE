var table;
$(function () {
	
	
	/*OBTIENE LA INFORMACION DE LA TABLA DE USUARIO*/
	llenaTabla();
	


	/*VALIDACION DE CAMPOS DE USUARIO/PASS*/
	
	 $("#txt_motivo").validCampoFranz(' 1234567890abcdefghijklmnñopqrstuvwxyzáéíóú_.');
	
	/*VALIDA EL FORMUALRIO DE USUARIO*/
	
	 $("#form_motivo").validate({
		 
		   rules: {

			   txt_motivo: {required: true,}
	            
	        },
	        messages: {
	        	 
	        	txt_usuario:"Ingrese el motivo"
		              	
	        },
	 
		  submitHandler: function(form) {
			  
			  var ESTADO="INSERTA";
			  var OID_MOTIVO=0;
			  
				if($("#btn_enviar_motivo").text()==="Actualizar"){
					
					ESTADO="ACTUALIZA"
						
					OID_MOTIVO=$("#txt_motivo").attr("MOTIVO");/*OID_USUARIO*/
					
				}
			  
			  

		     $.ajax({
			        data:{'MOTIVO':$("#txt_motivo").val().toUpperCase(),'ESTADO':ESTADO,'OID_MOTIVO':OID_MOTIVO},
			        url:"ADD_MOTIVO",
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
				                message: "Motivo duplicado.",
				                detail: "Favor de ingresar un motivo diferente",
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
	
    $(".fila_motivo").remove();
    
	
    $.ajax({
        data:{},
        url:"GET_MOTIVO",
        type:"POST",
        success: function (response) {
        	

        var ESTADO="";
       $.each( response, function( key, value ) {
    	   
    	   if(value.ESTADO===true){
    		   
    		   ESTADO="ACTIVO";
    		   
    	   }else{
    		   ESTADO="INACTIVO";
    		   
    	   }
    	   
    	   
           $("#tb_motivo").append('<tr id='+value.OID_MOTIVO+' class=fila_motivo><td>'+value.OID_MOTIVO+'</td><td>'+value.MOTIVO+'</td><td><a onclick=changeState('+value.OID_MOTIVO+','+value.ESTADO+')>'+ESTADO+'</a></td><td><a id=link'+value.OID_MOTIVO+' onclick=update('+value.OID_MOTIVO+')>ACTUALIZAR</a></td></tr>');

           $("#link"+value.OID_MOTIVO).attr("MOTIVO",value.MOTIVO);
        		});
       
   	/*PAGINACION DE LA TABLA*/
         table= $('#table_motivo').DataTable();

         
        }, error: function (err) {
            alert("Error en el AJAX  LLena tabla" + err.statusText);
        }
 });
     
	
	
	
}//FINAL DE LA FUNCION LLENA TABLA


/*FUNCION QUE CAMBIA EL ESTADO DEL REGISTRO*/
function changeState(OID_MOTIVO,ESTADO){
	
    $.ajax({
        data:{'OID_MOTIVO':OID_MOTIVO,'ESTADO':ESTADO},
        url:"ESTADO_MOTIVO",
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
        		
        	alert("Error en changeState "+err.statusText);
        	
        	}
	
	
    	});

}/*FUNCION QUE ACTUALIZA UN REGISTRO*/

function update(OID_MOTIVO){
	
	/*INSERCION DE DATOS*/
	
	$("#txt_motivo").val($("#link"+OID_MOTIVO).attr("MOTIVO"));
	
	$("#txt_motivo").attr("MOTIVO",OID_MOTIVO);
	
	$("#btn_enviar_motivo").text("Actualizar")
		
	
}//FINAL DE LA ACTUALIZACION DE UN REGISTRO

function limpieza(){
	
	 	$("#txt_motivo").val("");
	 
		$("#btn_enviar_motivo").text("Enviar");
		
		 table.destroy();
	   
		 llenaTabla();
	
	
}


