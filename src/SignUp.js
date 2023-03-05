import React from 'react';
import './Signup.css'


const SignUp = () => {
  return (
    <>
      <div>
        <h2>Easily Convert any files, No limits !</h2> 
        <p>Sign up, to have access to a wide range of file conversion options, including file types such as docx, xlsx and more. </p>
      </div>
      <div>
        <h2>SignUp</h2>
        <p>with email or Google</p>
        <div class="name">
          <label for="name" class="form-label">Name</label>
          <input type="text"
            class="form-control" name="name" id="enter-name" placeholder="Snicker doddle"/>
        </div>
        <div className="email">
          <label for="email" className="form-label">Email</label>
          <input type="email"
            name="email" id="enter-email"  placeholder="example@email.com"/>
        </div>
        <div className="form-check">
          <input classNameNameName="form-check-input" type="checkbox" value="I agree" id="accept-privacy"/>
          <label className="form-check-label" for="accept-privacy">
          We take your privacy and security seriously, so you can rest assured that your files and personal information are safe with us
          </label>
        </div>
        <p>Signup with google</p>
        <button>Google</button>
      </div>
    </>

  );
}
 
export default SignUp;