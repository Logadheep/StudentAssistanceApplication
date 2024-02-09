package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Booking;
import com.example.backend.repository.Bookingrepository;

@Service
public class Bookingservice {

    @Autowired
    private Bookingrepository bookrepo;

    public List<Booking> getAllBooking()
    {
        return bookrepo.findAll();
    }
    public String postBooking(Booking book)
    {
         if(bookrepo.save(book)!=null)
         {
            return "added";
         }
         return "error";
    }
    public void deleteBooking(int id)
    {
         bookrepo.deleteById(id);
    }
    public Booking updateBook(Booking book)
    {
        return bookrepo.saveAndFlush(book);
    }
}
