import React from 'react';
const initialState={
        firstname:null,
        lastname:null,
        email:null,
        password:null,
        mobilenumber:null,
        address:null
}
function RegisterReducer(state=initialState,action){
  switch(action.type){
    case 'AddUser':{
       return{
         firstname:action.payload.firstname,
         lastname:action.payload.lastname,
         email:action.payload.email,
         password:action.payload.password,
         mobilenumber:action.payload.mobilenumber,
         address:action.payload.address
       }
    }
    default:
    return state;
  }
}
export default RegisterReducer;