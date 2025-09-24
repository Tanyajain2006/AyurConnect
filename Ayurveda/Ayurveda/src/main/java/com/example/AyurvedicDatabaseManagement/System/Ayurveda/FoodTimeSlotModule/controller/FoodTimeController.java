package com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodTimeSlotModule.controller;

import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodTimeSlotModule.entity.FoodTimeSlot;
import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodTimeSlotModule.service.FoodTimeSlotService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/timeslots")
public class FoodTimeController {

    private final FoodTimeSlotService service;

    public FoodTimeController(FoodTimeSlotService service) {
        this.service = service;
    }

    @GetMapping
    public List<FoodTimeSlot> getAllSlots() {
        return service.getAllSlots();
    }

    @GetMapping("/{foodId}")
    public List<FoodTimeSlot> getSlotsByFood(@PathVariable String foodId) {
        return service.getSlotsByFood(foodId);
    }

    @PostMapping
    public FoodTimeSlot createSlot(@RequestBody FoodTimeSlot slot) {
        return service.saveSlot(slot);
    }

    @DeleteMapping("/{id}")
    public void deleteSlot(@PathVariable int id) {
        service.deleteSlot(id);
    }
}

