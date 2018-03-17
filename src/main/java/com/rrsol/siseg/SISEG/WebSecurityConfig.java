package com.rrsol.siseg.SISEG;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.authentication.encoding.PasswordEncoder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import javax.sql.DataSource;
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true)
@ComponentScan("com.rrsol.siseg.*")
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	
    @Autowired
    DataSource dataSource;
	
    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;

    }
	
	
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	 http.csrf().disable();
    	 http.authorizeRequests().antMatchers("/login","/**").permitAll();
    	 http.authorizeRequests().and().formLogin()
             .loginProcessingUrl("/login")
             .loginPage("/login")
 		     .defaultSuccessUrl("/Home")
 			.failureUrl("/login?error")
 			.usernameParameter("username").passwordParameter("password")				
 			.and()
 				.logout().logoutSuccessUrl("/login?logout");

    }


    
    
    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().dataSource(dataSource)
        		.passwordEncoder(passwordEncoder())
                .usersByUsernameQuery("SELECT USUARIO,PASS,ESTADO FROM SIS_USUARIO where USUARIO=?")
                .authoritiesByUsernameQuery("SELECT USUARIO, ROLE FROM SIS_ROLE where USUARIO=?");
    }
    
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
    	return new BCryptPasswordEncoder();
    }

}