import React from 'react';
import { Link } from 'react-router-dom';


const Cardd = () => {
  return (
    <div className="card mb-3">
      <img src="https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1411.jpg?w=1060&t=st=1689137856~exp=1689138456~hmac=60262f4f7ddda962548c864ada5f42d8ba2aa47bbdd59c322b142f04b077a2f9" className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">Master of Data Science</h5>
        <p className="card-text">Program emphasizing data analysis and machine learning for insights</p>
        <Link to="/DS">
         <a className="btn btn-primary">Learn More</a>
        
        </Link> 
      </div>
    </div>
  );
}
const Cardd2 = () => {
  return (
    <div className="card mb-3">
      <img src="https://img.freepik.com/free-photo/female-hacker-with-her-team-cyber-terrorists-making-dangerous-virus-attack-government_482257-23001.jpg?w=1060&t=st=1689138026~exp=1689138626~hmac=e0bc4dedf2a76a579eb3e83ea5f571bcc37865207a69aa083943ad63e5c0fcff" className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">Master of Cyber Security</h5>
        <p className="card-text"> Program focusing on safeguarding digital systems and combating cyber threats</p>
        <Link to="/CY">
         <a className="btn btn-primary">Learn More</a>
        
        </Link> 
      </div>
    </div>
  );
}
const Cardd3 = () => {
  return (
    <div className="card mb-3">
      <img src="https://img.freepik.com/free-photo/closeup-plasma-globe-darkness_53876-42524.jpg?w=1060&t=st=1689138452~exp=1689139052~hmac=fc4953bac0899b476c3b3073c2cc55306b73c1555ecf98a8a4edc83be1598939" className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">Master of Physics</h5>
        <p className="card-text">Advanced study of fundamental principles and research in physics</p>
        <Link to="/PHY">
         <a className="btn btn-primary">Learn More</a>
        
        </Link> 
      </div>
    </div>
  );
}


const Apj = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <Cardd />
        </div>
        <div className="col-lg-4 col-md-6">
          <Cardd2 />
        </div>
        <div className="col-lg-4 col-md-6">
          <Cardd3 />
        </div>
      </div>
    </div>
    
  );
}

export default Apj;
