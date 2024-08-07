package com.example.job_searching_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.job_searching_backend.model.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    Company findByCompanyName(String companyName);
    
    Company findByCompanyEmail(String companyEmail);
}