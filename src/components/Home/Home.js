import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../images/manipal-hospitals.png";
import "../Home/home.css";
import Miracle from "../Miracle/Miracle";
import home1 from "../../images/home1.png";
import home2 from "../../images/home2.png";
import home3 from "../../images/home3.png";
import home4 from "../../images/home4.png";

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
      <div className="container">
        <div className="horizontal-form-container">
          <div className="horizontal-form">
            <form>
              <label
                htmlFor="hospital"
                style={{
                  color: "#034ea1",
                  paddingLeft: "25px",
                  paddingRight: "20px",
                }}
              >
                Select Hospital:
              </label>
              <select id="hospital" name="hospital">
                <option value="hospital1">Hospital 1</option>
                <option value="hospital2">Hospital 2</option>
                <option value="hospital3">Hospital 3</option>
              </select>
              <label
                htmlFor="specialist"
                style={{
                  color: "#034ea1",
                  paddingLeft: "25px",
                  paddingRight: "20px",
                }}
              >
                Select Specialist:
              </label>
              <select id="specialist" name="specialist">
                <option value="specialist1">Specialist 1</option>
                <option value="specialist2">Specialist 2</option>
                <option value="specialist3">Specialist 3</option>
              </select>
              <label
                htmlFor="doctor"
                style={{
                  color: "#034ea1",
                  paddingLeft: "25px",
                  paddingRight: "20px",
                }}
              >
                Select Doctor:
              </label>
              <select id="doctor" name="doctor">
                <option value="doctor1">Doctor 1</option>
                <option value="doctor2">Doctor 2</option>
                <option value="doctor3">Doctor 3</option>
              </select>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div class="margin-negative">
          <div class="row">
            <div
              class="col-lg-6"
              style={{ backgroundColor: "#00acb1", height: "50%" }}
            >
              <div class="sigma_cta style-14" style={{ backgroundColor: "#00acb1"}}>
              <h3 className="text-white mb-3">Stay Updated with Our Newsletter</h3>

                <div class="sigma_cta-content d-block d-sm-flex align-items-center">
                  <i class="flaticon-message"></i>
                  <h4 class="mt-3 mt-sm-0">
                    Subscribe Our Email For Newsletter
                  </h4>
                </div>
                <p class="text-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <form>
                  <div class="input-group has-border">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required=""
                    />
                    <div class="input-group-append">
                      <button type="button" class="light">
                        <i class="fal fa-envelope mr-2"></i>Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sigma_clients-wrapper style-3">
                <div className="row">
                  {/* First Row */}
                  <div className="col-lg-6 col-md-6">
                    <div className="sigma_clients style-3">
                      <img src={home1} alt="clients" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="sigma_clients style-3">
                      <img src={home2} alt="clients" />
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="col-lg-6 col-md-6">
                    <div className="sigma_clients style-3">
                      <img src={home3} alt="clients" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="sigma_clients style-3">
                      <img src={home4} alt="clients" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Miracle />
    </>
  );
};

export default Home;
