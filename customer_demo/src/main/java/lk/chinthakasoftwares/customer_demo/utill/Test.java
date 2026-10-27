package lk.chinthakasoftwares.customer_demo.utill;

//import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component 
//@Scope (value = "singleton")
//@Scope (value = "prototype")
//@Scope (value = "singleton")
public class Test {
    
    public  void  sayHello(){
        System.out.println("Hello world");
    }
}
