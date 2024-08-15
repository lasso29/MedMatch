import React from "react";

const About = () => {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center p-3">
        <div className="col-8 text-center">
          <h4 className="text-about-topic fs-2">Who We Are:</h4>
          <p className="about-text fs-5">
            Medvation is a cutting-edge platform dedicated to bridging the gap
            between medical professionals, students, and patients. Our mission
            is to empower users with easy access to valuable medical resources,
            expert insights, and up-to-date healthcare information. Whether
            you're a specialist sharing your expertise, a student researching
            the latest advancements, or a patient seeking reliable medical
            advice, Medvation is your trusted companion in the journey toward
            better health and knowledge.
          </p>
        </div>
      </div>

      <div className="container my-5">
        <p className="text-center fs-5">
          At Medvation, we prioritize your needs with a platform that offers:
        </p>
        <div className="row text-center">
          {/* Column 1 */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="p-3">
              <div className="icon-container mb-3">
                {/* Replace with your icon */}
                <img
                  src="path_to_icon"
                  alt="Qualified Doctors"
                  className="img-fluid"
                />
              </div>
              <h4>Accessibilities</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipis sed do eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="p-3">
              <h4>24 Hours Service</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipis sed do eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-4">
            <div className="p-3">
              <div className="icon-container mb-3">
                {/* Replace with your icon */}
                <img
                  src="path_to_icon"
                  alt="Need Emergency"
                  className="img-fluid"
                />
              </div>
              <h4>Need Emergency</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipis sed do eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-3">
              <div className="icon-container mb-3">
                {/* Replace with your icon */}
                <img
                  src="path_to_icon"
                  alt="Need Emergency"
                  className="img-fluid"
                />
              </div>
              <h4>Need Emergency</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipis sed do eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-3">
              <div className="icon-container mb-3">
                {/* Replace with your icon */}
                <img
                  src="path_to_icon"
                  alt="Need Emergency"
                  className="img-fluid"
                />
              </div>
              <h4>Need Emergency</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipis sed do eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-3">
              <div className="icon-container mb-3">
                {/* Replace with your icon */}
                <img
                  src="path_to_icon"
                  alt="Need Emergency"
                  className="img-fluid"
                />
              </div>
              <h4>Need Emergency</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipis sed do eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </div>


      
    </>
  );
};

export default About;
