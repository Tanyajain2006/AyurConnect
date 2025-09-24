package com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.entity;

import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodTimeSlotModule.entity.FoodTimeSlot;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "foods")
@Getter
@Setter
public class FoodItem {

    @Id
    @Column(name = "Food_ID")
    private String foodId;

    @Column(name = "Food_Name", nullable = false)
    private String foodName;

    @Column(name = "Category")
    private String category;

    @Column(name = "Energy_kcal")
    private Double energyKcal;

    @Column(name = "Carbs_g")
    private Double carbs;

    @Column(name = "Protein_g")
    private Double protein;

    @Column(name = "Fat_g")
    private Double fat;

    @Column(name = "Rasa")
    private String rasa;

    @Column(name = "Guna")
    private String guna;

    @Column(name = "Virya")
    private String virya;

    @Column(name = "Vipaka")
    private String vipaka;

    @Column(name = "Dosha_Effect", columnDefinition = "TEXT")
    private String doshaEffect;

    @Column(name = "Prabhava", columnDefinition = "TEXT")
    private String prabhava; // Special therapeutic action

    @OneToMany(mappedBy = "foodItem", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<FoodTimeSlot> timeSlots;
}
