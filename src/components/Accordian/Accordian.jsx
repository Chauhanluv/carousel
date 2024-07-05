// Accordion.js
import React, { useState } from 'react';


const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? '+' : '-'}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion; // Ensure this line is present

