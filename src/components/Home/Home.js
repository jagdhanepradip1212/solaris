import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../images/manipal-hospitals.png";
import "../Home/home.css";
import Miracle from "../Miracle/Miracle";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="carousel-item">
          <img src={logo} className="d-block w-100" alt="..." />
          <div
            className="carousel-caption d-none d-md-block"
            style={{ textAlign: "left", padding: "0", marginBottom: "80px" }}
          >
            <div
              className="ms-layer msp-cn-1-1"
              data-effect="t(true,150,n,n,n,n,n,n,n,n,n,n,n,n,n)"
              data-duration="350"
              data-ease="easeOutQuint"
              data-offset-x="0"
              data-offset-y="-100"
              data-origin="ml"
              data-position="normal"
            >
              Together
            </div>
            <div
              className="ms-layer msp-cn-1-2"
              data-effect="t(true,150,n,n,n,n,n,n,n,n,n,n,n,n,n)"
              data-duration="425"
              data-delay="325"
              data-ease="easeOutQuint"
              data-offset-x="0"
              data-offset-y="-5"
              data-origin="ml"
              data-position="normal"
            >
              We can heal
            </div>
            <div
              className="ms-layer msp-cn-1-3"
              data-effect="t(true,150,n,n,n,n,n,n,n,n,n,n,n,n,n)"
              data-duration="437"
              data-delay="625"
              data-ease="easeOutQuint"
              data-offset-x="0"
              data-offset-y="105"
              data-origin="ml"
              data-position="normal"
            >
              The Earth
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={logo} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={logo} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div
              className="ms-layer msp-cn-1-13"
              data-effect="t(true,n,n,500,n,n,n,n,n,n,n,n,n,n,n)"
              data-duration="437"
              data-ease="easeOutQuint"
              data-offset-x="0"
              data-offset-y="-15"
              data-origin="mc"
              data-position="normal"
            >
              Make This World
            </div>
            <div
              className="ms-layer msp-cn-1-10"
              data-effect="t(true,n,n,-500,n,n,n,n,n,n,n,n,n,n,n)"
              data-duration="425"
              data-delay="425"
              data-ease="easeOutQuint"
              data-offset-x="0"
              data-offset-y="82"
              data-origin="mc"
              data-position="normal"
            >
              The Better Place
            </div>
          </div>
        </div>
      </Slider>
      <div className="horizontal-form">
        <form>
          <label htmlFor="hospital">Select Hospital:</label>
          <select id="hospital" name="hospital">
            <option value="hospital1">Hospital 1</option>
            <option value="hospital2">Hospital 2</option>
            <option value="hospital3">Hospital 3</option>
          </select>
          <label htmlFor="specialist">Select Specialist:</label>
          <select id="specialist" name="specialist">
            <option value="specialist1">Specialist 1</option>
            <option value="specialist2">Specialist 2</option>
            <option value="specialist3">Specialist 3</option>
          </select>
          <label htmlFor="doctor">Select Doctor:</label>
          <select id="doctor" name="doctor">
            <option value="doctor1">Doctor 1</option>
            <option value="doctor2">Doctor 2</option>
            <option value="doctor3">Doctor 3</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Miracle />
    </>
  );
};

export default Home;
