package fi.goals.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/micro")
public class TestController {

    @GetMapping("/hello")
    public String sayHello(){
        System.out.println("täällä ollaan");
        return "HelloFromMicroServiceMuutettu";
    }
}
