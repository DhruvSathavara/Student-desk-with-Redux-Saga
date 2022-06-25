import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import HowItWork from "./HowItWork";
import NewsSlider from "./NewsSlider";
import SlickSlider from "./Slider";

function Home() {
    return (

        <div>
            <Header></Header>
            <Banner></Banner>
            <SlickSlider></SlickSlider>
            <HowItWork></HowItWork>
            <NewsSlider></NewsSlider>
            <Footer></Footer>     
        </div>

    )
}
export default Home;