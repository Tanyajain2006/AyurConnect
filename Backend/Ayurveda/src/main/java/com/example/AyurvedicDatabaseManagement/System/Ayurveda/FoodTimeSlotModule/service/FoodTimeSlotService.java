package com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodTimeSlotModule.service;

import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodTimeSlotModule.entity.FoodTimeSlot;
import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodTimeSlotModule.repository.FoodTimeSlotRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FoodTimeSlotService {

    private final FoodTimeSlotRepository repository;

    public FoodTimeSlotService(FoodTimeSlotRepository repository) {
        this.repository = repository;
    }

    public List<FoodTimeSlot> getAllSlots() {
        return repository.findAll();
    }

    public FoodTimeSlot saveSlot(FoodTimeSlot slot) {
        return repository.save(slot);
    }

    public void deleteSlot(int id) {
        repository.deleteById(id);
    }

    /**
     * Finds all time slots associated with a specific food ID.
     * @param foodId The ID of the food to search for.
     * @return A list of matching FoodTimeSlot objects.
     */
    public List<FoodTimeSlot> getSlotsByFood(String foodId) {
        return repository.findByFoodItemFoodId(foodId);
    }
}