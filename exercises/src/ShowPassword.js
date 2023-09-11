import React from 'react'
import { useState } from 'react';

const ShowPassword = () => {

    const ResetPasswordForm = () => {

    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    return (
        <div>
            <InputPassword
            placeholder="Type password"
            data={password}
            setData={setPassword}
            />

            <br />

            <InputPassword
            placeholder="Re-type password"
            data={rePassword}
            setData={setRePassword}
            />

            <br />

            <button 
            type="submit"
            disabled={
                password !=="" && rePassword !=="" && password ===rePassword
                ? false
                : true
            }
            onClick={(e) => {
                alert("Your password has been changed successfully!")
            }}
            >
                Submit
            </button>
        </div>
    )}

    function InputPassword ({placeholder, data, setData}) {
        const [isHidden, setIsHidden] = useState(true);

        return(
            <label>
                <input
                value={data}
                onChange={(e) => {
                    setData(e.target.value);
                }}
                type={isHidden ? "password" : "text"}
                placeholder={placeholder}
                />

                <span
                onClick={(e) => {
                    if (isHidden) {
                        e.target.innerText = "Hide";
                      } else {
                        e.target.innerText = "Show";
                      }
                      setIsHidden((isHidden) => !isHidden);
                    }
                }
                style={ {cursor: "pointer"}}>
                    Show
                </span>      
            </label>
        );
    }


return (
    <div>
        <h1>Ex: 5 Show Password</h1>
        <ResetPasswordForm />
    </div>
)}

export default ShowPassword