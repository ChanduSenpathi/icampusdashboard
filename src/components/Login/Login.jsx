import React, { useContext } from 'react'
import './Login.css'
import { UserContext } from '../SidebarProvider/SidebarProvider';
import login from '../../assets/images/login.png'

export default function Login() {
    const {show} = useContext(UserContext);
    let customSidebar = {
        marginLeft : `${show ? '0px': '200px'}`,
        transition: 'all 1s linear',
    }
  return (
    <div className='d-flex align-items-center' style={customSidebar}>
        <img src={login} alt='login-image' className='login_image w-50'/>
        <div className='form_container'>
            <h1 className='text-center login_form_head'>Login Form</h1>
            <form className='w-100'>
                <div className='d-flex flex-column'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' placeholder='Enter your username' className='common_input w-100'/>
                </div>
                <div className='d-flex flex-column mt-3'>
                    <label htmlFor='password'>Password</label>
                    <input type='text' id='password' placeholder='Enter your password' className='common_input w-100'/>
                </div>
                <div className='d-flex flex-column mt-3'>
                    <label htmlFor='code'>Center Code</label>
                    <input type='text' id='code' placeholder='Enter your code' className='common_input w-100'/>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-3'>
                    <input type="checkbox" className='me-1'/>
                    <label htmlFor="remember_me">Keep me signed in</label>
                </div>
                <button type='button' className='login_btn w-100 mt-3'>Login</button>
            </form>
            <span className='mt-3 text-center d-block login_span_text'>By proceeding you agree to our <a href="#">Terms and Condition</a>&<a href="#">Privacy Policy</a></span>
            <span className='mt-3 text-center d-block login_span_text'>Get on your mobile - Download now <a href="#">Student / Parent App</a></span>
        </div>
    </div>
  )
}
