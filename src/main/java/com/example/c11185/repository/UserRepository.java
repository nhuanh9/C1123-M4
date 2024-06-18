package com.example.c11185.repository;

import com.example.c11185.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsnAndPass(String usn, String pass);
}
