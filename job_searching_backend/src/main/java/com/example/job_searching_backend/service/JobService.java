package com.example.job_searching_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.job_searching_backend.model.Job;
import com.example.job_searching_backend.repository.JobRepository;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public List<Job> getJobsByJobTitle(String jobTitle) {
        return jobRepository.findByJobTitle(jobTitle);
    }

    public List<Job> getJobsByJobCategory(String jobCategory) {
        return jobRepository.findByJobCategory(jobCategory);
    }

    public List<Job> getJobsByLocation(String location) {
        return jobRepository.findByLocation(location);
    }

    public Job getJobById(Long id) {
        Optional<Job> optionalJob = jobRepository.findById(id);
        return optionalJob.orElse(null);
    }

    public Job updateJob(Job job) {
        if (job == null) {
            throw new NullPointerException("Job cannot be null");
        }
        
        if (job.getId() == null) {
            throw new NullPointerException("Job ID cannot be null");
        }
        
        Job existingJob = getJobById(job.getId());
        if (existingJob == null) {
            return null;
        }
        
        job.setCompany(existingJob.getCompany());
        return jobRepository.save(job);
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
}
