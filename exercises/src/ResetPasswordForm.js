import React from 'react'
import { useEffect, useState } from 'react'

const ResetPasswordForm = () => {

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    function matchPasswords () {
        if (input1 !=="" && input2 !=="") {
            if (input1 !== input2) {
                return "Passwords doesn't match!";
            }
        }
    }

  return (
    <div>
        <h1>Ex:2 Reset Password Form</h1>

        <input value={input1}
        placeholder = "Type password"
        required
        onChange = {(e) => {
            setInput1(e.target.value);
        }}
        />

        <br />

        <input value={input2}
        placeholder = "Re-type password"
        required
        onChange = {(e) => {
            setInput2(e.target.value);
        }}
        />

        <div style={{color: "red"}}> {matchPasswords()} </div>

    </div>
  )
}

export default ResetPasswordForm