package com.student.bala.service;

import com.student.bala.dto.request.CourseRequest;
import com.student.bala.dto.response.BasicResponse;
import com.student.bala.dto.response.CourseResponse;

public interface CourseService {
    BasicResponse<CourseResponse> getAllCourse();

    CourseResponse register(CourseRequest request);

    BasicResponse<CourseResponse> deletecourse(String courseId);

    BasicResponse<CourseResponse> updateCourse(String courseId, CourseRequest courseRequest);

    

}
