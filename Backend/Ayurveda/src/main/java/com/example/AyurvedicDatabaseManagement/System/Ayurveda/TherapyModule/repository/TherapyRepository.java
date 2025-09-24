package com.example.AyurvedicDatabaseManagement.System.Ayurveda.TherapyModule.repository;

import com.example.AyurvedicDatabaseManagement.System.Ayurveda.TherapyModule.entity.Therapy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TherapyRepository extends JpaRepository<Therapy, Integer> {
}
