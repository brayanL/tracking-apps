package com.tracking.tracking.controler;

import com.tracking.tracking.entity.Tour;
import com.tracking.tracking.service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
public class TourController {

    @Autowired
    private TourService tourService;

    @PostMapping("/tour")
    public @ResponseBody ResponseEntity<Tour> registerTour(@NonNull @RequestBody Tour tour, Authentication authentication) {
        return ResponseEntity.ok(tourService.createTour(tour, authentication.getName()));
    }

}
