import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function BasicTextFields() {

    const paperStyle = {padding:'50px 20px', width: 600, margin:"20px auto"};
    const [name, setName] = React.useState('');
    const [address, setAddress] = useState('');
    const [students, setStudents] = useState([]);

    // const [phoneNumber, setPhoneNumber] = React.useState('');
    // const [password, setPassword] = useState('');
    // const [phones, setPhones] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        const student = {name, address};
        console.log(student);
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)

        
        }).then((response) => response.text())
          .then((data) => console.log(data))
        .then(() =>{
            fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
            setStudents(result);
        });
        });
    };

    // const phoneClick = (e) => {
    //     e.preventDefault();
    //     const phone = {phoneNumber, password};
    //     console.log(phone);
    //     fetch("http://localhost:8080/phone/add", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(phone)

        
    //     }).then((response) => response.text())
    //       .then((data) => console.log(data))
    //     .then(() =>{
    //         fetch("http://localhost:8080/phone/getAll")
    //         .then(res => res.json())
    //         .then((result) => {
    //         setPhones(result);
    //     });
    //     });
    // };

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
            setStudents(result)}
            )},[setStudents]);


  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color: "blue"}}><u>Add Student</u></h1>

            <form></form>
            <Box 
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width:"100%"}}>
            <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            
            <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            />
            </div>
            <Button variant="contained" color='secondary' onClick={handleClick}>
                ADD
            </Button>
            
            </Box>
            
        </Paper>
        <h1>Students</h1>

            <Paper elevation={3} style={paperStyle}> 
                {students.map(student=>(
                    <Paper elevation={10} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.id}>
                    Id:{student.id}
                    Name:{student.name}
                    Ang: {student?.ang}
                    Address:{student.address}
                    </Paper>
                ))}
            </Paper>

            {/* <Paper elevation={3} style={paperStyle}>
            <h1 style={{color: "blue"}}><u>Add Phone</u></h1>

            <form></form>
            <Box 
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width:"100%"}}>
            <TextField id="outlined-basic" label="Phone" variant="outlined" fullWidth
            value={phoneNumber}
            onChange={(e)=>setPhoneNumber(e.target.value)}
            />
            
            <TextField id="outlined-basic" label="password" variant="outlined" fullWidth
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
            <Button variant="contained" color='secondary' onClick={phoneClick}>
                Submit
            </Button>
            <Button variant="contained" color='secondary' >
                Login
            </Button>
            </Box>
            
            </Paper> */}
        {/* <h1>Phone List</h1>

            <Paper elevation={3} style={paperStyle}>

                {phones.map(phone=>(
                    <Paper elevation={10} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={phone.phoneNumber}>
                    PhoneNumber:{phone.phoneNumber}
                    Password:{phone.password}
                    </Paper>
                ))}
            </Paper> */}

    </Container>

    

    
  );
}
