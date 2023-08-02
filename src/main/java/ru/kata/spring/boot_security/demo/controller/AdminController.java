package ru.kata.spring.boot_security.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import ru.kata.spring.boot_security.demo.entity.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

@Controller
@RequestMapping("/admin")
public class AdminController {
    private final UserService userService;
    private final RoleService roleService;

    public AdminController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping
    public String allUsers(ModelMap model, @AuthenticationPrincipal UserDetails userDetails) {
        model.addAttribute("users", userService.getAllUsers());
        return userService.findByEmail(userDetails.getUsername()).map(user -> {
            model.addAttribute("user", user);
            return "admin/users";
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value = "/{id}")
    public String User(@PathVariable("id") Long id,
                       ModelMap model) {
        model.addAttribute("roles", roleService.findAll());
        return userService.getUserById(id).map(user -> {
                    model.addAttribute("user", user);
                    return "admin/user";
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value = "/new")
    public String create(@ModelAttribute("user") User user,
                         ModelMap model) {
        model.addAttribute("roles", roleService.findAll());
        return "admin/add";
    }

    @PostMapping(value = "/new/add")
    public String add(@ModelAttribute("user") User user) {
        userService.addUser(user);
        return "redirect:/admin/" + user.getId();
    }

    @PostMapping(value = "/{id}/update")
    public String update(@PathVariable("id") Long id, @ModelAttribute User user) {
        userService.updateUser(id, user);
        return "redirect:/admin/" + user.getId();
    }

    @PostMapping(value = "/{id}/delete")
    public String delete(@PathVariable("id") Long id) {
        if (!userService.deleteUserById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return "redirect:/admin";
    }
}
