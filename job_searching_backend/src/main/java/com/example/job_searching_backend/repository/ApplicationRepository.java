package com.example.job_searching_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.job_searching_backend.model.Application;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {

  List<Application> findByJobId(Long jobId);

  List<Application> findByApplicationStatus(String applicationStatus);
}