
var table;
$(function () {
	
	
	/*OBTIENE LA INFORMACION DE LA TABLA DE USUARIO*/
	llenaTabla();
	


	/*VALIDACION DE CAMPOS DE USUARIO/PASS*/
	
	 $("#txt_puesto").validCampoFranz(' abcdefghijklmnñopqrstuvwxyzáéíóú_.');
	
	/*VALIDA EL FORMUALRIO DE USUARIO*/
	
	 $("#form_puesto").validate({
		 
		   rules: {

			   txt_puesto: {required: true,}
	            
	        },
	        messages: {
	        	 
	        	txt_puesto:"Ingrese el puesto"
		              	
	        },
	 
		  submitHandler: function(form) {
			  
			  var ESTADO="INSERTA";
			  var OID_PUESTO=0;
			  
				if($("#btn_enviar_puesto").text()==="Actualizar"){
					
					ESTADO="ACTUALIZA"
						
					OID_PUESTO=$("#txt_puesto").attr("PUESTO");/*OID_PUESTO*/
					
				}
			  


		     $.ajax({
			        data:{'PUESTO':$("#txt_puesto").val().toUpperCase(),'ESTADO':ESTADO,'OID_PUESTO':OID_PUESTO},
			        url:"ADD_PUESTO",
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
			
				    	   customAlert({
				                message: "Puesto duplicado.",
				                detail: "Favor de ingresar un puesto diferente",
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
	
    $(".fila_puesto").remove();
    
	
    $.ajax({
        data:{},
        url:"GET_PUESTO",
        type:"POST",
        success: function (response) {
        	

        var ESTADO="";
       $.each( response, function( key, value ) {
    	   
    	   if(value.ESTADO===true){
    		   
    		   ESTADO="ACTIVO";
    		   
    	   }else{
    		   ESTADO="INACTIVO";
    		   
    	   }
    	   
    	   
           $("#tb_puesto").append('<tr id='+value.OID_PUESTO+' class=fila_puesto><td>'+value.OID_PUESTO+'</td><td>'+value.PUESTO+'</td><td><a onclick=changeState('+value.OID_PUESTO+','+value.ESTADO+')>'+ESTADO+'</a></td><td><a id=link'+value.OID_PUESTO+' onclick=update('+value.OID_PUESTO+')>ACTUALIZAR</a></td></tr>');

           $("#link"+value.OID_PUESTO).attr("PUESTO",value.PUESTO);
        		});
       
   	/*PAGINACION DE LA TABLA*/
       table=$('#table_puesto').DataTable();

         
        }, error: function (err) {
            alert("Error en el AJAX  LLena tabla" + err.statusText);
        }
 });
     
	
	
	
}//FINAL DE LA FUNCION LLENA TABLA


/*FUNCION QUE CAMBIA EL ESTADO DEL REGISTRO*/
function changeState(OID_PUESTO,ESTADO){
	
    $.ajax({
        data:{'OID_PUESTO':OID_PUESTO,'ESTADO':ESTADO},
        url:"ESTADO_PUESTO",
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

function update(OID_PUESTO){
	
	/*INSERCION DE DATOS*/
	
	$("#txt_puesto").val($("#link"+OID_PUESTO).attr("PUESTO"));
	
	$("#txt_puesto").attr("PUESTO",OID_PUESTO);
	
	$("#btn_enviar_puesto").text("Actualizar")
		
	
}//FINAL DE LA ACTUALIZACION DE UN REGISTRO

function limpieza(){
	

	$("#txt_puesto").val("");
	
	$("#btn_enviar_puesto").text("Enviar");
	
	 table.destroy();
   
	 llenaTabla();
	
	
}


