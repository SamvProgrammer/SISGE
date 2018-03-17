package com.rrsol.siseg.daoimp.admin;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.rrsol.siseg.dao.admin.AdminDAO;
import com.rrsol.siseg.utilidades.SP;
@Service
public class AdminDAOImpl implements AdminDAO {
    @Autowired
    private DataSource dataSource;
    private JdbcTemplate jdbcTemplate;
    SP sp;
    
    public AdminDAOImpl() {
        sp = new SP();

    }

    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;

    }
    public JdbcTemplate getTemplate() {

        return jdbcTemplate = new JdbcTemplate(this.dataSource);

    }//final de getTemplate


	@Override
	public String ADD_USUARIO(String USUARIO, String PASS,String ESTADO,String OID_USUARIO) {
	    try {
	    	
	    	
	        String[][] parametro = {{"USUARIO", USUARIO}, {"PASS", PASS},{"ESTADO",ESTADO},{"OID_USUARIO",OID_USUARIO}};


	        Map<String, Object> valor =  sp.store("SP_ADD_USUARIO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        Map resultMap=(Map)array.get(0);
	        
	        return (String)resultMap.get("RESULT").toString();

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ADD_USUARIO"+e.getMessage());
	    	  
	    	  return "0";
	    }//fiN EXCEPTION 
		
	}//Final de la clase ADD_USUARIO

	@Override
	public List GET_USUARIO() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_USUARIO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return (List)array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_USUARIO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION 
	}

	@Override
	public void ESTADO_USUARIO(String OID_USUARIO,String ESTADO) {
	    try {
	    	
	        String[][] parametro = {{"OID_USUARIO",OID_USUARIO},{"ESTADO",ESTADO}};


	        sp.store("SP_ESTADO_USUARIO", parametro, getTemplate());
	       


	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ESTADO_USUARIO"+e.getMessage());

	    }//fiN EXCEPTION 
	}

	@Override
	public String ADD_PARTIDO(String PARTIDO, String ABREVIATURA, String ESTADO, String OID_PARTIDO) {
	    try {
	        String[][] parametro = {{"NOMBRE", PARTIDO}, {"ABREVIACION", ABREVIATURA},{"ESTADO",ESTADO},{"OID_PARTIDO",OID_PARTIDO}};


	        Map<String, Object> valor =  sp.store("SP_ADD_PARTIDO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        Map resultMap=(Map)array.get(0);
	        
	        return (String)resultMap.get("RESULT").toString();

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ADD_PARTIDO"+e.getMessage());
	    	  
	    	  return "0";
	    }//fiN EXCEPTION 
	}

	@Override
	public ArrayList GET_PARTIDO() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_PARTIDO_POLITICO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_PARTIDO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION 
	}

	@Override
	public void ESTADO_PARTIDO(String OID_PARTIDO, String ESTADO) {
	    try {
	    	
	        String[][] parametro = {{"OID_PARTIDO",OID_PARTIDO},{"ESTADO",ESTADO}};


	        sp.store("SP_ESTADO_PARTIDO", parametro, getTemplate());
	       


	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ESTADO_USUARIO"+e.getMessage());

	    }//fiN EXCEPTION 
		
	}

	@Override
	public ArrayList GET_PARTIDO_ACTIVO() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_PARTIDO_ACTIVO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_PARTIDO_ACTIVO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION 
	}

	@Override
	public ArrayList GET_ALL_ESTADO() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_ALL_ESTADO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_ALL_ESTADO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION 
	}

	@Override
	public String ADD_ESTADO(String NOMBRE_ESTADO, String PERIODO_INICIAL, String PERIODO_FINAL,
			String PARTIDO_POLITICO, String HABITANTES, String VIVIENDAS, String ESTADO, String OID_ESTADO) {
	    try {
	    	
	        String[][] parametro = {{"NOMBRE_ESTADO", NOMBRE_ESTADO}, {"PERIODO_INICIAL", PERIODO_INICIAL},{"PERIODO_FINAL",PERIODO_FINAL},{"PARTIDO_POLITICO",PARTIDO_POLITICO},
	        		{"HABITANTES", HABITANTES}, {"VIVIENDAS", VIVIENDAS},{"ESTADO",ESTADO},{"OID_ESTADO",OID_ESTADO}};

	        
	        Map<String, Object> valor =  sp.store("SP_ADD_ESTADO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        Map resultMap=(Map)array.get(0);
	        
	        return (String)resultMap.get("RESULT").toString();

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ADD_ESTADO"+e.getMessage());
	    	  
	    	  return "0";
	    }//fiN EXCEPTION 
	}

	@Override
	public void ESTATUS_ESTADO(String OID_ESTADO, String ESTADO) {
	    try {
	    	
	    	
	        String[][] parametro = {{"OID_ESTADO",OID_ESTADO},{"ESTADO",ESTADO}};



	        sp.store("SP_ESTATUS_ESTADO", parametro, getTemplate());
	       


	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ESTATUS_ESTADO"+e.getMessage());

	    }//fiN EXCEPTION 
		
	}/*FINAL DEL METODO ESTATUS_ESTADO*/

	@Override
	public String ADD_MOTIVO(String MOTIVO, String ESTADO, String OID_MOTIVO) {
	    try {
	        String[][] parametro = {{"MOTIVO", MOTIVO},{"ESTADO",ESTADO},{"OID_MOTIVO",OID_MOTIVO}};


	        Map<String, Object> valor =  sp.store("SP_ADD_MOTIVO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        Map resultMap=(Map)array.get(0);
	        
	        return (String)resultMap.get("RESULT").toString();

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ADD_MOTIVO"+e.getMessage());
	    	  
	    	  return "0";
	    }//fiN EXCEPTION 
	}

	@Override
	public ArrayList GET_MOTIVO() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_MOTIVO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_MOTIVO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION 
	}

	@Override
	public void ESTADO_MOTIVO(String OID_MOTIVO, String ESTADO) {

	    try {
	    	
	    	
	        String[][] parametro = {{"OID_MOTIVO",OID_MOTIVO},{"ESTADO",ESTADO}};



	        sp.store("SP_ESTADO_MOTIVO", parametro, getTemplate());
	       


	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ESTADO_MOTIVO"+e.getMessage());

	    }//fiN EXCEPTION
		
		
	}/*FIN DEL ESTADO_MOTIVO*/

	@Override
	public void ESTADO_PROFESION(String OID_PROFESION, String ESTADO) {
	    try {
	    	
	    	
	        String[][] parametro = {{"OID_PROFESION",OID_PROFESION},{"ESTADO",ESTADO}};



	        sp.store("SP_ESTADO_PROFESION", parametro, getTemplate());
	       


	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ESTADO_PROFESION"+e.getMessage());

	    }//fiN EXCEPTION 
		
	}

	@Override
	public ArrayList GET_PROFESION() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_PROFESION", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_PROFESION"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION ;
	}

	@Override
	public String ADD_PROFESION(String PROFESION, String ABREVIATURA,String ESTADO, String OID_PROFESION) {
	    try {
	        String[][] parametro = {{"PROFESION", PROFESION},{"ABREVIATURA",ABREVIATURA},{"ESTADO",ESTADO},{"OID_PROFESION",OID_PROFESION}};


	        Map<String, Object> valor =  sp.store("SP_ADD_PROFESION", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        Map resultMap=(Map)array.get(0);
	        
	        return (String)resultMap.get("RESULT").toString();

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ADD_PROFESION"+e.getMessage());
	    	  
	    	  return "0";
	    }//fiN EXCEPTION 
	}

	@Override
	public String ADD_PUESTO(String PUESTO, String ESTADO, String OID_PUESTO) {
	    try {
	        String[][] parametro = {{"PUESTO", PUESTO},{"ESTADO",ESTADO},{"OID_PUESTO",OID_PUESTO}};


	        Map<String, Object> valor =  sp.store("SP_ADD_PUESTO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        Map resultMap=(Map)array.get(0);
	        
	        return (String)resultMap.get("RESULT").toString();

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ADD_PUESTO"+e.getMessage());
	    	  
	    	  return "0";
	    }//fiN EXCEPTION 
	}

	@Override
	public ArrayList GET_PUESTO() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_PUESTO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_PUESTO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION ;
	}

	@Override
	public void ESTADO_PUESTO(String OID_PUESTO, String ESTADO) {
	    try {
	    	
	    	
	        String[][] parametro = {{"OID_PUESTO",OID_PUESTO},{"ESTADO",ESTADO}};



	        sp.store("SP_ESTADO_PUESTO", parametro, getTemplate());
	       


	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ESTADO_PUESTO"+e.getMessage());

	    }//fiN EXCEPTION 
		
	}

	@Override
	public String ADD_MUNICIPIO(String NOMBRE_MUNICIPIO,String OID_ESTADO ,String PERIODO_INICIAL, String PERIODO_FINAL,
			String PARTIDO_POLITICO, String HABITANTES, String VIVIENDAS, String ESTADO, String OID_MUNICIPIO) {
	    try {
	    	
	        String[][] parametro = {{"NOMBRE_MUNICIPIO", NOMBRE_MUNICIPIO},{"OID_ESTADO", OID_ESTADO}, {"PERIODO_INICIAL", PERIODO_INICIAL},{"PERIODO_FINAL",PERIODO_FINAL},{"PARTIDO_POLITICO",PARTIDO_POLITICO},
	        		{"HABITANTES", HABITANTES}, {"VIVIENDAS", VIVIENDAS},{"ESTADO",ESTADO},{"OID_MUNICIPIO",OID_MUNICIPIO}};

	        
	        Map<String, Object> valor =  sp.store("SP_ADD_MUNICIPIO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        Map resultMap=(Map)array.get(0);
	        
	        return (String)resultMap.get("RESULT").toString();

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ADD_MUNICIPIO"+e.getMessage());
	    	  
	    	  return "0";
	    }//fiN EXCEPTION 
	}

	@Override
	public ArrayList GET_MUNICIPIO() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_MUNICIPIO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_MUNICIPIO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION ;
	}

	@Override
	public void ESTADO_MUNICIPIO(String OID_MUNICIPIO, String ESTADO) {
	    try {
	    	
	    	
	        String[][] parametro = {{"OID_MUNICIPIO",OID_MUNICIPIO},{"ESTADO",ESTADO}};



	        sp.store("SP_ESTADO_MUNICIPIO", parametro, getTemplate());
	       


	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ESTADO_MUNICIPIO"+e.getMessage());

	    }//fiN EXCEPTION
		
	}

	@Override
	public ArrayList GET_ENTIDAD() {
	    try {
	    	
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_ENTIDAD", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	       
	        return array;


	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_ENTIDAD"+e.getMessage());
	    	  
	    	  return null;

	    }//fiN EXCEPTION 
	}

}
