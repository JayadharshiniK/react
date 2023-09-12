import React from 'react'
import { useState } from "react";
import "./styles.css";

const DarkMode = () => {

    const darkTheme = {
        backgroundColor: "black",
        color: "white"
    };

    const lightTheme = {
        backgroundColor: "white",
        color: "black"
    };

    function Toggle({ isdark, setIsdark }) {
        return (
            <label className="checkboxLabel">
                <input
                onChange={() => {
                    setIsdark((isdark) => !isdark);
                }}
                className="checkboxInput"
                type='checkbox'
                />

                <span className="checkbox"></span>
            </label>
        )
    }
    const [isdark, setIsdark] = useState(false);

  return (
    <div style={isdark ? darkTheme : lightTheme} className="Exercise11">
        <h1>Ex:9 Dark Theme</h1>
        <Toggle isdark={isdark} setIsdark={setIsdark} />
        <h3>Hello CodeSandbox</h3>
        <h4>Start editing to see some magic happen!</h4>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
        </p>
    </div>
  )
}

export default DarkMode