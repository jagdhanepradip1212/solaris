import React from "react";
import "../Doctors/doctor.css";
import doctors from "../../images/doctor.png";

const Doctors = () => {
  return (
    <section id="pageBanner" class="doctorListPage speciality-banner-wrap">
      <picture>
        <source type="image/webp" srcset="" class="w-100" />
        <img
          loading="lazy"
          src={doctors}
          alt="Doctors List | Best Doctors in Bangalore, India | surgeons - Manipal Hospitals"
          title="Doctors List | Best Doctors in Bangalore, India | surgeons - Manipal Hospitals"
          class="speciality-banner img-responsive w-100"
        />
      </picture>
      <div class="container search-wrap-banner">
        <div class="row">
          <div class="banCont col-md-12 col-sm-12 col-xs-12 no-padding">
            <div class="bannerForm col-md-12 col-sm-12 col-xs-12 no-padding">
              <form
                action="https://www.manipalhospitals.com/search_doctors/"
                method="post"
                class="form1"
                onsubmit="return validate()"
              >
                <div class="form-group">
                  <select
                    class="form-control form-control chosen-select"
                    id="hospital_id"
                    name="hospital_id"
                    data-live-search="true"
                  >
                    <option value="">Select Hospital</option>
                    <option value="1">Old Airport Road - Bengaluru</option>
                    <option value="3">Malleshwaram - Bengaluru</option>

                    <option value="2">Jayanagar - Bengaluru</option>
                    <option value="9">Jaipur</option>
                    <option value="10">Mangalore</option>
                    <option value="7">Dwarka - Delhi</option>

                    <option value="23">Patiala</option>
                  </select>
                </div>
                <div class="form-group">
                  <select
                    class="form-control form-control chosen-select"
                    id="speciality_id"
                    name="speciality_id"
                    data-live-search="true"
                  >
                    <option value="">Select Speciality</option>
                    <option value="57">Accident and Emergency Care</option>
                    <option value="78">Allergy and Immunology</option>

                    <option value="63">
                      Vascular and Endovascular Surgery
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <select
                    class="form-control form-control chosen-select"
                    id="doctor_id"
                    name="doctor_id"
                  >
                    <option value="">Select Doctor</option>
                    <option value="doc-id-1755">
                      (COL) DR. AVNISH SETH VSM
                    </option>

                    <option value="doc-id-2317">DR. SUHAIL S GAUR</option>
                    <option value="doc-id-1374">DR. SUHAS H S</option>
                  </select>
                </div>

                <div class="searchBtn1">
                  <input
                    type="submit"
                    class="searchbtn booking-btn doc-book-btn"
                    name="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
