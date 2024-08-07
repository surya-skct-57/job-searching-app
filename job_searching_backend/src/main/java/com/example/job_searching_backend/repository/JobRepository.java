package com.example.job_searching_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.job_searching_backend.model.Job;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {

    List<Job> findByJobTitle(String jobTitle);

    List<Job> findByJobCategory(String jobCategory);

    List<Job> findByLocation(String location);
}