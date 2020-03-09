package com.tracking.tracking.repository;

import com.tracking.tracking.entity.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

@Repository("manageTour")
public interface TourRepository extends JpaRepository<Tour, Serializable> {

    @Query(value = "SELECT t from Tour t WHERE t.user.username = :username")
    List<Tour> showToursByUser(String username);
}
