package com.example.job_searching_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.job_searching_backend.model.Company;
import com.example.job_searching_backend.repository.CompanyRepository;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public Company createCompany(Company company) {
        return companyRepository.save(company);
    }

    public Company getCompanyByCompanyName(String companyName) {
        return companyRepository.findByCompanyName(companyName);
    }

    public Company getCompanyByEmail(String email) {
        return companyRepository.findByCompanyEmail(email);
    }

    public Company updateCompany(Company company) {
        return companyRepository.save(company);
    }

    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }
}