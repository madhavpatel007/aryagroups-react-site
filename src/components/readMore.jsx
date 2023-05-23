import React from 'react'
import { useState } from 'react';

function ReadMore({ children }) {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 100) : text}
        <span onClick={toggleReadMore} className="read-or-hide" style={{color:"blue"}}>
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
}

export default ReadMore