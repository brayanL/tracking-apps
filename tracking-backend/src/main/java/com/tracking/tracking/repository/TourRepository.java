package com.tracking.tracking.repository;

import com.tracking.tracking.entity.Tour;
import org.joda.time.DateTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Temporal;
import org.springframework.stereotype.Repository;

import javax.persistence.TemporalType;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Repository("manageTour")
public interface TourRepository extends JpaRepository<Tour, Serializable> {

    @Query(value = "SELECT t from Tour t WHERE t.user.username = :username")
    List<Tour> showToursByUser(String username);

    @Query(value = "SELECT t from Tour t WHERE t.user.username = :username AND t.timeFinish BETWEEN :fromDate AND :toDate")
    List<Tour> showToursByRangeDate(String username,
                                    @Temporal(TemporalType.TIMESTAMP) Date fromDate,
                                    @Temporal(TemporalType.TIMESTAMP) Date toDate);
}
