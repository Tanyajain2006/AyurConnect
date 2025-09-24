package com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.repository;

import com.example.AyurvedicDatabaseManagement.System.Ayurveda.FoodModule.entity.FoodItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FoodItemRepository extends JpaRepository<FoodItem, String> {
    @Query("SELECT f FROM FoodItem f WHERE LOWER(f.foodName) = LOWER(?1)")
    Optional<FoodItem> findByFoodName(String foodName);
}
