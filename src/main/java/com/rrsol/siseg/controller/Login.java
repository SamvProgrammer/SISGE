package com.rrsol.siseg.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.rrsol.siseg.dao.login.loginDAO;

/**
 * Handles requests for the application home page.
 */
@Controller
public class Login {
    @Autowired
    loginDAO sesion;
	
    
    
    @RequestMapping(value="/login", method=RequestMethod.GET)
    public ModelAndView login(@RequestParam(value = "error",required = false) String error,
	@RequestParam(value = "logout",	required = false) String logout){
        
        ModelAndView mav = new ModelAndView();
        if (error != null) {
			mav.addObject("error", "Error de usuario o contraseña, credencial no valida.");
		}

		if (logout != null) {
			mav.addObject("message", "Se ha desconectado el usuario");
		}
        mav.setViewName("login");
        return mav;
    }
    
    @Secured("ROLE_USER")
	@RequestMapping(value = "/Home", method = RequestMethod.GET)
	public String home( Model model) {

			
				return "home";

	}/*FINAL DE LA CLASE HOME*/
	

	
	
}/*FINAL DEL CONTROLADOR DEL LOGIN*/
