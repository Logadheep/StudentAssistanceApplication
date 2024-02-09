package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Contact;

public interface Contactrepository extends JpaRepository<Contact,String>
{

}
