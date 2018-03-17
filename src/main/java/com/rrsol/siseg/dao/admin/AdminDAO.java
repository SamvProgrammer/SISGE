package com.rrsol.siseg.dao.admin;

import java.util.ArrayList;
import java.util.List;

public interface AdminDAO {
	
	
	public String ADD_USUARIO(String USUARIO, String PASS, String ESTADO, String OID_USUARIO);

	public List GET_USUARIO();

	public void ESTADO_USUARIO(String OID_USUARIO,String ESTADO);

	public String ADD_PARTIDO(String PARTIDO, String ABREVIATURA, String ESTADO, String OID_PARTIDO);

	public ArrayList GET_PARTIDO();

	public void ESTADO_PARTIDO(String OID_PARTIDO, String ESTADO);

	public ArrayList GET_PARTIDO_ACTIVO();

	public ArrayList GET_ALL_ESTADO();

	public String ADD_ESTADO(String nOMBRE_ESTADO, String pERIODO_INICIAL, String pERIODO_FINAL,
			String pARTIDO_POLITICO, String hABITANTES, String vIVIENDAS, String eSTADO, String oID_ESTADO);

	public void ESTATUS_ESTADO(String oID_ESTADO, String eSTADO);

	public String ADD_MOTIVO(String mOTIVO, String eSTADO, String oID_MOTIVO);

	public ArrayList GET_MOTIVO();

	public void ESTADO_MOTIVO(String oID_ESTADO, String eSTADO);

	public void ESTADO_PROFESION(String oID_PROFESION, String eSTADO);

	public ArrayList GET_PROFESION();

	public String ADD_PROFESION(String pROFESION,String abreviatura, String eSTADO, String oID_PROFESION);

	public String ADD_PUESTO(String pUESTO, String eSTADO, String oID_PUESTO);

	public ArrayList GET_PUESTO();

	public void ESTADO_PUESTO(String oID_PUESTO, String eSTADO);

	public String ADD_MUNICIPIO(String nOMBRE_MUNICIPIO,String OID_ESTADO ,String pERIODO_INICIAL, String pERIODO_FINAL,
			String pARTIDO_POLITICO, String hABITANTES, String vIVIENDAS, String eSTADO, String OID_MUNICIPIO);

	public ArrayList GET_MUNICIPIO();

	public void ESTADO_MUNICIPIO(String oID_MUNICIPIO, String eSTADO);

	public ArrayList GET_ENTIDAD();



}
