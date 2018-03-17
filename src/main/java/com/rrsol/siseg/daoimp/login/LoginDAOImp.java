package com.rrsol.siseg.daoimp.login;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Map;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import com.rrsol.siseg.dao.login.loginDAO;
import com.rrsol.siseg.utilidades.SP;

@Service
public class LoginDAOImp implements loginDAO {
	
	/*VRIABLES DE BD*/
    @Autowired
    private DataSource dataSource;
    private JdbcTemplate jdbcTemplate;
    
    SP sp;
    
    /*METODOS PARA LA BD*/
    
    public LoginDAOImp() {
        sp = new SP();

    }

    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;

    }
    public JdbcTemplate getTemplate() {

        return jdbcTemplate = new JdbcTemplate(this.dataSource);

    }//final de getTemplate

 
	@Override
	public String Access(String USUARIO, String PASS) {
		
	
    try {
        String[][] parametro = {{"USUARIO", USUARIO}, {"PASS", PASS}};


        Map<String, Object> valor = sp.store("SP_VALIDA_LOGIN", parametro, getTemplate());
        
        ArrayList array =(ArrayList)valor.get("#result-set-1");
        
        Map resultMap=(Map)array.get(0);
        
        
        return (String)resultMap.get("RESPONSE").toString();

    } catch (Exception e) {

    	  System.out.println( "ERROR EN LOGIN DAOIMP -SP_VALIDA_LOGIN"+e.getMessage());
    	  
    	  return e.getMessage();
    }//fiN EXCEPTION 
	}/*FINAL DEL METODO ACCESS*/

}
