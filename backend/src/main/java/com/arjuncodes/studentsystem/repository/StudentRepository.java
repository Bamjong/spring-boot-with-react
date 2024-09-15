package com.arjuncodes.studentsystem.repository;

import com.arjuncodes.studentsystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {


//    @Query( value = "SELECT * FROM USERS u WHERE u.status = 1",
//            nativeQuery = true)
//    List<Student> findUser(@Param("username") String username, @Param("age") int age);

}
