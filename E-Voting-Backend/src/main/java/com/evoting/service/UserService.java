//package com.ElectronicVotingSystem.service;
//
//import java.util.ArrayList;
//import java.util.Collection;
//
//
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import com.ElectronicVotingSystem.exception.ResourceNotFoundException;
//import com.ElectronicVotingSystem.model.UserProfile;
//import com.ElectronicVotingSystem.repository.UserRepository;
//
//import lombok.RequiredArgsConstructor;
//
//@Service
//@RequiredArgsConstructor
//public class UserService implements UserDetailsService {
//	private UserRepository userRepository;
//	
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		UserProfile user = userRepository.findByEmailId(username);
//		if(user == null) {
//			throw new ResourceNotFoundException("USER NOT FOUND");
//		}
//		Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
//		user.getRole().forEach(role -> {
//			authorities.add(new SimpleGrantedAuthority(role.getType()));
//		});
//		return new User(user.getEmailId(),user.getPassword(),authorities);
//	}
//
//}
