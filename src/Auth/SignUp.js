import React, { useContext } from 'react';
import '../Styles/Signup.css'
import google from '../assets/google.svg'
import SignupContent from '../Component/SignupContent'
import { Form, redirect } from 'react-router-dom';
// import {FormContext} from '../Context/FormContext'


export async function action(){
  return redirect("/convert")
}
const SignUp = () => {
  // const {formData, setFormData} = useContext(FormContext)
  const handleForm = (e)=>{
    console.log(e.target.email.value);
  }
  return (
    <>
      {/* <img src={arrow} alt="back" /> */}
      <div className='signup-container'>
        <div className='signup-content'>
          <SignupContent />
        </div>
        <div className='signup-form'>
          <h2>Create account</h2>
          <p>Register with email</p>
          <Form method='post' action='/convert' onSubmit={(event)=>handleForm(event)}>
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
            <div className='sign-in-alt'>
              <p className='with_google'>Or register with google</p>
              <img src={google} alt="google"  className='google'/>
            </div>
            <button type='submit' className='register'>Register</button>
          </Form>
        </div>
      </div>
    </>
  );
}
export const signupAction = async ({request})=>{
  const data = await request.formData()
}
export default SignUp;