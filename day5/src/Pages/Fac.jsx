import React from 'react';
import {

  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';


function FacLogin() {
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src="https://img.freepik.com/free-vector/mathematics-concept-illustration_114360-3972.jpg?w=740&t=st=1688713910~exp=1688714510~hmac=ff3f3a0fac99622fb7b240cf3d7e1246dd8fafdeb7bba6e2a05e92ccd33d5c38" alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">KS University </span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" required />
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" required/>

                <button className="btn btn-primary mb-4 px-5" type="submit">Register</button> 
              
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default FacLogin;