import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './CEU-Header.css';
import {CeuHeaderImg } from '../../../assets/images/index';

const CEUHeader = () => {
  return (
    <section className='CEUHeader-section'>
      <div className='container'>
      
       <Row style={{marginTop:"79px"}}>
       <div className='ceu-headerRow'>
            <Col lg={5}>
              <div className='ceuHeader-desc'>
                <h3  className='ceu-heading'>Continue Education Units (CEUs)</h3>
                <p>
                  Hatching Results is pleased to announce that in
                  partnership with California State University
                  San Marcos (CSUSM), you can now earn Continuing 
                  Education Units (CEUs) by taking Hatching Results
                  online courses!
                </p>
              </div>
            </Col>
            <Col lg={7}>
              <div className='ceu-headerImg-div'>
                <img className='ceu-headerImg' src={CeuHeaderImg} />
              </div>
            </Col> 
            </div>
       </Row>
        
        <div className='ceu-guidance'>
          <div className='ceu-info'>
            <div className='container'>
              <h3>What are Continuing Education Units? (CEUs)</h3>
              <p>CEUs are a nationally-recognized unit of measurement
               for a variety of non-credit programs applying toward re-licensure,
                promotion, or career advancement. </p>
                </div>
          </div>
          <div className='ceu-duration'>
          <div className='container'>
              <h3>How long does each course take and how many CEUs 
              can I earn from each Hatching Results course?</h3>
              <p>
              Each course takes approximately 15 hours to complete. 1 CEU is equal to
               10 hours of course work. Therefore, you can earn 1.5 CEUs 
               with each Hatching Results course you complete.
              </p>
              </div>
          </div>

        </div>
        </div>
      
    </section>
  )
}

export default CEUHeader