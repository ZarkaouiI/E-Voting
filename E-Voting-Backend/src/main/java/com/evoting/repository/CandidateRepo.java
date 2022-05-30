package com.evoting.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.evoting.model.Candidate;

@Repository
public interface CandidateRepo extends JpaRepository<Candidate, Long> {
	Candidate findBycandidateName(String name);
	Candidate findByPartyName(String partyName);
	List<Candidate> findByOrderByVoteCountDesc();
}
