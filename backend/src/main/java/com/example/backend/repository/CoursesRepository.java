package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Courses;

public interface CoursesRepository extends JpaRepository<Courses,Integer>{

}
