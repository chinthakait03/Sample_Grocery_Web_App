 package lk.chinthakasoftwares.customer_demo.entity;


import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.EntityListeners;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MappedSuperclass;

@MappedSuperclass 
@EntityListeners(AuditingEntityListener.class)
public abstract class AuditableEntity {

    @CreatedDate 
    private LocalDateTime created_at;

    @LastModifiedDate 
    private LocalDateTime updated_at;

    @ManyToOne 
    @JoinColumn (name = "created_by")
    @CreatedBy 

    private User createdBy;

    @ManyToOne 
     @JoinColumn (name = "updated_by")
    @LastModifiedBy 
    private User updatedBy;

    

   
    public User getCreatedBy() {
        return createdBy;
    }
    public void setCreatedBy(User createdBy) {
        this.createdBy = createdBy;
    }

    

    public User getUpdatedBy() {
        return updatedBy;
    }
    public void setUpdatedBy(User updatedBy) {
        this.updatedBy = updatedBy;
    }



    // public void setCreatedBy(Integer id) {
    //     this.createdBy = new User();
    //     this.createdBy.setId(id);
    // }
    // public void setUpdatedBy(Integer id) {
    //     this.updatedBy = new User();
    //     this.updatedBy.setId(id);
    // }



    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    public LocalDateTime getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(LocalDateTime updated_at) {
        this.updated_at = updated_at;
    }

    

}