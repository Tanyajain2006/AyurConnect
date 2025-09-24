package com.example.AyurvedicDatabaseManagement.System.Ayurveda.PatientModule.repository;

import com.example.AyurvedicDatabaseManagement.System.Ayurveda.PatientModule.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
    Optional<Patient> findByNameAndContactNumber(String name, String contactNumber);
}
