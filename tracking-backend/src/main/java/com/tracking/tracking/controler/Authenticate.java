package com.tracking.tracking.controler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/authenticate")
public class Authenticate {

    @GetMapping("/register")
    public @ResponseBody ResponseEntity<String> showMessage() {
        return new ResponseEntity<String>("Here from trusted source", HttpStatus.OK);
    }

}
