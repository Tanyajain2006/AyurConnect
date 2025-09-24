package com.example.AyurvedicDatabaseManagement.System.Ayurveda.TherapyModule.controller;

import com.example.AyurvedicDatabaseManagement.System.Ayurveda.TherapyModule.entity.Therapy;
import com.example.AyurvedicDatabaseManagement.System.Ayurveda.TherapyModule.repository.TherapyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/therapies")
public class TherapyController {

    @Autowired
    private TherapyRepository therapyRepository;

    // CREATE a new therapy
    @PostMapping
    public Therapy createTherapy(@RequestBody Therapy therapy) {
        return therapyRepository.save(therapy);
    }

    // READ all therapies
    @GetMapping
    public List<Therapy> getAllTherapies() {
        return therapyRepository.findAll();
    }

    // READ a single therapy by ID
    @GetMapping("/{id}")
    public ResponseEntity<Therapy> getTherapyById(@PathVariable int id) {
        return therapyRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // UPDATE a therapy
    @PutMapping("/{id}")
    public ResponseEntity<Therapy> updateTherapy(@PathVariable int id, @RequestBody Therapy therapyDetails) {
        return therapyRepository.findById(id)
                .map(therapy -> {
                    therapy.setName(therapyDetails.getName());
                    therapy.setDescription(therapyDetails.getDescription());
                    therapy.setDurationInMinutes(therapyDetails.getDurationInMinutes());
                    Therapy updatedTherapy = therapyRepository.save(therapy);
                    return ResponseEntity.ok(updatedTherapy);
                }).orElse(ResponseEntity.notFound().build());
    }

    // DELETE a therapy
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTherapy(@PathVariable int id) {
        return therapyRepository.findById(id)
                .map(therapy -> {
                    therapyRepository.delete(therapy);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
