// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Use 'useNavigate' instead of 'Navigate'
// import axios from 'axios';

// function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Name validation: Check if the name is not empty
//     if (!name) {
//       setErrorMessage('Please enter your name.');
//       return;
//     }

//     // Email validation: Check if the email is in a valid format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setErrorMessage('Please enter a valid email address.');
//       return;
//     }

//     // Contact number validation: Ensure that the contact number contains only numbers
//     const contactRegex = /^\d+$/;
//     if (!contactRegex.test(contact)) {
//       setErrorMessage('Please enter a valid contact number.');
//       return;
//     }

//     // Password validation: Ensure that the password has a minimum length
//     if (password.length < 6) {
//       setErrorMessage('Password should be at least 6 characters long.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8081/api/v1/auth/register', {
//         name,
//         email,
//         contact,
//         password,
//       });

//       if (response.status === 200) {
//         navigate('/');
//         setName('');
//         setContact('');
//         setPassword('');
//         setEmail('');
//       }
//     } catch (error) {
//       console.error('Error: ', error);
//     }
//   };

//   return (
//     <div className="full">
//       <div className="outer">
//         <h1 id="head">Register your Account</h1>
//         <form className="fields" onSubmit={handleSubmit}>
//           {errorMessage && <p className="error-message">{errorMessage}</p>}

//           <input
//             id="usrnm"
//             type="text"
//             required
//             placeholder="Enter your name here"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <br />
//           <br />
//           <br />
//           <input
//             id="email"
//             type="email"
//             required
//             placeholder="Enter your email here"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br />
//           <br />
//           <br />
//           <input
//             id="password"
//             type="password"
//             required
//             placeholder="Enter your password here"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <br />
//           <br />
//           <input
//             id="mob"
//             type="number"
//             pattern="[0-9]*"
//             required
//             placeholder="Enter your mobile number here"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//           />
//           <br />
//           <br />
//           <button id="submit">REGISTER</button>
//           <br />
//         </form>
//       </div>
//     </div>
//   );
// }


















import React, { useState } from 'react';
import './login.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// ... (previous imports and code) ...

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleformSubmit = async (e) => {
    e.preventDefault();

    // Email validation: Check if the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Password validation: Ensure that the password has a minimum length
    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', {
        email,
        password,
      });

      navigate('/home');

      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Error: ', error);
      setErrorMessage('Password is Incorrect');
    }
  };

  return (
    <div className="full">
      <div className="outer" id="login-full">
        <h1 id="title"></h1>
        <h1 id="head">LOGIN</h1>
        <div className="fields">
          <label htmlFor="email">User email</label>
          <br/>
          <input
            id="email"
            label='user'
            type="email"
            required
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <br/>

          <label htmlFor="password">Password</label>
          <br/>
          <input
            id="password"
            type="password"
            required
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button id="submit" onClick={handleformSubmit} type="submit">
            LOGIN
          </button>

          <h4 id="lower">
            Don't have an account? <Link to="/reg">Register</Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Login;