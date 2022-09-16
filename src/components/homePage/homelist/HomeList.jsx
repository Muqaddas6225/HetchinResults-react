import React from 'react';
import './homeList.css';
import { bulb, cap, tick } from '../../../assets/images/index';
import {Row, Col, ListGroup} from 'react-bootstrap';
const HomeList = () => {
  return (
    <section className='homelist-section'>
        <div className='container homelist-container'>
          <Row>
            <Col lg={4} md={6} xs={12}>
             <div>
                <img className='list-icon' src={bulb} alt='bulb' />
                <h3 className='list-heading'>
                Attitudes
                </h3>
                <ListGroup as= 'ul'>
                <ListGroup.Item as="li">Believe in the value of collecting data
                </ListGroup.Item>
                <ListGroup.Item as="li">Believe using data can effect change in students</ListGroup.Item>
                <ListGroup.Item as="li">Believe it is important to chart goals, objectives, and outcomes
                </ListGroup.Item>
                <ListGroup.Item as="li">Believe it is important to disaggregate data</ListGroup.Item>
                <ListGroup.Item as="li">Believe it is important for school counselors to be experts in certain data sets</ListGroup.Item>
                <ListGroup.Item as="li">Believe it is important to use data to design interventions
                </ListGroup.Item>
                </ListGroup>

             </div>
            </Col>
            <Col lg={4} md={6} xs={12}>
             <div>
                <img className='list-icon' src={cap} alt={cap}/>
                <h3 className='list-heading'>
                knowledge
                </h3>
                <ListGroup as= 'ul'>
                <ListGroup.Item as="li">Identify accessible sources of school data</ListGroup.Item>
                <ListGroup.Item as="li">Identify achievement-related and achievement-data</ListGroup.Item>
                <ListGroup.Item as="li">Describe the purpose of data collection</ListGroup.Item>
                <ListGroup.Item as="li">Compare and contrast process, perception, and results data.</ListGroup.Item>
                <ListGroup.Item as="li">Explain the ASK acronym</ListGroup.Item>
                <ListGroup.Item as="li">Define immediate, intermediate, and long-range data</ListGroup.Item>
                </ListGroup>

             </div>
            </Col>
            <Col lg={4} md={6} xs={12}>
             <div>
                <img className='list-icon' src={tick} alt="tick"/>
                <h3 className='list-heading'>
                Skills
                </h3>
                <ListGroup as= 'ul'>
                <ListGroup.Item as="li">Locate data via online data resources</ListGroup.Item>
                <ListGroup.Item as="li">Draw a visual that explains data linkages</ListGroup.Item>
                <ListGroup.Item as="li">Create measurable outcome goals</ListGroup.Item>
                <ListGroup.Item as="li">Draw the Hatching Results conceptual diagram</ListGroup.Item>
                <ListGroup.Item as="li">Explain the conceptual diagram for intentional guidance</ListGroup.Item>
                <ListGroup.Item as="li">Create the conceptual diagram for systems change</ListGroup.Item>
                </ListGroup>

             </div>
            </Col>
           
          </Row>
        </div>

    </section>
  )
}

export default HomeList
