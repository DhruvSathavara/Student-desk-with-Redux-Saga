import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class NewsSlider extends Component {
    render() {
        var settings = {
            autoplay: true,
            dots: true,
            infinite: false,
            speed: 500,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
        };
        return (
            <div className="News">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="NewsH3">StudentDesk in the News </h3>
                            <div className="news-under-line"></div>
                            <Slider {...settings}>
                                <div>
                                    <img
                                        alt=""
                                        src="http://www.studentdesk.in/img/home/knowstartup_160.png"
                                    />
                                </div>
                                <div>
                                    <img
                                        alt=""
                                        src="http://www.studentdesk.in/img/home/sakaltimes_160.png"
                                    />
                                </div>
                                <div>
                                    <img
                                        alt=""
                                        src="http://www.studentdesk.in/img/home/techstory_160.png"
                                    />
                                </div>
                                <div>
                                    <img
                                        alt=""
                                        src="http://www.studentdesk.in/img/home/indiaspark_160.png"
                                    />
                                </div>
                                <div>
                                    <img
                                        alt=""
                                        src="http://www.studentdesk.in/img/home/nbw_160.png"
                                    />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsSlider;