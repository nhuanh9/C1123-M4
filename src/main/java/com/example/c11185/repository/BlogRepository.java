package com.example.c11185.repository;

import com.example.c11185.model.Blog;
import com.example.c11185.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {
    Iterable<Blog> findAllByContentContaining(String key);
    Iterable<Blog> findAllByTitleContaining(String key);
}
