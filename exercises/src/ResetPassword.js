import React from 'react'
import { useState } from 'react'

const ResetPassword = () => {

    const [password, setPassword] = useState("");

    const checkPassword = () => {
        if(password!==""){
                        if( /^[a-zA-Z0-9]+$/.test(password) && /[0-9]+/.test(password) && /[a-zA-Z]+/.test(password))
                            return (<p>Strong Password</p>);
                        return (<p>Please include at least one number and alphabets</p>);
                    }
    }

  return (
    <div>
        <h1>Ex:3 Reset Password</h1>

        <input
        value={password}
        placeholder = "Enter password"
        type="text"
        onChange={(e) => {
            setPassword(e.target.value);
        }}
        />

        <p>{checkPassword()}</p>

    </div>
  )
}

export default ResetPassword