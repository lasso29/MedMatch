import React from "react";
import logo from "../../assets/images/medvation-logo.png";

const LandingFooter = () => {
  return (
    <>
      <footer className="landing-footer p-3 d-flex flex-column flex-md-row justify-content-between align-items-start mt-4">
        <div className="col-12 col-md-4 mb-3 mb-md-0 text-center text-md-start">
          <img src={logo} alt="Logo" className="w-50 w-md-25 mb-3" />
          <p>
            Your trusted source for medical education, resources, and patient
            care.
          </p>
          <div>Social Media</div>
        </div>

        <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
            <h4>Quick Links</h4>
            <p>Home</p>
            <p>Services</p>
            <p>About Us</p>
            <p>FAQ</p>
        </div>

        <div className="col-12 col-md-4 text-center text-md-start">
          <h4>Contact</h4>
          <p className="lh-sm">
            <b>Address:</b> Your Address Here
          </p>
          <p className="lh-sm">
            <b>Email:</b> effectualmedia22@gmail.com
          </p>
          <p className="lh-sm">
            <b>Phone:</b> +234 901 328 4694
          </p>
        </div>
      </footer>
    </>
  );
};

export default LandingFooter;
