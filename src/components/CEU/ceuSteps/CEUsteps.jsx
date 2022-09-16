import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './ceuSteps.css';
import { star } from '../../../assets/images/index';


const CEUsteps = () => {
  return (
    <section className='steps-section'>
        <div className='container'>
        <div className='stepsRow'></div>
            <Row>
                    <Col lg={6} md={12}>
                        <div className='steps-desc'>
                        <div className='steps-heading' >
                            <h4>I'm Interested in CEUs.</h4>
                            <h3><b>WHAT STEPS DO I TAKE NEXT?</b></h3>
                        </div>
                        <div className='steps-content' >
                         <div className='steps-list'>
                            <div className='list-tag'><span className='tag'>1</span></div>
                            <ul className='steps-ul'>
                            <li>Register with Hatching Results here. (If your school or district will be paying for your enrollment in one or more online
                             courses via purchase order, please contact us for assistance.)</li>
                            </ul>
                         </div>
                         <div className='steps-list'>
                            <div className='list-tag'><span className='tag'>2</span></div>
                            <ul className='steps-ul'>
                            <li>Once registered with Hatching Results, you will receive an email that will provide you with access to the online course
                             as well as a registration link for CSUSM CEUs.
                             </li>
                            </ul>
                         </div>
                         <div className='steps-list'>
                            <div className='list-tag'><span className='tag'>3</span></div>
                            <ul className='steps-ul'>
                           <li> Be sure to complete the course by Cal State University San Marcos' deadline.</li>
                            </ul>
                         </div>
                        </div>
    

                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className='stepsImg-div'>
                           
                        </div>
                    </Col>
                
            </Row>
        <Row>
            <div className='registration'>
            <Col lg={7} sm={12} md={12}>
                <div className='note-div'>
                    <div className='container'>
                    <div className='important-note'>
                        <span><img src={star}/></span>
                        <div className='important-note-p' ><p>Important Note!</p></div>
                    </div>
                    <div className='note-desc'>
                    <p> Once we verify that you have completed the final exam with a score of 75% or better, your instructor will notify CSUSM of your completion (you will also be notified when this occurs). The CEUs
                        will then be distributed to you through CSUSM.
                    </p>
                    </div>

                    </div>
                </div>
                </Col>
                <Col lg={5} sm={12} md={12}>
                <div className='register-div'>
                    <div className='container'>
                     <div className='reg-content' >
                        <h3>Are You Ready to Begin?</h3>
                        <p>Want to take a self-paced course and 
                        earn CEUs for professional credentials?</p>
                        <button>Register Now</button>
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

export default CEUsteps