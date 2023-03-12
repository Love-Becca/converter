import React from 'react';
import '../Styles/Signup.css'
import google from '../assets/google.svg'
import SignupContent from '../Component/SignupContent';
import { Form, Link, redirect, useActionData} from "react-router-dom";
import { registered } from '../Helper/createUser';

const Login = () => {
    const data = useActionData()
    console.log(data);
    return (
        <div className='login'>
            <div className='signup-content'>
                <SignupContent />
            </div>
            <div className='login-form'>
                <h2>Login to your account</h2>
                <p>Login with an email</p>
                <Form method='post'>
                    <div className="email">
                        {/* <label htmlFor="email" className="form-label">Email</label> */}
                        <input type="email"name="email" id="enter-email"  placeholder="Email"/>
                    </div>
                    <div className="password">
                        {/* <label htmlFor="password" className="form-label">Password</label> */}
                        <input type="password" className="form-control" name="password" id="enter" placeholder="Password"/>
                    </div>
                    {data && data.error&& <p>{data.error}</p>}
                    <Link><p className='forget-password'>Forget your password?</p></Link>
                    <div className='log-in-alt'>
                        <p className='login-google'>Or login with google</p>
                        <img src={google} alt="google"  className='google'/>
                    </div>
                    <button>Login</button>
                </Form>
            </div>
        </div>
    );
}
export const loginAction = async ({request})=>{
    const data = await request.formData()

    const login_data = {
        email: data.get('email'),
        password: data.get('password')
    }
    
    const client = registered()
    if (client === null) return ({error:"Kindly sign up"}, redirect("/signup"))

    if (login_data.password.length < 5) return {error: 'characters less than five'}
    
    if (login_data.email !== client.email) return {error:"Incorrect email"}

    if (login_data.password !== client.password) return {error: "Incorrect Password"}

    return redirect('/convert')
}
 
export default Login;