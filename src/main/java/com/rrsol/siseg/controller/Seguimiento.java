package com.rrsol.siseg.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rrsol.siseg.dao.seguimiento.SeguimientoDAO;

@Controller
@RequestMapping("/Seguimiento")
@Secured("ROLE_USER")
public class Seguimiento {
	
	 @Autowired
	 SeguimientoDAO seguimiento;
	
	@RequestMapping({"", "/"})
	public String inicio( Model model) {
		
		return "Seguimiento/inicio";
	}
	
	
	@RequestMapping(value = "/Consulta", method = RequestMethod.GET)
	public String Consulta( Model model) {
		
		return "Seguimiento/Consulta";
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	@RequestMapping(value = "/Registro", method = RequestMethod.GET)
	public String Registro( Model model) {
		
		return "Seguimiento/Registro";
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	/***************************************************************/
					/*REGISTRO DE SEGUIMIENTO*/
	/***************************************************************/
	
	@RequestMapping(value = "/ADD_SEGUIMIENTO", method = RequestMethod.POST)
	  public @ResponseBody
	    String ADD_SEGUIMIENTO(@RequestParam String CONTACTO,@RequestParam String MOTIVO,@RequestParam String OBSERVACION,@RequestParam String FECHA,@RequestParam String ESTATUS,@RequestParam String ESTADO,@RequestParam String OID_SEGUIMIENTO){
				
		return seguimiento.ADD_SEGUIMIENTO(CONTACTO,MOTIVO,OBSERVACION,FECHA,ESTATUS,ESTADO,OID_SEGUIMIENTO);
		
	
		
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	@RequestMapping(value = "/FIND_SEGUIMIENTO", method = RequestMethod.POST)
	  public @ResponseBody
	  ArrayList FIND_SEGUIMIENTO(@RequestParam String OID_DEPENDENCIA,@RequestParam String OID_CONTACTO,@RequestParam String FECHA_INICIO,@RequestParam String FECHA_FIN,@RequestParam String ESTADO,
			  @RequestParam String  ENTIDAD,@RequestParam String MUNICIPIO,@RequestParam String PARTIDO,@RequestParam String OPERADOR_INICIAL,@RequestParam String INTERVALO_INICIAL
			  ,@RequestParam String RADIO){
				
		return (ArrayList) seguimiento.GET_SEGUIMIENTO(OID_DEPENDENCIA,OID_CONTACTO,FECHA_INICIO,FECHA_FIN,ESTADO,
				  ENTIDAD,MUNICIPIO,PARTIDO,OPERADOR_INICIAL,INTERVALO_INICIAL
				  ,RADIO);
		
	
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	@RequestMapping(value = "/GET_SEGUIMIENTO", method = RequestMethod.POST)
	  public @ResponseBody
	  ArrayList GET_SEGUIMIENTO(){
				
		return (ArrayList) seguimiento.GET_SEGUIMIENTO();
		
	
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	@RequestMapping(value = "/GET_DEPENDENCIA_ACTIVO", method = RequestMethod.POST)
	  public @ResponseBody
	  ArrayList GET_DEPENDENCIA_ACTIVO(){
				
		return (ArrayList) seguimiento.GET_DEPENDENCIA_ACTIVO();
		
	
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	@RequestMapping(value = "/GET_CONTACTO_SEGUIMIENTO", method = RequestMethod.POST)
	  public @ResponseBody
	  ArrayList GET_CONTACTO_SEGUIMIENTO(@RequestParam String OID_DEPENDENCIA){
				
		return (ArrayList) seguimiento.GET_CONTACTO_SEGUIMIENTO(OID_DEPENDENCIA);
		
	
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	  
   @RequestMapping(value = "/GET_MOTIVO_ACTIVO", method = RequestMethod.POST)
   public @ResponseBody
	  ArrayList GET_MOTIVO_ACTIVO(){
				
		return (ArrayList) seguimiento.GET_MOTIVO_ACTIVO();
		
	
	}/*FINAL DE LA SECCION DE GET USUARIO*/
   
	@RequestMapping(value = "/GET_ALL_SEGUIMIENTO", method = RequestMethod.POST)
	  public @ResponseBody
	  ArrayList GET_ALL_SEGUIMIENTO(@RequestParam String OID_SEGUIMIENTO){
				
		return (ArrayList) seguimiento.GET_ALL_SEGUIMIENTO(OID_SEGUIMIENTO);
		
	
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	
	

	
	

}/*FINAL DEL SEGUIMEINTO*/
