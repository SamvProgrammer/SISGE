package com.rrsol.siseg.daoimp.dependencia;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.rrsol.siseg.dao.dependencia.dependenciaDAO;
import com.rrsol.siseg.utilidades.SP;

@Service
public class dependenciaDAOImpl implements dependenciaDAO {
	
    @Autowired
    private DataSource dataSource;
    private JdbcTemplate jdbcTemplate;
    SP sp;
    
    public dependenciaDAOImpl() {
        sp = new SP();

    }

    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;

    }
    public JdbcTemplate getTemplate() {

        return jdbcTemplate = new JdbcTemplate(this.dataSource);

    }//final de getTemplate


	@Override
	public ArrayList GET_ENTIDAD() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_ENTIDAD", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN DEPENDENCIA DAOIMP -SP_GET_ENTIDAD"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION 
	}

	@Override
	public ArrayList GET_MUNICIPIO(String OID_ESTADO) {
	    try {
	        String[][] parametro = {{"OID_ESTADO",OID_ESTADO}};


	        Map<String, Object> valor =  sp.store("SP_FIND_MUNICIPIO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN DEPENDENCIA DAOIMP -SP_FIND_MUNICIPIO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION 
	}

	@Override
	public ArrayList GET_DEPENDENCIA() {
		
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_DEPENDENCIA", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN DEPENDENCIA DAOIMP -SP_GET_DEPENDENCIA"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION 

		
			
	}

	@Override
	public String ADD_DEPENDENCIA(String DEPENDENCIA, String TELEFONO, String CORREO, String PAGINA_WEB,
			String OID_ESTADO, String OID_MUNICIPIO, String DELEGACION, String COLONIA, String CALLE,
			String NUMERO_INTERIOR, String NUMERO_EXTERIOR, String ESTATUS, String ESTADO, String OID_DEPENDENCIA) {
	    try {
	        String[][] parametro = {{"DEPENDENCIA", DEPENDENCIA}, {"TELEFONO", TELEFONO},{"ESTADO",ESTADO},{"CORREO",CORREO},
	        						{"PAGINA_WEB", PAGINA_WEB}, {"OID_ESTADO", OID_ESTADO},{"OID_MUNICIPIO",OID_MUNICIPIO},{"DELEGACION",DELEGACION},
	        						{"COLONIA", COLONIA}, {"CALLE", CALLE},{"NUMERO_INTERIOR",NUMERO_INTERIOR},{"NUMERO_EXTERIOR",NUMERO_EXTERIOR},
	        						{"ESTATUS", ESTATUS}, {"ESTADO", ESTADO},{"OID_DEPENDENCIA",OID_DEPENDENCIA}};


	        Map<String, Object> valor =  sp.store("SP_ADD_DEPENDENCIA", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        Map resultMap=(Map)array.get(0);
	        
	        return (String)resultMap.get("RESULT").toString();

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN DEPENDENCIA DAOIMP -SP_ADD_DEPENDENCIA"+e.getMessage());
	    	  
	    	  return "0";
	    }//fiN EXCEPTION 
	}

	@Override
	public void ESTADO_DEPENDENCIA(String OID_DEPENDENCIA, String ESTADO) {
	    try {
	        String[][] parametro = {{"OID_DEPENDENCIA",OID_DEPENDENCIA},{"ESTADO",ESTADO}};


	         sp.store("SP_ESTADO_DEPENDENCIA", parametro, getTemplate());
	  

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN DEPENDENCIA DAOIMP -SP_ESTADO_DEPENDENCIA"+e.getMessage());
	    
	    }//fiN EXCEPTION 
		
	}
	
	/**********************************************************/
						/*SECCI�N DE CONTACTO*/
	/**********************************************************/

	@Override
	public ArrayList GET_PROFESION_ACTIVO() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_PROFESION_ACTIVO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN DEPENDENCIA DAOIMP -SP_GET_PROFESION_ACTIVO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION 
	}

	@Override
	public ArrayList GET_PUESTO_ACTIVO() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_PUESTO_ACTIVO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN DEPENDENCIA DAOIMP -SP_GET_PUESTO_ACTIVO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION 
	}

	@Override
	public ArrayList GET_CONTACTO() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_CONTACTO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN DEPENDENCIA DAOIMP -SP_GET_CONTACTO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION 
	}

	@Override
	public String ADD_CONTACTO(String DEPENDENCIA,String NOMBRE, String DEPARTAMENTO, String OID_PUESTO,
			String OID_PROFESION, String TELEFONO, String CELULAR, String CORREO, String ESTADO, String OID_CONTACTO) {
	    try {
	        String[][] parametro = {{"DEPENDENCIA",DEPENDENCIA},{"NOMBRE",NOMBRE},{"DEPARTAMENTO",DEPARTAMENTO},{"OID_PUESTO",OID_PUESTO},{"OID_PROFESION",OID_PROFESION}
	        ,{"TELEFONO",TELEFONO},{"CELULAR",CELULAR},{"CORREO",CORREO},{"ESTADO",ESTADO},{"OID_CONTACTO",OID_CONTACTO}};


	        Map<String, Object> valor =  sp.store("SP_ADD_CONTACTO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        Map resultMap=(Map)array.get(0);
	        
	        return (String)resultMap.get("RESULT").toString();

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN DEPENDENCIA DAOIMP -SP_ADD_CONTACTO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION S
	}

	@Override
	public void ESTADO_CONTACTO(String OID_CONTACTO, String ESTADO) {
	    try {
	        String[][] parametro = {{"OID_CONTACTO",OID_CONTACTO},{"ESTADO",ESTADO}};


	        Map<String, Object> valor =  sp.store("SP_ESTADO_CONTACTO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN DEPENDENCIA DAOIMP -SP_ESTADO_CONTACTO"+e.getMessage());
	    	  
	   
	    }//fiN EXCEPTION S
		
	}

	@Override
	public ArrayList GET_DEPENDENCIA_ACTIVO() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_DEPENDENCIA_ACTIVO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN DEPENDENCIA DAOIMP -SP_GET_DEPENDENCIA_ACTIVO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION 
	}

}
