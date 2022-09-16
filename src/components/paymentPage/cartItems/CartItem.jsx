import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './cartItems.css';
const CartItem = () => {
  return (
    <section className='payment-section navbarPadding ' >
     <div className='container'>
        <div className='payment-div'>
            <div className="Cart-heading">
                <h3 className="Cart-h3">Cart Item</h3>
            </div>
            <div className='tabel-div'>
                {/* table */}

                <Table responsive className='noWrap' >
                
                <thead className='payment-head'>
                        <tr className='heading-row'>
                        <th className='t-heading'>Course Name</th>
                        <th className='t-heading'>Trainer Name</th>
                        <th className='t-heading'>Approx</th>
                        <th className='t-heading'>Price</th>
                        <th className='t-heading'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className='payment-data'>Advance English for Career Development</td>
                        <td  className='payment-data'>Sandhya Mer</td>
                        <td  className='payment-data'>16 hours</td>
                        <td  className='payment-data'>$150</td>
                        <td  className='remove-button'> <Button variant="danger">Remove</Button></td>
                        </tr>
                        <tr>
                        <td className='payment-data'>Advance English for Career Development</td>
                        <td  className='payment-data'>Sandhya Mer</td>
                        <td  className='payment-data'>16 hours</td>
                        <td  className='payment-data'>$150</td>
                        <td  className='remove-button'><Button variant="danger">Remove</Button></td>
                        </tr>
                        <tr>
                        <td className='payment-data'>Advance English for Career Development</td>
                        <td  className='payment-data'>Sandhya Mer</td>
                        <td  className='payment-data'>16 hours</td>
                        <td  className='payment-data'>$150</td>
                        <td  className='remove-button'><Button variant="danger">Remove</Button></td>
                        </tr>
                        <tr className='last-row'>
                        <td className='payment-data'>Advance English for Career Development</td>
                        <td  className='payment-data'>Sandhya Mer</td>
                        <td  className='payment-data'>16 hours</td>
                        <td  className='payment-data'>$150</td>
                        <td  className='remove-button'><Button variant="danger">Remove</Button></td>
                        </tr>
                        
                    </tbody>
                
                 </Table>
            </div>
            <div>
                {/* cart total */}
            </div>
            <div>
                {/* button */}
            </div>
        </div>
     </div>
    </section>
  )
}

export default CartItem
