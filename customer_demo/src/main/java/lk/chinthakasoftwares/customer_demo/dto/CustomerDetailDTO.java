package lk.chinthakasoftwares.customer_demo.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class CustomerDetailDTO extends CustomerDataDTO {
    private String gender ;
    private LocalDate dob;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private AuditUserDTO createdBy;
    private AuditUserDTO updatedBy;


    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
    public String getGender() {
        return gender;
    }
    

   
    public AuditUserDTO getCreatedBy() {
        return createdBy;
    }
    public void setCreatedBy(AuditUserDTO createdBy) {
        this.createdBy = createdBy;
    }
    public AuditUserDTO getUpdatedBy() {
        return updatedBy;
    }
    public void setUpdatedBy(AuditUserDTO updatedBy) {
        this.updatedBy = updatedBy;
    }
    public CustomerDetailDTO() {
        
    }
    public CustomerDetailDTO(Integer id, String name, String mobile, String nic, String city, String gender,
            LocalDate dob) {
        super(id, name, mobile, nic, city);
        this.gender = gender;
        this.dob = dob;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public LocalDate getDob() {
        return dob;
    }
    public void setDob(LocalDate dob) {
        this.dob = dob;
    }
}