package com.example.rest_api.controller;

import com.example.rest_api.entity.Parking;
import com.example.rest_api.service.CarParkingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
