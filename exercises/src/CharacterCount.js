import React from 'react'
import {useState} from "react";

const CharacterCount = () => {

    const [count, setCount] = useState("")

    function charCounter() {
        let countcolor = "";
        let maxCount = 50;
        let diff = maxCount - count.length;

        if (diff>21) {
            countcolor = "black";}
        else if (diff>-1) {
            countcolor = "orange";
        } else {
            countcolor = "red"
        }

        return (
            <div>
                <span style={ {color: countcolor}} > {diff} </span>/50
            </div>
        )
    }
  return (
    <div>
        <h1>Ex:1 Character Counter</h1>
        <textarea 
        style = {{ maxWidth: "600px", width: "100%", height: "100px"}}
        value={count}
        onChange={ (e) => {
            setCount(e.target.value);
        }}
        />

        <div> {charCounter()} </div>
    </div>
  )
}

export default CharacterCount