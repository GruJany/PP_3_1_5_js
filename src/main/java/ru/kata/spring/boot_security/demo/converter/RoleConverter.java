package ru.kata.spring.boot_security.demo.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import ru.kata.spring.boot_security.demo.repository.RoleRepository;
import ru.kata.spring.boot_security.demo.entity.Role;

@Component
public class RoleConverter implements Converter<String, Role> {
    private final RoleRepository roleRepository;

    @Autowired
    public RoleConverter(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Role convert(String name) {
        return roleRepository.findByRole(name).orElse(null);
    }
}
