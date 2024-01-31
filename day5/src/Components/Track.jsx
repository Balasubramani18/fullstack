import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import './Track.css';
import Nav from "./Nav";

export default function OrderDetails7() {
  return (
    <>
    <Nav/>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard
                className="card-stepper"
                style={{ borderRadius: "10px" }}
              >
                <MDBCardBody className="p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <span className="lead fw-normal">
                        Your Application is in review
                      </span>
                      <span className="text-muted small">
                        submitted on 21 Jan, 2023                      </span>
                    </div>
                    
                  </div>

                  <hr className="my-4" />

                  <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="big-dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="red-dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="d-flex justify-content-center align-items-center red-dot">
                      <MDBIcon icon="check text-white" />
                    </span>
                  </div>

                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex flex-column align-items-start">
                      <span>15 Mar</span>
                      <span>Admin Check</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <span>16 Mar</span>
                      <span>Dept Check</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <span>17 Mar</span>
                      <span>Faculty Check</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <span>Pending!</span>
                      <span>Head of dept</span>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span>Pending!</span>
                      <span>Confirmation</span>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}