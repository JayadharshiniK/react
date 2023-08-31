import React, { useState } from 'react'
// import { useState } from 'react';

const Content = () => {

    const [name, setName] = useState("Earn");

    function handleNameChange() {
        const names = ["Earn", "Grow", "Give", "Spend", "Donate", "Gather", "Stock"];
        const int = Math.floor(Math.random()*7);
        setName (names[int])
      }

    // const handleClick = (e) => {
    //    console.log(e.target.innerText);
    // }

    // const handleClick2 = (name) => {
    //     console.log(`Successfully added! ${name}`);
    //  }

  return (
    <main>
        <p> Let's {name} money </p>
        <button onClick={handleNameChange}>Add to list</button>
    </main>
    
  )
}

export default Content