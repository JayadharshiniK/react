import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {

const [items, setItems] = useState( 
  [ 
    {id:1,
    checked: true,
    item: "Practice coding"
  },

  {id:2,
    checked: false,
    item: "Learn CSS"
  },

  {id:3,
    checked: true,
    item: "Play badminton"
  },

  {id:4,
    checked: false,
    item: "Exercise & Gym"
  },

  {id:5,
    checked: false,
    item: "Read book"
  },
  
  {id:6,
    checked: false,
    item: "Clean my room"
  },

  {id:7,
    checked: false,
    item: "Feed puppy Zimba"
  },

  {id:8,
    checked: false,
    item: "Buy Groceries"
  },

  {id:9,
    checked: false,
    item: "Cook dinner"
  }
]);


const handleCheck = (id) => {
  const listItems = items.map((item) => item.id===id ? {...item, checked: !item.checked} : item)
  setItems(listItems)
  localStorage.setItem("to_do_list", JSON.stringify (listItems))
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !==id)
  setItems(listItems)
  localStorage.setItem("to_do_list", JSON.stringify (listItems))
}


  return (
    <main>

      {(items.length) ? (
      <ul>
        {items.map((item) => (
          <li className='item'>

          <input type="checkbox"
                onChange={() => handleCheck(item.id)}
                 checked={item.checked} />

                 <label
                 style = {(item.checked)? {textDecoration: 'line-through'} : null}
                 onDoubleClick={() => handleCheck(item.id)}> 
                 {item.item}
                 </label>

                 <FaTrashAlt 
                 onClick={() => handleDelete(item.id)}
                 role = "button"
                 tabIndex="0"
                 />
          </li>

        ))}
      </ul>
      ) 
      : (<p style = { { marginTop: '1rem', fontWeight: 'bold'}}>Your list is empty!</p>)}
    </main>
    
  )
}

export default Content