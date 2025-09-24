package com.example.AyurvedicDatabaseManagement.System.Ayurveda.PatientModule.service;

import com.example.AyurvedicDatabaseManagement.System.Ayurveda.PatientModule.entity.Patient;
import com.example.AyurvedicDatabaseManagement.System.Ayurveda.PatientModule.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service // Marks this as a service layer component
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    // You could inject other services or repositories here
    // @Autowired
    // private LoggingRepository loggingRepository;

    public Patient createPatient(Patient patient) {
        // --- BUSINESS LOGIC GOES HERE ---
        // Example: Validate that the patient's age is not negative
        if (patient.getAge() < 0) {
            throw new IllegalArgumentException("Age cannot be negative.");
        }

        // Example: Set a default value before saving
        if (patient.getPrakriti() == null || patient.getPrakriti().isEmpty()) {
            patient.setPrakriti("Not Assessed");
        }

        return patientRepository.save(patient);
    }

    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public Optional<Patient> getPatientByNameAndContactNumber(String name, String contactNumber) {
        return patientRepository.findByNameAndContactNumber(name, contactNumber);
    }

    public Patient updatePatient(Integer id, Patient patientDetails) {
        // THIS IS WHERE THE LOGIC BELONGS
        Patient existingPatient = patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found with id: " + id));

        existingPatient.setName(patientDetails.getName());
        existingPatient.setAge(patientDetails.getAge());
        // ... set all other fields ...

        return patientRepository.save(existingPatient); // This will work here
    }

    public Optional<Patient> getPatientById(Integer id) {
        // Simply call the repository's built-in findById method and return the result.
        return patientRepository.findById(id);
    }

    public void deletePatient(Integer id) {
        // 1. It's good practice to first check if the entity exists.
        boolean exists = patientRepository.existsById(id);

        // 2. If it doesn't exist, throw an exception to let the controller know.
        if (!exists) {
            throw new RuntimeException("Patient not found with id: " + id);
        }

        // 3. If it exists, call the repository's delete method.
        patientRepository.deleteById(id);
    }
}