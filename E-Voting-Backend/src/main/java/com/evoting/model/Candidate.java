package com.evoting.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="CandidateDetails")
public class Candidate {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
	private String candidateName;
	@Column
	private String partyName;
	@Column
	private int age;
	@Column
	private String constituency;
	@Column
	private String address;
	@Column
	private String contact;
	@Column
	private long voteCount = 0;
	
	public void setVoteCount() {
		this.voteCount += 1;
	}
	
	public long getVoteCount() {
		return this.voteCount;
	}
	
	
	public void setCandidateName(String name) {
		this.candidateName = name;
	}
	
	public String getCandidateName() {
		return this.candidateName;
	}
	
	public void setPartyName(String party) {
		this.partyName = party;
	}
	
	public String getPartyName() {
		return this.partyName;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	public int getAge() {
		return this.age;
	}
	
	public void setConstituency(String constituency) {
		this.constituency = constituency;
	}
	
	public String getConstituency() {
		return this.constituency;
	}
	
	public void setAddress(String add) {
		this.address = add;
	}
	
	public String getAddress() {
		return this.address;
	}
	
	public void setContact(String contact) {
		this.contact = contact;
	}
	
	public String getContact() {
		return this.contact;
	}
	
}
