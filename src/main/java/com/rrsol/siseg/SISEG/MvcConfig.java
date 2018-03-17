package com.rrsol.siseg.SISEG;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
public class MvcConfig extends WebMvcConfigurerAdapter {


	   @Override
	    public void addResourceHandlers(ResourceHandlerRegistry registry) {
	        registry.addResourceHandler("/**").addResourceLocations("/resources/");
	    }

	   @Override
	   public void addViewControllers(ViewControllerRegistry registry) {
	       registry.addViewController("/").setViewName("forward:/login");
	   }
    	 @Bean
    	 public InternalResourceViewResolver viewResolver() {
    	  InternalResourceViewResolver resolver = new InternalResourceViewResolver();
    	  resolver.setPrefix("/WEB-INF/views/");
    	  resolver.setSuffix(".jsp");
    	  return resolver;
    	 }
}