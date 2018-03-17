var table;
$(function(){
	
/*OBTIENE LA INFORMACION DE LA TABLA DE ESTADO*/
	llenaTabla();
		
/*RELLENA EL SELECT DE PARTIDO POLITICO*/	
	Select_Politico();
	
/*VALIDA LOS CAMPOS DEL FOMRULARIO*/
	/*VALIDACION DE CAMPOS DE USUARIO/PASS*/
	
	 $("#txt_nombre_estado").validCampoFranz(' 1234567890abcdefghijklmnñopqrstuvwxyz_.áéíóú');
	 
	 $("#txt_habitantes,#txt_vivienda").validCampoFranz('1234567890');
	
	
	

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
    
    $("#fecha_fin").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy/mm/dd',
        onSelect: function (date) {
            $('#fecha_inicio').datepicker('option', 'maxDate', $(this).datepicker('getDate'));
        }
    });
    /*******VALIDA FORMULARIO DE ESTADO**********/

	
	 $("#form_estado").validate({
		 
		   rules: {

			   txt_nombre_estado: {required: true,},
			   
			   fecha_inicio: {required: true},
			   
			   fecha_fin: {required: true,},
			   
			   select_partido_politico: {required: true},
  
			   txt_habitantes: {required: true,},
			   
			   txt_vivienda: {required: true}
	            
	        },
	        messages: {
	        	 

				   txt_nombre_estado:"Ingrese Estado",
				   
				   fecha_inicio:"Seleccione periodo inicial",
				   
				   fecha_fin:"Seleccione periodo final",
				   
				   select_partido_politico:"Seleccione partido politico",
	  
				   txt_habitantes:"Ingrese número de habitantes",
				   
				   txt_vivienda: "Ingrese número de viviendas"
				   
		              	
	        },
	 
		  submitHandler: function(form) {
			  
			  var ESTADO="INSERTA";
			  var OID_ESTADO=0;
			  
				if($("#btn_enviar_estado").text()==="Actualizar"){
					
					ESTADO="ACTUALIZA"
						
					OID_ESTADO=$("#txt_nombre_estado").attr("ESTADO");/*OID_ESTADO*/
					
				}
			  
			  

		     $.ajax({
			        data:{'NOMBRE_ESTADO':$("#txt_nombre_estado").val().toUpperCase(),'PERIODO_INICIAL':$("#fecha_inicio").val(),'PERIODO_FINAL':$("#fecha_fin").val(),'PARTIDO_POLITICO':$("#select_partido_politico").val().toUpperCase(),'HABITANTES':$("#txt_habitantes").val(),'VIVIENDAS':$("#txt_vivienda").val(),'ESTADO':ESTADO,'OID_ESTADO':OID_ESTADO},
			        url:"ADD_ESTADO",
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
				                message: "Estado duplicado.",
				                detail: "Favor de ingresar un estado diferente",
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

function Select_Politico(){
	
    $.ajax({
        data:{},
        url:"GET_PARTIDO_ACTIVO",
        type:"POST",
        success: function (response) {
        	
        	  $.each(response, function(key, value){
        			$("#select_partido_politico").append('<option value="'+value.OID_PARTIDO_POLITICO+'">'+value.NOMBRE_PARTIDO+' - '+value.ABREVIACION+' </option>');
        		    });
        	
        	
        	
        }, error: function (err) {
        	
        	alert("Error en en select_politico "+err);
        }});
	
	
	
	
}//Final de la funcion que llena el select de partido politico

function llenaTabla(){
	
    $(".fila_estado").remove();
    
	
    $.ajax({
        data:{},
        url:"GET_ALL_ESTADO",
        type:"POST",
        success: function (response) {
        	

        var ESTADO="";
       $.each( response, function( key, value ) {
    	   
    	   if(value.ESTADO===true){
    		   
    		   ESTADO="ACTIVO";
    		   
    	   }else{
    		   ESTADO="INACTIVO";
    		   
    	   }
    	   
    	   
           $("#tb_estado").append('<tr id='+value.OID_ESTADO+' class=fila_estado><td>'+value.OID_ESTADO+'</td><td>'+value.NOMBRE_ESTADO+'</td><td>'+value.PERIODO_INICIAL+'</td><td>'+value.PERIODO_FINAL+'</td><td>'+value.PARTIDO_POLITICO+'</td><td>'+value.HABITANTES+'</td><td>'+value.VIVIENDAS+'</td><td><a onclick=changeState('+value.OID_ESTADO+','+value.ESTADO+')>'+ESTADO+'</a></td><td><a id=link'+value.OID_ESTADO+' onclick=update('+value.OID_ESTADO+',"'+value.PERIODO_INICIAL+'","'+value.PERIODO_FINAL+'","'+value.OID_PARTIDO_POLITICO+'","'+value.HABITANTES+'","'+value.VIVIENDAS+'")>ACTUALIZAR</a></td></tr>');

           $("#link"+value.OID_ESTADO).attr("ESTADO",value.NOMBRE_ESTADO);
           
        		});
       
   	/*PAGINACION DE LA TABLA*/
       table=$('#table_estado').DataTable();

         
        }, error: function (err) {
            alert("Error en el AJAX  LLena tabla" + err.statusText);
        }
 });
    
	
}//FINAL DE LA FUNCION LLENA TABLA

/*FUNCION QUE CAMBIA EL ESTADO DEL REGISTRO*/
function changeState(OID_ESTADO,ESTADO){
	
    $.ajax({
        data:{'OID_ESTADO':OID_ESTADO,'ESTADO':ESTADO},
        url:"ESTATUS_ESTADO",
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

function update(OID_ESTADO,PERIODO_INICIAL,PERIODO_FINAL,OID_PARTIDO_POLITICO,HABITANTES,VIVIENDAS){
	

	
	$("#txt_nombre_estado").val($("#link"+OID_ESTADO).attr("ESTADO"));
	
	$("#txt_nombre_estado").attr("ESTADO",OID_ESTADO);
	
	$("#fecha_inicio").val(PERIODO_INICIAL);
	
	$("#fecha_fin").val(PERIODO_FINAL);
	
	$("#select_partido_politico").val(OID_PARTIDO_POLITICO);
	
	$("#txt_habitantes").val(HABITANTES);
	
	$("#txt_vivienda").val(VIVIENDAS);
	
	$("#btn_enviar_estado").text("Actualizar")
		
	
}//FINAL DE LA ACTUALIZACION DE UN REGISTRO

function limpieza(){
	
	$("#btn_enviar_estado").text("Enviar");
	
	$("#txt_nombre_estado").val("");
	
	$("#fecha_inicio").val("");
	
	$("#fecha_fin").val("");
	
	$("#select_partido_politico").val("default");
	
	$("#txt_habitantes").val("");
	
	$("#txt_vivienda").val("");
	
	 table.destroy();
	   
	 llenaTabla();
	
	
}
