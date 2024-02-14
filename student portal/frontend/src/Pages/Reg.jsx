import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

}
from 'mdb-react-ui-kit';
import './Reg.css';
import axios from 'axios';

function Reg() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const handleChangesetfirst_name = (e) => {
    setFname(e.target.value);
  };
  const handleChangesetlast_name = (e) => {
    setLname(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  
  
  const navigate = useNavigate();
  const handlePassword = (e) => {
    e.preventDefault();
    const validationErrors = {};
  
    if (fname.trim() === '') {
      validationErrors.fname = 'First Name is required';
    }
  
    if (lname.trim() === '') {
      validationErrors.lname = 'Last Name is required';
    }
  
    if (email.trim() === '') {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email format';
      alert('Please enter a valid email address');
    }
  
    if (password.trim() === '') {
      validationErrors.password = 'Password is required';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()])[A-Za-z\d@#$%^&*()]{8,}/.test(password)) {
      validationErrors.password =
        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character';
      alert('Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character');
    }
    
    setErrors(validationErrors);
    const data = {
      fname: fname,
      lname: lname,
      email: email,
      password: password
    };
      axios.post("http://localhost:8080/api/v1/auth/register", data)


    if (Object.keys(validationErrors).length === 0) {
      navigate('/');
    }

  

}
  

;
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
          Make talent your  <br />
            <span className="text-primary">competitive advantage</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
          Are you looking to pursue your postgraduate studies and take your academic journey to the next level? Welcome to the world of PG Studies! We offer a comprehensive range of postgraduate programs designed to expand your knowledge, enhance your skills, and propel your career forward.
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

            <form onSubmit={handlePassword}>
            <MDBInput
  wrapperClass='mb-4'
  label='First Name'
  id='f_name'
  type='text'
  size='lg'
  required
  value={fname}
  onChange={handleChangesetfirst_name}
  validation={errors.fname ? false : true}
  errorMessage={errors.fname}
  
/>
<MDBInput
  wrapperClass='mb-4'
  label='Last Name'
  id='l_name'
  type='text'
  size='lg'
  required
  value={lname}
  onChange={handleChangesetlast_name}
  validation={errors.lname ? false : true}
  errorMessage={errors.lname}
/>
<MDBInput
  wrapperClass='mb-4'
  label='Email'
  id='email'
  type='email'
  size='lg'
  required
  value={email}
  onChange={handleChangeEmail}
  validation={errors.email ? false : true}
  errorMessage={errors.email}
/>
<MDBInput
  wrapperClass='mb-4'
  label='Password'
  id='password'
  type='password'
  size='lg'
  required
  value={password}
  onChange={handleChangePassword}
  validation={errors.password ? false : true}
  errorMessage={errors.password}
/>


               <button className="btn btn-primary mb-4 px-5" type="submit" >Register</button>
              </form>

              

              

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Reg;