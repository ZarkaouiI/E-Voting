package com.evoting.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.evoting.model.Election;

@Repository
public interface ElectionRepo extends JpaRepository<Election, Long> {
	Election findByName(String name);
}
