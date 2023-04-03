import React from "react";
import "./ReferenceStyles.css";
const Reference = () => {
  return (
    <div id='reference'>
      <div className='reference-left-grid'>
        <img src='../../src/assets/personImg.png' alt='happy person' />
      </div>
      <div>
        <div className='reference-right-grid'>
          <article className='reference-headers'>
            <h1>hey, this is a good place for cta</h1>
            <h3>this is a subheading</h3>
          </article>
          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu.
            </p>
          </article>
          <article className='reference-button'>
            <button>read more</button>
          </article>
        </div>
      </div>
      <img
        src='../../src/assets/vector2.png'
        alt=''
        className='reference-vector-2'
      />
      <img
        src='../../src/assets/vector3.png'
        alt=''
        className='reference-vector-3'
      />
    </div>
  );
};

export default Reference;
