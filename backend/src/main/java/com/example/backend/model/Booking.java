package com.example.backend.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Booking {

    @Id
    @GeneratedValue
    public int id;
    public String fullname;
    public String DateofBirth;
    public String Gender;
    public String Email;
    public int MobileNo;
    public String course;
    public String Enquiry;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getFullname() {
        return fullname;
    }
    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
    public String getDateofBirth() {
        return DateofBirth;
    }
    public void setDateofBirth(String dateofBirth) {
        DateofBirth = dateofBirth;
    }
    public String getGender() {
        return Gender;
    }
    public void setGender(String gender) {
        Gender = gender;
    }
    public String getEmail() {
        return Email;
    }
    public void setEmail(String email) {
        Email = email;
    }
    public int getMobileNo() {
        return MobileNo;
    }
    public void setMobileNo(int mobileNo) {
        MobileNo = mobileNo;
    }
    public String getCourse() {
        return course;
    }
    public void setCourse(String course) {
        this.course = course;
    }
    public String getEnquiry() {
        return Enquiry;
    }
    public void setEnquiry(String enquiry) {
        Enquiry = enquiry;
    }

    
    
}
