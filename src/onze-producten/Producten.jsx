import React from "react";
import "./ProductenStyles.css";
import Product from "./Product";
const Producten = () => {
  return (
    <div id='producten'>
      <Product
        title='title 1'
        subheader='subheader 1'
        text=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
            nostrum fugit enim nisi, ex a. Nostrum perferendis rerum, sed at
            accusamus, nemo iusto quibusdam in veniam a obcaecati labore
            deserunt.'
        btnTxt='read more'
        pic='../../src/assets/img1.png'
      />
      <Product
        title='title 2'
        subheader='subheader 2'
        text=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
            nostrum fugit enim nisi, ex a. Nostrum perferendis rerum, sed at
            accusamus, nemo iusto quibusdam in veniam a obcaecati labore
            deserunt.'
        btnTxt='read more'
        pic='../../src/assets/img1.png'
      />
      <Product
        title='title 3'
        subheader='subheader 3'
        text=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
            nostrum fugit enim nisi, ex a. Nostrum perferendis rerum, sed at
            accusamus, nemo iusto quibusdam in veniam a obcaecati labore
            deserunt.'
        btnTxt='read more'
        pic='../../src/assets/img1.png'
      />
    </div>
  );
};

export default Producten;
