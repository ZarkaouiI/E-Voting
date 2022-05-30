package com.evoting.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="VoterIds")
public class VoterId {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column
	private String name;
	@Column
	private boolean isRequested =  false;
	@Column
	private boolean isAdminApproved = false;
	@Column
	private boolean isOfficerApproved = false;
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setIsRequested(boolean bool) {
		this.isRequested = bool;
	}
	
	public void setIsAdminApproved(boolean bool) {
		this.isAdminApproved = bool;
	}
	
	public void setIsOfficerApproved(boolean bool) {
		this.isOfficerApproved = bool;
	}
	
	public boolean getIsRequested() {
		return this.isRequested;
	}
	
	public boolean getIsAdminApproved() {
		return this.isAdminApproved;
	}
	
	public boolean getIsOfficerApproved() {
		return this.isOfficerApproved;
	}

	public Long getId() {
		return this.id;
	}
}
