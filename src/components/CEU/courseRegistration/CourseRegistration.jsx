import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './courseRegistration.css';
import { arrow } from '../../../assets/images/index';
const CourseRegistration = () => {
  return (
    <section className='courseReg-section'>
      <div className='container'>
       
        <Row>
        <div className='courseReg-div'>
          <Col lg={7} >
            <div className='courseRegImg-div' >
              <div className='card courseReg-card'>
                <div className='title'>
                  <span><b>$129 </b></span>
                  <span>only</span>
                </div>
                <div className='courseReg-card-body'>
                  <p>Total Registration Cost</p>
                </div>
              </div>
            </div>

          </Col>
          <Col lg={5}>
            <div className='courseReg-desc'>
              <div className='courseReg-heading'>
                <h3 className='courseReg-h3'>Course Registration</h3> 
              </div>
            <div className='ceuReg-content' >
              <div className='ceuReg-list'>
                <span className='arrow-icon'><img src={arrow}   /></span>
                <ul className='courseReg-ul'>
                  <li>Hatching Results Registration for CEUs</li>
                  <p>Hatching Results self-paced online courses and CEUs are $79 each.
                   The $79 to Hatching Results fee includes the cost of the course and 
                   a trained Instructor who will grade your final exam and report successful
                    course completion to CSUSM for unit distribution.</p>
                </ul>
              </div>
              <div className='ceuReg-list'>
                <span className='arrow-icon'><img src={arrow}   /></span>
                <ul className='courseReg-ul'>
                  <li>CSUSM Registration Fee for CEUs</li>
                  <p>To register for CEUs through CSUSM, participants must
                   pay a $40 fee. After registering through Hatching Results, an email will
                   be sent with instructions on how to enroll through CSUSM. </p>
                </ul>
              </div>
              </div>
            </div>
          </Col>
          </div>
        </Row>
      </div>
    </section>
  )
}

export default CourseRegistration