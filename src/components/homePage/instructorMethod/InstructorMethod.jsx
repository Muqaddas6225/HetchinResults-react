import React from 'react';
import './instructorMethod.css';
import {Row, Col, ListGroup} from 'react-bootstrap';
import {textbook, method} from '../../../assets/images/index';

const InstructorMethod = () => {
  return (
   <section className='InstructorMethod-section'>
    <div className="container">
        <Row>
            <div className='Instructor-row' >
            <Col lg={6} md={12} sm={12}>
                <div className='instructor-body'>
                    <div className='body-data'>
                        <h3 className='body-title'>
                        Instructor Methods and Course Design
                        </h3>
                        <p className='body-desc'>This course is designed to be self-paced to accommodate hectic schedules. Course goals will be met using a combination of readings from the included e-textbook, videos, activities, and other supplemental readings. Learnings from each lesson
                         can be immediately implemented in the school building.</p>
                    </div>
                    <div className='body-data'>
                        <h3 className='body-title'>Best-Selling ebook Included</h3>
                        <p className='body-desc'>
                        Hatch, T. & Hartline, J. (2021). The use of data in school counseling: Hatching results (and so much more) for students, 
                        programs, and the profession. Thousand Oaks, CA: Corwin.
                        </p>
                    </div>
                    <div className='body-data'>
                        <h3 className='body-title'>Suggested Readings</h3>
                        <p className='body-desc'>
                        American School Counselor Association. (2022). The ASCA national model: A framework for school
                         counseling programs (4th ed.). Alexandria, VA. Author.
                        </p>
                    </div>
                </div>

            </Col>
            <Col lg={6} md={12} sm={12}>
                <div className ='instructor-img-div' >
                 <div className="card instructor-card-1">
                      <img className="instructorImg" src={method} alt=""/>
                      <div className="instructor-card-body">
                        <h1 className="instructor-card-heading">Instructor methods</h1>
                      </div>
                    </div>
                    <div className="card instructor-card-2">
                      <img className="instructorImg" src={textbook} alt=""/>
                      <div className="instructor-card-body">
                        <h1 className="instructor-card-heading">Course textbooks</h1>
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

export default InstructorMethod
