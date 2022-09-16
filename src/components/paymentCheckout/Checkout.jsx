import React,  { useState } from 'react';
import Card from 'react-bootstrap/Card';
import {Row, Col,Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './checkout.css';

const Checkout = () => {

    const [formData, setformData] = useState({
        isAgree : false,
        survey : " "
    })

    const handleChange = event =>{
        const target = event.target
        const name= target.name
        const value = target.value
        setformData({
            ...formData,
            [name]: value
        })
    }

    const [PaymentMethod, setPaymentMethod] = useState({
        isAgree : false,
        payment : " "
    })

    const OnhandleChange = event =>{
        const target = event.target
        const name= target.name
        const value = target.value
        setPaymentMethod({
            ...PaymentMethod,
            [name]: value
        })
    }

  return (

   <section className='checkout-section navbarPadding'>
    <div className='container'>

       {/* Checkout section */}

        <div className='checkout-div' >
        <h3 className='checkout-heading' >Checkout</h3></div>
       <div className='survey-div' >
        <div><h3 className='survey-heading' >How you heard about this course?</h3></div>
        <hr/>
    
            <form>
                <div className='survey-form'>
                    <div>
                    <input type="radio" name="survey" value="Social Media"
                    onChange={handleChange}
                     />
                    <label> Social Media</label>
                    </div>
                    <div>
                    <input type="radio" name="survey" value="Friends"
                    onChange={handleChange}
                     />
                    <label> Friends</label>
                    </div>
                    <div>
                    <input type="radio" name="survey" value="Family"
                    onChange={handleChange}
                     />
                    <label> Family</label>
                    </div>
                    <div>
                    <input type="radio" name="survey" value="School"
                    onChange={handleChange}
                     />
                    <label> School</label>
                    </div>
                    <div>
                    <input type="radio" name="survey" value="College"
                    onChange={handleChange}
                     />
                    <label> College</label>
                    </div>
                </div>
            </form>


           
        </div>

        <div className="payment-Row">
        <Row>
            <Col lg={7}>
            <div>

            <div className='paymentMethod-div' >
                <div><h3 className='paymentMethod-heading' >Select Payment Method</h3>
                <hr/></div>
                <form>
                        <div className='payment-form'>
                            <div>
                            <input type="radio" name="survey" value="Credit Card"
                            onChange={OnhandleChange}
                            />
                            <label> Credit Card</label>
                            </div>
                            <div>
                            <input type="radio" name="survey" value=" PayPal"
                            onChange={OnhandleChange}
                            />
                            <label> PayPal</label>
                            </div>
                            <div>
                            <input type="radio" name="survey" value="Strip"
                            onChange={OnhandleChange}
                            />
                            <label> Strip</label>
                            </div>
                            <div>
                            <input type="radio" name="survey" value="Apple Pay"
                            onChange={OnhandleChange}
                            />
                            <label> Apple Pay</label>
                            </div>
                        
                        </div>
                </form> 
            </div>

            <div className='cardDetails-div'>
            <Form>
                <div className='container'>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                    <Form.Label>Name on card</Form.Label>
                    <Form.Control type="text" placeholder="Name On Card" />
                    </Form.Group>

                    <Form.Group as={Col} >
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="Card-Number" placeholder="Card Number" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control type="date" placeholder="MM/YY" />
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>CVC Number</Form.Label>
                    <Form.Control type="Number" placeholder="123" />
                    </Form.Group>
                </Row>
                </div>
                </Form>
            </div>

            </div>
            </Col>
                <Col lg={5}>
                <div>
                <Card className='coursePayment-card'>
                <Card.Body>
                    <Card.Title className='summary-heading'>Summary</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted ">Course Title</Card.Subtitle>
                    <p className='course-name'>Risk and Compliance Courses </p>
                    <div className='course-payment'>
                    <Card.Text className='coursePriceText' >Course Price</Card.Text>
                    <Card.Text className='course-price'>$120</Card.Text>
                    </div>

                    <div className='coursePayment-total'>
                    <Card.Text>Total</Card.Text>
                    <Card.Text className='course-priceTotal'>$120</Card.Text>
                    </div>
                    <div className='completePayment-div'>
                    <Button variant="success" className='CompletePayment-button' >Complete payment</Button>
                    </div>
                </Card.Body>
                </Card>
                </div>
            

                </Col>
        </Row>
        </div>




       </div>
   </section>
  )
}

export default Checkout