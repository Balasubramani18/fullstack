import React from 'react';
import {useState,useEffect} from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Image2 from '../Components/ddp.webp';
import Nav from '../Components/Nav';

export default function ProfilePage() {

    const email = useSelector((state) => state.email);
  // useSelector((state)=>)

  // State to store the logged-in user's details
  const [loggedInUser, setLoggedInUser] = useState("");

  // Fetch profile data from the API when the component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8080/api/v1/auth/email"
        );
        const userDetails = response.data;
        console.log(userDetails);
        if (userDetails) {
          const loggedInUserDetails = userDetails.find(
            (user) => user.email === email
          );

          setLoggedInUser(loggedInUserDetails);
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchProfileData();
  }, [email]); // Fetch profile data when email or password changes

  // Event handler for the "Save" button
  const handleSave = () => {
    // Your save logic here, you can use the 'loggedInUser' state to access the user details.
    alert("Changes saved successfully!");
  };
  return (
    <><Nav /><section style={{ backgroundColor: '#eee' }}>
          <MDBContainer className="py-5">
          {loggedInUser &&(
              <MDBRow>
                  <MDBCol lg="4">
                      <MDBCard className="mb-4">
                          <MDBCardBody className="text-center">
                              <MDBCardImage
                                  src={Image2}
                                  alt=""
                                  className="rounded-circle"
                                  style={{ width: '150px' }}
                                  fluid />
                              <p className="text-muted mb-1"></p>
                              <p className="text-muted mb-4"></p>

                          </MDBCardBody>
                      </MDBCard>

                      <MDBCard className="mb-4 mb-lg-0">
                          <MDBCardBody className="p-0">
                              <MDBListGroup flush className="rounded-3">
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      <MDBIcon fas icon="globe fa-lg text-warning" />
                                      <MDBCardText>12890MAI02</MDBCardText>
                                  </MDBListGroupItem>
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                      <MDBCardText>12890mai02@ks.ac.in</MDBCardText>
                                  </MDBListGroupItem>
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                      <MDBCardText>2nd Year</MDBCardText>
                                  </MDBListGroupItem>
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                      <MDBCardText>1 backlogs</MDBCardText>
                                  </MDBListGroupItem>
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                                      <MDBCardText>Hosteller</MDBCardText>
                                  </MDBListGroupItem>
                              </MDBListGroup>
                          </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
                  <MDBCol lg="8">
                      <MDBCard className="mb-4">
                          <MDBCardBody>
                            
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>{loggedInUser.fname}</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">{loggedInUser.lname}</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Email</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">{loggedInUser.email}</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Phone</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">9345788502</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Mobile</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">9345788502</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Address</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">Bargur, Krishnagiri, TamilNadu</MDBCardText>
                                  </MDBCol>
                              </MDBRow>

                          </MDBCardBody>
                      </MDBCard>
                   

                      <MDBRow>
                          <MDBCol md="6">
                              <MDBCard className="mb-4 mb-md-0">
                                  <MDBCardBody>
                                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Master of AI</span>current pursuing degree</MDBCardText>
                                      <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Overall Performance</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={60} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Attendance</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={52} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Lab Attendance</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={59} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Weekly Test</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Semester</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={36} valuemin={0} valuemax={100} />
                                      </MDBProgress>
                                  </MDBCardBody>
                              </MDBCard>
                          </MDBCol>

                          <MDBCol md="6">
                              <MDBCard className="mb-4 mb-md-0">
                                  <MDBCardBody>
                                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Assigment</span> Project Status</MDBCardText>
                                      <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>ML</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Data Mining</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={62} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>DeepLearning</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={19} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Face Detection    </MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Numpy & Pandas</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                      </MDBProgress>
                                  </MDBCardBody>
                              </MDBCard>
                          </MDBCol>
                      </MDBRow>
                  </MDBCol>
              </MDBRow>
          )}
          </MDBContainer>
      </section></>
  );
}