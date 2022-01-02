import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function ImgSlider() {
    let settings = {
        dots: true,
        infinitive: true,
        speed: 500,
        slidesToShow: 1,
        slideToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="https://wowslider.com/sliders/demo-7/data/images/barpark.jpg" alt=""/>
            </Wrap>
            <Wrap>
                <img src="https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg" alt=""/>
            </Wrap>
            <Wrap>
                <img src="https://ucdn.tatilbudur.net/tur/her-cumacumartesipazar-geceleri-hareket/855x426/314288.jpg" alt=""/>
            </Wrap>

        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
        
    }

    button {
        z-index: 1;
    }
`
const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        heigth: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgb(249,249,249,0.8);
        }
    }
`