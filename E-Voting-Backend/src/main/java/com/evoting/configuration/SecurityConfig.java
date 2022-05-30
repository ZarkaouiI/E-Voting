package com.evoting.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private CustomUserDetailsService userDetailsService;
	
	@Autowired
	private CustomJwtAuthenticationFilter customJwtAuthenticationFilter;
	
	@Autowired
	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
	
	
	
	@Bean
	public PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}
	
	
	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}
	
	@Bean
	@Override

	public AuthenticationManager authenticationManagerBean() throws Exception
	{
		return super.authenticationManagerBean();
	}



	@Override
	public void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable()
		.authorizeRequests().antMatchers("/helloadmin").hasRole("ADMIN")
		.antMatchers("/api/admin/**").permitAll()
		.antMatchers("/api/user/**").permitAll()
		.antMatchers("/api/officer/**").permitAll()
		.antMatchers("/hellouser").permitAll()
		.antMatchers("/authenticate", "/register").permitAll().anyRequest().authenticated()
		.and().exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).
		and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).
		and().addFilterBefore(customJwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
	}



}

//package com.ElectronicVotingSystem.configuration;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//import com.ElectronicVotingSystem.filter.CustomAuthenticationFilter;
//
//import lombok.RequiredArgsConstructor;
//
//@Configuration
//@EnableWebSecurity
//@RequiredArgsConstructor
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//	@Autowired
//	private UserDetailsService userDetailsService;
//	
//	
//	private BCryptPasswordEncoder bCryptPasswordEncoder;
//
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}
//	
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
//		auth.userDetailsService(userDetailsService);
//	}
//	
//	@Override
//	protected void configure(HttpSecurity https) throws Exception{
//		https.csrf().disable(); 
//		https.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//		https.authorizeRequests().anyRequest().permitAll();
//		https.addFilter(new CustomAuthenticationFilter(authenticationManagerBean()));
//	}
//	
//	@Bean
//	@Override
//	public AuthenticationManager authenticationManagerBean() throws Exception {
//		return super.authenticationManagerBean();
//	}
//}
