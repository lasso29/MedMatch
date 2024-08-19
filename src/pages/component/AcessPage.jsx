import React from 'react';

const SignInPage = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-5" style={{ fontSize: '2rem' }}>
        Sign in to access courses and other resources:
      </h2>
      <div className="row justify-content-center">
        {/* For PathwayConnect */}
        <div className="col-lg-4 col-md-6 col-sm-8 mb-4 d-flex">
          <div className="p-5 border rounded shadow-lg d-flex flex-column flex-fill">
            <p className="mb-4" style={{ fontSize: '1.25rem' }}>
              For all applicants and students currently enrolled in <strong>PathwayConnect</strong>
            </p>
            <div className="mt-auto">
              <button className="btn btn-warning btn-lg btn-block">
                Sign In
              </button>
            </div>
          </div>
        </div>
        {/* Spacer for mobile and smaller screens */}
        <div className="w-100 d-lg-none"></div>
        {/* For BYU-Idaho and Ensign College */}
        <div className="col-lg-4 col-md-6 col-sm-8 mb-4 d-flex">
          <div className="p-5 border rounded shadow-lg d-flex flex-column flex-fill">
            <p className="mb-4" style={{ fontSize: '1.25rem' }}>
              For students enrolled in <strong>online-degree courses from BYU-Idaho or Ensign College</strong>
            </p>
            <div className="mt-auto">
              <button className="btn btn-outline-primary btn-lg btn-block">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
