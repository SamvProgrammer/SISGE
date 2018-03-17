var table,table_seg=0;
$(function(){
	
/*INICIALIZANDO EL CAMPO DE FECHA*/
	
	$.datepicker.regional['es'] = {
		    closeText: 'Cerrar',
		    prevText: '<Ant',
		    nextText: 'Sig>',
		    currentText: 'Hoy',
		    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
		    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
		    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
		    weekHeader: 'Sm',
		    dateFormat: 'dd/mm/yy',
		    firstDay: 1,
		    isRTL: false,
		    showMonthAfterYear: false,
		    yearSuffix: ''
		    };
		    $.datepicker.setDefaults($.datepicker.regional['es']);

		    
		    $("#fecha_inicio").datepicker({
		    changeMonth: true,
		    changeYear: true,
		    dateFormat: 'yy/mm/dd',
		    onSelect: function (date) {
		        $('#fecha-fin').datepicker('option', 'minDate', $(this).datepicker('getDate'));
		    }
		    });
	
	
/*VALIDA LOS CAMPOS DEL FORMULARIO*/
		
$("#txt_observaciones").validCampoFranz(' abcdefghijklmnñopqrstuvwxyz_./\-=+áéíóú1234567890');
		 
	
/*OBTIENE LA INFORMACION DE LA TABLA DE ESTADO*/
	llenaTabla();
		
/*RELLENA EL SELECT DE PUESTO*/	
	Select_Dependencia();
	
/*RELLENA EL SELECT DE PROFESION*/	
$("#select_dependencia").on("change",function(){
	
	Select_Contacto($(this).val());
	
})
	
/*RELLENA EL CAMPO DE MOTIVO*/
	Select_Motivo();

    /*******VALIDA FORMULARIO DE ESTADO**********/

	
	 $("#form_seguimiento").validate({
		 
		   rules: {
  
			   select_dependencia: {required: true},
			   
			   select_contacto: {required: true},
			   
			   select_motivo:{required:true},
			   
			   txt_observaciones:{required: true},
			   
			   fecha_inicio:{required: true},
			   
			   select_estado:{required: true}
			   
			   
			   
	

	            
	        },
	        messages: {
	        	 
				   select_dependencia:"Seleccione dependencia.",
				   
				   select_contacto:"Seleccione contacto.",
				   
				   select_motivo:"Seleccione motivo",
				   
				   txt_observaciones:"Ingrese observaciones",
				   
				   fecha_inicio:"Seleccione la fecha",
				   
				   select_estado:"Seleccione el estado"
		              	
	        },
	 
		  submitHandler: function(form) {
			
			  
			  
			  var ESTADO;
			  
			  var OID_SEGUIMIENTO;
			  

			  
				if($("#btn_enviar_seguimiento").text()==="Actualizar" || $("#btn_enviar_seguimiento").text()==="Actualiza"){
					
					ESTADO="ACTUALIZA"
						
						OID_SEGUIMIENTO=$("#select_dependencia").attr("SEGUIMIENTO");/*OID_SEGUIMIENTO*/
						
		
					
				}
				
				if($("#btn_enviar_seguimiento").text()==="Adjunta"){
					
					ESTADO="ADJUNTA"
						
						OID_SEGUIMIENTO=$("#select_dependencia").attr("SEGUIMIENTO");/*OID_SEGUIMIENTO*/
					
				}
				
				if($("#btn_enviar_seguimiento").text()==="Enviar"){
					
					  
					  ESTADO="INSERTA";
					  
					  OID_SEGUIMIENTO=0;
				}

				
				
	

//			  alert('CONTACTO '+$("#select_contacto").val()+' MOTIVO '+$("#select_motivo").val()+' OBSERVACION '+ $("#txt_observaciones").val().toUpperCase()+' FECHA '+ $("#fecha_inicio").val().toUpperCase()+' ESTATUS '+$("#select_estado").val()+' ESTADO '+ESTADO+' OID_SEGUIMIENTO '+OID_SEGUIMIENTO);

		     $.ajax({
			        data:{'CONTACTO':$("#select_contacto").val(),'MOTIVO':$("#select_motivo").val(),'OBSERVACION':$("#txt_observaciones").val().toUpperCase(),'FECHA':$("#fecha_inicio").val().toUpperCase(),'ESTATUS':$("#select_estado").val(),'ESTADO':ESTADO,'OID_SEGUIMIENTO':OID_SEGUIMIENTO},
			        url:"ADD_SEGUIMIENTO",
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
			    	   
			    		if($("#btn_enviar_seguimiento").text()==="Enviar")
			    			
			    			setTimeout(function(){limpieza()}, 1500);
			    		else
			    			setTimeout(function(){limpiezaSeg(OID_SEGUIMIENTO)}, 1500);
			    			
			    	   
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
				    	   
				    	   if($("#btn_enviar_seguimiento").text()==="Actualizar")
				    		   
				    		   setTimeout(function(){limpieza()}, 1500);
				    	   else
				    		   setTimeout(function(){limpiezaSeg($("#select_dependencia").attr("NUMERO_SEGUIMIENTO"))}, 1500);
				    	   
				       }
			        
			        }
		     });
			        

		 }/*FINAL DEL SUBMIT*/
		 });/*FINAL DEL VALIDATE*/
	
    
	 
	 $("#btn_cancelar_seguimiento").on("click",function(){
		 
		 table_seg.destroy();
		 
		 table_seg=0;
		 
		 $(".fila_add_seguimiento").remove();
		 
		 $("#div_add_seg").hide();
		 		 
		 /*LIMPIEZA DE CAJA DE TEXTO*/
		 
		   $("#select_dependencia").val("default");
		   
		   $("#select_contacto").val("default");
		   
		   $("#select_motivo").val("default");
		   
		   $("#txt_observaciones").val("");
		   
		   $("#fecha_inicio").val("");
		   
		   $("#select_estado").val("default");
		    
		  /*HABILITAR SELECT DE DEPENDENCIA / CONTACTO*/
		   
		   $("#select_dependencia").removeAttr("disabled");
		   
		   $("#select_contacto").removeAttr("disabled");
		   
		   $("#btn_enviar_seguimiento").text("Enviar");
		   
		   $(this).hide();
		 
		 
		 
	 });
	 
	 
});/*FINAL DE LA FUNCION DE JQUERY*/

