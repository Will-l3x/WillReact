import React from 'react';
import './Styling/flavor.css';



function Cards() {
  return (
    <>
    <section className="explore" id="explore">
  <div className="row">
    <div className="col50">
      <p>
        Our premuim products have got the finest quality cotton
        can create, an exquisite lightweight textile that is both soft
        and crisp-guaranted to give you a wonderful night's sleep.
      </p>
    </div>
  </div>
</section>
      
    <section className="menu" id="menu">
    <div className="title">
      <h2 className="titleText"> </h2>
    </div>
    <div className="content">
      <div className="box">
        <div className="imgBx">
          <img src="images/prod3.jpg" alt />
        </div>
        <div className="text">
          <a href="#" className="btn">Shop Bed Linen</a>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img src="images/prod1.jpg" alt />
        </div>
        <div className="text">
          <a href="#" className="btn">Shop Bathing Towels</a>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img src="images/prod2.jpg" alt />
        </div>
        <div className="text">
          <a href="#" className="btn">Shop Home Fragrances</a>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img src="images/prod4.jpg" alt />
        </div>
        <div className="text">
          <a href="#" className="btn">Shop Bath Robes</a>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img src="images/prod1.jpg" alt />
        </div>
        <div className="text">
          <a href="#" className="btn">Shop Custom Linen</a>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img src="images/prod2.jpg" alt />
        </div>
        <div className="text">
          <a href="#" className="btn">Special</a>
        </div>
      </div>
      <div className="title">
        <a href="#" className="btn">View All</a>
      </div>
    </div>
  </section>
  </>
               
    
  );
}

export default Cards;
