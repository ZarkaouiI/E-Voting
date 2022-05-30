package com.evoting.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Electiondetails")
public class Election {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
	private String name;
	@Column
	private String state;
	@Column
	private String district;
	@Column
	private String votingDate;
	@Column
	private String resultDate;
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void setState(String state) {
		this.state = state;
	}
	
	public void setDistrict(String district) {
		this.district = district;
	}
	
	public void setVotingDate(String votingDate) {
		this.votingDate = votingDate;
	}
	
	public void setResultDate(String resultDate) {
		this.resultDate = resultDate;
	}
	
	public String getName() {
		return this.name;
	}
	
	public String getState() {
		return this.state;
	}
	
	public String getDistrict() {
		return this.district;
	}
	
	public String getVotingDate() {
		return this.votingDate;
	}
	
	public String getResultDate() {
		return this.resultDate;
	}
	
}
