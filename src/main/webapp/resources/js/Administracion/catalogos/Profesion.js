var table;
$(function () {
	
	
	/*OBTIENE LA INFORMACION DE LA TABLA DE USUARIO*/
	llenaTabla();
	


	/*VALIDACION DE CAMPOS DE USUARIO/PASS*/
	
	 $("#txt_profesion,#txt_abreviatura").validCampoFranz(' abcdefghijklmnñopqrstuvwxyzáéíóú_.');
	
	/*VALIDA EL FORMUALRIO DE USUARIO*/
	
	 $("#form_profesion").validate({
		 
		   rules: {

			   txt_profesion: {required: true},
			   
			   txt_abreviatura: {required: true}
	            
	        },
	        messages: {
	        	 
	        	txt_profesion:"Ingrese la profesión",
	        	
	        	txt_abreviatura:"Ingrese la abreviatura"
		              	
	        },
	 
		  submitHandler: function(form) {
			  
			  var ESTADO="INSERTA";
			 
			  var OID_PROFESION=0;
			 
			  
				if($("#btn_enviar_profesion").text()==="Actualizar"){
					
					ESTADO="ACTUALIZA"
						
					OID_PROFESION=$("#txt_profesion").attr("PROFESION");/*OID_PROFESION*/
					
				}
			  
			  

		     $.ajax({
			        data:{'PROFESION':$("#txt_profesion").val().toUpperCase(),'ABREVIATURA':$("#txt_abreviatura").val().toUpperCase(),'ESTADO':ESTADO,'OID_PROFESION':OID_PROFESION},
			        url:"ADD_PROFESION",
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
				                message: "Profesión duplicada.",
				                detail: "Favor de ingresar una profesión diferente",
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
	
    $(".fila_profesion").remove();
    
	
    $.ajax({
        data:{},
        url:"GET_PROFESION",
        type:"POST",
        success: function (response) {
        	

        var ESTADO="";
       $.each( response, function( key, value ) {
    	   
    	   if(value.ESTADO===true){
    		   
    		   ESTADO="ACTIVO";
    		   
    	   }else{
    		   ESTADO="INACTIVO";
    		   
    	   }
    	   
    	   
           $("#tb_profesion").append('<tr id='+value.OID_PROFESION+' class=fila_profesion><td>'+value.OID_PROFESION+'</td><td>'+value.PROFESION+'</td><td>'+value.ABREVIATURA+'</td><td><a onclick=changeState('+value.OID_PROFESION+','+value.ESTADO+')>'+ESTADO+'</a></td><td><a id=link'+value.OID_PROFESION+' onclick=update('+value.OID_PROFESION+','+value.ABREVIATURA+')>ACTUALIZAR</a></td></tr>');

           $("#link"+value.OID_PROFESION).attr("PROFESION",value.PROFESION);
        		});
       
   	/*PAGINACION DE LA TABLA*/
       table=$('#table_profesion').DataTable();

         
        }, error: function (err) {
            alert("Error en el AJAX  LLena tabla" + err.statusText);
        }
 });
     
	
	
	
}//FINAL DE LA FUNCION LLENA TABLA


/*FUNCION QUE CAMBIA EL ESTADO DEL REGISTRO*/
function changeState(OID_PROFESION,ESTADO){
	
    $.ajax({
        data:{'OID_PROFESION':OID_PROFESION,'ESTADO':ESTADO},
        url:"ESTADO_PROFESION",
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

function update(OID_PROFESION,ABREVIATURA){
	
	/*INSERCION DE DATOS*/
	
	$("#txt_profesion").val($("#link"+OID_PROFESION).attr("PROFESION"));
	
	$("#txt_abreviatura").val(ABREVIATURA);
	
	$("#txt_profesion").attr("PROFESION",OID_PROFESION);
	
	$("#btn_enviar_profesion").text("Actualizar")
		
	
}//FINAL DE LA ACTUALIZACION DE UN REGISTRO

function limpieza(){
	
	$("#txt_profesion").val("");
	
	$("#txt_abreviatura").val("");
	
	$("#btn_enviar_profesion").text("Enviar");
	
	 table.destroy();
   
	 llenaTabla();
	
	
}


