import React from 'react'
import '../pages-styles/SignUp.css'
import {useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
const validationSchema = Yup.object({
  name: Yup.string().required('First Name is required'),
  user_name: Yup.string().required('User Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  mobile: Yup.string().matches(/^[0-9]+$/, 'Invalid phone number').required('Mobile number is required')

});


function SignUp() {
  const navigate = useNavigate();
 
    const formik = useFormik({
      initialValues:{
        name: '',
        user_name: '',
        email: '',
        mobile : ''
      },
      validationSchema : validationSchema,
      onSubmit: (values) =>{
        console.log("form submitted");
        navigate('/selectCategory');
      },
    });

  
  return (
    <div className='fullWindow'>
        <div className='left'>
          <p className='left-text'>Discover new things on Superapp</p>
        </div>
        <div className='right'>
            <div className='right-content'>
            <h1>Super App</h1>
            <h2>Create your new account</h2>
            <br></br>
            <form onSubmit={formik.handleSubmit}>
           
            <input className = 'form-input' placeholder='Name' id='name' type='text' onChange={formik.handleChange}
          onBlur={formik.handleBlur}  value={formik.values.name} ></input> {formik.touched.name && formik.errors.name ? (
            <div className="error-text">{formik.errors.name}</div>
          ) : null}<br></br><br></br>
          
            <input className = 'form-input' placeholder='User Name' id='user_name' type='text' onChange={formik.handleChange}
          onBlur={formik.handleBlur} value={formik.values.user_name}> 
          </input>  {formik.touched.user_name && formik.errors.user_name ? (
            <div className="error-text">{formik.errors.user_name}</div>
          ) : null}<br></br><br></br>

            <input className = 'form-input' placeholder='Email' id='email' type='text' onChange={formik.handleChange}
          onBlur={formik.handleBlur} value={formik.values.email}> 
       </input> {formik.touched.email && formik.errors.email ? (
            <div className="error-text">{formik.errors.email}</div>
          ) : null}<br></br><br></br>

            <input className = 'form-input' placeholder='Mobile' id='mobile' type='text' onChange={formik.handleChange}
          onBlur={formik.handleBlur} value={formik.values.mobile}></input> {formik.touched.mobile && formik.errors.mobile ? (
            <div className="error-text">{formik.errors.mobile}</div>
          ) : null} <br></br><br></br>

          
            <input type="checkbox" id="tnc" name="TnC"></input>
            <label htmlFor="tnc">Share my registration data with Superapp</label>
            <br></br>
            <br></br>
            <button onClick={onsubmit}>Sign Up</button>
            <br></br>
            </form>

            <p>By clicking on Sign up. you agree to Superapp <span style={{color: '#72DB73'}}>Terms and Conditions of Use</span></p>
            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{color: '#72DB73'}}>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default SignUp;