// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavigationBar from './NavigationBar';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Enter from './Enter';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about/*" element={<AboutWithNavBar />} />
//           <Route path="/contact/*" element={<ContactWithNavBar />} />
//           <Route path="/enter/*" element={<Enter/>}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function AboutWithNavBar() {
//   return (
//     <div>
//       <NavigationBar />
//       <About />
//     </div>
//   );
// }

// function ContactWithNavBar() {
//   return (
//     <div>
//       <NavigationBar />
//       <Contact />
//     </div>
//   );
// }

// export default App;
// // App.js (or your main component)
// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaGlobe,FaSignInAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';

function App() {
  
  return (
    <div>
      <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      
      <Navbar.Brand href="#home">
      <Image src="./MML.png" alt="Logo" fluid style={{ width: '100px', height: 'auto' }} /> 
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="RESOURCES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/public">For Public</NavDropdown.Item>
              <NavDropdown.Item href="#action/hp">
                For Healthcare Professional
              </NavDropdown.Item>
              
            </NavDropdown>
            {/* <Link to="/research"><Nav.Link to="/research">RESEARCH</Nav.Link></Link> */}
            <Nav.Link as={Link} to="/research" className="no-underline-link">RESEARCH</Nav.Link>            
          </Nav>
          <Nav>
            <NavDropdown title={<FaGlobe  style={{ fontSize: '30px' }} />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">BM</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">华文</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav >
          <Link to="/login"><Button variant="primary" onClick={<LoginPage/>}>Login <FaSignInAlt /> </Button></Link>
          </Nav>
        </Navbar.Collapse>
      
     
    </Navbar>
    </div>
    
    


    <Carousel data-bs-theme="dark" interval={5000}>
  <Carousel.Item className="custom-carousel-item">
    
      <img
        className="d-block w-100"
        src="malaysia2.jpg"
        alt="First slide"
        width="600" // Set your desired width
        height="600" // Set your desired height
      />
    
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="custom-carousel-item">
    
      <img
        className="d-block w-100"
        src="malaysia1.png"
        alt="Second slide"
        width="600" // Set your desired width
        height="600" // Set your desired height
      />
   
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="custom-carousel-item">
    
      <img
        className="d-block w-100"
        src="malaysia3.jpg"
        alt="Third slide"
        width="600" // Set your desired width
        height="600" // Set your desired height
      />
    
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  
    
    <div>AAA</div>
  </div>
  );
}


export default App;


