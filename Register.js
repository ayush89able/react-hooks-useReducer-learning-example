import React,{useState,useReducer} from 'react'
import Input from  '@tds/core-input'
import Box from  '@tds/core-box'
import Button from '@tds/core-button'
import Paragraph from '@tds/core-paragraph'
import Heading from '@tds/core-heading'

import RegisterReducer from './Reducers/RegisterReducer'
const Register=()=>{
 
  const [state,setState]=useState({
    email:'',
    password:'',
    firstname:'',
    lastname:'',
    address:'',
    mobilenumber:''
  })
  const [userRegistered,setUserRegistered]=useState(false)
  const [storeState,dispatch]=useReducer(RegisterReducer,state);
  const handleChange=(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    setState({...state,[name]:value})
    // console.log(state)
  }

  const handleClick=()=>{
    dispatch({type:'AddUser',payload:state})
    setUserRegistered(true)
  }

  const back=()=>{
    setUserRegistered(false)
  }

return(
  <>
  {userRegistered 
  ?
  (
    <>
    <Heading level='h3'>User Registered</Heading>
    <Paragraph>Email: {storeState.email}</Paragraph>
    <Paragraph>First Name: {storeState.firstname}</Paragraph>
    <Paragraph>Last Name: {storeState.lastname}</Paragraph>
    <Paragraph>Address: {storeState.address}</Paragraph>
    <Paragraph>Mobile Number: {storeState.mobilenumber}</Paragraph>
    <Button onClick={back}>Edit User</Button>
    </>
  )
  :
  (
    <>
    <Heading level='h3'>Register User</Heading>
  <Box horizontal={6}>
    <Input label="Email" type='email' onChange={handleChange} name='email'/>
    <Input label="Password" type='password' onChange={handleChange} name='password'/>
    <Input label="FirstName" type='text' onChange={handleChange} name='firstname'/>
    <Input label="LastName" type='text' onChange={handleChange} name='lastname'/>
    <Input label="Address" type='text' onChange={handleChange} name='address'/>
    <Input label="Mobile Number" type='tel' onChange={handleChange} name='mobilenumber'/>
    <div style={{marginTop:'2em'}}>
    <Button onClick={handleClick}>Submit</Button>
    </div>
  </Box>
  </>
  )
  }  
  </>
)
}
export default Register;