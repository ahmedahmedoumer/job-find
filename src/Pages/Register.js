import { useState, useEffect } from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import { Logo, FormRow, Alert } from '../components'
const initialState = {
    name: '',
    email: '',
    password: '',
    isMemeber: true,
    showAlert: true,
}
const Register = () => {
    const [values, setValues] = useState(initialState)
    const handleOnchange = (e) => {
        console.log(values);
    }
    return ( < Wrapper className = "full-page" >
        <
        form className = "form" >
        <
        label > < Logo / > < /label> <
        h3 > Login < /h3> { values.showAlert && < Alert / > } <
        FormRow type = "text"
        name = "email"
        value = { values.email }
        labelText = "Name"
        handleChange = "handleOnchange" /
        >
        <
        FormRow type = "text"
        labelText = "Email"
        value = { values.email }
        handleChange = "handleOnchange"
        name = "email" / >
        <
        FormRow type = "text"
        labelText = "Password"
        value = { values.email }
        handleChange = "handleOnchange"
        name = "email" / >

        <
        button className = "btn btn-block" > Login < /button> <
        /form> <
        /Wrapper>

    )
}
export default Register;