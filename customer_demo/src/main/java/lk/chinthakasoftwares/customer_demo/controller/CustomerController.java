package lk.chinthakasoftwares.customer_demo.controller;

import lk.chinthakasoftwares.customer_demo.dto.AuditUserDTO;
import lk.chinthakasoftwares.customer_demo.dto.CustomerDataDTO;
import lk.chinthakasoftwares.customer_demo.dto.CustomerDetailDTO;
import lk.chinthakasoftwares.customer_demo.dto.CustomerInsertDTO;
import lk.chinthakasoftwares.customer_demo.dto.CustomerSearchRequest;
import lk.chinthakasoftwares.customer_demo.entity.Customer;
import lk.chinthakasoftwares.customer_demo.entity.User;
import lk.chinthakasoftwares.customer_demo.repository.CustomerRepository;
import lk.chinthakasoftwares.customer_demo.service.AuthUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
//import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;

import java.util.Optional;

@RestController

@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    

    @Autowired
    CustomerRepository customerRepository;

    @Autowired 
    AuthUserService authUserService;


  //  @GetMapping("/customer/")
    @GetMapping("/ggj")
    public String  test(){
        return "Hello world";
    }

    // end point

   // @GetMapping("/customer/abc")
   @GetMapping("/abc")
    public String test1(){
        return "Good Morning";

    }
    // end point

  //  @GetMapping("/customer/xyz/abc")
  @GetMapping("/xyz/abc")
    public String greet(){
        return "hello spring boot";
    }
    // end point


    @GetMapping("/hi")
   public String hello(){
        return "How are you.";
   }

   @PostMapping
   @ResponseStatus(HttpStatus.CREATED)
    public CustomerDataDTO add(@RequestBody CustomerInsertDTO requestData){

       Customer customer = new Customer();
       customer.setName(requestData.getName());
       customer.setCity(requestData.getCity());
       customer.setDob(LocalDate.parse(requestData.getDob()));
       customer.setGender(requestData.getGender());
       customer.setMobile(requestData.getMobile());
       customer.setNic(requestData.getNic());

       customerRepository.save(customer);

       CustomerDataDTO data =new CustomerDataDTO();
       data.setId(customer.getId());
       data.setName(customer.getName());
       data.setMobile(customer.getMobile());
       data.setNic(customer.getNic());
       data.setCity(customer.getCity());


       return data;

   }

    @PutMapping("/{id}")
    public CustomerDataDTO update(@PathVariable Integer id ,@RequestBody CustomerInsertDTO requestData ){

        Optional<Customer> optionalCustomer = customerRepository.findById(id);

        if (optionalCustomer.isEmpty()) {

            throw new ResponseStatusException(HttpStatus.NOT_FOUND , "Customer not Found.");
        }

        Customer customer = optionalCustomer.get();

        customer.setName(requestData.getName());
        customer.setCity(requestData.getCity());
        customer.setDob(LocalDate.parse(requestData.getDob()));
        customer.setGender(requestData.getGender());
        customer.setMobile(requestData.getMobile());
        customer.setNic(requestData.getNic());

        customerRepository.save(customer);

        CustomerDataDTO data =new CustomerDataDTO();
        data.setId(customer.getId());
        data.setName(customer.getName());
        data.setMobile(customer.getMobile());
        data.setNic(customer.getNic());
        data.setCity(customer.getCity());

        return data;
    }




    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)    // 201
    public void delete(@PathVariable Integer id){

        //===================================================================================
//        Optional<Customer> optionalCustomer = customerRepository.findById(id);
//
//        if (optionalCustomer.isEmpty()) {
//
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND , "Customer not Found.");
//        }
//
//        Customer customer = optionalCustomer.get();
//        customerRepository.delete(customer);

   //  =========================================================================================
        customerRepository.deleteById(id);  // Silent ignore.

      //   ========================================================================================

//        boolean exists = customerRepository.existsById(id);
//
//
//        if (!exists) {
//
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND , "Customer not Found.");
//        }
//        customerRepository.deleteById(id);
  //===============================================================================================

    }



    @GetMapping
//    public List<CustomerDataDTO> getAll(@RequestParam(required = false , defaultValue = "1") Integer page,
//                                        @RequestParam(required = false , defaultValue = "10") Integer size){

