package com.arjuncodes.studentsystem.repository;

import com.arjuncodes.studentsystem.model.Phone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhoneRepository extends JpaRepository<Phone, Long> {
}
