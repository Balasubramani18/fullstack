import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './ig.css'
import Ima from './mag.jpg';
export default function App() {
  return (
    <div className='carousel-container'>
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://img.freepik.com/premium-photo/office-desktop-with-copy-space-woman-working-laptop-panorama_96727-1850.jpg?w=1060'
        alt='...'
      >
        <h5>Empowering students with knowledge</h5>
        
      </MDBCarouselItem>
  
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://img.freepik.com/free-photo/close-up-hand-with-painting-pallete_23-2148915877.jpg?w=1060&t=st=1689267067~exp=1689267667~hmac=3edb6471f5fb25f1f9a7b58f2b54c22ebc3ff532bc96d42a79cdbe579f1b22cd'
        alt='...'
      >
        <h5 style={{color:'black',marginLeft:'70px',marginBottom:'50px'}}> Empowering students with knowledge and nurturing their potential for a brighter future</h5>
        
      </MDBCarouselItem>
  
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://img.freepik.com/free-photo/dont-worry-all-done-everything-control-confident-happy-relaxed-redhead-girl-saying-all-oka_1258-144472.jpg?w=1060&t=st=1689267170~exp=1689267770~hmac=953131cd092329122a0334a65a6e6c65669ef0ddca928be8cc2f8683168d4eb9'
        alt='...'
      >
        <h5 style={{color:'black',marginLeft:'70px',marginBottom:'50px'}}>Empowering minds through innovative education and fostering a culture of excellence</h5>
        
      </MDBCarouselItem>
    </MDBCarousel>
  </div>
  
  );
}