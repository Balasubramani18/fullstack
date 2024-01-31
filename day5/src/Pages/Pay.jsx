import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtnGroup   
} from "mdb-react-ui-kit";
import './Pay.css'
import { Link } from "react-router-dom";

import {SiPaytm,SiPhonepe} from 'react-icons/si';

export default function Pay() {
  return (
    <><MDBContainer className="py-5">
          <div className="d-flex justify-content-between align-items-center mb-5">
              <div className="d-flex flex-row align-items-center">
                  <h4 className="text-uppercase mt-1">Payment</h4>
                  <span className="ms-2 me-3"></span>
              </div>
              <Link to="/Home">Cancel and return to the website</Link>
          </div>
          <MDBRow>
              <MDBCol md="7" lg="7" xl="6" className="mb-4 mb-md-0">
                  <h5 className="mb-3">Student Fees Payment</h5>
                  <div>
                      <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row mt-1">
                              <h6>Credit card charge:</h6> 
                              <h6 className="fw-bold text-success ms-1">₹490</h6>
                          </div>
                         
                      </div>
                      <p>
                          Insurance claim and all neccessary dependencies will be submitted
                          to your insurer for the covered portion of this order.
                      </p>
                     
                      <hr />
                      <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex flex-row mt-1">
                              <h6>debit card:</h6>
                              <h6 className="fw-bold text-success ms-1">₹0.00</h6>
                          </div>
                          
                      </div>
                      <p>
                          Insurance claim and all neccessary dependencies will be submitted
                          to your insurer for the covered portion of this order.
                      </p>
                      <div class="d-flex flex-column mb-2   ">
                          <MDBBtnGroup vertical aria-label="Vertical button group">
                              <input
                                  type="radio"
                                  className="btn-check"
                                  name="options"
                                  id="option1"
                                  autocomplete="off" />
                              <label className="btn btn-outline-primary btn-lg" for="option1">
                                  <div className="d-flex justify-content-between">
                                      <span>Credit Card </span>
                                      
                                  </div>
                              </label>

                              <input
                                  type="radio"
                                  className="btn-check"
                                  name="options"
                                  id="option2"
                                  autocomplete="off"
                                  checked />
                              <label className="btn btn-outline-primary btn-lg" for="option2">
                                  <div className="d-flex justify-content-between">
                                      <span>Debit Card</span>
                                      
                                  </div>
                              </label>
                              
                          </MDBBtnGroup><br/>
                          <input type="text" placeholder="Enter your card number" required></input>
                          
                      </div>
                      <div className="cont">
                        <div className="gpay">
                          {/* <FaGooglePay/> */}
                        </div>
                        <div className="payt">
                          <SiPaytm/>
                        </div>
                        <div className="pho">
                          <SiPhonepe/>
                        </div>

                        
                          </div>
                  </div>
              </MDBCol>
              <MDBCol md="5" lg="4" xl="4" offsetLg="1" offsetXl="2">
                  <div className="p-3" style={{ backgroundColor: "#eee" }}>
                      <span className="fw-bold">Payment</span>
                      <div className="d-flex justify-content-between mt-2">
                          <span>Year Fees</span> <span>₹135000</span>
                      </div>
                      <div className="d-flex justify-content-between mt-2">
                          <span>Semester Fees</span> <span>₹5000</span>
                      </div>
                      <div className="d-flex justify-content-between mt-2">
                          <span>Other </span> <span> ₹0.00</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between mt-2">
                          <span className="lh-sm">
                              Total Deductible
                          </span>
                          <span>₹135000</span>
                      </div>
                      <div className="d-flex justify-content-between mt-2">
                          <span className="lh-sm">
                              Settlement
                          </span>
                          <span>₹0.00</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between mt-2">
                          <span>Residency </span> <span>₹0.00</span>
                      </div>
                      <div className="d-flex justify-content-between mt-2">
                          <span>Other </span> <span>₹0.00</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between mt-2">
                          <span>Total </span> <span class="text-success">₹140000</span>
                      </div>
                  </div>
              </MDBCol>
          </MDBRow><br />
          <button className="pay">Proceed to Pay</button>
      </MDBContainer>   </>
  );
}