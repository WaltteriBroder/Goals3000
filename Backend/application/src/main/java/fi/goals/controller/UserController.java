package fi.goals.controller;

import fi.goals.model.User;
import fi.goals.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@org.springframework.web.bind.annotation.RestController
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

    @PostMapping("/add")
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }



}
