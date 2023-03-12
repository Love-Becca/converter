import React from 'react';
import '../Styles/Signup.css'
import google from '../assets/google.svg'
import SignupContent from '../Component/SignupContent'
import { Form, redirect} from 'react-router-dom';
import {createUser} from "../Helper/createUser";
import { toast } from 'react-toastify';

const SignUp = () => {
  return (
    <>
      <div className='signup-container'>
        <div className='signup-content'>
          <SignupContent />
        </div>
        <div className='signup-form'>
          <h2>Create account</h2>
          <p>Register with email</p>
          <Form method='post'>
            <div className="name">
              <input type="text"
                className="form-control" 
                name="name" id="enter-name" 
                placeholder="Name"
                maxLength={35} 
                required/>
            </div>
            <div className="email">
              <input type="email"
                name="email" 
                id="enter-email"  
                maxLength={40}
                placeholder="Email"/>
            </div>
            <div className="password">
              <input type="password" 
                className="form-control"
                name="password" 
                id="enter" 
                placeholder="Password"
                maxLength={15} 
                required/>
            </div>
            <div className="form-check">
              <input className="form-check-input" 
                type="checkbox" 
                name='check'
                id="accept-privacy"/>
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
export default SignUp;

export const signupAction = async ({request})=>{;
  const formData = await request.formData()
  const signup_data = {
    email: formData.get('email'),
    password: formData.get('password'),
    name: formData.get('name'),
    isChecked: formData.get('check')
  }

  console.log(formData.get('check'));
  if (signup_data.name.match(/\d+/g)) return ({error: 'Enter your name in characters'},toast.error("Enter your name in character!"))//if name contains number
  if (signup_data.name.length < 10) return ({error: 'Enter your last name and first name'},toast.error('Enter your last name and first name!'))
  if (!signup_data.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) return ({error: 'Wrong email format'}, toast.error('Wrong email format!'))
  if (signup_data.password.length < 8) return ({error: 'Password should be greater than 5'}, toast.error('Password less than 7!'))
  if (signup_data.isChecked !== 'on') return ({error: 'Terms and Policy'}, toast.error('Terms and Policy!'))
  createUser(signup_data)
  toast.success(`Registration successful`)
  return redirect('/convert') 
}