/*RELLENA EL SELECT DE MOTIVO*/

function Select_Motivo(){
	
    $.ajax({
        data:{},
        url:"GET_MOTIVO_ACTIVO",
        type:"POST",
        success: function (response) {
        	
        	  $.each(response, function(key, value){
        			$("#select_motivo").append('<option value="'+value.OID_MOTIVO+'">'+value.MOTIVO+' </option>');
        		    });
        	
        	
        	
        }, error: function (err) {
        	
        	alert("Error en en select_motivo "+ err.statusText);
        }});
	
}

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
        	
        	alert("Error en en select_dependencia "+ err.statusText);
        }});
	
}

/*RELLENA EL SELECT DE CONTACTO*/

function Select_Contacto(OID_DEPENDENCIA){
	
	
	$("#select_contacto option").remove();
	$("#select_contacto").append('<option selected disabled  value=default>-Seleccionar Contacto-</option>');
	
	
    $.ajax({
        data:{"OID_DEPENDENCIA":OID_DEPENDENCIA},
        url:"GET_CONTACTO_SEGUIMIENTO",
        type:"POST",
        success: function (response) {
        	
        	  $.each(response, function(key, value){
        		  
        			$("#select_contacto").append('<option value='+value.OID_CONTACTO_DEPENDENCIA+'>'+value.CONTACTO+'-'+value.DEPARTAMENTO+' </option>');
        	});
        	
        	
        	
        }, error: function (err) {
        	
        	alert("Error en en select_contacto "+ err.statusText);
        }});
	
	
	
	
}//Fin

