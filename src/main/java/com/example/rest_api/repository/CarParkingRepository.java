package com.example.rest_api.repository;

import com.example.rest_api.entity.Parking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarParkingRepository extends JpaRepository<Parking,Integer> {
    List<Parking> findByParkingCodeContaining(String keyword);
}
