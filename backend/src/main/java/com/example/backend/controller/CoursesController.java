package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.backend.model.Courses;
import com.example.backend.service.CoursesService;

@RestController
@CrossOrigin
public class CoursesController {

    @Autowired
    private CoursesService service;

    @PostMapping("/postCourses")
    public Courses postCourses(@RequestBody Courses courses)
    {
        return service.postCourses(courses);
    }
    @GetMapping("/getCourses")
    public List<Courses> getCourses()
    {
        return service.getCourses();
    }
    @DeleteMapping("/deleteCourses/{id}")
    public void deleteCourses(int id)
    {
        service.deleteCourses(id);
    }
    @PutMapping("/updateCourses")
    public Courses updateCourses(@RequestBody Courses courses)
    {
        return service.updateCourses(courses);
    }
}
