import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './carttotal.css';


const CartTotal = () => {
  return (
    <section className='cartTotal-secton'>
        <div className='container'>
            <div>
            <Card className='productPayment-card' style={{ width: '631.56px' }}>
            <Card.Body>
                <Card.Title className='cart-total-heading'>Cart Total</Card.Title>
                <div className='product-payment'>
                <Card.Text>Advance English for Career Development</Card.Text>
                <Card.Text className='product-price'>$120</Card.Text>
                </div>
                <div className='product-payment'>
                <Card.Text>Advance English for Career Development</Card.Text>
                <Card.Text className='product-price'>$35</Card.Text>
                </div>
                <div className='product-total'>
                <Card.Text>Total</Card.Text>
                <Card.Text className='product-priceTotal'>$170</Card.Text>
                </div>
               
            </Card.Body>
            </Card>
            </div>
            <div className='Proceed-button-div'>
          <Button variant="success" className='Proceed-button' >Proceed to Payment</Button>
        </div>

        </div>

      

    </section>
  )
}

export default CartTotal