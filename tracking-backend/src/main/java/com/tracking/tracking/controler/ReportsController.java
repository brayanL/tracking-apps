package com.tracking.tracking.controler;

import com.tracking.tracking.entity.Tour;
import com.tracking.tracking.repository.TourRepository;
import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/reports")
public class ReportsController {

    @Autowired
    private TourRepository tourRepository;

    @GetMapping("/tours/range-date")
    public ResponseEntity<List<Tour>> showToursByRangeDate(Authentication authentication,
                                                           @RequestParam String fromDate,
                                                           @RequestParam String toDate) throws ParseException {

        DateFormat completeDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
        List<Tour> tourList = tourRepository.showToursByRangeDate(authentication.getName(),
                completeDateFormat.parse(fromDate),
                completeDateFormat.parse(toDate));
        return ResponseEntity.ok(tourList);
    }
}
