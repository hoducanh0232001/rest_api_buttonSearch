package com.example.rest_api.controller;

import com.example.rest_api.entity.Parking;
import com.example.rest_api.service.CarParkingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path="api/v1/parking")
@RequiredArgsConstructor
public class CarParkingController {

    private final CarParkingService service;

    @GetMapping("")
    public ResponseEntity<List<Parking>> searchCarParkingList(@RequestParam(required = false) String keyword){
        List<Parking> listCarParking = service.searchAll(keyword);
        return ResponseEntity.ok(listCarParking);
    }
}
