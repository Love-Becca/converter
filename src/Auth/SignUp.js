import React from 'react';
import '../Styles/Signup.css'
import google from '../assets/google.svg'


const SignUp = () => {

  return (
    <>
      {/* <img src={arrow} alt="back" /> */}
      <div className='signup-container'>
        <div className='signup-content'>
          <h2>Convert files without any limits!</h2> 
          <p>Have access to range of file conversion options, including file types such as docx, xlsx and more. </p>
        </div>
        <div className='signup-form'>
          <h2>Create account</h2>
          <p>Register with email</p>
          <div className="name">
            {/* <label htmlFor="name" className="form-label">Name</label> */}
            <input type="text"
              className="form-control" name="name" id="enter-name" placeholder="Name"/>
          </div>
          <div className="email">
            {/* <label htmlFor="email" className="form-label">Email</label> */}
            <input type="email"
              name="email" id="enter-email"  placeholder="Email"/>
          </div>
          <div className="password">
            {/* <label htmlFor="password" className="form-label">Password</label> */}
            <input type="password" className="form-control" name="password" id="enter" placeholder="Password"/>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="accept-privacy"/>
            <label className="form-check-label" htmlFor="accept-privacy">
            We take your privacy and security seriously, so you can rest assured that your files and personal information are safe with us
            </label>
          </div>
          <button className='register'>Register</button>
          <p className='with_google'>Or register with google<img src={google} alt="google"  className='google'/></p>
        </div>
      </div>
    </>
  );
}
 
export default SignUp;