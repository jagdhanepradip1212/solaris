import React from "react";
import "../Navigation/navbar.css";
import logo from "../../images/manipal-hospitals.png";

const Navbar = () => {
  return (
    <div className="maindiv container">
      <div class="header-right">
        <img
          src={logo}
          alt="Logo"
          className="navbar-logo img-responsive object-contain"
          style={{ width: "200px", height: "50px" }}
        />
        <a
          href="https://labportal.manipalhospitals.com/"
          class="access-lab-reports montserrat-sb"
          target="_blank"
          rel="noreferrer"        >
          Access Lab Reports
        </a>
        <a
          class="appointment appointment-desktop text-none"
          href="#appointment"
          aria-label="Appointment Helpline"
          onclick="togglePopup('appointment'); return false"
        >
          <svg x="0px" y="0px" viewBox="0 0 82 82">
            <path d="M64.5,78.2c1.7-1.9,3.6-3.6,5.4-5.4c2.6-2.7,2.7-5.9,0-8.6c-3.1-3.2-6.3-6.3-9.4-9.4 c-2.6-2.6-5.8-2.6-8.4,0c-2,1.9-3.9,3.9-5.9,5.9c-0.1,0.1-0.3,0.2-0.4,0.3l-1.3,1.3c-0.4,0.2-0.7,0.2-1.2,0c-1.3-0.7-2.6-1.2-3.8-2c-5.7-3.6-10.5-8.2-14.7-13.4c-2.1-2.6-4-5.3-5.3-8.4c-0.2-0.5-0.2-0.9,0.1-1.3l1.3-1.3c0.1-0.1,0.1-0.2,0.2-0.3c0.6-0.6,1.2-1.1,1.8-1.7c1.4-1.3,2.7-2.7,4.1-4.1c2.7-2.7,2.7-5.9,0-8.6c-1.5-1.5-3.1-3.1-4.6-4.6c-1.6-1.6-3.2-3.2-4.8-4.8c-2.6-2.5-5.8-2.5-8.4,0c-2,1.9-3.9,3.9-5.9,5.9c-1.9,1.8-2.8,3.9-3,6.5c-0.3,4.1,0.7,8,2.1,11.8C5.2,43.8,9.6,50.7,15,57.1c7.2,8.6,15.9,15.4,26,20.4c4.6,2.2,9.3,3.9,14.4,4.2C58.9,81.8,62,81,64.5,78.2z"></path>
          </svg>
          <span>Appointment</span>
        </a>
        <a
          class="appointment appointment-mobile text-none"
          href="tel:18001025555"
          aria-label="Appointment Helpline Mobile"
        >
          <svg x="0px" y="0px" viewBox="0 0 82 82">
            <path d="M64.5,78.2c1.7-1.9,3.6-3.6,5.4-5.4c2.6-2.7,2.7-5.9,0-8.6c-3.1-3.2-6.3-6.3-9.4-9.4 c-2.6-2.6-5.8-2.6-8.4,0c-2,1.9-3.9,3.9-5.9,5.9c-0.1,0.1-0.3,0.2-0.4,0.3l-1.3,1.3c-0.4,0.2-0.7,0.2-1.2,0c-1.3-0.7-2.6-1.2-3.8-2c-5.7-3.6-10.5-8.2-14.7-13.4c-2.1-2.6-4-5.3-5.3-8.4c-0.2-0.5-0.2-0.9,0.1-1.3l1.3-1.3c0.1-0.1,0.1-0.2,0.2-0.3c0.6-0.6,1.2-1.1,1.8-1.7c1.4-1.3,2.7-2.7,4.1-4.1c2.7-2.7,2.7-5.9,0-8.6c-1.5-1.5-3.1-3.1-4.6-4.6c-1.6-1.6-3.2-3.2-4.8-4.8c-2.6-2.5-5.8-2.5-8.4,0c-2,1.9-3.9,3.9-5.9,5.9c-1.9,1.8-2.8,3.9-3,6.5c-0.3,4.1,0.7,8,2.1,11.8C5.2,43.8,9.6,50.7,15,57.1c7.2,8.6,15.9,15.4,26,20.4c4.6,2.2,9.3,3.9,14.4,4.2C58.9,81.8,62,81,64.5,78.2z"></path>
          </svg>
        </a>
        <a
          class="appointment search-mobile text-none"
          href="javascript:;"
          onclick="togglePopup('search-popup')"
          aria-label="Search Popup"
          rel="noreferrer"        >

        
          <span class="search-icon-header"></span>
        </a>
        <a
          class="emergency text-none emergency-desktop"
          href="#emergency" rel="noreferrer"
          onclick="togglePopup('emergency'); return false"
        />
        <picture>
          <source
            type="image/webp"
            srcset="https://www.manipalhospitals.com/assets/images/super/ambulance.webp"
          />
          <img
            src="https://www.manipalhospitals.com/assets/images/super/ambulance.png"
            alt="Emergency Ambulance Desktop"
            width="100"
            height="100"
            class="img-responsive object-contain"
          />
        </picture>
        <span>Emergency</span>

        <a
          class="emergency emergency-mobile"
          aria-label="Emergency"
          href="#emergency"
          onclick="togglePopup('emergency'); return false"
        >
          <picture>
            <source
              type="image/webp"
              srcset="https://www.manipalhospitals.com/assets/images/super/ambulance.webp"
            />
            <img
              src="https://www.manipalhospitals.com/assets/images/super/ambulance.png"
              alt="Emergency Ambulance Mobile"
              width="100"
              height="100"
              class="img-responsive object-contain"
            />
          </picture>
        </a>
        <a
          href="https://www.lifesonmanipal.com/"
          target="_blank"
          class="logo-desktop"
        >
          <div class="lifes-on relative">
            <div class="lifes-on-img">
              <picture>
                <source
                  type="image/webp"
                  srcset="https://www.manipalhospitals.com/assets/images/super/lifes-on.webp"
                />
                <img
                  fetchpriority="high"
                  src="https://www.manipalhospitals.com/assets/images/super/lifes-on.png"
                  alt="Best Multispeciality Hospital In Bangalore | Top Hospital in Bangalore | Manipal Hospitals"
                  width="100"
                  height="100"
                  class="manipal-logo img-responsive object-contain"
                />
              </picture>
            </div>
            <div class="checkup-pkg"></div>
            <p>
              Book Appointments &<br />
              Health Checkup Packages
            </p>
          </div>
        </a>
        <a href="https://www.manipalhospitals.com/" class="manipal-mini-logo">
          <picture>
            <source
              type="image/webp"
              srcset="https://www.manipalhospitals.com/assets/images/super/mini-logo.webp"
            />
            <img
              src="https://www.manipalhospitals.com/assets/images/super/mini-logo.png"
              alt="Mini Logo"
              width="100"
              height="100"
              class="mini-logo img-responsive object-contain"
            />
          </picture>
        </a>
      </div>

      <div class="nav-bar">
        <div class="container nav-layout">
          <a
            href="https://www.manipalhospitals.com/"
            class="logo-mobile manipal-logo-mobile"
          >
            <img
              src="https://www.manipalhospitals.com/assets/images/super/manipal-hospitals.svg"
              alt="Manipal Hospitals"
              width="100"
              height="100"
              class="img-responsive object-contain"
            />
          </a>
          <div class="nav-list center-of-excellence pointer hidden-xs">
            <a
              href="https://www.manipalhospitals.com/specialities/"
              class="text-none montserrat-sb text-white"
            >
              Centre of Excellence
              <span class="caret"></span>
            </a>
          </div>
          <div class="nav-list hospitals pointer hidden-xs">
            <a href="/" style={{ color: "white" }}>
              Home
            </a>
            <a href="/doctors" style={{ color: "white" }}>
              Doctors
            </a>
            <a href="/about" style={{ color: "white" }}>
              About
            </a>
          </div>
          <a
            href="https://www.manipalhospitalsglobal.com/"
            target="_blank"
            class="text-none nav-list montserrat-sb hidden-xs"
          >
            International Patients
          </a>
          <div class="hospital-dropdown-mobile hidden-lg hidden-sm">
            <div class="btn relative hospital-data">
              <div
                class="d-flex align-content-center"
                id="hospital-mobile-view"
              >
                <i class="location"></i>
                <span class="d-flex align-items-center">
                  <span class="hospital-name">Hospitals</span>
                  <span class="caret"></span>
                </span>
              </div>
              <div
                class="hospital-accordion-list"
                id="hospital-mobile-list"
              ></div>
            </div>
          </div>
          <div class="google-translate-desktop d-none">
            <img
              src="https://www.manipalhospitals.com/assets/images/super/translator-image.png"
              width="50"
              height="30"
              class="object-contain"
              alt="Google Translator"
            />
          </div>
          <div class="google-translate-mobile d-none">
            <img
              src="https://www.manipalhospitals.com/assets/images/super/mobile-translate.png"
              width="50"
              height="30"
              class="object-contain"
              alt="Google Translator"
            />
          </div>
          <div class="dropdown langs google_translate_icon_list">
            <div
              id="desktop_google_logo"
              class="hidden-desktop google_translate_inner_logo bg-Group-1308"
            ></div>
            <div
              id="mobile_google_logo"
              class="hidden-mobile google_translate_inner_logo bg-english-mobile"
            ></div>
            <div id="google_translate_element">
              <div class="skiptranslate goog-te-gadget" dir="ltr"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
