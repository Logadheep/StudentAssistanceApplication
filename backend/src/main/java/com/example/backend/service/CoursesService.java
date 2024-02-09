package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Courses;
import com.example.backend.repository.CoursesRepository;

@Service
public class CoursesService {

    @Autowired
    private CoursesRepository repo;
    public Courses postCourses(Courses activity)
    {
        return repo.save(activity);
    }
    public List<Courses> getCourses()
    {
        return repo.findAll();
    }
    public void deleteCourses(int id)
    {
        repo.deleteById(id);
    }
    public Courses updateCourses(Courses activity)
    {
        return repo.saveAndFlush(activity);
    }
}
