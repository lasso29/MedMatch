import React from 'react'
import logo from '../../assets/images/medvation-logo.png'

const SignUp = () => {
  return (
<>
<div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
  <div className="card p-4 shadow-lg text-center"
       style={{ maxWidth: '500px', width: '100%', margin: '0 auto' }}>
    <img src={logo} alt="Logo" className="signUp-logo mx-auto mb-3" />
    <h2 className="text-center">Sign up</h2>
    <p className="text-center">Create your account</p>

    <form>
      <div className="form-group mb-3">
        <input type="text" className="form-control" placeholder="Username" required />
      </div>
      <div className="form-group mb-3">
        <input type="email" className="form-control" placeholder="Email" required />
      </div>
      <div className="form-group mb-3">
        <input type="password" className="form-control" placeholder="Password" required />
      </div>
      <div className="form-group mb-3">
        <input type="password" className="form-control" placeholder="Confirm Password" required />
      </div>
      <button type="submit" className="SignUp-button btn w-100">Sign up</button>
    </form>

    <div className="text-center mt-3">
      <span>Or</span>
    </div>

    <button className="btn btn-outline-primary w-100 mt-2">Sign In with Google</button>

    <div className="text-center mt-3">
      <p>Already have an account? <a href="#login">Login</a></p>
    </div>
  </div>
</div>
</>
  )
}

export default SignUp


