package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Contact;
import com.example.backend.service.Contactservice;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@CrossOrigin
public class Contactcontroller {

    @Autowired
    private Contactservice service;

    @PostMapping("/postContact")
    public String postComment(@RequestBody Contact con)
    {
        return service.postContact(con);
    }

    @GetMapping("/getContact")
    public List<Contact> getcontactdata() {
        return service.getcontactdata();
    }
    @PutMapping("/updateContact")
    public Contact updateContact(@RequestBody Contact contact)
    {
        return service.updateContact(contact);
    }
}
