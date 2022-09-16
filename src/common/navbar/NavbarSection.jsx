import React, { useState , useEffect }  from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom'

// import NavDropdown from 'react-bootstrap/NavDropdown';
import  {HRLogo, HrLogo}  from '../../assets/images/index.js';
import './Navbar.css'


const NavbarSection = () => {

    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [color, setColor] = useState(false);


    useEffect(() => {
      window.addEventListener("scroll", backgrounColor);
    })

    const backgrounColor = () => {
        if(window.scrollY > 0){
          setColor(true);
        }
        else{
          setColor(false);
        }
    }

  
  return (
    <section id='navbar-section' className= {color ? "navbar1" : "navbar2"}>
      {/* <div className='container'> */}
       <div className='container'>
       <Navbar expand="lg">
       {/* <Container> */}
        <div className='container'>
        <Navbar.Brand href="/">
          <img src={HRLogo} alt='HRLogo' />
        </Navbar.Brand>
        <div className="hamburger" variant="primary" onClick={handleShow}>
                  <div class="line line1"></div>
                  <div class="line line2"></div>
                  <div class="line line3"></div>
              </div> 
        <Navbar.Collapse id="basic-navbar-nav" className='navList'>
          <Nav className="list">
            <Nav.Link className='item' ><Link to='/' >Home</Link></Nav.Link>
            <Nav.Link className='item'><Link to='courses' >Courses</Link></Nav.Link>
            <Nav.Link className='item'><Link to='payment' >Payment</Link></Nav.Link>
            <Nav.Link className='item'><Link to='paymentCheckout' >Payment Checkout</Link></Nav.Link>
            <Nav.Link className='item'><Link to='paymentHistory' >Payment History</Link></Nav.Link>
            <Nav.Link className='item'><Link to='ceu' >CEU's</Link></Nav.Link>
           
            
          </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>

    

      <Offcanvas placement='top' show={show} onHide={handleClose} backdrop="static"  >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={HRLogo} alt='HRLogo' /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="list">
            <Nav.Link className='item' onClick={handleClose} ><Link to='/' >Home</Link></Nav.Link>
            <Nav.Link className='item' onClick={handleClose}><Link to='courses' >Courses</Link></Nav.Link>
            <Nav.Link className='item' onClick={handleClose}><Link to='payment' >Payment</Link></Nav.Link>
            <Nav.Link className='item' onClick={handleClose}><Link to='paymentCheckout' >Payment Checkout</Link></Nav.Link>
            <Nav.Link className='item' onClick={handleClose}><Link to='paymentHistory' >Payment History</Link></Nav.Link>
            <Nav.Link className='item' onClick={handleClose}><Link to='ceu' >CEU's</Link></Nav.Link> 
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
      
    </section>
  )
}

export default NavbarSection;
