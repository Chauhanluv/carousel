import React from 'react'
import './Product.css'
import product_12 from '../assets/product_12.png'
const Product = () => {
  return (
    <div className="container">
    <div className="text-content">
        <h2>Women's Slim-Fit Casual T-Shirt</h2>
        <p>
            Upgrade your wardrobe with our Women's Slim-Fit Casual T-Shirt, a perfect blend of style and comfort. Crafted from high-quality, breathable cotton fabric, this shirt is designed to keep you cool and comfortable all day long. The slim-fit cut offers a modern and tailored silhouette, making it ideal for both casual and semi-formal occasions.
        </p>
       
        <p>
            Pair this versatile shirt with your favorite jeans for a casual look or dress it up with chinos and a blazer for a more polished appearance. Whether you're heading to a brunch, a casual meeting, or a night out, this shirt ensures you look effortlessly stylish.
        </p>
    </div>
    <div className="image-content">
        <img src={product_12} alt="Men wearing slim-fit casual shirt" />
    </div>
</div>
  )
}

export default Product
