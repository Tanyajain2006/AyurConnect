package com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.controller;

import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.dto.FoodDetailsDTO;
import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.entity.FoodItem;
import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.service.FoodItemService;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food-items")
public class FoodItemController {

    private static final Logger log = LoggerFactory.getLogger(FoodItemController.class);

    @Autowired
    private FoodItemService foodItemService; // Injecting the service instead of repository

    // Create a food item
    @PostMapping // Added missing annotation
    public FoodItem createFoodItem(@RequestBody FoodItem foodItem) {
        return foodItemService.createFoodItem(foodItem);
    }

    // Read the food item by its name
    @GetMapping("/name/{Food_name}")
    public ResponseEntity<FoodItem> getFoodItemByName(@PathVariable String Food_name) {
        log.info("CONTROLLER: Received request to find food by name: '{}'", Food_name);
        return foodItemService.getFoodItemByName(Food_name)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // READ all food items
    @GetMapping
    public List<FoodItem> getAllFoodItems() {
        return foodItemService.getAllFoodItems();
    }

    // UPDATE a food item
    @PutMapping("/{id}")
    public ResponseEntity<FoodItem> updateFoodItem(@PathVariable String id, @RequestBody FoodItem foodItemDetails) {
        return foodItemService.updateFoodItem(id, foodItemDetails)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // DELETE a food item
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFoodItem(@PathVariable String id) {
        if (foodItemService.deleteFoodItem(id)) {
            return ResponseEntity.ok().build(); // Successfully deleted
        } else {
            return ResponseEntity.notFound().build(); // Item not found
        }
    }

    @GetMapping("/details/{foodName}")
    public ResponseEntity<FoodDetailsDTO> getFoodDetails(@PathVariable String foodName) {
        return foodItemService.getFoodDetailsByName(foodName)
                .map(ResponseEntity::ok) // If DTO is present, return 200 OK with the DTO
                .orElseGet(() -> ResponseEntity.notFound().build()); // If not, return 404 Not Found
    }
}