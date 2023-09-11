import React from 'react'
import {useState} from "react";

const DisableSubmit = () => {

    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    function doesMatch() {
        if (password !=="" && repassword !=="" && password ===repassword){
            return false;
        }
        
        return true;
    }

  return (
    <div>
        <h1>Ex:4 Disable Sumbit Button</h1>

        <input 
        value={password}
        placeholder="type password"
        onChange={(e) => {
            setPassword(e.target.value);
        }}
        />

        <br />

        <input 
        value={repassword}
        placeholder="type password"
        onChange={(e) => {
            setRepassword(e.target.value);
        }}
        />

        <br />

        <button
        type="submit"
        disabled={doesMatch()}
        onClick={() => {
            alert("Your password has been changed successfully");
            setPassword("");
            setRepassword("");
        }}
        >
            Submit
        </button >
        
    </div>
  )
}

export default DisableSubmit