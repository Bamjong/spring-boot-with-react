package com.arjuncodes.studentsystem.service;


import com.arjuncodes.studentsystem.model.Phone;
import com.arjuncodes.studentsystem.repository.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhoneServiceImpl implements PhoneService{

    @Autowired
    private PhoneRepository phoneRepository;

    @Override
    public Phone savePhone(Phone phone) {
        Calc calc = (first, second) -> first + second;
        System.out.println(calc.Calc(4, 2));

//        Long phoneNumber = Long.parseLong(phone.getPhoneNumber());
//        String result = "";
//        final boolean exists = phoneRepository.exists(phone);
//
//        if (exists){
//            result = "이미 존재하는 휴대폰입니다.";
//        }{
//            phoneRepository.save(phone);
//            result = "저장되었습니다.";
//        }


        return phoneRepository.save(phone);
    }

    @Override
    public List<Phone> getAllPhones() {
        return phoneRepository.findAll();
    }

}
