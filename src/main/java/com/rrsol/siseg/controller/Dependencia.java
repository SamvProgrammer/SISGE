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

import com.rrsol.siseg.dao.admin.AdminDAO;
import com.rrsol.siseg.dao.dependencia.dependenciaDAO;

@Controller
@RequestMapping("/Dependencia")
@Secured("ROLE_USER")
public class Dependencia {
	
    @Autowired
    dependenciaDAO dependencia;
	
	
	
	@RequestMapping({"", "/"})
	public String inicio( Model model) {
		
		return "Dependencia/inicio";
	}
	
	@RequestMapping(value = "/Registro", method = RequestMethod.GET)
	public String RegistroDependencia( Model model) {
		
		return "Dependencia/dependencia";
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	/************************************************************************/
					/*SECCION DE REGSITRO DE DEPENDENCIA*/
	/***********************************************************************/
	
	@RequestMapping(value = "/GET_ENTIDAD", method = RequestMethod.POST)
	public @ResponseBody ArrayList  GET_ENTIDAD() {
		
		return dependencia.GET_ENTIDAD();
	}/*FINAL DE LA SECCION DE GET ENTIDAD*/
	
	@RequestMapping(value = "/GET_MUNICIPIO", method = RequestMethod.POST)
	public @ResponseBody ArrayList  GET_MUNICIPIO(@RequestParam String OID_ESTADO) {
		
		return dependencia.GET_MUNICIPIO(OID_ESTADO);
	}/*FINAL DE LA SECCION DE GET MUNICIPIO*/
	
	@RequestMapping(value = "/GET_DEPENDENCIA", method = RequestMethod.POST)
	public @ResponseBody ArrayList  GET_DEPENDENCIA() {
		
		return dependencia.GET_DEPENDENCIA();
	}/*FINAL DE LA SECCION DE GET DEPENDENCIA*/
	
	@RequestMapping(value = "/ADD_DEPENDENCIA", method = RequestMethod.POST)
	public @ResponseBody
	    String ADD_DEPENDENCIA(@RequestParam String DEPENDENCIA,@RequestParam String TELEFONO,@RequestParam String CORREO,@RequestParam String PAGINA_WEB,@RequestParam String OID_ESTADO,@RequestParam String OID_MUNICIPIO,@RequestParam String DELEGACION,@RequestParam String COLONIA,@RequestParam String CALLE,@RequestParam String NUMERO_INTERIOR,@RequestParam String NUMERO_EXTERIOR,@RequestParam String ESTATUS,@RequestParam String ESTADO,@RequestParam String OID_DEPENDENCIA){
				
		return dependencia.ADD_DEPENDENCIA(DEPENDENCIA, TELEFONO, CORREO,PAGINA_WEB,OID_ESTADO, OID_MUNICIPIO, DELEGACION,COLONIA,CALLE,NUMERO_INTERIOR, NUMERO_EXTERIOR,ESTATUS, ESTADO, OID_DEPENDENCIA);
		
	
		
	}/*FINAL DE LA SECCION DE ADD_DEPENDENCIA*/
	
	@RequestMapping(value = "/ESTADO_DEPENDENCIA", method = RequestMethod.POST)
	public @ResponseBody
	void ESTADO_DEPENDENCIA(@RequestParam String OID_DEPENDENCIA,@RequestParam String ESTADO){
				

		
		dependencia.ESTADO_DEPENDENCIA(OID_DEPENDENCIA,ESTADO);
		
	
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	
	/************************************************************************/
					/*SECCION DE CONTACTO DE DEPENDENCIA*/
	/***********************************************************************/
	
	@RequestMapping(value = "/Contacto", method = RequestMethod.GET)
	public String Contacto( Model model) {
		
		return "Dependencia/contacto";
	}
	
	@RequestMapping(value = "/GET_PROFESION_ACTIVO", method = RequestMethod.POST)
	public @ResponseBody ArrayList  GET_PROFESION_ACTIVO() {
		
		return dependencia.GET_PROFESION_ACTIVO();
	}
	
	@RequestMapping(value = "/GET_DEPENDENCIA_ACTIVO", method = RequestMethod.POST)
	public @ResponseBody ArrayList  GET_DEPENDENCIA_ACTIVO() {
		
		return dependencia.GET_DEPENDENCIA_ACTIVO();
	}
	
	@RequestMapping(value = "/GET_PUESTO_ACTIVO", method = RequestMethod.POST)
	public @ResponseBody ArrayList  GET_PUESTO_ACTIVO() {
		
		return dependencia.GET_PUESTO_ACTIVO();
	}
	
	
	@RequestMapping(value = "/GET_CONTACTO", method = RequestMethod.POST)
	public @ResponseBody ArrayList  GET_CONTACTO() {
		return dependencia.GET_CONTACTO();
	}
	
	
	@RequestMapping(value = "/ADD_CONTACTO", method = RequestMethod.POST)
	public @ResponseBody
	String ADD_CONTACTO(@RequestParam String DEPENDENCIA,@RequestParam String NOMBRE,@RequestParam String DEPARTAMENTO,@RequestParam String OID_PUESTO,@RequestParam String OID_PROFESION,@RequestParam String TELEFONO,@RequestParam String CELULAR,@RequestParam String CORREO,@RequestParam String ESTADO,@RequestParam String OID_CONTACTO){
				
		return dependencia.ADD_CONTACTO(DEPENDENCIA,NOMBRE,DEPARTAMENTO,OID_PUESTO,OID_PROFESION,TELEFONO,CELULAR,CORREO,ESTADO,OID_CONTACTO);
		
		
	}
	
	@RequestMapping(value = "/ESTADO_CONTACTO", method = RequestMethod.POST)
	public @ResponseBody
	void ESTADO_CONTACTO(@RequestParam String OID_CONTACTO,@RequestParam String ESTADO){
				

		
		dependencia.ESTADO_CONTACTO(OID_CONTACTO,ESTADO);
		
	
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	
	
	

}
