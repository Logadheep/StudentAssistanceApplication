package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Booking;

@Repository
public interface Bookingrepository extends JpaRepository<Booking,Integer> {

}
