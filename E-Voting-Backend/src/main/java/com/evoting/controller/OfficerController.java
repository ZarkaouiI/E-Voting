package com.evoting.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.evoting.model.VoterId;
import com.evoting.repository.VoterIdRepo;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/officer")
public class OfficerController {
	
	@Autowired
	private VoterIdRepo voterIdRepo;
	
	@GetMapping("/all/pending")
	public List<VoterId> getPendingRequest(){
		return voterIdRepo.findAll();
	}
	
	@PutMapping("/approve/pending")
	public boolean updateStatus(@RequestBody String name) {
		VoterId voterId = voterIdRepo.findByName(name);
		voterId.setIsOfficerApproved(true);
		voterIdRepo.save(voterId);
		return true;
	}
}
