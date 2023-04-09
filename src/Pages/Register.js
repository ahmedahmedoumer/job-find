import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage'
import { Logo , FormRow,Alert } from '../components'
import {useAppContext} from '../context/appContext'

const Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert:true,
};  const state=useAppContext();
    console.log(state);
    const [values,setValues]=useState(initialState);
    const handleChange=(e)=>{
       console.log(e.target.value);
 };
  const handleButtonClick=()=>{
     setValues({...values, isMember: !values.isMember});
     console.log(values.isMember);
  };

    return ( <Wrapper 
          className="full-page">
          <form className="form">
          <label><Logo/></label>
          <h3>Login</h3>
          
           {!values.isMember &&
          <FormRow  
            type="text" 
            name="name"
            value={values.name}
            labelText="Name"
            handleChange={handleChange}
           />}
           <FormRow 
            type="email" 
            labelText="Email"
            value={values.email}
            name="email"
            handleChange={handleChange}
            />
          <FormRow 
            type="password" 
            labelText="Password"
            value={values.email}
            name="passsword"
            handleChange={handleChange}
            />

          <button type="button" className="btn btn-block">{values.isMember ? "Login" : "Register" }</button>
          <p>{values.isMember ? "are you not a memebr ?":"are you already a member ?"}
          <button type="button" onClick={handleButtonClick} className="member-btn">{values.isMember ? "register" : "Login" }</button></p>
          </form>

      </Wrapper>

    )
};
export default Register;