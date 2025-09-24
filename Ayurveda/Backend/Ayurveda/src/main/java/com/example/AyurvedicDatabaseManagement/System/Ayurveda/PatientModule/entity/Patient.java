package com.example.AyurvedicDatabaseManagement.System.Ayurveda.PatientModule.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "patients")
@Getter
@Setter
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Patient_ID")
    private int id;

    @Column(name = "Name")
    private String name;

    @Column(name = "Age")
    private int age;

    @Column(name = "Gender")
    private String gender;

    @Column(name = "Health_Condition")
    private String health_condition;

    @Column(name = "Dosha_Imbalance")
    private String doshaImbalance;

    @Column(name = "Address")
    private String address;

    @Column(name = "contact_number")
    private String contactNumber;

    // Ayurvedic-specific fields
    private String vikriti;  // Current imbalances
    private String prakriti; // Patient's constitution (e.g., Vata, Pitta, Kapha)

    @ElementCollection
    @CollectionTable(name = "patient_medical_history", joinColumns = @JoinColumn(name = "patient_id"))
    @Column(name = "history_item")

    private List<String> medicalHistory;
}
