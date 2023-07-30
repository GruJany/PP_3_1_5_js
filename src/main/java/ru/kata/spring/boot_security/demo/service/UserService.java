package ru.kata.spring.boot_security.demo.service;

import ru.kata.spring.boot_security.demo.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    void addUser(User user);
    boolean deleteUserById(Long id);
    List<User> getAllUsers();
    User updateUser(Long id, User user);
    Optional<User> getUserById(Long id);
    Optional<User> findByUsername(String username);
}
