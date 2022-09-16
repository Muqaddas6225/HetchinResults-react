import React from 'react';
import './Hero.css';
import {Container, Row, Col} from 'react-bootstrap';
import {heroImg } from '../../../assets/images/index';

const Hero = () => {
  return (
    <section className='heroSection navbarPadding'>
    {/* <div className='container'> */}
    <Container>
      <Row>
        <div className ="helping-knak">
            <Col lg={6}>
                <div className ="description">
                    <h3 className ="knak-heading">
                    Data, Data, Data:
                    Designing, Implementing, 
                    Evaluating & Improving School Counseling Programs 
                    </h3>
                    {/* <p className ="knak-para">
                        Teaching Relevant Education and
                         Life Skills For Young People and Kids
                    </p> */}
                    {/* <button className ="knak-btn">call us today</button> */}
                </div>
            
            </Col>
            <Col lg={6}>
                <div className ="knakImg">
                <img src={heroImg} alt="Hero"></img>
                    {/* <!-- <img className ="knak-img" src="/assests/images/knak-img.png" alt="" srcset=""> -->
                    <div className ="card knak-card-1">
                      <img className ="kCardImg" src="/assests/images/certificate-courses.svg" alt="">
                      <div className ="knak-card-body">
                        <h1 className ="card-heading">Certificate
                          Courses</h1>
                      </div>
                    </div>
                    <div className ="card knak-card-2">
                      <img className ="kCardImg" src="/assests/images/icon.svg" alt="">
                      <div className ="knak-card-body">
                        <h1 className ="card-heading">Career
                          Development </h1>
                      </div>
                    </div> */}
                   
                </div>
            </Col>
       </div>
      
      </Row>
      </Container>
      {/* </div> */}
    </section>
  )
}

export default Hero
