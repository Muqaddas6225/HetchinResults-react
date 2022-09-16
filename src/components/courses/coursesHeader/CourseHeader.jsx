import React from 'react';
import './courseHeader.css';
import {Row, Col} from 'react-bootstrap';
import { courseHeaderBackground, courseheaderImg, Intersect, course, expertTeacher } from '../../../assets/images/index';

const CourseHeader = () => {
  return (
   
    <section className ="LearningSystem navbarPadding ">
        <div className ="container">
          <Row>
         <div className ="LearningSystem-row">
            <Col lg={6} md={12}>
              <div className ="LearningSystem-desc">
                <h1 className ="LearningSystem-h1">
                Learn new skills to reach more students and make a greater IMPACT!</h1>
                <p  className ="LearningSystem-p">
                Take high-quality online courses from leading experts in the
                 field of school counseling and level up your comprehensive program for students</p>
              </div>     
             </Col>
             <Col lg={6} md={12}>
                <div className ="Pic-LearningSystem">
                    {/* <!-- <img src="/assests/images/LearningSystem.png" alt="" srcset=""> --> */}
                    <div className ="card LearningSystem-card-1">
                      {/* <img className ="LearningSystemImg" src="/assests/images/icon-courses.svg" alt="" /> */}
                      <img src={course} />
                      <div className ="LearningSystem-card-body">
                        <h1 className ="LearningSystem-card-heading">
                        Certificate Courses</h1>
                      </div>
                    </div>
                    <div className ="card LearningSystem-card-2">
                      {/* <img className ="LearningSystemImg" src="/assests/images/icon-courses.svg" alt="" /> */}
                      <img src={expertTeacher} />
                      <div className ="LearningSystem-card-body">
                        <h1 className ="LearningSystem-card-heading">Learn From Expert Teachers
                          </h1>
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

export default CourseHeader
