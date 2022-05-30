package com.evoting.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="Partydeatils")
public class Party {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
	private String partyName;
	@Column
	private String leader;
	@Column
	private String symbol;
	@Column
	private int numCandidates;
	
	public String getPartyName() {
		return this.partyName;
	}
	
	public void setPartyName(String partyName) {
		this.partyName = partyName;
	}
	
	public String getLeader() {
		return this.leader;
	}
	
	public void setLeader(String leader) {
		this.leader = leader;
	}
	
	public String getSysmbol() {
		return this.symbol;
	}
	
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}
	
	public int getNumCandidates() {
		return this.numCandidates;
	}
	
	public void setNumCandidates(int num) {
		this.numCandidates = num;
	}
}
