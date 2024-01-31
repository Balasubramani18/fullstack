import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="card mb-3" >
      <img src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?w=1060&t=st=1689137601~exp=1689138201~hmac=cd4039741ee733eef1915be47b29d1db06b3be8b08e46898cfd3d1e2919e3f5b" className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">Master of Computer Science</h5>
        <p className="card-text">
Advanced computer science degree for specialized roles and research</p>
        <Link to="/MC">
         <a className="btn btn-primary">Learn More</a>
        
        </Link> 
      </div>
    </div>
  );
}
const Card2 = () => {
  return (
    <div className="card mb-3">
      <img src="https://img.freepik.com/free-photo/how-is-your-deals-group-people-business-conference-modern-classroom-daytime_146671-16408.jpg?w=1060&t=st=1689137688~exp=1689138288~hmac=b207984261068a7667ac4d8f1a75bca28db53cf8399c7cdef2f4384ba472c8ee" className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">Master of Business Management</h5>
        <p className="card-text">Developing business management expertise for leadership and strategy</p>
        <Link to="/MBA">
         <a className="btn btn-primary">Learn More</a>
        
        </Link> 
      </div>
    </div>
  );
}
const Card3 = () => {
  return (
    <div className="card mb-3">
      <img src="https://img.freepik.com/free-photo/ai-technology-microchip-background-futuristic-innovation-technology-remix_53876-124727.jpg?w=1060&t=st=1689137763~exp=1689138363~hmac=2f06538239a83f4a27c2b3aa337dc7b2f76f447cf879e88e6e91cd6d6da3432d" className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">Master of Artificial Intelligence</h5>
        <p className="card-text">Technology simulating human intelligence for advance level automation</p>
        <Link to="/AI">
         <a className="btn btn-primary">Learn More</a>
        
        </Link> 
      </div>
    </div>
  );
}


const Ap = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <Card />
        </div>
        <div className="col-lg-4 col-md-6">
          <Card2 />
        </div>
        <div className="col-lg-4 col-md-6">
          <Card3 />
        </div>
      </div>
    </div>
    
  );
}

export default Ap;
