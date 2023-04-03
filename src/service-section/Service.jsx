import React from "react";
import "./ServiceStyles.css";
const Service = () => {
  return (
    <div id='service'>
      <div className='service-left-grid'>
        <img src='../../src/assets/imgLaptop.png' alt='service' />
      </div>
      <div className='service-right-grid'>
        <div className='service-headers'>
          <h1>our service</h1>
          <h3>subheader</h3>
        </div>
        <div className='service-right-grid-text-holder'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            soluta magni quod fugit deleniti ad nostrum, rem modi nulla quas
            asperiores, culpa omnis dolorum deserunt voluptate ex esse
            exercitationem reiciendis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint rem neque dolor animi illum minus quos error
            vel commodi, atque nesciunt totam qui et aperiam ipsum eius
            officiis! Nihil, esse!
          </p>
        </div>
        <div className='service-right-grid-button-holder'>
          <button>read more</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
