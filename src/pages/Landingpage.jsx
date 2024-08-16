import React from "react";
import LandingNavBar from "./component/LandingNavBar";
import LandingFooter from "./component/LandingFooter";
import slidin1 from "../assets/images/sliding-one.jpg";
import slidin2 from "../assets/images/sliding-two.jpg";
import slidin3 from "../assets/images/sliding-three.jpg";
import About from "./component/About";
const Landingpage = () => {
  return (
    <div>
      <LandingNavBar />
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            class="carousel-item active border"
            style={{
              height: "90vh",
              backgroundImage: `url(${slidin1})`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="cover w-100 h-100 d-md-flex justify-content-center align-items-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.63)" }}
            >
              <div className="text-center col-md-5 pt-5 pt-md-0">
                <h4
                  className="text-information text-white"
                  style={{ fontSize: "35px" }}
                >
                  "Your Gateway to Comprehensive Medical Resources"
                </h4>
                <p className="text-information text-white fs-5">
                  Explore a wealth of medical resources curated by experts in
                  the field. From research papers to instructional videos, we
                  have everything you need to stay ahead in your medical journey
                </p>
              </div>
              <div className="h-75 pt-md-5 px-md-3 d-flex align-items-cen justify-content-center col-md-5 align-items-center">
                <div
                  className="p-4 bg-white rounded shadow-lg"
                  style={{ width: "400px" }}
                >
                  <h5 className="text-center">Make an Appointment</h5>
                  <form>
                    <div className="row mb-3">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Jhon Doe"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="example@gmail.com"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="+00 141 23 234"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="dd/mm/yy"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col">
                        <select className="form-select">
                          <option>Select department</option>
                          <option>Cardiology</option>
                          <option>Neurology</option>
                          <option>Orthopedics</option>
                        </select>
                      </div>
                      <div className="col">
                        <select className="form-select">
                          <option>Select Doctor</option>
                          <option>Dr. John Smith</option>
                          <option>Dr. Jane Doe</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Write something here..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn w-100 text-white"
                      style={{ backgroundColor: "#040023" }}
                    >
                      Check Available Doctors
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            class="carousel-item border"
            style={{
              height: "89vh",
              backgroundImage: `url(${slidin2})`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="w-100 h-100 d-flex justify-content-center align-items-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.63)" }}
            >
              <h4 className="fs-2 text-white">
                Medication Education Made Easy
              </h4>
            </div>
          </div>
          <div
            class="carousel-item border"
            style={{
              height: "89vh",
              backgroundImage: `url(${slidin3})`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="w-100 h-100 d-flex justify-content-center align-items-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.63)" }}
            >
              <h4 className="fs-2 text-white">
                Medication Education Made Easy
              </h4>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
       <br />
      <About/>
      <LandingFooter />
    </div>
  );
};

export default Landingpage;
