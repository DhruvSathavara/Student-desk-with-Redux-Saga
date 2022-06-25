import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class SlickSlider extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      errow : 4
    };
    return (
      <div style={{height:'34rem'}} className="container">
        <div className='title-box'>
            <h3>New Arrivals</h3>
            <div className='under-line'></div>
        </div>
        <Slider {...settings}>
        <div><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png' alt="Credit to Joshua Earle on Unsplash"/><p className='book-details'>Javascriptbible</p><p className='book-price'>Free</p></div>
        
        <div><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png' alt="Credit to Alisa Anton on Unsplash"/><p className='book-details'>Javascriptbible</p><p className='book-price'>Free</p></div>
        
        <div><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png' alt="Credit to Igor Ovsyannykov on Unsplash"/><p className='book-details'>Javascriptbible</p><p className='book-price'>Free</p></div>
       
        <div><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png' alt="Credit to Pierre Châtel-Innocenti on Unsplash"/><p className='book-details'>Javascriptbible</p><p className='book-price'>Free</p></div>
        
        <div><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png' alt="Credit to Richard Nolan on Unsplash"/><p className='book-details'>Javascriptbible</p><p className='book-price'>Free</p></div>
        
        <div><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png' alt="Credit to Cristina Gottardi on Unsplash"/><p className='book-details'>Javascriptbible</p><p className='book-price'>Free</p></div>
        </Slider>
        <div className='row viewmore-btn'>
        <button className='viewMore-btn offset-5'>View More</button>
        </div>
      </div>
    );
  }
}

export default SlickSlider;