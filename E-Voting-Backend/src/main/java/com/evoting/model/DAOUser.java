package com.evoting.model;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class DAOUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
	private String username;
	@Column
	private String password;
	@Column
	private String role;
	@Column
	private String dob;
	@Column
	private String gender;
	@Column
	private String presentAddress;
	@Column
	private String permanentAddress;
	@Column
	private String phoneNumber;
	@Column
	private String name;

	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getPhoneNumber() {
		return this.phoneNumber;
	}
	
	public void setPhoneNumber(String phone) {
		this.phoneNumber = phone;
	}
	
	public String getPresentAddress() {
		return this.presentAddress;
	}
	public void setPresentAddress(String address) {
		this.presentAddress = address;
	}
	
	public String getPermanentAddress() {
		return this.permanentAddress;
	}
	
	public void setPermanentAddress(String address) {
		this.permanentAddress = address;
	}
	
	public String getGender() {
		return this.gender;
	}
	public String getDob() {
		return this.dob;
	}
	
	public void setGender(String gender) {
		this.gender = gender;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	
	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
