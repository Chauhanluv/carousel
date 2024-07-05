// src/components/Carousel.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import product_4 from '../assets/product_4.png'
import product_7 from '../assets/product_7.png'
import product_10 from '../assets/product_10.png'
import '../carousel/carousel.css';

const ImageCarousel = () => {
    return (
        <Carousel interval={2000} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} className='carousel'>
            <div>
                <img src={product_4} alt="Slide 1" />
            </div>
            <div>
                <img src= {product_7} alt="Slide 2" />
            </div>
            <div>
                <img src={product_10} alt="Slide 3" />
            </div>
        </Carousel>
    );
}

export default ImageCarousel;

