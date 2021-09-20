package com.tracking.tracking.controler;

import com.tracking.tracking.entity.User;
import com.tracking.tracking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Controller
@RequestMapping("/authenticate")
public class Authenticate {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public @ResponseBody ResponseEntity<User> showMessage(@NonNull @RequestBody User user) {
        return ResponseEntity.ok(userService.registerUser(user));
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(userService.getUsers());
    }

    @GetMapping("/inactivate/{userId}")
    public ResponseEntity<String> inactivateUser(@PathVariable(value = "userId") long userId) {
        User user = userService.inactivateUser(userId);
        if (user == null) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "entity not found"
            );
        }
        return new ResponseEntity<>("User deactivated", HttpStatus.OK);
    }
}
