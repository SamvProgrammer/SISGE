package com.rrsol.siseg.controller;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.authentication.encoding.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.StandardPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rrsol.siseg.dao.admin.AdminDAO;

@Controller
@RequestMapping("/Administracion")
@Secured("ROLE_USER")
public class Administracion {
	
	
    @Autowired
    AdminDAO admindao;
	
	
	@RequestMapping({"", "/"})
	public String inicio( Model model) {
		
		return "Administracion/inicio";
	}/*FINAL DEL METODO DE INICIO*/
	
	@RequestMapping(value = "/Usuario", method = RequestMethod.GET)
	public String usuario( Model model) {
		
		return "Administracion/usuario";
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	@RequestMapping(value = "/Catalogos", method = RequestMethod.GET)
	public String Catalogos( Model model) {
		
		return "Administracion/catalogos";
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	/****************************************************************************/
							/*SECCION DE SIS_USUARIO*/
	/****************************************************************************/
	@RequestMapping(value = "/ADD_USUARIO", method = RequestMethod.POST)
	  public @ResponseBody
	    String ADD_USUARIO(@RequestParam String USUARIO,@RequestParam String PASS,@RequestParam String ESTADO,@RequestParam String OID_USUARIO){
		
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		
		String hashedPassword = passwordEncoder.encode(PASS);
		
		return admindao.ADD_USUARIO(USUARIO,hashedPassword,ESTADO,OID_USUARIO);
		
	
		
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	@RequestMapping(value = "/GET_USUARIO", method = RequestMethod.POST)
	  public @ResponseBody
	  ArrayList GET_USUARIO(){
				
		return (ArrayList) admindao.GET_USUARIO();
		
	
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	
	
	@RequestMapping(value = "/ESTADO_USUARIO", method = RequestMethod.POST)
	  public @ResponseBody
	  void ESTADO_USUARIO(@RequestParam String OID_USUARIO,@RequestParam String ESTADO){
				

		
			admindao.ESTADO_USUARIO(OID_USUARIO,ESTADO);
		
	
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	   
	   /****************************************************************************/
	   					/*SECCION DE CAT_ESTADO*/
	   /****************************************************************************/
	  
   @RequestMapping(value = "/Estado", method = RequestMethod.GET)
   public String getEstado( Model model) {
			
			return "Administracion/catalogos/Estado";
		}
	
   /*PARA RELLENAR EL SELECT DEL CATALOGO DE ESTADO*/
   @RequestMapping(value = "/GET_PARTIDO_ACTIVO", method = RequestMethod.POST)
   public @ResponseBody ArrayList GET_PARTIDO_ACTIVO(){
	   							
	return (ArrayList) admindao.GET_PARTIDO_ACTIVO();
	   					
	   				
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	   				
	
	@RequestMapping(value = "/GET_ALL_ESTADO", method = RequestMethod.POST)
	  public @ResponseBody
	  ArrayList GET_ALL_ESTADO(){
				
		return (ArrayList) admindao.GET_ALL_ESTADO();
		
	
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	@RequestMapping(value = "/ADD_ESTADO", method = RequestMethod.POST)
	public @ResponseBody
	String ADD_ESTADO(@RequestParam String NOMBRE_ESTADO,@RequestParam String PERIODO_INICIAL,@RequestParam String PERIODO_FINAL,@RequestParam String PARTIDO_POLITICO,@RequestParam String HABITANTES,@RequestParam String VIVIENDAS,@RequestParam String ESTADO,@RequestParam String OID_ESTADO){
				
		return admindao.ADD_ESTADO(  NOMBRE_ESTADO,  PERIODO_INICIAL,  PERIODO_FINAL,  PARTIDO_POLITICO,  HABITANTES,  VIVIENDAS,  ESTADO,  OID_ESTADO);
		
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	@RequestMapping(value = "/ESTATUS_ESTADO", method = RequestMethod.POST)
	  public @ResponseBody
	  void ESTATUS_ESTADO(@RequestParam String OID_ESTADO,@RequestParam String ESTADO){
				

		
			admindao.ESTATUS_ESTADO(OID_ESTADO,ESTADO);
		
	
	}/*FINAL DE LA SECCION DE GET USUARIO*/
   
   /****************************************************************************/
   					/*SECCION DE CAT_PARTIDO_POLITICO*/
   /****************************************************************************/
   
   @RequestMapping(value = "/Partido", method = RequestMethod.GET)
   public String getPartido( Model model) {
			
			return "Administracion/catalogos/PartidoPolitico";
		}
   
	@RequestMapping(value = "/ADD_PARTIDO", method = RequestMethod.POST)
	  public @ResponseBody
	    String ADD_PARTIDO(@RequestParam String PARTIDO,@RequestParam String ABREVIATURA,@RequestParam String ESTADO,@RequestParam String OID_PARTIDO){
				
		return admindao.ADD_PARTIDO(PARTIDO,ABREVIATURA,ESTADO,OID_PARTIDO);
		
	
		
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	@RequestMapping(value = "/GET_PARTIDO_POLITICO", method = RequestMethod.POST)
	  public @ResponseBody
	  ArrayList GET_PARTIDO(){
				
		return (ArrayList) admindao.GET_PARTIDO();
		
	
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	
	
	@RequestMapping(value = "/ESTADO_PARTIDO", method = RequestMethod.POST)
	  public @ResponseBody
	  void ESTADO_PARTIDO(@RequestParam String OID_PARTIDO,@RequestParam String ESTADO){
				

		
			admindao.ESTADO_PARTIDO(OID_PARTIDO,ESTADO);
		
	
	}/*FINAL DE LA SECCION DE GET USUARIO*/
	
	/****************************************************************************/
						/*SECCION DE CAT_MOTIVO*/
	/****************************************************************************/
	   @RequestMapping(value = "/Motivo", method = RequestMethod.GET)
	   public String getMotivo( Model model) {
				
				return "Administracion/catalogos/Motivo";
			}
	   @RequestMapping(value = "/ADD_MOTIVO", method = RequestMethod.POST)
		  public @ResponseBody
		    String ADD_MOTIVO(@RequestParam String MOTIVO,@RequestParam String ESTADO,@RequestParam String OID_MOTIVO){
					
			return admindao.ADD_MOTIVO(MOTIVO,ESTADO,OID_MOTIVO);
			
		
			
		}/*FINAL DE LA SECCION DE GET USUARIO*/
		
		@RequestMapping(value = "/GET_MOTIVO", method = RequestMethod.POST)
		  public @ResponseBody
		  ArrayList GET_MOTIVO(){
					
			return (ArrayList) admindao.GET_MOTIVO();
			
		
		}/*FINAL DE LA SECCION DE GET USUARIO*/
		
		
		
		@RequestMapping(value = "/ESTADO_MOTIVO", method = RequestMethod.POST)
		  public @ResponseBody
		  void ESTADO_MOTIVO(@RequestParam String OID_MOTIVO,@RequestParam String ESTADO){
					

			
				admindao.ESTADO_MOTIVO(OID_MOTIVO,ESTADO);
			
		
		}/*FINAL DE LA SECCION DE GET USUARIO*/
		
		
		/****************************************************************************/
							/*SECCION DE CAT_PROFESION*/
		/****************************************************************************/
		
		@RequestMapping(value = "/Profesion", method = RequestMethod.GET)
		public String getProfesion( Model model) {
					
					return "Administracion/catalogos/Profesion";
				}
		@RequestMapping(value = "/ADD_PROFESION", method = RequestMethod.POST)
	    public @ResponseBody
			    String ADD_PROFESION(@RequestParam String PROFESION,@RequestParam String ABREVIATURA,@RequestParam String ESTADO,@RequestParam String OID_PROFESION){
						
				return admindao.ADD_PROFESION(PROFESION,ABREVIATURA,ESTADO,OID_PROFESION);
				
			
				
			}/*FINAL DE LA SECCION DE GET USUARIO*/
			
	   @RequestMapping(value = "/GET_PROFESION", method = RequestMethod.POST)
	   public @ResponseBody
			  ArrayList GET_PROFESION(){
						
				return (ArrayList) admindao.GET_PROFESION();
				
			
			}/*FINAL DE LA SECCION DE GET USUARIO*/
			
			
			
	 @RequestMapping(value = "/ESTADO_PROFESION", method = RequestMethod.POST)
	 public @ResponseBody
			  void ESTADO_PROFESION(@RequestParam String OID_PROFESION,@RequestParam String ESTADO){
						

				
					admindao.ESTADO_PROFESION(OID_PROFESION,ESTADO);
				
			
			}/*FINAL DE LA SECCION DE GET USUARIO*/
	 
	 /****************************************************************************/
							/*SECCION DE CAT_PROFESION*/
	 /****************************************************************************/
	 @RequestMapping(value = "/Puesto", method = RequestMethod.GET)
	public String getPuesto( Model model) {
					
					return "Administracion/catalogos/Puesto";
				}
	 
	@RequestMapping(value = "/ADD_PUESTO", method = RequestMethod.POST)
	public @ResponseBody
			    String ADD_PUESTO(@RequestParam String PUESTO,@RequestParam String ESTADO,@RequestParam String OID_PUESTO){
						
				return admindao.ADD_PUESTO(PUESTO,ESTADO,OID_PUESTO);
				
			
				
			}/*FINAL DE LA SECCION DE GET USUARIO*/
			
    @RequestMapping(value = "/GET_PUESTO", method = RequestMethod.POST)
	public @ResponseBody
			  ArrayList GET_PUESTO(){
						
				return (ArrayList) admindao.GET_PUESTO();
				
			
			}/*FINAL DE LA SECCION DE GET USUARIO*/
			
			
			
	 @RequestMapping(value = "/ESTADO_PUESTO", method = RequestMethod.POST)
	 public @ResponseBody
			  void ESTADO_PUESTO(@RequestParam String OID_PUESTO,@RequestParam String ESTADO){
						

				
					admindao.ESTADO_PUESTO(OID_PUESTO,ESTADO);
				
			
			}/**/
	 
	 /****************************************************************************/
									/*SECCION DE CAT_MUNICIPIO*/
	 /****************************************************************************/
	 
	 @RequestMapping(value = "/Municipio", method = RequestMethod.GET)
	 public String getMunicipio( Model model) {
					
					return "Administracion/catalogos/Municipio";
				}
	 
	@RequestMapping(value = "/ADD_MUNICIPIO", method = RequestMethod.POST)
	public @ResponseBody String ADD_MUNICIPIO(@RequestParam String NOMBRE_MUNICIPIO,@RequestParam String OID_ESTADO,@RequestParam String PERIODO_INICIAL,@RequestParam String PERIODO_FINAL,@RequestParam String PARTIDO_POLITICO,@RequestParam String HABITANTES,@RequestParam String VIVIENDAS,@RequestParam String ESTADO,@RequestParam String OID_MUNICIPIO){
					
			return admindao.ADD_MUNICIPIO(  NOMBRE_MUNICIPIO,OID_ESTADO , PERIODO_INICIAL,  PERIODO_FINAL,  PARTIDO_POLITICO,  HABITANTES,  VIVIENDAS,  ESTADO,  OID_MUNICIPIO);
			
		}/*FINAL DE LA SECCION DE GET USUARIO*/
			
    @RequestMapping(value = "/GET_MUNICIPIO", method = RequestMethod.POST)
	public @ResponseBody
			  ArrayList GET_MUNICIPIO(){
						
				return (ArrayList) admindao.GET_MUNICIPIO();
				
			
			}/*FINAL DE LA SECCION DE GET USUARIO*/
			
			
			
	 @RequestMapping(value = "/ESTADO_MUNICIPIO", method = RequestMethod.POST)
	 public @ResponseBody
	 void ESTADO_MUNICIPIO(@RequestParam String OID_MUNICIPIO,@RequestParam String ESTADO){
				
					admindao.ESTADO_MUNICIPIO(OID_MUNICIPIO,ESTADO);
			
			}/**/
	 
	@RequestMapping(value = "/GET_ENTIDAD", method = RequestMethod.POST)
	public @ResponseBody  ArrayList GET_ENTIDAD(){
							
					return (ArrayList) admindao.GET_ENTIDAD();
					
				
	}/*FINAL DE LA SECCION DE GET USUARIO*/
				
	 
	

}//FINAL DE LA CLASE DE ADMINISTRACION
