package com.example.rest_api.service.impl;


import com.example.rest_api.entity.Parking;
import com.example.rest_api.repository.CarParkingRepository;
import com.example.rest_api.service.CarParkingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarParkingServiceImpl implements CarParkingService {

    private final CarParkingRepository carParkingRepository;

    @Override
    public List<Parking> searchAll(String keyword) {
        if(keyword == null){
            return carParkingRepository.findAll();
        }
        return carParkingRepository.findByParkingCodeContaining(keyword);
    }
}
