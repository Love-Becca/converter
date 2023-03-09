import React from 'react';
import './Signup.css'


const SignUp = () => {

  return (
    <div className='signup-container'>
      <div className='signup-content'>
        <h2>Easily Convert any files, No limits !</h2> 
        <p>Sign up, to have access to a wide range of file conversion options, including file types such as docx, xlsx and more. </p>
      </div>
      <div className='signup-form'>
        <h2>SignUp</h2>
        <p>with email or Google</p>
        <div className="name">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text"
            className="form-control" name="name" id="enter-name" placeholder="Snicker doddle"/>
        </div>
        <div className="email">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email"
            name="email" id="enter-email"  placeholder="example@email.com"/>
        </div>
        <div className="password">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" id="enter" placeholder="**********"/>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="I agree" id="accept-privacy"/>
          <label className="form-check-label" htmlFor="accept-privacy">
          We take your privacy and security seriously, so you can rest assured that your files and personal information are safe with us
          </label>
        </div>
        <p>Signup with google</p>
        <button>Google</button>
      </div>
    </div>

  );
}
 
export default SignUp;