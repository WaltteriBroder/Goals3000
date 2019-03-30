package fi.goals.controller;

import fi.goals.service.RestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/rest")
public class RestController {

    @Autowired
    private RestService restService;

    @GetMapping("/micro")
    public String getMicroService(){
        return restService.getMicroService();
    }

}
