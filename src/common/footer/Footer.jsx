import React from 'react'
import {Row, Col} from 'react-bootstrap';
import './footer.css';
import { HrLogo, hatchingfooterbg, Instargam,twitter,telegram,facebook,youtube} from '../../assets/images/index';

const Footer = () => {
  return (
   <section className='footerSection'>
   <div className='footer-div'>
   <div className='hatchingfooterbg'>
    <img className='hatchingfooterbg-img' src={hatchingfooterbg} alt='hatchingfooterbg' />
   </div>
    <div className='container footer-container'>
     <div className='footerrow-div'>
        <Row className='footerRow'>
           
            <Col lg={4} md={6}>
                <img className='footer-logo' src={HrLogo} alt="footer-logo" />
            </Col>
            <Col lg={4} md={6}>
                <div className='button-div'>
                <button className="footerButton" type='submit'>Contact Us</button>
                </div>
            </Col>
            <Col lg ={4} md={6}>
                <div className='SocialIcons'>
                    <img className='icon' src={facebook} alt="social icons" />
                    <img className='icon' src={twitter} alt="social icons"/>
                    <img className='icon' src={telegram} alt="social icons" />
                    <img className='icon' src={Instargam} alt="social icons"  />
                    <img className='icon' src={youtube} alt="social icons" />
                </div>
            </Col>
           
        </Row>
        
        <Row>
            <p className='copyright'>
            © Copyright 2022 by Hatching Results. 
A           ll rights reserved.
            </p>
        </Row>
        </div>
    </div>
    </div>
   </section>

  )
}

export default Footer
