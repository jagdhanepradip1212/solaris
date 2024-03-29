import React from "react";
import '../Glance/glance.css';
const Galnce = () => {
  return (
    <section id="life-at-glance">
      <div class="container">
        <div class="heading">
          <h2 class="text-center montserrat-eb mt-0">Life at a Glance</h2>{" "}
        </div>
        <div class="lifeTab center-block">
          <ul class="nav-tab">
            <li class="active" id="lagli-0">
              <a
                class="montserrat-Bold"
                href="#patient_stories"
                onclick="getcategorydata('patient stories','0'); return false"
              >
                Patient Stories{" "}
              </a>
            </li>
            <li class="" id="lagli-1">
              <a
                class="montserrat-Bold"
                href="#doctors_speak"
                onclick="getcategorydata('doctor\'s speak','1'); return false"
              >
                Doctor's Speak{" "}
              </a>
            </li>
            <li class="" id="lagli-2">
              <a
                class="montserrat-Bold"
                href="#general"
                onclick="getcategorydata('general','2'); return false"
              >
                General{" "}
              </a>
            </li>
            <li class="" id="lagli-3">
              <a
                class="montserrat-Bold"
                href="#health_days"
                onclick="getcategorydata('health days','3'); return false"
              >
                Health Days{" "}
              </a>
            </li>
            <li class="" id="lagli-4">
              <a
                class="montserrat-Bold"
                href="#events"
                onclick="getcategorydata('events','4'); return false"
              >
                Events{" "}
              </a>
            </li>
            <li id="written-test1">
              <a
                class="montserrat-Bold"
                href="#written-test"
                onclick="getcategorydata('written-test','written-test1'); return false"
              >
                Written testimonial
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="splide" class="splide"></div>
      <div class="view-all-glance mt-2">
        <a
          href="https://www.manipalhospitals.com/life-at-manipal/"
          class="btn text-none"
        >
          View All
        </a>
      </div>
    </section>
  );
};

export default Galnce;
