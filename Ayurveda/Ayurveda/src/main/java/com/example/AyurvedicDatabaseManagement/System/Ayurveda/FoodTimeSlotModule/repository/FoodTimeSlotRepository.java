package com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodTimeSlotModule.repository;

import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodTimeSlotModule.entity.FoodTimeSlot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoodTimeSlotRepository extends JpaRepository<FoodTimeSlot, Integer> {
    // This correctly looks for the 'foodId' property inside the 'foodItem' property
    List<FoodTimeSlot> findByFoodItemFoodId(String foodId);
}