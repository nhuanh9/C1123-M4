package com.example.c11185.controller;

import com.example.c11185.model.User;
import com.example.c11185.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class UserController
{
    @Autowired
    UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody User user){
        userRepository.save(user);
        return new ResponseEntity<>("Dky thanh cong", HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody User user){
        User user1 = userRepository.findByUsnAndPass(user.getUsn(), user.getPass());
        if (user1 == null ) {
            return new ResponseEntity<>("Tài khoản hoặc mật khẩu sai!", HttpStatus.OK);
        }
        return new ResponseEntity<>(user1, HttpStatus.OK);
    }
}
