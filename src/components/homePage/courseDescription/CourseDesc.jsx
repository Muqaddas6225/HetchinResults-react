import React from 'react'
import {Container, Row, Col, ListGroup} from 'react-bootstrap';
import './courseDesc.css';
import { coursedescImg } from '../../../assets/images/index';

const CourseDesc = () => {
  return (
    <section className='courseDescSection'>
        <div className='container'>
          <Row className='coursedesc-row'>
            <Col lg={5}>
                <div className='coursedesc-img'>
                <img src={coursedescImg} alt ='course description' />
                </div>
                
            </Col>
            <Col lg={7}>
              <div className='body'>
                <h3 className='title' >Course Description</h3>
                <p className='para'>Use of Data in School Counseling (2nd Edition)</p>
                <ul className='list'>
                    <li className='list-item'>
                    It is an introduction to how school counselors and educators
                    can begin to use data in designing, implementing, evaluating
                    and improving school counseling and other programs in schools.
                    </li>
                    <li className='list-item'>Students who take this course will gain the
                     following attitudes, knowledge, and skills:</li>
                
                </ul>
                <h4 className='note'>Note:</h4>
                <p className='note-desc' >A Digitial ebook version of this text 
                is included with each purchase.</p>
              </div>
            </Col>
          </Row>
        </div>   
    </section>
  )
}

export default CourseDesc
