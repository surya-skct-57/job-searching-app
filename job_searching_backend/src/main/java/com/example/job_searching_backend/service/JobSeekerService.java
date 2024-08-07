package com.example.job_searching_backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.job_searching_backend.model.JobSeeker;
import com.example.job_searching_backend.repository.JobSeekerRepository;

@Service
public class JobSeekerService {

    @Autowired
    private JobSeekerRepository jobseekerRepository;

    public JobSeeker createJobseeker(JobSeeker jobseeker) {
        return jobseekerRepository.save(jobseeker);
    }

    public Optional<JobSeeker> getJobseekerById(Long id) {
        return jobseekerRepository.findById(id);
    }

    public Optional<JobSeeker> getJobseekerByEmail(String email) {
        return Optional.ofNullable(jobseekerRepository.findByEmail(email));
    }

    public JobSeeker updateJobseeker(JobSeeker jobseeker) {
        return jobseekerRepository.save(jobseeker);
    }

    public void deleteJobseeker(Long id) {
        jobseekerRepository.deleteById(id);
    }
}