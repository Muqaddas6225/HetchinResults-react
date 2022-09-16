import React from 'react';
import './courseOption.css';
import Card from 'react-bootstrap/Card';

const CourseOption = () => {
  return (
   <section className="courseOption-section">
    <div className='container'>
        <h3 className='main-heading'>Choose the course option that's right for you</h3>
        <div className='card-section'>
            
            
           <Card className='courseOption-card'>
                <Card.Body>
                    <Card.Title>Self-Paced Course</Card.Title>
                    <Card.Text>
                    Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic,
                     social/emotional, college and career readiness domains.
                    </Card.Text>
                    <Card.Link href="#">Learn More</Card.Link>
                </Card.Body>
            </Card>

            <Card className='courseOption-card'>
                <Card.Body>
                    <Card.Title>Self-Paced Course + Continuing Education Units (CEUs)</Card.Title>
                    <Card.Text>
                    Offered in partnership with California State University San Marcos (CSUSM) Extended Learning, these courses earn continuing education units that apply to recertification and the maintenance of professional credentials
                    </Card.Text>
                    <Card.Link href="#">Learn More</Card.Link>
                </Card.Body>
                </Card>

            <Card className='courseOption-card'>
                <Card.Body>
                    <Card.Title>Self-Paced Course + University Credits</Card.Title>
                    <Card.Text>
                    Offered in partnership with California State University San Marcos Extended Learning to connect educators with a variety 
                    of professional development opportunities, these courses earn university credits, generally honored by school districts for the purpose of advancement and salary increments/increases on the district step and column pay schedule.
                    </Card.Text>
                    <Card.Link href="#">Learn More</Card.Link>
                </Card.Body>
                </Card>
         
        </div>
    </div>
   </section>
  )
}

export default CourseOption