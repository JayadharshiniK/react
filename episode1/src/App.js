
// import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './index.css';
import AddItem from './AddItem';
import { useState } from 'react';


function App() {
  

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

  const [newItem, setNewItem] = useState('')
    
    
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
    

  const handleSubmit = (e) => {
    console.log('submitted')
  }
  return (
    <div className="App">
      <Header />
      <AddItem
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />
      <Content 
      items = {items}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />
      <Footer 
      length = {items.length}
      />
    </div>
  )
}


// Header.defaultProps = {
//   title: "To do list"
// }
export default App;
