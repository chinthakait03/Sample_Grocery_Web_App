package lk.chinthakasoftwares.customer_demo.dto;

public class CustomerInsertDTO {


    private String name;

    private String mobile;

    private String nic;

    private String dob;

    private String gender;

    private String city;



    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }


    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }


    public String getNic() {
        return nic;
    }
    public void setNic(String nic) {
        this.nic = nic;
    }


    public String getDob() {
        return dob;
    }
    public void setDob(String dob) {
        this.dob = dob;
    }


    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }


    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
}
