var table;
$(function(){

	
	llenaTabla();
	/*VALIDACION DE CAMPOS DE USUARIO/PASS*/
	
	 $("#txt_nombre_partido").validCampoFranz(' 1234567890abcdefghijklmnñopqrstuvwxyzáéíóú_.');
	 
	 $("##txt_abreviatura_partido").validCampoFranz('1234567890abcdefghijklmnñopqrstuvwxyzáéíóú_.');
	 
		/*VALIDA EL FORMUALRIO DE Partido Politico*/
		
	 $("#form_partido_politico").validate({
		 
		   rules: {

			   txt_nombre_partido: {required: true,},
			   
			   txt_abreviatura_partido: {required: true}
	            
	        },
	        messages: {
	        	 
	        	txt_nombre_partido:"Ingresar nombre de partido",
				
	        	txt_pass:"Ingresar abreviatura"
		              	
	        },
	 
		  submitHandler: function(form) {
			  
			  var ESTADO="INSERTA";
			  var OID_PARTIDO=0;
			  
				if($("#btn_enviar_partido").text()==="Actualizar"){
					
					ESTADO="ACTUALIZA"
						
					OID_PARTIDO=$("#txt_nombre_partido").attr("PARTIDO");/*OID_USUARIO*/
					
				}
			  
			  

		     $.ajax({
			        data:{'PARTIDO':$("#txt_nombre_partido").val().toUpperCase(),'ABREVIATURA':$("#txt_abreviatura_partido").val().toUpperCase(),'ESTADO':ESTADO,'OID_PARTIDO':OID_PARTIDO},
			        url:"ADD_PARTIDO",
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
				                message: "Partido duplicado.",
				                detail: "Favor de ingresar un partido diferente",
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
    
});
function llenaTabla(){
	
    $(".fila_partido").remove();
    
	
    $.ajax({
        data:{},
        url:"GET_PARTIDO_POLITICO",
        type:"POST",
        success: function (response) {
        	

        var ESTADO="";
       $.each( response, function( key, value ) {
    	   
    	   if(value.ESTADO===true){
    		   
    		   ESTADO="ACTIVO";
    		   
    	   }else{
    		   ESTADO="INACTIVO";
    		   
    	   }
    	   
    	   
           $("#tb_partido").append('<tr id='+value.OID_PARTIDO_POLITICO+' class=fila_partido><td>'+value.OID_PARTIDO_POLITICO+'</td><td>'+value.NOMBRE_PARTIDO+'</td><td>'+value.ABREVIACION+'</td><td><a onclick=changeState('+value.OID_PARTIDO_POLITICO+','+value.ESTADO+')>'+ESTADO+'</a></td><td><a id=link'+value.OID_PARTIDO_POLITICO +' onclick=update('+value.OID_PARTIDO_POLITICO+',"'+value.ABREVIACION+'")>ACTUALIZAR</a></td></tr>');

       
           /*SE AGREGA EL CAMPO DE NOMBRE_PARTIDO POR SEPARADO (POR LOS ESAPCIOS)*/
           
            $("#link"+value.OID_PARTIDO_POLITICO).attr("partido",value.NOMBRE_PARTIDO);
            
       });
       
   	/*PAGINACION DE LA TABLA*/
        table= $('#table_partido').DataTable();

         
        }, error: function (err) {
            alert("Error en el AJAX  LLena tabla" + err.statusText);
        }
 });
     
	
	
	
}//FINAL DE LA FUNCION LLENA TABLA


/*FUNCION QUE CAMBIA EL ESTADO DEL REGISTRO*/
function changeState(OID_PARTIDO,ESTADO){
	
    $.ajax({
        data:{'OID_PARTIDO':OID_PARTIDO,'ESTADO':ESTADO},
        url:"ESTADO_PARTIDO",
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

function update(OID_PARTIDO,ABREVIACION){
	
	/*INSERCION DE DATOS*/
	
	$("#txt_nombre_partido").val($("#link"+OID_PARTIDO).attr("partido"));
	
	$("#txt_abreviatura_partido").val(ABREVIACION);
	
	$("#txt_nombre_partido").attr("PARTIDO",OID_PARTIDO);
	
	$("#btn_enviar_partido").text("Actualizar")
		
	
}//FINAL DE LA ACTUALIZACION DE UN REGISTRO

function limpieza(){
	
    $("#txt_nombre_partido").val("");
    
    $("#txt_abreviatura_partido").val("");
	
	$("#btn_enviar_partido").text("Enviar");
	
	 table.destroy();
   
	 llenaTabla();
	
	
	
}

