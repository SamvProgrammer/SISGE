package com.rrsol.siseg.dao.dependencia;

import java.util.ArrayList;

public interface dependenciaDAO {

	public ArrayList GET_ENTIDAD();

	public ArrayList GET_MUNICIPIO(String oID_MUNICIPIO);

	public ArrayList GET_DEPENDENCIA();

	public String ADD_DEPENDENCIA(String dEPENDENCIA, String tELEFONO, String cORREO, String pAGINA_WEB,
			String oID_ESTADO, String oID_MUNICIPIO, String dELEGACION, String cOLONIA, String cALLE,
			String nUMERO_INTERIOR, String nUMERO_EXTERIOR, String eSTATUS, String eSTADO, String oID_DEPENDENCIA);

	public void ESTADO_DEPENDENCIA(String oID_DEPENDENCIA, String eSTADO);

	public ArrayList GET_PROFESION_ACTIVO();

	public ArrayList GET_PUESTO_ACTIVO();

	public ArrayList GET_CONTACTO();

	public String ADD_CONTACTO(String DEPENDENCIA,String nOMBRE, String dEPARTAMENTO, String oID_PUESTO,
			String oID_PROFESION, String tELEFONO, String cELULAR, String cORREO, String eSTADO, String oID_CONTACTO);

	public void ESTADO_CONTACTO(String oID_CONTACTO, String eSTADO);

	public ArrayList GET_DEPENDENCIA_ACTIVO();



}
