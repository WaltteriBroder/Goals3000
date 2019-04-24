package fi.goals.controller;

import fi.goals.model.User;
import fi.goals.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@org.springframework.web.bind.annotation.RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/testi")
    public String testi(){
        return "Tämä on testi";
    }

    @GetMapping("/all")
    public Iterable<User> findAll(){
      return userService.findAll();
    }

    @PostMapping("/register")
    public void registerUser(@Valid @RequestBody User user, BindingResult result){

        if(result.hasErrors()){

            List<ObjectError> allErrors = result.getAllErrors();
            for(ObjectError error : allErrors){
                System.out.println(error);
            }

        } else {
            userService.registerUser(user);
        }

    }

}
