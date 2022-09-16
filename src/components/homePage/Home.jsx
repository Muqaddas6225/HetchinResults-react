import React from 'react';
import Hero from './heroSection/Hero';
import CourseDesc from './courseDescription/CourseDesc';
import HomeList from './homelist/HomeList';
import InstructorMethod from './instructorMethod/InstructorMethod';
import CourseOption from './courseOption/CourseOption';
import ContactUs from './contactUs/ContactUs';

const Home = () => {
  return (
    <div>
        <Hero/>
        <CourseDesc/>
        <HomeList/>
        <InstructorMethod/>
        <CourseOption/>
        <ContactUs/>
        
    </div>
  )
}

export default Home
