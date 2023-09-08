import React, {useState} from "react";

const StateTutorial = () => {
//   let counter = 0;

const [counter, setCounter] = useState (0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }


    const [inputValue, setInputValue] = useState("Hello User!");

    let onChange = (event) => {
      const newValue = event.target.value;
      setInputValue(newValue); 
    }  
    return (
   
        <div>
    
            {/* //increment button: */}
            <div>
                ---useState---
                <button onClick={decrement}>-</button>
                <span>{counter}</span>
                <button onClick={increment}>Increment</button>
            </div>
    
        {/* input field: */}
            <div>
          <input placeholder="enter something..." onChange={onChange} />
          {inputValue}
        </div>
    
        </div>);

};




export default StateTutorial;