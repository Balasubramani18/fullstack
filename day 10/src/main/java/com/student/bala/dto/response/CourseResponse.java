package com.student.bala.dto.response;

import com.student.bala.dto.response.BasicResponse.BasicResponseBuilder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseResponse {
    private String message;
    private String id;

    private String course;

    private String credit;

    private String courseImage;

    private String cost;

    private String duration;

}
