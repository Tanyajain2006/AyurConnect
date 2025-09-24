package com.example.AyurvedicDatabaseManagement.System.Ayurveda.TherapyModule.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "therapies")
@Getter
@Setter
public class Therapy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Therapy_ID")
    private int id;

    @Column(name = "Therapy_Name")
    private String name;

    @Column(name = "Description", length = 1000) // Allows for a longer description
    private String description;

    @Column(name = "Duration_Minutes")
    private int durationInMinutes; // Duration of one session
}
