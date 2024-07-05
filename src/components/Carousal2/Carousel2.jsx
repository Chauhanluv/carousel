// src/components/Carousel.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import product_13 from '../assets/product_13.png'
import product_14 from '../assets/product_14.png'
import product_17 from '../assets/product_17.png'
// import '../carousel2.css'

const ImageCarousel2 = () => {
    return (
        <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} className='carousel'>
            <div>
                <img src={product_13} alt="Slide 1" />
            </div>
            <div>
                <img src= {product_14} alt="Slide 2" />
            </div>
            <div>
                <img src={product_17} alt="Slide 3" />
            </div>
        </Carousel>
    );
}

export default ImageCarousel2;

