import React from 'react';
import Accordion from './Accordian';
import './Accordian.css'

const YourPage = () => {
  return (
    <div className="your-page">
      
      <Accordion  title=" Discover Your Style with Our Women's Clothing Collection">
        <p>Explore a world of elegance and comfort with our exclusive collection of women's clothing. From timeless classics to the latest trends, our curated selection offers something for every occasion. </p>
      </Accordion>
      <Accordion title=" Unveil Your Unique Elegance: Women's Fashion Redefined">
        <p>Our women's clothing collection is a testament to timeless elegance and modern flair. Whether you're seeking chic office essentials, relaxed weekend wear, or show-stopping evening attire, our carefully curated selection caters to every facet of your lifestyle. </p>
      </Accordion>
     
    </div>
  );
};

export default YourPage;

