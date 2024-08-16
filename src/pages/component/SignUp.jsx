import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logo from '../../assets/images/medvation-logo.png';
import axios from 'axios';

const SignUp = () => {
  // Validation schema for the form
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  // Handle form submission
  const handleSubmit = (values) => {
    console.log('Form data', values);
    // You can perform API calls or any other actions here
    axios.post('http://localhost:3000/register').then((response)=>{
        console.log(response);
        
    })
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="card p-4 shadow-lg text-center" style={{ maxWidth: '500px', width: '100%', margin: '0 auto' }}>
        <img src={logo} alt="Logo" className="signUp-logo mx-auto mb-3" />
        <h2 className="text-center">Sign up</h2>
        <p className="text-center">Create your account</p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group mb-3">
                <Field
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                />
                <ErrorMessage name="username" component="div" className="text-danger" />
              </div>
              <div className="form-group mb-3">
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="form-group mb-3">
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>
              <div className="form-group mb-3">
                <Field
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirm Password"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
              </div>
              <button type="submit" className="SignUp-button btn w-100" disabled={isSubmitting}>
                Sign up
              </button>
            </Form>
          )}
        </Formik>

        <div className="text-center mt-3">
          <span>Or</span>
        </div>

        <button className="btn btn-outline-primary w-100 mt-2">Sign In with Google</button>

        <div className="text-center mt-3">
          <p>Already have an account? <a href="#login">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
