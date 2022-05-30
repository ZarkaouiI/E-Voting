package com.evoting.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.evoting.model.Candidate;
import com.evoting.model.Election;
import com.evoting.model.Party;
import com.evoting.model.VoterId;
import com.evoting.repository.CandidateRepo;
import com.evoting.repository.ElectionRepo;
import com.evoting.repository.PartyRepo;
import com.evoting.repository.VoterIdRepo;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/admin")
public class AdminController {
	
	@Autowired
	private PartyRepo partyRepo;
	
	@Autowired
	private CandidateRepo candidateRepo;
	
	@Autowired
	private ElectionRepo electionRepo;
	
	@Autowired
	private VoterIdRepo voterIdRepo;
	
	@GetMapping("/get/pending/voterid")
	public List<VoterId> getPendingRequest(){
		return voterIdRepo.findAll();
	}
	
	@PutMapping("/approve/pending/voterid")
	public boolean getApprovedStatus(@RequestBody String name) {
		VoterId voterId = voterIdRepo.findByName(name);
		voterId.setIsAdminApproved(true);
		voterIdRepo.save(voterId);
		return true;
	}
	
	@GetMapping("/declare/result")
	public List<Candidate> getResult() {
		List<Candidate> list = candidateRepo.findByOrderByVoteCountDesc();
		return list;
	}
	
	@PostMapping("/add/election")
	public Election addElection(@RequestBody Election election) {
		return electionRepo.save(election);
	}
	
	@GetMapping("/upcoming")
	public List<Election> getUpcomingElection(){
		return electionRepo.findAll();
	}
	
	@PostMapping("/add/party")
	public Party addPartyDeatils(@RequestBody Party party) {
		return partyRepo.save(party);
	}
	
	@GetMapping("/view/party")
	public List<Party> getPartyDetail(){
		return partyRepo.findAll();
	}
	
	@PostMapping("/assign/candidate")
	public Candidate addCandidateToElection(@RequestBody Candidate candidate) {
		return candidateRepo.save(candidate);
	}
	
	@GetMapping("/detail/candidate/all")
	public List<Candidate> getAllCandidate(){
		return candidateRepo.findAll();
	}
	
	@GetMapping("/detail/candidate/{name}")
	public Candidate getParticularCandidate(@PathVariable String name){
		return candidateRepo.findBycandidateName(name);
	}
	
}

