var table,table_seg=0;
	
var radio=0;

$(function(){
	
	
/*VERIFICANDO LA FUNCIONALIDAD DEL RADIO BUTTON*/
	
	
	
	 $("input[name=group1]").click(function () {    
	   
		 	radio=$(this).val();
		 	
	    });
	
/*VALIDACIÓN DE LOS CAMPOS DEDE INTERVALO INICIAL Y FINAL*/
	
	 $("#intervalo_inicial").validCampoFranz('1234567890');
	
	
	
	
/*INICIALIZANDO EL CAMPO DE FECHA*/
	
	llenaTabla(0,0,'','','INICIO',0,0,0,0,0,0);
	
	$("#btn_enviar_seguimiento").on("click",function(){
		
	if((radio!=0 && $("#select_operador_inicial").val()!=null && $("#intervalo_inicial").val()!="") || radio===0)
		{
		
	/*LIMPIEZA DE LA TABLA DE CONSULTA ESPECIFICA*/	
		   if(table_seg!=0){
			    
				$("#div_consulta_seg").hide();
		   }
		
		
	/*RELLENA LA TABLA DE CONSULTA ESPECIFICA*/
			   
		   
		llenaTabla($("#select_dependencia").val(),$("#select_contacto").val(),$("#fecha_inicio").val(),$("#fecha_fin").val(),$("#select_estado").val(),
				
		$("#select_entidad").val(),$("#select_municipio").val(),$("#select_partido").val(),$("#select_operador_inicial").val(),$("#intervalo_inicial").val(),radio);
		
		}else{
			
			   customAlert({
	                message: "Seleccione un intervalo y un operador.",
	                detail: "",
	                showAcept: false,
	                closeByEscape: true,
	                closeByTimer: true,
	                timer: 1500
	            });  
			
			
			
		}
			
	});
	
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
		    
		    minDate: new Date(2000,1,1),
		    
		    onSelect: function (date) {
		    	
		    	$("#fecha_fin").datepicker('option', 'minDate', new Date($(this).datepicker('getDate')));
		        
		    }
		   
		    });
		    
		    $("#fecha_fin").datepicker({
			    changeMonth: true,
			    
			    changeYear: true,
			    
			    dateFormat: 'yy/mm/dd'
			    	
			    });
	
	
/*VALIDA LOS CAMPOS DEL FORMULARIO*/
		
$("#txt_observaciones").validCampoFranz(' abcdefghijklmnñopqrstuvwxyz_.áéíóú1234567890');
		 
	
/*OBTIENE LA INFORMACION DE LA TABLA DE ESTADO*/

		
/*RELLENA EL SELECT DE PUESTO*/	
	Select_Dependencia();
	
/*RELLENA EL SELECT DE PROFESION*/	
$("#select_dependencia").on("change",function(){
	
	Select_Contacto($(this).val());
	
})
	
/*RELLENA EL CAMPO DE MOTIVO*/
	Select_Motivo();


	 
	 
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

function llenaTabla(OID_DEPENDENCIA,OID_CONTACTO,FECHA_INICIO,FECHA_FIN,ESTADO,
				
		ENTIDAD,MUNICIPIO,PARTIDO,OPERADOR_INICIAL,INTERVALO_INICIAL,RADIO){
	
	
    $(".fila_seguimiento").remove();
    
	
    $.ajax({
        data:{"OID_DEPENDENCIA":OID_DEPENDENCIA,"OID_CONTACTO":OID_CONTACTO,"FECHA_INICIO":FECHA_INICIO,"FECHA_FIN":FECHA_FIN,"ESTADO":ESTADO
        	,"ENTIDAD":ENTIDAD,"MUNICIPIO":MUNICIPIO,"PARTIDO":PARTIDO,"OPERADOR_INICIAL":OPERADOR_INICIAL,"INTERVALO_INICIAL":INTERVALO_INICIAL,
        	"RADIO":RADIO},
        url:"FIND_SEGUIMIENTO",
        type:"POST",
        success: function (response) {
        	

        var ESTADO="";
        
       $.each( response, function( key, value ) {
    	  
    	   if(value.ESTADO===true){
    		   
    		   ESTADO="ACTIVO";
    		   
    	   }else{
    		   ESTADO="INACTIVO";
    		   
    	   }

    	   
           $("#tb_seguimiento").append('<tr id='+value.OID_SEGUIMIENTO+' class=fila_seguimiento><td>'+value.OID_SEGUIMIENTO+'</td><td>'+value.NOMBRE_ESTADO+'</td><td>'+value.NOMBRE_MUNICIPIO+'</td><td>'+value.POLITICO+'</td><td>'+value.HABITANTES+'</td><td>'+value.VIVIENDAS+'</td><td>'+value.DEPENDENCIA+'</td><td>'+value.CONTACTO+'</td><td>'+value.MOTIVO+'</td><td>'+value.OBSERVACION+'</td><td>'+value.FECHA+'</td><td>'+value.ESTADO+'</td><td><a  id=link'+value.OID_SEGUIMIENTO+'  onclick=seguimiento('+value.OID_SEGUIMIENTO+',"'+value.OID_DEPENDENCIA+'","'+value.OID_CONTACTO_DEPENDENCIA+'")>VER</a></td></tr>');

           $("#link"+value.OID_SEGUIMIENTO).attr("CONTACTO",value.CONTACTO);
           
           
        		});
       
   	/*PAGINACION DE LA TABLA*/
       table=$('#table_seguimiento').DataTable();

       
       /*LIMPIEZA DE LA CAJA DE TEXTO*/	
		
		$("#select_dependencia").val("default");
		
		$("#select_contacto").val("default");
		
		$("#fecha_inicio").val("");
		
		$("#select_estado").val("default");
         
        }, error: function (err) {
            alert("Error en el AJAX  LLena tabla" + err.statusText);
        }
 });
    
	
}//FINAL DE LA FUNCION LLENA TABLA




function seguimiento(OID_SEGUIMIENTO_PADRE,OID_DEPENDENCIA,OID_CONTACTO){
	
		$("#div_consulta_seg").show();
	
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
	        		  
	        	        
	        		  $("#tb_add_seg").append('<tr id='+value.OID_SEGUIMIENTO+' class=fila_add_seguimiento><td>'+value.NUMERO_SEGUIMIENTO+'</td><td>'+value.MOTIVO+'</td><td>'+value.OBSERVACION+'</td><td>'+value.FECHA+'</td><td>'+value.ESTADO+'</td></tr>');

	        	      $("#link"+value.OID_SEGUIMIENTO).attr("OBSERVACION",value.OBSERVACION);
	        		  
	        	  
	        	  });

	        	
	              table_seg=$('#table_add_seg').DataTable();
	              
	          	$("#title_seguimiento").text("SEGUIMIENTO DE "+$("#link"+OID_SEGUIMIENTO_PADRE).attr("CONTACTO"));
	        	
	        }, error: function (err) {
	        	
	        	alert("Error en en GET_ALL SEGUIMIENTO "+ err.statusText);
	        }});


	
}/*FINAL DE LA FUNCION SEGUIMIENTO*/


