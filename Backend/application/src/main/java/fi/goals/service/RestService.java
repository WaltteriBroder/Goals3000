package fi.goals.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

@Service
public class RestService {

    private final RestTemplate restTemplate;
    private final String HELLOURL = "http://localhost:8081/micro/hello";

    @Autowired
    public RestService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }


    public String getMicroService() {

        ResponseEntity<String> helloEntity = restTemplate.getForEntity(URI.create(HELLOURL).toString(), String.class);
        return helloEntity.getBody();
    }
}
