import React, {useState} from 'react'
import "./styles.css"

const SimpleCounter = () => {
    const [counter, setCounter] = useState (0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }
    return (
        <div>
            <h1>Ex:11 Simple Counter</h1>
            <div>
                <button className="button" onClick={decrement}>-</button><br />
                <span>{counter}</span><br />
                <button className="button" onClick={increment}>+</button>
            </div>
        </div>
    )
  }
 
    
 
export default SimpleCounter