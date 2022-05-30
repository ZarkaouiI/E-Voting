package com.evoting.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.evoting.model.VoterId;

@Repository
public interface VoterIdRepo extends JpaRepository<VoterId, Long> {
	VoterId findByName(String name);
}
