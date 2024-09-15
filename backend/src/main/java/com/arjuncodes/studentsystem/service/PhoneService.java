package com.arjuncodes.studentsystem.service;

import com.arjuncodes.studentsystem.model.Phone;

import java.util.List;

public interface PhoneService {
    public Phone savePhone(Phone phone);
    public List<Phone> getAllPhones();

}
