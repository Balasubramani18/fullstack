import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import './Nav.css';
import Image from'../Components/pp.jpg'
import { Link } from 'react-router-dom';
import DD from './Dp';

const pages = ['Online Degrees', 'Application', 'Online fees payment'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  
function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:'#29b4f9'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
          className='ti'
            variant="h5"
            noWrap
            component="a"
            href="/Home"
            sx={{
              mr: 35,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Ysabeau SC, sans-serif',
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BS University
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <DD/>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/Home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           KS University
          </Typography>
          <Typography
          className=''
            variant="h9"
            noWrap
            component="a"
            href="/OnlineDegree"
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: ' ',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Online Degree
          </Typography>
          <Typography
          className=''
            variant="h9"
            noWrap
            component="a"
            href="/Status"
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
            Application Status
          </Typography>
          <Typography
          className=''
            variant="h9"
            noWrap
            component="a"
            href="/Payment"
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
            Online Fees Payment
          </Typography>
          <Typography
          className=''
            variant="h9"
            noWrap
            component="a"
            href="/"
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
            Logout
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Link to="/Profile"><Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
            </Tooltip>  
            </Link>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;


// import { Navbar, Nav } from 'rsuite';
// import HomeIcon from '@rsuite/icons/legacy/Home';
// import CogIcon from '@rsuite/icons/legacy/Cog';

// const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
//   return (
//     <Navbar {...props}>
//       <Navbar.Brand href="#">RSUITE</Navbar.Brand>
//       <Nav onSelect={onSelect} activeKey={activeKey}>
//         <Nav.Item eventKey="1" icon={<HomeIcon />}>
//           Home
//         </Nav.Item>
//         <Nav.Item eventKey="2">News</Nav.Item>
//         <Nav.Item eventKey="3">Products</Nav.Item>
//         <Nav.Menu title="About">
//           <Nav.Item eventKey="4">Company</Nav.Item>
//           <Nav.Item eventKey="5">Team</Nav.Item>
//           <Nav.Item eventKey="6">Contact</Nav.Item>
//         </Nav.Menu>
//       </Nav>
//       <Nav pullRight>
//         <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
//       </Nav>
//     </Navbar>
//   );
// };

// const App = () => {
//   const [activeKey, setActiveKey] = React.useState(null);

//   return (
//     <>
//       <CustomNavbar activeKey={activeKey} onSelect={setActiveKey} />
//       <hr />
//       <CustomNavbar appearance="inverse" activeKey={activeKey} onSelect={setActiveKey} />
//       <hr />
//       <CustomNavbar appearance="subtle" activeKey={activeKey} onSelect={setActiveKey} />
//     </>
//   );
// };

// export default CustomNavbar;