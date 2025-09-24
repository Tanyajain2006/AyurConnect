package com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.repository;

import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.dto.FoodDetailsDTO;
import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.entity.FoodItem;
import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.service.FoodItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service // Marks this class as a Spring service component
public class FoodItemServiceImpl implements FoodItemService {

    @Autowired // Injects the repository to interact with the database
    private FoodItemRepository foodItemRepository;

    @Override
    public FoodItem createFoodItem(FoodItem foodItem) {
        return foodItemRepository.save(foodItem);
    }

    @Override
    public Optional<FoodItem> getFoodItemByName(String foodName) {
        // This is the method we were debugging earlier
        return foodItemRepository.findByFoodName(foodName);
    }

    @Override
    public List<FoodItem> getAllFoodItems() {
        return foodItemRepository.findAll();
    }

    @Override
    public Optional<FoodItem> updateFoodItem(String id, FoodItem foodItemDetails) {
        return foodItemRepository.findById(id).map(existingFood -> {
            existingFood.setFoodName(foodItemDetails.getFoodName());
            existingFood.setCategory(foodItemDetails.getCategory());
            // Set other fields as needed...
            return foodItemRepository.save(existingFood);
        });
    }

    @Override
    public boolean deleteFoodItem(String id) {
        if (foodItemRepository.existsById(id)) {
            foodItemRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<FoodDetailsDTO> getFoodDetailsByName(String foodName) {
        // This logic requires you to find the FoodItem first, then build a DTO
        return foodItemRepository.findByFoodName(foodName).map(foodItem -> {
            // Create a DTO and transfer data from the entity
            FoodDetailsDTO dto = new FoodDetailsDTO();
            dto.setFoodName(foodItem.getFoodName());
            dto.setCategory(foodItem.getCategory());
            dto.setRasa(foodItem.getRasa());
            dto.setGuna(foodItem.getGuna());
            dto.setVirya(foodItem.getVirya());

            if (foodItem.getTimeSlots() != null) {
                List<String> timeSlotNames = foodItem.getTimeSlots().stream()
                        .map(timeSlot -> timeSlot.getSlotName()) // Assumes FoodTimeSlot has getSlotName()
                        .toList();
                dto.setRecommendedTimes(timeSlotNames);
            }

            return dto;
        });
    }
}