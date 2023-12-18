package com.example.ApiONG.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ApiONG.entities.Animal;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Long> {

}