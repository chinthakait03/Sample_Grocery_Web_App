package lk.chinthakasoftwares.customer_demo.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder ({"id","name","permissions"})
public class RoleDetailDTO  extends RoleDataDTOWithPermission{
    

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
}
