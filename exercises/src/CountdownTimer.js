import React , {useState, useEffect} from 'react'

const CountdownTimer = () => {
    const initialValue = 100;

const [timeRemaining, setTimeRemaining] = useState(initialValue);

useEffect (() => {
    if (timeRemaining <=0) {
        return;
    }

    const timerId = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime -1);
    }, 1000);

    return () => {
        clearInterval(timerId);
    }
}, [timeRemaining]);

  return (
    <div>
        <h1>Ex:14 Countdown Timer</h1>
        <p style={{fontSize:'30px', fontWeight: 500}}>Time Remaining: {timeRemaining}</p>
    </div>
  )
}

export default CountdownTimer