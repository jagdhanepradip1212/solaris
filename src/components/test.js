import React from "react";
import "../Doctors/doctor.css";
import doctors from "../../images/doctor.png";

const Doctors = () => {
  return (
    <>
      <section className="doctor-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={doctors} alt="Doctor" className="img-fluid" />
            </div>
            <div className="col-md-8 doctor-details">
              <h2>Dr. John Doe</h2>
              <p className="specialty">Specialty: Cardiology</p>
              <p className="experience">Experience: 10 years</p>
              <p className="education">Education: MBBS, MD (Cardiology)</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sed feugiat odio, ac molestie neque.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src={doctors} alt="Doctor" className="img-fluid" />
            </div>
            <div className="col-md-8 doctor-details">
              <h2>Dr. Jane Smith</h2>
              <p className="specialty">Specialty: Pediatrics</p>
              <p className="experience">Experience: 8 years</p>
              <p className="education">Education: MBBS, MD (Pediatrics)</p>
              <p className="description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src={doctors} alt="Doctor" className="img-fluid" />
            </div>
            <div className="col-md-8 doctor-details">
              <h2>Dr. David Brown</h2>
              <p className="specialty">Specialty: Orthopedics</p>
              <p className="experience">Experience: 12 years</p>
              <p className="education">Education: MBBS, MS (Orthopedics)</p>
              <p className="description">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
