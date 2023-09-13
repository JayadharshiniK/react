import React, {useState, useEffect} from 'react'


const url = "https://jsonplaceholder.typicode.com/users/1";

const DataFetch = () => {

    const [userData, setUserData] = useState({});

    const getUserData = async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
        setUserData(jsonData);
    }

    useEffect(() => {
        getUserData();
    }, []);

  return (
    <div>
        <h1>Ex:13 Data fetch from API</h1>
        <h3>User Data</h3>
        <p>
            <strong>Name:</strong> {userData.name}
        </p>
        <p>
            <strong>Website:</strong> {userData.website}
        </p>
        <p>
            <strong>Email:</strong> {userData.email}
        </p>
        <p>
            <strong>Phone:</strong> {userData.phone}
        </p>
    </div>
  )
}

export default DataFetch