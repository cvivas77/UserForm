import axios from 'axios';
import React, { useEffect } from 'react';
import {useForm} from "react-hook-form"


const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: ""
}
const UsersForm = ({getUsers, userSelect, deselectUser}) => {

  const {register, handleSubmit, reset} = useForm();

  useEffect(() => {
    if(userSelect){
      reset(userSelect)
    } else {
      reset(initialValues);
    }
  }, [userSelect])

  const submit = (data) => {
    console.log(data);
    if(userSelect) {
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelect.id}/`, data)
        .then(() => {
            getUsers()
            deselectUser() })
        .catch(error => console.log(error.response?.data));
    } else {
      axios.post('https://users-crud1.herokuapp.com/users/', data)
      .then(() => getUsers())
      .catch(error => console.log(error.response?.data));
    }
    
  }

  return (
   <>
    <div className='box'>
    <form className='container-form'
      onSubmit={handleSubmit(submit)}>
      <div className='input1 group' >
        <label htmlFor="first_name">First Name</label>
        <input {...register("first_name")} type="text" id='name' />
      </div>
      <div className='input2 group'>
        <label htmlFor="last_name">Last Name</label>
        <input {...register("last_name")} type="text" id='lastName' />
      </div>
      <div className='input3 group'>
        <label htmlFor="email">Email</label>
        <input {...register("email")} type="email" id='email'/>
      </div>
      <div className='input4 group'>
        <label htmlFor="password">Password</label>
        <input {...register('password')} type="password" id="password" />
      </div>
      <div className='input5 group'>
        <label htmlFor="birthday">Date Birthday</label>
        <input {...register("birthday")} type="date" id="birthday" />
      </div>
      <div className='btn group'>
      <button type="submit">Sumit</button>
      </div>
      


    </form>
    </div>
    </>
  );
};

export default UsersForm;