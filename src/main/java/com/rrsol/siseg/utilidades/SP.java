package com.rrsol.siseg.utilidades;


import java.util.HashMap;
import java.util.Map;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;

/**
 *
 * @author SIG01
 */
public class SP {

        
public Map<String, Object> store(String nomProcedimiento,String[][] parametro,JdbcTemplate jdbcTemplate){

    try{
            
        Map<String, Object> parametrosIngresoMap = new HashMap<String, Object>();

		SimpleJdbcCall info = new SimpleJdbcCall(jdbcTemplate).withProcedureName(nomProcedimiento);
            
                for(int x=0;x<parametro.length;x++){
                       for(int i=0;i<parametro[i].length;i++){
                          //System.out.println("parameter "+parametro[x][i]+" value "+parametro[x][i+1]);
                              parametrosIngresoMap.put(parametro[x][i],parametro[x][i+1]);
                              break;
                       }
                 }//final del for
 
               

               SqlParameterSource parametrosCountDataFile = new MapSqlParameterSource().addValues(parametrosIngresoMap);

                Map<String, Object> parametrosSalida = info.execute(parametrosCountDataFile);

		return parametrosSalida;
        }catch(Exception e){
        System.out.println("Error en el Store1 "+e.getMessage()+" Procedure "+nomProcedimiento+" Exception "+e);
           return null;
        
        }

}///final de la funcion de procedimientos con un procedimiento
}
