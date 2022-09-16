import React from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col,Button} from 'react-bootstrap';
import './contact.css';
import { contactUsImg } from '../../../assets/images/index';

const ContactUs = () => {
  return (
    <section className='contactUs-section'>
        <div className='container'>
            <div className='contactUs-heading'>
                <h3>Let’s Get In Touch</h3>
            </div>
            
            <Row>
               <div className='contactForm'>
                <Col>
                <div className='contactForm-div' >
                <h4 className='contactUs-heading'>Contact us to learn more.</h4>
                    <Form>
                        
                        <Form.Group className="mb-3">
                            <Form.Control className='formInput' type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control className='formInput'  type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control className='formMsgInput'  as="textarea"  placeholder="Message"  rows={3} />
                        </Form.Group>
                        <Button className='formButton' variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                    </div>
                </Col>
                <Col>
                    <div className='contactImg-div'>
                        <img className='contact-img' src={contactUsImg}  />
                    </div>
                </Col>
                </div>
            </Row>
            
        </div>
    </section>
  )
}

export default ContactUs