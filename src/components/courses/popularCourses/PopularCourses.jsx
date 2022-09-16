import React from 'react';
import Card from 'react-bootstrap/Card';
import {img, img1, img2, img3, img4, img5, img6, img7, img8, img9,img10,img11} from '../../../assets/images/index';
import './popularCourses.css';
import CoursesPopular from './CoursesPopular';


const CardComponent = (props) =>{
     return (

        <div>
        <Card className='popularCourses-card' style={{ width: '18rem' }}>
            <Card.Img className='popularCourses-img' variant="top" src={props.img} />
            <Card.Body>
                <Card.Title  className='popularCourses-heading'>{props.title}</Card.Title>
                <Card.Text  className='popularCourses-text'>
                <p>{props.by}<span><Card.Link className='popularCourses-Authorname' href="#">{props.author}</Card.Link></span></p>
                </Card.Text>
            </Card.Body>
            <Card.Body className='Courses-duration'>      
                <p className='duration'>{props.duration}</p>
                <span className='vertical-line'></span>
                <p className='courses-status'>{props.status}</p>
            </Card.Body>
        </Card>
        </div>

     )
    
}

function CreatCoursePopular(CoursesPopular){
    return (

        <CardComponent
        key = {CoursesPopular.id}
        title = {CoursesPopular.title}
        by = {CoursesPopular.by}
        author = {CoursesPopular.author}
        duration = {CoursesPopular.duration}
        status = {CoursesPopular.status}
        img= {CoursesPopular.img}
       />
       
    );
}




const PopularCourses = () => {
  return (
    <section>
        <div className='container'>
            <div className='PopularCourses-headingdiv'>
                <h3 className='PopularCourses-heading'>Popular Courses</h3>
            </div>
            <div className='Popularcourses-div'>
                <div className='popularCourses-row'>

                {/* by using map */}
                    {CoursesPopular.map(CreatCoursePopular)}



    {/* By Array */}

             {          /* <CardComponent
                        title = {CoursesPopular[0].title}
                        by = {CoursesPopular[0].by}
                        author = {CoursesPopular[0].author}
                        duration = {CoursesPopular[0].duration}
                        status = {CoursesPopular[0].status}
                        img= {CoursesPopular[0].img}
                       />

                       <CardComponent
                        title = {CoursesPopular[1].title}
                        by = {CoursesPopular[1].by}
                        author = {CoursesPopular[1].author}
                        duration = {CoursesPopular[1].duration}
                        status = {CoursesPopular[1].status}
                        img= {CoursesPopular[1].img}
                       /> */}

    {/* Without using javascript array */}

{/*                                       
                       <CardComponent
                        title = "Advance English for Career Development"
                        by = "By"
                        author = "SANDHYA MER"
                        duration = "16 Weeks"
                        status = "Online"
                        img={img1}
                       />
             */}


    {/* Manually paas the data */}

{/* 
                        <div>
                        <Card className='popularCourses-card' style={{ width: '18rem' }}>
                            <Card.Img className='popularCourses-img' variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title  className='popularCourses-heading'>Advance English for Career Development</Card.Title>
                                <Card.Text  className='popularCourses-text'>
                                <p>By <span><Card.Link className='popularCourses-Authorname' href="#">SANDHYA MER</Card.Link></span></p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className='Courses-duration'>      
                                <p className='duration'>16 Weeks</p>
                                <span className='vertical-line'></span>
                                <p className='courses-status'>Online</p>
                            </Card.Body>
                        </Card>
                        </div>
    */}
                  
                </div>
            </div>
        </div>
    </section>
  )
}

export default PopularCourses