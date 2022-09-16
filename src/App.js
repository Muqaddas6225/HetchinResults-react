import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarSection from './common/navbar/NavbarSection';
import Home from './components/homePage/Home';
import Courses from './components/courses/Courses';
import Payment from './components/paymentPage/Payment';
import PaymentCheckout from './components/paymentCheckout/PaymentCheckout';
import PaymentHistory from './components/paymentHistory/PaymentHistory';
import CEU from './components/CEU/CEU';
import Footer from './common/footer/Footer';




function App() {
  return (
    <>
      <NavbarSection/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/paymentCheckout' element={<PaymentCheckout/>} />
          <Route path='/paymentHistory' element={<PaymentHistory/>} />
          <Route path='/ceu' element={<CEU/>} />
        </Routes>
       <Footer/>
    </>
  );
}

export default App;
