import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
  
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import '../Pages/Pay.css';
function Ai() {
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Master of <br />
            <span className="text-primary">Artificial Intelligence</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            
          A Master of Artificial Intelligence (MAI) is a postgraduate degree program that explores advanced concepts, algorithms, and applications in the field of artificial intelligence. Students gain expertise in machine learning, deep learning, data analysis, and AI-driven technologies.          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
            <Typography
          className=''
            variant="h9"
            noWrap
            component="a"
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '  ',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
A Master of Computer Science (MCS) is a postgraduate<br/> degree program that provides advanced education and<br/> training in various aspects of computer science.<br/> The program is designed to deepen students' knowledge <br/>and expertise in computer science principles,<br/> theories, algorithms, programming languages, and<br/> software development.<br/>During the MCS program, students typically engage<br/> in a combination of coursework, research, and<br/> practical projects. The coursework covers a wide <br/>range of subjects, including computer architecture,<br/> data structures, algorithms, operating systems,<br/> databases, artificial intelligence, machine learning,<br/> computer networks, and software engineering.
          </Typography>
          <Link to="/Application">Apply</Link>
          
          
         

             

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Ai;