//    public Page<CustomerDataDTO> getAll(@RequestParam(required = false , defaultValue = "1") Integer page,
//                                        @RequestParam(required = false , defaultValue = "10") Integer size,
//                                        @RequestParam(required = false ) String name,
//                                        @RequestParam(required = false ) String nic,
//                                        @RequestParam(required = false ) String mobile){

    public Page<CustomerDataDTO> getAll(@PageableDefault(size=10)
                Pageable pageable,
               @ModelAttribute CustomerSearchRequest searchRequest){

           System.out.println(authUserService.getAuthUserId());   

        Specification <Customer> specs  = searchRequest.getSpecification();


//        if (name!= null && !name.isBlank()) {
//
//            specs = specs.and((root,query,cb) -> {
//                return cb.like(root.get("name"), "%"+name+"%");
//
//                //  database colom name  ,   my variable name
//            });
//        }
//
//
//        if (nic!= null && !nic.isBlank()) {
//
//            specs = specs.and((root,query,cb) -> {
//                return cb.like(root.get("nic"), "%"+nic+"%");
//
//                //  database colom name  ,   my variable name
//            });
//        }
//
//        if (mobile!= null && !mobile.isBlank()) {
//
//            specs = specs.and((root,query,cb) -> {
//                return cb.like(root.get("mobile"), "%"+mobile+"%");
//
//                //  database colom name  ,   my variable name
//            });
//        }




//        if (searchRequest.getName()!= null && !searchRequest.getName().isBlank()) {
//
//            specs = specs.and((root,query,cb) -> {
//                return cb.like(root.get("name"), "%"+searchRequest.getName()+"%");
//
//                //  database colom name  ,   my variable name
//            });
//        }
//
//
//        if (searchRequest.getNic()!= null && !searchRequest.getNic().isBlank()) {
//
//            specs = specs.and((root,query,cb) -> {
//                return cb.like(root.get("nic"), "%"+searchRequest.getNic()+"%");
//
//                //  database colom name  ,   my variable name
//            });
//        }
//
//        if (searchRequest.getMobile()!= null && !searchRequest.getMobile().isBlank()) {
//
//            specs = specs.and((root,query,cb) -> {
//                return cb.like(root.get("mobile"), "%"+searchRequest.getMobile()+"%");
//
//                //  database colom name  ,   my variable name
//            });
//        }


   //     Pageable pageable = PageRequest.of(page-1,size);

//        CustomerDataDTO c1 = new CustomerDataDTO(1,"Kushan","0763018292");
//
//
//
//        CustomerDataDTO c2 = new CustomerDataDTO();
//        c2.setId(2);
//        c2.setName("Kamal");
//        c2.setMobile("0763018292");
//
//
//        List<CustomerDataDTO> data = new ArrayList<>();
//
//        data.add(c1);
//        data.add(c2);
//        return data;


        Page<Customer> customers = customerRepository.findAll(specs,pageable );



        Page<CustomerDataDTO> dataPage = customers.map(customer -> {
             CustomerDataDTO dataDTO = new CustomerDataDTO();
             dataDTO.setId(customer.getId());
             dataDTO.setName(customer.getName());
             dataDTO.setMobile(customer.getMobile());
             dataDTO.setNic(customer.getNic());
             dataDTO.setCity(customer.getCity());

             return dataDTO;
        });

      //  List<CustomerDataDTO> data = new ArrayList<>();


//        for (Customer customer: customers){
//            CustomerDataDTO customerDataDTO = new CustomerDataDTO();
//            customerDataDTO.setId(customer.getId());
//            customerDataDTO.setMobile(customer.getMobile());
//            customerDataDTO.setName(customer.getName());
//
//            data.add(customerDataDTO);
//        }

       // return data;
        //return customers;
        return dataPage;

        // Entity class Map into DTO.
    }


    //@GetMapping("/{no}")
  //  public CustomerDataDTO getOne(@PathVariable("no") Integer id){

      @GetMapping("/{id}")
      public CustomerDetailDTO getOne(@PathVariable Integer id) {

          Optional<Customer> optionalCustomer = customerRepository.findById(id);

          if (optionalCustomer.isEmpty()) {

              throw new ResponseStatusException(HttpStatus.NOT_FOUND , "Customer not Found.");
          }


              Customer customer = optionalCustomer.get();
              CustomerDetailDTO data = new CustomerDetailDTO();
              data.setId(customer.getId());
              data.setName(customer.getName());
              data.setMobile(customer.getMobile());
              data.setNic(customer.getNic());
              data.setDob(customer.getDob());
              data.setGender(customer.getGender());
              data.setCity(customer.getCity());



              
              data.setCreatedAt(customer.getCreated_at());
              data.setUpdatedAt(customer.getUpdated_at());

              User createdByUser = customer.getCreatedBy();

              if (createdByUser != null) {
               
                data.setCreatedBy(new AuditUserDTO(createdByUser.getId(),createdByUser.getDisplayName()));
              }

              

              User updatedByUser = customer.getUpdatedBy();
             

              if (updatedByUser != null) {
                data.setUpdatedBy(new AuditUserDTO(updatedByUser.getId(),updatedByUser.getDisplayName()));
              }

             
             



              return data;


      }



      @GetMapping("/test")
    public int calc (@RequestParam(value = "x") Integer num1, @RequestParam(required = false , defaultValue = "10") Integer y){

        return num1+y;
      }
}



