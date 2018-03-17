package com.rrsol.siseg.daoimp.seguimiento;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.rrsol.siseg.dao.seguimiento.SeguimientoDAO;
import com.rrsol.siseg.utilidades.SP;

@Service
public class SeguimientoDAOImp implements SeguimientoDAO {
	
    @Autowired
    private DataSource dataSource;
    private JdbcTemplate jdbcTemplate;
    SP sp;
    
    public SeguimientoDAOImp() {
        sp = new SP();

    }

    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;

    }
    public JdbcTemplate getTemplate() {

        return jdbcTemplate = new JdbcTemplate(this.dataSource);

    }//final de getTemplate


	@Override
	public String ADD_SEGUIMIENTO(String CONTACTO, String MOTIVO, String OBSERVACION, String FECHA, String ESTATUS,
			String ESTADO, String OID_SEGUIMIENTO) {
	    try {
	        String[][] parametro = {{"CONTACTO", CONTACTO}, {"MOTIVO", MOTIVO},{"OBSERVACION",OBSERVACION},{"FECHA",FECHA},{"ESTATUS",ESTATUS},{"ESTADO",ESTADO},{"OID_SEGUIMIENTO",OID_SEGUIMIENTO}};
	        

	        Map<String, Object> valor =  sp.store("SP_ADD_SEGUIMIENTO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        Map resultMap=(Map)array.get(0);
	        
	        return (String)resultMap.get("RESULT").toString();

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_ADD_SEGUIMIENTO"+e.getMessage());
	    	  
	    	  return "0";
	    }//fiN EXCEPTION 
	}

	@Override
	public ArrayList GET_SEGUIMIENTO(String OID_DEPENDENCIA,String OID_CONTACTO,String FECHA_INICIO,String FECHA_FIN,String ESTADO,
			  String ENTIDAD,String MUNICIPIO,String PARTIDO,String OPERADOR_INICIAL,String INTERVALO_INICIAL
			  ,String RADIO) {
		// TODO Auto-generated method stub
	    try {
	    	
	    		 
	    	
	        String[][] parametro = { {"OID_DEPENDENCIA",OID_DEPENDENCIA}, {"OID_CONTACTO",OID_CONTACTO}, {"FECHA_INICIO",FECHA_INICIO}, {"FECHA_FIN",FECHA_FIN},{"ESTADO",ESTADO},
	  			   {"ENTIDAD",ENTIDAD}, {"MUNICIPIO",MUNICIPIO}, {"PARTIDO",PARTIDO},{"OPERADOR_INICIAL",OPERADOR_INICIAL}, {"INTERVALO_INICIAL",INTERVALO_INICIAL}
				  ,{"RADIO",RADIO}};

	        
	        Map<String, Object> valor =  sp.store("SP_FIND_SEGUIMIENTO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return (ArrayList)array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_SEGUIMIENTO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION 
	}

	@Override
	public ArrayList GET_DEPENDENCIA_ACTIVO() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_DEPENDENCIA_ACTIVO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return (ArrayList)array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_DEPENDENCIA_ACTIVO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION 
	}

	@Override
	public ArrayList GET_MOTIVO_ACTIVO() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_MOTIVO_ACTIVO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return (ArrayList)array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_MOTIVO_ACTIVO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION ;
	}

	@Override
	public ArrayList GET_CONTACTO_SEGUIMIENTO(String OID_DEPENDENCIA) {
	    try {
	        String[][] parametro = {{"OID_DEPENDENCIA",OID_DEPENDENCIA}};


	        Map<String, Object> valor =  sp.store("SP_GET_CONTACTO_SEGUIMIENTO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return (ArrayList)array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_CONTACTO_SEGUIMIENTO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION ;
	}

	@Override
	public ArrayList GET_ALL_SEGUIMIENTO(String OID_SEGUIMIENTO) {
	    try {
	        String[][] parametro = {{"OID_SEGUIMIENTO",OID_SEGUIMIENTO}};


	        Map<String, Object> valor =  sp.store("SP_GET_ALL_SEGUIMIENTO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_ALL_SEGUIMIENTO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION ;
	}

	@Override
	public ArrayList GET_SEGUIMIENTO() {
	    try {
	        String[][] parametro = {};


	        Map<String, Object> valor =  sp.store("SP_GET_SEGUIMIENTO", parametro, getTemplate());
	       
	        
	        ArrayList array =(ArrayList)valor.get("#result-set-1");
	        
	        return array;

	    } catch (Exception e) {

	    	  System.out.println( "ERROR EN ADMIN DAOIMP -SP_GET_SEGUIMIENTO"+e.getMessage());
	    	  
	    	  return null;
	    }//fiN EXCEPTION ;;
	}

}
