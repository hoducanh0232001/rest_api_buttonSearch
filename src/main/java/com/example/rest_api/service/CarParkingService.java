package com.example.rest_api.service;

import com.example.rest_api.entity.Parking;

import java.util.List;

public interface CarParkingService {

    List<Parking> searchAll(String keyword);
}
