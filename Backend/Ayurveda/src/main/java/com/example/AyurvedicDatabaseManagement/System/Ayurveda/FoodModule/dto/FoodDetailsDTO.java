package com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class FoodDetailsDTO {

    private String foodName;
    private String category;
    private double energyKcal;

    // --- FIX: Add the missing fields ---
    private String rasa;
    private String guna;
    private String virya;
    // --- End of Fix ---

    private List<String> recommendedTimes;

    // You can now DELETE the empty setRasa, setGuna, and setVirya methods.
    // Lombok will handle them automatically because of the @Setter annotation above.
}