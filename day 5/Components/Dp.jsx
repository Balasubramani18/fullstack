import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from '@mui/material';

export default function DD() {
  return (
    <MDBDropdown>
      <MDBDropdownToggle tag='a' className='btn btn-primary'>
        <MDBIcon icon='bars' />
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem><Link href="/OnlineDegree">
            Online Degree
          </Link></MDBDropdownItem>
        <MDBDropdownItem link><Link href='/Status'>Application Status</Link> </MDBDropdownItem>
        <MDBDropdownItem link><Link href='/Payment'>Online Fees Payment</Link></MDBDropdownItem>
        <MDBDropdownItem link><Link href='/'>Logout</Link></MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
