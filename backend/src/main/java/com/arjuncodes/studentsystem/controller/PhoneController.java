package com.arjuncodes.studentsystem.controller;

import com.arjuncodes.studentsystem.model.Phone;
import com.arjuncodes.studentsystem.service.PhoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/phone")
public class PhoneController {
    @Autowired
    private PhoneService phoneService;

    @PostMapping("/add")
    public Phone add(@RequestBody Phone phone) {
        return phoneService.savePhone(phone);
    }

    @GetMapping("/getAll")
    public List<Phone> getAllPhones() {
        return phoneService.getAllPhones();
    }
}
