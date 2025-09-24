package com.example.AyurvedicDatabaseManagement.System.Ayurveda.PatientModule.controller;

import com.example.AyurvedicDatabaseManagement.System.Ayurveda.PatientModule.entity.Patient;
import com.example.AyurvedicDatabaseManagement.System.Ayurveda.PatientModule.repository.PatientRepository;
import com.example.AyurvedicDatabaseManagement.System.Ayurveda.PatientModule.service.PatientService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
@Getter
@Setter
public class PatientController {

    @Autowired
    private PatientService patientService; // Injects the Service, NOT the Repository

    @PostMapping
    public Patient createPatient(Patient patient) {
        // The controller's only job is to delegate to the service.
        // All business logic is now handled inside patientService.createPatient()
        return patientService.createPatient(patient);
    }

    @GetMapping
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable Integer id) {
        return patientService.getPatientById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/search") // A good practice for custom searches
    public ResponseEntity<Patient> getPatientByNameAndContactNumber(
            @RequestParam String name,
            @RequestParam String contactNumber) {

        return patientService.getPatientByNameAndContactNumber(name, contactNumber)
                .map(ResponseEntity::ok) // If patient is found, return 200 OK with the patient data
                .orElse(ResponseEntity.notFound().build()); // If not found, return 404 Not Found
    }

    @PutMapping("/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable Integer id, @RequestBody Patient patientDetails) {
        // THE CONTROLLER JUST DELEGATES THE CALL TO THE SERVICE
        try {
            Patient updatedPatient = patientService.updatePatient(id, patientDetails);
            return ResponseEntity.ok(updatedPatient);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePatient(@PathVariable Integer id) {
        try {
            patientService.deletePatient(id);
            return ResponseEntity.ok().build(); // Return 200 OK on successful deletion
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