function llenaTabla(){
	
    $(".fila_seguimiento").remove();
    
	
    $.ajax({
        data:{},
        url:"GET_SEGUIMIENTO",
        type:"POST",
        success: function (response) {
        	

        var ESTADO="";
        
       $.each( response, function( key, value ) {
    	   
    	   if(value.ESTADO===true){
    		   
    		   ESTADO="ACTIVO";
    		   
    	   }else{
    		   ESTADO="INACTIVO";
    		   
    	   }

    	   
           $("#tb_seguimiento").append('<tr id='+value.OID_SEGUIMIENTO+' class=fila_seguimiento><td>'+value.OID_SEGUIMIENTO+'</td><td>'+value.DEPENDENCIA+'</td><td>'+value.CONTACTO+'</td><td>'+value.MOTIVO+'</td><td>'+value.OBSERVACION+'</td><td>'+value.FECHA+'</td><td>'+value.ESTADO+'</td><td><a id=link'+value.OID_SEGUIMIENTO+' onclick=update('+value.OID_SEGUIMIENTO+',"'+value.OID_DEPENDENCIA+'","'+value.OID_CONTACTO_DEPENDENCIA+'","'+value.OID_MOTIVO+'","'+value.FECHA+'","'+value.ESTADO+'")>ACTUALIZAR</a> - <a  onclick=seguimiento('+value.OID_SEGUIMIENTO+',"'+value.OID_DEPENDENCIA+'","'+value.OID_CONTACTO_DEPENDENCIA+'")>SEGUIMIENTO</a></td></tr>');

           $("#link"+value.OID_SEGUIMIENTO).attr("OBSERVACION",value.OBSERVACION);
           
           
        		});
       
   	/*PAGINACION DE LA TABLA*/
       table=$('#table_seguimiento').DataTable();

         
        }, error: function (err) {
            alert("Error en el AJAX  LLena tabla" + err.statusText);
        }
 });
    
	
}//FINAL DE LA FUNCION LLENA TABLA



function update(OID_SEGUIMIENTO,OID_DEPENDENCIA,OID_CONTACTO_DEPENDENCIA,OID_MOTIVO,FECHA,ESTADO){
	
	  
	if( $('#btn_cancelar_seguimiento').is(":visible") ){
	   
			
			$("#btn_cancelar_seguimiento").trigger("click");
	   }
	   
	   $("#select_dependencia").attr("SEGUIMIENTO",OID_SEGUIMIENTO);
	
	   $("#select_dependencia").val(OID_DEPENDENCIA);
	   
	   Select_Contacto($("#select_dependencia").val());
	   
	   $("#select_contacto").val(OID_CONTACTO_DEPENDENCIA);
	   
	   $("#select_motivo").val(OID_MOTIVO);
	   
	   $("#txt_observaciones").val($("#link"+OID_SEGUIMIENTO).attr("OBSERVACION"));
	   
	   $("#fecha_inicio").val(FECHA);
	   
	   $("#select_estado").val(ESTADO);
	  
	
	$("#btn_enviar_seguimiento").text("Actualizar");
		
	
}//FINAL DE LA ACTUALIZACION DE UN REGISTRO

function limpieza(){
	
	   $("#select_dependencia").val("default");
	   
	   $("#select_contacto").val("default");
	   
	   $("#select_motivo").val("default");
	   
	   $("#txt_observaciones").val("");
	   
	   $("#fecha_inicio").val("");
	   
	   $("#select_estado").val("default");
	
	 table.destroy();
	 
	 $("#btn_enviar_seguimiento").text("Enviar");
	   
	 llenaTabla();
	
}
function limpiezaSeg(OID_SEGUIMIENTO){
	

	   
	   $("#select_motivo").val("default");
	   
	   $("#txt_observaciones").val("");
	   
	   $("#fecha_inicio").val("");
	   
	   $("#select_estado").val("default");
	   
	   $("#btn_enviar_seguimiento").text("Adjunta");
	   
	   $("#select_dependencia").attr("SEGUIMIENTO",OID_SEGUIMIENTO);
	   
	   $("#select_dependencia").removeAttr("NUMERO_SEGUIMIENTO");
	
	   table_seg.destroy();
	   
	   $("#tb_add_seg tr").remove();
		
	    $.ajax({
	        data:{"OID_SEGUIMIENTO":OID_SEGUIMIENTO},
	        url:"GET_ALL_SEGUIMIENTO",
	        type:"POST",
	        success: function (response) {
	        	
	        	  $.each(response, function(key, value){
	        	        
	        		  $("#tb_add_seg").append('<tr id='+value.OID_SEGUIMIENTO+' class=fila_add_seguimiento><td>'+value.NUMERO_SEGUIMIENTO+'</td><td>'+value.MOTIVO+'</td><td>'+value.OBSERVACION+'</td><td>'+value.FECHA+'</td><td>'+value.ESTADO+'</td><td><a id=link'+value.OID_SEGUIMIENTO+' onclick=updateSeg('+value.OID_SEGUIMIENTO+','+value.NUMERO_SEGUIMIENTO+',"'+value.OID_MOTIVO+'","'+value.FECHA+'","'+value.ESTADO+'")>ACTUALIZAR</a></tr>');

	        	      $("#link"+value.OID_SEGUIMIENTO).attr("OBSERVACION",value.OBSERVACION);
	        		  
	        	  
	        	  });

	        	
	              table_seg=$('#table_add_seg').DataTable();
	        	
	        }, error: function (err) {
	        	
	        	alert("Error en en GET_ALL SEGUIMIENTO "+ err.statusText);
	        }});
	   
	
	
}

