package lk.chinthakasoftwares.customer_demo.dto;

import lk.chinthakasoftwares.customer_demo.entity.Customer;
import org.springframework.data.jpa.domain.Specification;

public class CustomerSearchRequest {

    private String name;
    private String nic;
    private String mobile;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Specification <Customer>  getSpecification(){

        Specification <Customer> specs  = Specification.unrestricted();


        if (name!= null && !name.isBlank()) {

            specs = specs.and((root,query,cb) -> {
                return cb.like(root.get("name"), "%"+name+"%");

                //  database colom name  ,   my variable name
            });
        }


        if (nic!= null && !nic.isBlank()) {

            specs = specs.and((root,query,cb) -> {
                return cb.like(root.get("nic"), "%"+nic+"%");

                //  database colom name  ,   my variable name
            });
        }

        if (mobile!= null && !mobile.isBlank()) {

            specs = specs.and((root,query,cb) -> {
                return cb.like(root.get("mobile"), "%"+mobile+"%");

                //  database colom name  ,   my variable name
            });
        }
        return specs;

    }
}
