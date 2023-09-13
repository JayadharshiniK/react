import React from 'react'

import { useForm } from "react-hook-form";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <div className="App">

            <h1>Ex:15 Login Form</h1>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control">
              <label>Email</label>
              <input type="text" name="email" {...register("email")} />
            </div> <br />

            <div className="form-control">
              <label>Password</label>
              <input type="password" name="password" {...register("password")} />
            </div> <br />

            <div className="form-control">
              <label></label>
              <button className="btn" type="submit">Login</button>
            </div> <br />

          </form>
        </div>
      );
}

export default Form