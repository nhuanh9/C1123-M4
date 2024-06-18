package com.example.c11185.controller;

import com.example.c11185.model.Blog;
import com.example.c11185.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/blogs")
@CrossOrigin("*")
public class BlogController {
    @Autowired
    BlogRepository blogRepository;

    @GetMapping
    public ResponseEntity findAll(){
       return  new ResponseEntity<>(blogRepository.findAll(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity save(@RequestBody Blog blog){
        blogRepository.save(blog);
       return  new ResponseEntity<>("Thêm thành công!", HttpStatus.OK);
    }
}
