package com.rrsol.siseg.SISEG;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;



@SpringBootApplication(scanBasePackages={"com.rrsol.siseg.*"})
@EnableAutoConfiguration
public class SisegApplication {

	public static void main(String[] args) {
		SpringApplication.run(SisegApplication.class, args);
	}
}
