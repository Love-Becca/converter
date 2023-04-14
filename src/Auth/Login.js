import React from 'react';
import '../Styles/Signup.css'
import google from '../assets/google.svg'
import SignupContent from '../Component/SignupContent';
import { Form, Link, redirect, useActionData} from "react-router-dom";
import { registered } from '../Helper/createUser';
import { toast } from 'react-toastify';

const Login = () => {
    const data = useActionData()
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
                        <input type="email"name="email" id="enter-email"  placeholder="Email"/>
                    </div>
                    <div className="password">
                        <input type="password" className="form-control" name="password" id="enter" placeholder="Password"/>
                    </div>
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
    if (client === null) return ({error:"Kindly sign up"}, toast.error('Kindly Register'),redirect("/signup"))
    if (login_data.password !== client.password) return ({error: "Incorrect Password"},toast.error("Incorrect Password"))
    if (login_data.email !== client.email) return ({error:"Incorrect email"},toast.error("Incorrect email"))

    toast.success("Login successful")
    return redirect('/convert')
}
 
export default Login;