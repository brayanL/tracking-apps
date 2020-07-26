package com.tracking.tracking.service;

import com.tracking.tracking.entity.Tour;
import com.tracking.tracking.entity.User;
import com.tracking.tracking.repository.TourRepository;
import org.joda.time.DateTime;
import org.joda.time.Hours;
import org.joda.time.Minutes;
import org.joda.time.Seconds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("tourService")
public class TourService {

    private DateTime dateStart;
    private DateTime dateFinish;

    @Autowired
    private UserService userService;

    @Autowired
    private TourRepository tourRepository;

    public Tour createTour(Tour tour, String username) {
        User user = userService.getByUsername(username);
        tour.setUser(user);

        // calculate time
        dateStart = new DateTime(tour.getTimeStart());
        dateFinish = new DateTime(tour.getTimeFinish());

        int hh = Hours.hoursBetween(dateStart, dateFinish).getHours() % 24;
        int mm = Minutes.minutesBetween(dateStart, dateFinish).getMinutes() % 60;
        int ss = Seconds.secondsBetween(dateStart, dateFinish).getSeconds() % 60;

        tour.setTimeTravel(String.format("%s:%s:%s", hh, mm, ss));

        return tourRepository.save(tour);
    }
}
