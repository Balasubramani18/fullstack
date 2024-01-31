import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import './Reg.css';
import axios from 'axios';

function Appli() {
  const [name, setName] = useState('');
  const [fname, setFname] = useState('');
  const [mname, setMname] = useState('');
  const [dob, setDob] = useState('');
  const [ugd, setUgd] = useState('');
  const [ins, setIns] = useState('');
  const [anum, setAnum] = useState('');
  const [mobile, setMobile] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'fname') {
      setFname(value);
    } else if (name === 'mname') {
      setMname(value);
    } else if (name === 'dob') {
      setDob(value);
    } else if (name === 'ugd') {
      setUgd(value);
    } else if (name === 'ins') {
      setIns(value);
    } else if (name === 'anum') {
      setAnum(value);
    } else if (name === 'mobile') {
      setMobile(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (name.trim() === '') {
      validationErrors.name = 'Name is required';
    }
    if (fname.trim() === '') {
      validationErrors.fname = "Father's Name is required";
    }
    if (dob.trim() === '') {
      validationErrors.dob = 'Date of Birth is required';
    }
    if (ugd.trim() === '') {
      validationErrors.ugd = 'UG Degree is required';
    }
    if (ins.trim() === '') {
      validationErrors.ins = 'Institution Name is required';
    }
    if (anum.trim() === '') {
      validationErrors.anum = 'Aadhar Card Number is required';
    }
    if (mobile.trim() === '') {
      validationErrors.mobile = 'Mobile Number is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const data = {
        name: name,
        fname: fname,
        mname: mname,
        dob: dob,
        ugd: ugd,
        ins: ins,
        anum: anum,
        mobile: mobile,
      };
      axios.post('http://localhost:2020/Application/add', data)
      .then(response => {
        // Handle successful response
        alert('Form submitted successfully! Check your Application Status');
        window.location.href = '/Home';
      })
      .catch(error => {
        // Handle error
        alert('An error occurred while submitting the form. Please try again later.');
        console.error(error);
      });
  } else {
    alert('Please fill in all the required fields.');
  }
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        <span className="text-primary">Application</span>
      </h1>
      <MDBContainer fluid className='p-4 m-flex' style={{ minHeight: '100vh' }}>
        <MDBRow>
          <MDBCol md='40'>
            <MDBCard className='my-5'>
              <MDBCardBody className='p-5'>
                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Name of the Student'
                    id='name'
                    name='name'
                    type='text'
                    size='lg'
                    required
                    value={name}
                    onChange={handleInputChange}
                    validation={errors.name ? false : true}
                    errorMessage={errors.name}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label="Father's Name"
                    id='fname'
                    name='fname'
                    type='text'
                    size='lg'
                    required
                    value={fname}
                    onChange={handleInputChange}
                    validation={errors.fname ? false : true}
                    errorMessage={errors.fname}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label="Mother's Name"
                    id='mname'
                    name='mname'
                    type='text'
                    size='lg'
                    value={mname}
                    onChange={handleInputChange}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Date of Birth'
                    id='dob'
                    name='dob'
                    type='text'
                    size='lg'
                    required
                    value={dob}
                    onChange={handleInputChange}
                    validation={errors.dob ? false : true}
                    errorMessage={errors.dob}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Name of UG Degree and Branch'
                    id='ugd'
                    name='ugd'
                    type='text'
                    size='lg'
                    required
                    value={ugd}
                    onChange={handleInputChange}
                    validation={errors.ugd ? false : true}
                    errorMessage={errors.ugd}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Name of the Institution'
                    id='ins'
                    name='ins'
                    type='text'
                    size='lg'
                    required
                    value={ins}
                    onChange={handleInputChange}
                    validation={errors.ins ? false : true}
                    errorMessage={errors.ins}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Aadhar Card Number'
                    id='anum'
                    name='anum'
                    type='number'
                    size='lg'
                    required
                    value={anum}
                    onChange={handleInputChange}
                    validation={errors.anum ? false : true}
                    errorMessage={errors.anum}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Mobile Number'
                    id='mobile'
                    name='mobile'
                    type='number'
                    size='lg'
                    required
                    value={mobile}
                    onChange={handleInputChange}
                    validation={errors.mobile ? false : true}
                    errorMessage={errors.mobile}
                  />
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Select Your Course </option>
                    <option value="1">Msc.Computer Science</option>
                    <option value="2">MBA</option>
                    <option value="3">M.Tech AI</option>
                    <option value="3">M.Tech Data Science</option>
                    <option value="3">Msc Physics</option>
                  </select><br />
                  <MDBCheckbox
                    name='acceptTerms'
                    id='acceptTerms'
                    label='Accept Terms and Conditions'
                    checked={acceptTerms}
                    onChange={() => setAcceptTerms(!acceptTerms)}
                  /><br />

                  <button className="btn btn-primary mb-4 px-5" type="submit">Apply</button>
                </form>
                <ol>
                  <li>
                    <strong>Title:</strong> Start by clearly stating that the statement is a "Declaration" or "Declaration Form" to ensure its purpose is understood.
                  </li>
                  <li>
                    <strong>Personal Information:</strong> Include the individual's full name, address, contact details, and any other relevant identifying information to establish their identity.
                  </li>
                  <li>
                    <strong>Purpose:</strong> Clearly state the purpose of the form or document being submitted and reference any unique identifiers or reference numbers associated with it.
                  </li>
                  <li>
                    <strong>Statement of Truth:</strong> The core of the declaration is the affirmation that the information provided is true, accurate, and complete. Use clear and unambiguous language to convey this statement, such as "I hereby declare under penalty of perjury that the information provided in this form is true and correct to the best of my knowledge."
                  </li>
                  <li>
                    <strong>Consent:</strong> If required, explicitly state that the individual consents to the use and processing of the information provided in accordance with applicable laws and regulations.
                  </li>
                  <li>
                    <strong>Date and Signature:</strong> Include a space for the individual to write the date of signing and provide their signature. The signature signifies their agreement with the declaration and acknowledges that they understand the legal implications of providing false information.
                  </li>
                  <li>
                    <strong>Witness (if applicable):</strong> Some forms may require a witness to observe the signing of the declaration. In such cases, provide a space for the witness to print their name, sign, and include their contact information.
                  </li>
                </ol>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Appli;
