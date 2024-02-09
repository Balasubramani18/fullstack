package com.student.bala.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.student.bala.model.Course;



public interface CourseRepository extends JpaRepository<Course,String> {

}
