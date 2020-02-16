package com.tracking.tracking.repository;

import com.tracking.tracking.entity.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Repository("manageTour")
public interface TourRepository extends JpaRepository<Tour, Serializable> {

}