function seguimiento(OID_SEGUIMIENTO_PADRE,OID_DEPENDENCIA,OID_CONTACTO){
	
	
	$("#select_dependencia").attr("SEGUIMIENTO",OID_SEGUIMIENTO_PADRE);
	
	$("#select_dependencia").val(OID_DEPENDENCIA);
	
	Select_Contacto(OID_DEPENDENCIA);
	
	$("#select_contacto").val(OID_CONTACTO);
	
	
	$("#select_dependencia").attr("disabled","disabled");
	
	$("#select_contacto").attr("disabled","disabled");
	
	$("#btn_enviar_seguimiento").text("Adjunta");
	
	$("#btn_cancelar_seguimiento").show();
	
	$("#div_add_seg").show();
	
	/******LIMPIEZA DEL FORMULARIO*****/
	

	
	   $("#select_motivo").val("default");
	   
	   $("#txt_observaciones").val("");
	   
	   $("#fecha_inicio").val("");
	   
	   $("#select_estado").val("default");
	   
	   if(table_seg!=0){
		   
		   table_seg.destroy();
	   }
	

	   
	    $("#tb_add_seg tr").remove();
	    

		
	    $.ajax({
	        data:{"OID_SEGUIMIENTO":OID_SEGUIMIENTO_PADRE},
	        url:"GET_ALL_SEGUIMIENTO",
	        type:"POST",
	        success: function (response) {
	        	
	        	  $.each(response, function(key, value){
	        	        
	        		  $("#tb_add_seg").append('<tr id='+value.OID_SEGUIMIENTO+' class=fila_add_seguimiento><td>'+value.NUMERO_SEGUIMIENTO+'</td><td>'+value.MOTIVO+'</td><td>'+value.OBSERVACION+'</td><td>'+value.FECHA+'</td><td>'+value.ESTADO+'</td><td><a id=link'+value.OID_SEGUIMIENTO+' onclick=updateSeg('+value.OID_SEGUIMIENTO+','+value.NUMERO_SEGUIMIENTO+',"'+value.OID_MOTIVO+'","'+value.FECHA+'","'+value.ESTADO+'")>ACTUALIZAR</a></tr>');

	        	      $("#link"+value.OID_SEGUIMIENTO).attr("OBSERVACION",value.OBSERVACION);
	        		  
	        	  
	        	  });

	        	
	              table_seg=$('#table_add_seg').DataTable();
	              
	          	$("#title_seguimiento").text("SEGUIMIENTO DE "+$("#select_contacto option:selected").text());
	        	
	        }, error: function (err) {
	        	
	        	alert("Error en en GET_ALL SEGUIMIENTO "+ err.statusText);
	        }});


	
}/*FINAL DE LA FUNCION SEGUIMIENTO*/

function updateSeg(OID_SEGUIMIENTO_HIJO,NUMERO_SEGUIMIENTO,OID_MOTIVO,FECHA,ESTADO){
	
		
	   $("#select_dependencia").attr("SEGUIMIENTO",OID_SEGUIMIENTO_HIJO);
	   
	   $("#select_dependencia").attr("NUMERO_SEGUIMIENTO",NUMERO_SEGUIMIENTO);
	   
	   $("#select_motivo").val(OID_MOTIVO);
	   
	   $("#txt_observaciones").val($("#link"+OID_SEGUIMIENTO_HIJO).attr("OBSERVACION"));
	   
	   $("#fecha_inicio").val(FECHA);
	   
	   $("#select_estado").val(ESTADO);
	  
	
	   $("#btn_enviar_seguimiento").text("Actualiza");
	
	
}
