import React from "react";
import "./FooterStyles.css";
const Footer = () => {
  return (
    <div id='footer'>
      <div className='grid-container'>
        <div className='grid-item'>
          <h2>This is the left grid</h2>
          <p>Hey, wanna talk?</p>
          <h3>This is a subheadline</h3>
          <p>
            Your company's name here
            <br />
            Example Street 123b
            <br />
            Postalcode/Zip, City
            <br />
            <br />
            Call us via: +12 34 56 78 910
            <br />
            or write a fancy Mail: info@your-domain.com
            <br />
            <br />
            Office hours: 7.30am to 4.30pm, Mon - Fri
          </p>
        </div>
        <div className='grid-item'>
          <h2>This is the right grid</h2>
          <p>
            We're hirin'
            <br />
            and you just look like you'd fit in
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
