package com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.service;

import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.dto.FoodDetailsDTO;
import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.entity.FoodItem;
import java.util.List;
import java.util.Optional;

public interface FoodItemService {
    FoodItem createFoodItem(FoodItem foodItem);
    Optional<FoodItem> getFoodItemByName(String foodName);
    List<FoodItem> getAllFoodItems();
    Optional<FoodDetailsDTO> getFoodDetailsByName(String foodName);
    Optional<FoodItem> updateFoodItem(String id, FoodItem foodItemDetails);
    boolean deleteFoodItem(String id);
}