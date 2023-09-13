import React from 'react'
import "./styles.css"
import {useState} from "react";

const SearchFilter = () => {

    let list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon",
        "Grapes",
        "Pomegranate"]

    const [filterList, setFilterList] = useState(list);

    const handleSearch = (e) => {

        if (e.target.value === "") {
            setFilterList(list);
            return;
        }

        const filteredValue = list.filter(
            (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !==-1
        )
        setFilterList(filteredValue);
    }

  return (
    <div className='app'>
        <h1>Ex:10 Search Filter</h1>
        Search: <input className="input" name="query" type="text" onChange={handleSearch} />
        {filterList &&
            filterList.map((item, index) => (
                <div key= {index}>
                    {item}
                    </div>  //Display item as unique div
            ))}
    </div>
  )
}

export default SearchFilter