import React from "react";
import "../Cardio/cardio.css";
const Cardio = () => {
  return (
    <section id="human-care">
      <div className="container">
        <div className="human-care-content" id="method-to-miracle-spec">
          <div className="active" id="speciality0">
            <div className="cardio">
              <div className="cardio-txt">
                <p className="text-center">
                  The Orthopaedic Department at Manipal Hospitals provides an
                  unparalleled assessment and treatment with both medical and
                  surgical practice of the entire musculoskeletal system
                  including bones, joints, muscles, nerves, ligaments and
                  tendons - everything that makes you move and be active.{" "}
                </p>
                <h2 className="text-center">ORTHOPAEDICS</h2>{" "}
              </div>
              <div className="know-more">
                <a
                  className="text-none btn center-block montserrat-Bold"
                  href="https://www.manipalhospitals.com/specialities/orthopaedics/"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="experts">
          <div className="expert-content">
            <h3 className="montserrat-eb">Human Care Experts</h3>
            <p>
              The seeds of our origin were sown as early as 1953 when the
              founder of the Manipal Education and Medical Group (MEMG), Dr.
              T.M.A. Pai, established the Kasturba Medical College in Manipal,
              Karnataka. Manipal Hospitals as an entity came into existence in
              1991 with the launch of our 650-bed flagship hospital at Old
              Airport Road, Bangalore. Today, we are one of India’s leading
              healthcare groups with over 9500 beds across 33 hospitals.
            </p>
            <p>
              Our core values are built around the thought of patient-first and
              that each doctor at Manipal Hospitals is a human care expert,
              going above and beyond the call of duty as they live by the belief
              that every single life is priceless. When they embark on these
              journeys, stories emerge - stories of grit, determination and
              never giving up. Join us on a journey to discover stories that
              reinforce your belief in 'Life's On'
            </p>
            <a
              className="text-none mt-2 d-inline-block"
              href="https://www.manipalhospitals.com/doctors-list/"
            >
              Find a Doctor
            </a>
          </div>
        
        <div className="expert-number relative">
          <div className="expert-number-layout">
            <div className="no">
              <div className="montserrat-Bold">
                <span
                  className="increment-count-anim montserrat-Bold"
                  data-count="68"
                >
                  0
                </span>
              </div>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr className="span-line" />
            <div className="no">
              <div className="montserrat-Bold">
                <span
                  className="increment-count-anim montserrat-Bold"
                  data-count="33"
                >
                  0
                </span>
              </div>
              <p>HOSPITALS</p>
            </div>
            <hr className="span-line" />
            <div className="no">
              <div className="montserrat-Bold">
                <span
                  className="increment-count-anim montserrat-Bold"
                  data-count="5000"
                >
                  0
                </span>
              </div>
              <p>DOCTORS</p>
            </div>
            <hr className="span-line" />
            <div className="no">
              <div className="montserrat-Bold">
                <span
                  className="increment-count-anim montserrat-Bold"
                  data-count="9500"
                >
                  0
                </span>
              </div>
              <p>BEDS</p>
            </div>
            <hr className="span-line" />
            <div className="no">
              <div className="montserrat-Bold">
                <span
                  className="increment-count-anim montserrat-Bold"
                  data-count="17"
                >
                  0
                </span>
              </div>
              <p>SERVING CITIES</p>
            </div>
            <hr className="span-line" />
            <div className="no">
              <div className="montserrat-Bold">
                <span
                  className="increment-count-anim montserrat-Bold"
                  data-count="45"
                >
                  0
                </span>
              </div>
              <p>MILLION LIVES TOUCHED</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Cardio;
