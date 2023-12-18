package com.example.ApiONG.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.ApiONG.entities.Animal;
import com.example.ApiONG.repository.AnimalRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/animais")
@CrossOrigin
public class AnimalController {

    @Autowired
    AnimalRepository animalRepository;

    @GetMapping
    public List<Animal> getAnimais() {
        return animalRepository.findAll();
    }

    @PostMapping
    public Animal inserirAnimal(@RequestBody Animal animal) {
        return animalRepository.save(animal);
    }

    @PutMapping("/{id}")
    public Animal alterarAnimal(@PathVariable("id") Long id, @RequestBody Animal animal) {
        Optional<Animal> opAnimal = animalRepository.findById(id);
        if (opAnimal.isPresent()) {
        	Animal an = opAnimal.get();
            an.setNome(animal.getNome());
            an.setIdade(animal.getIdade());
            an.setPorte(animal.getPorte());
            an.setEspecie(animal.getEspecie());
            an.setGenero(animal.getGenero());
            an.setSaude(animal.getSaude());
            return animalRepository.save(an);
        }
        return null;
    }

    @GetMapping("/{id}")
    public Animal getUmAnimal(@PathVariable("id") long id) {
        Optional<Animal> opAnimal = animalRepository.findById(id);
        if (opAnimal.isPresent()) {
            return opAnimal.get();
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void excluirUmAnimal(@PathVariable("id") long id) {
        Optional<Animal> opAnimal = animalRepository.findById(id);
        if (opAnimal.isPresent()) {
        	Animal animal = opAnimal.get();
        	animalRepository.delete(animal);
        }
    }
}