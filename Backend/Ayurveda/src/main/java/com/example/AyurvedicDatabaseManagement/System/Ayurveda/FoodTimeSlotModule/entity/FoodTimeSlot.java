package com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodTimeSlotModule.entity;

import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.entity.FoodItem;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Food_Time_Slot")
@Getter
@Setter
public class FoodTimeSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Slot_ID")
    private int slotId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Food_ID", nullable = false)
    @JsonIgnore
    private FoodItem foodItem;

    @Enumerated(EnumType.STRING)
    @Column(name = "Recommended_Time", nullable = false)
    private TimeSlot recommendedTime;

    // --- THIS IS THE CORRECTED METHOD ---
    public String getSlotName() {
        // Return the name of the enum, e.g., "Morning"
        return this.recommendedTime.name();
    }

    // Enum for time slots
    public enum TimeSlot {
        Morning,
        Afternoon,
        Evening,
        Night
    }
