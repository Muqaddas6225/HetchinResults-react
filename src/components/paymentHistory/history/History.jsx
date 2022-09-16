import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './PaymentHistory.css';

const History = () => {
  return (
    <section className='paymentHistory-section'>
        <div className='container'>

        <div className='paymentHistory-div'>
            <div className="paymentHistory-heading">
                <h3 className="paymentHistory-h3">Payment History</h3>
            </div>
            <div className='paymentHistory-tabel-div'>
                {/* table */}

                <Table responsive className='noWrap' >
                
                <thead className='paymentHistory-head'>
                        <tr className='heading-row'>
                        <th className='paymentHistory-t-heading'>Course Name</th>
                        <th className='paymentHistory-t-heading'>Trainer Name</th>
                        <th className='paymentHistory-t-heading'>Approx</th>
                        <th className='paymentHistory-t-heading'>Transaction Amount</th>
                        <th className='paymentHistory-t-heading'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className='paymentHistory-data'>Advance English for Career Development</td>
                        <td  className='paymentHistory-data'>Sandhya Mer</td>
                        <td  className='paymentHistory-data'>16 hours</td>
                        <td  className='paymentHistory-data'>$150</td>
                        <td  className='paymentHistory-data'>10.10.2020  2:43 PM</td>
                        
                        </tr>
                        <tr>
                        <td className='paymentHistory-data'>Advance English for Career Development</td>
                        <td  className='paymentHistory-data'>Sandhya Mer</td>
                        <td  className='paymentHistory-data'>16 hours</td>
                        <td  className='paymentHistory-data'>$150</td>
                        <td  className='paymentHistory-data'>10.10.2020  2:43 PM</td>
                    
                        </tr>
                        <tr>
                        <td className='paymentHistory-data'>Advance English for Career Development</td>
                        <td  className='paymentHistory-data'>Sandhya Mer</td>
                        <td  className='paymentHistory-data'>16 hours</td>
                        <td  className='paymentHistory-data'>$150</td>
                        <td  className='paymentHistory-data'>10.10.2020  2:43 PM</td>
                    
                        </tr>
                        <tr className='last-row'>
                        <td className='paymentHistory-data'>Advance English for Career Development</td>
                        <td  className='paymentHistory-data'>Sandhya Mer</td>
                        <td  className='paymentHistory-data'>16 hours</td>
                        <td  className='paymentHistory-data'>$150</td>
                        <td  className='paymentHistory-data'>10.10.2020  2:43 PM</td>
                    
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

export default History