package fi.goals.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @GetMapping("/login")
    public String getMicroService(){
        System.out.println("PERRRKELE!");
        return "LOGIN!";
    }

}
