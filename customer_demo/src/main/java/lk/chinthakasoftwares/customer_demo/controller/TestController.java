package lk.chinthakasoftwares.customer_demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lk.chinthakasoftwares.customer_demo.utill.Test;



@RestController 
@RequestMapping ("/tests")

public class TestController {

    @Autowired 
    Test test;


    @GetMapping 

    public  void test () {

        System.out.println(test);
        test.sayHello();
    }
    
    
}
