import React from 'react';
import './Styling/flavor.css';



function BestSelling() {
  return (
    <section className="best-seller" id="best-seller">
  <div className="title">
    <h2 className="titleText">Best Sellers</h2>
  </div>
  <div className="content">
    <div className="box">
      <div className="imgBx">
        <img src="images/best1.jpg" alt />
      </div>
      <div className="text">
        <h3>Product Name</h3>
        <h3 className="id">AED XXXX</h3>
        <h4>Available in 5 colours</h4>
      </div>
    </div>
    <div className="box">
      <div className="imgBx">
        <img src="images/best2.jpeg" alt />
      </div>
      <div className="text">
        <h3>Product Name</h3>
        <h3 className="id">AED XXXX</h3>
        <h4>Special offer Get 25% OFF</h4>
      </div>
    </div>
    <div className="box">
      <div className="imgBx">
        <img src="./images/best3.png" alt />
      </div>
      <div className="text">
        <h3>Product Name</h3>
        <h3 className="id">AED XXXX</h3>
        <h4>Available in 3 colours</h4>
      </div>
    </div>
  </div>
</section>

           
  );
}

export default BestSelling;
