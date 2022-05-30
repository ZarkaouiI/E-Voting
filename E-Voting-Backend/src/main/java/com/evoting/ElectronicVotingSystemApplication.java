package com.evoting;

//import java.util.ArrayList;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


//import com.ElectronicVotingSystem.model.UserType;
//import com.ElectronicVotingSystem.repository.UserRepository;
//import com.ElectronicVotingSystem.repository.UserTypeRepository;

//import com.ElectronicVotingSystem.model.UserProfile;

@SpringBootApplication
public class ElectronicVotingSystemApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(ElectronicVotingSystemApplication.class, args);
	}
	
	
//	@Autowired
//	private UserRepository userRepository;
	
//	@Autowired
//	private UserTypeRepository userTypeRepository;

	@Override
	public void run(String... args) throws Exception {
//		UserProfile user = new UserProfile();
//		user.setName("Abhimanyu");
//		user.setDob("22/06/2001");
//		user.setEmailId("a12baghel2@gmail.com");
//		user.setGender("Male");
//		user.setPermanentAddress("H. No.31, Faridabad");
//		user.setPhoneNumber(1234567892);
//		user.setPresentAddress("H. No.31, Faridabad");
//		user.setPassword("admin123");
//		user.setRole(new ArrayList<>());
//		userRepository.save(user);
		
//		UserType userType = new UserType();
//		userType.setUserType("admin");
//		userTypeRepository.save(userType);
//		UserType userType1 = new UserType();
//		userType1.setUserType("officer");
//		userTypeRepository.save(userType1);
//		UserType userType2 = new UserType();
//		userType2.setUserType("voter");
//		userTypeRepository.save(userType2);
	}
}
