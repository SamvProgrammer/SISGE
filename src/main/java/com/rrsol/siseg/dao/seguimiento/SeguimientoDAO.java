package com.rrsol.siseg.dao.seguimiento;

import java.util.ArrayList;

public interface SeguimientoDAO {

	String ADD_SEGUIMIENTO(String cONTACTO, String mOTIVO, String oBSERVACION, String fECHA, String eSTATUS,
			String eSTADO, String oID_SEGUIMIENTO);

	ArrayList GET_SEGUIMIENTO(String OID_DEPENDENCIA,String OID_CONTACTO,String FECHA_INICIO,String FECHA_FIN,String ESTADO,
			  String ENTIDAD,String MUNICIPIO,String PARTIDO,String OPERADOR_INICIAL,String INTERVALO_INICIAL
			  ,String RADIO);

	ArrayList GET_DEPENDENCIA_ACTIVO();

	ArrayList GET_MOTIVO_ACTIVO();

	ArrayList GET_CONTACTO_SEGUIMIENTO(String OID_DEPENDENCIA);

	ArrayList GET_ALL_SEGUIMIENTO(String oID_SEGUIMIENTO);

	ArrayList GET_SEGUIMIENTO();

}
