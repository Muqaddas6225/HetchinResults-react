import React from 'react'
import CartItem from './cartItems/CartItem';
import CartTotal from './cartTotal/CartTotal';

const Payment = () => {
  return (
   <div>
        <CartItem/>
        <CartTotal/>
   </div>
  )
}

export default Payment