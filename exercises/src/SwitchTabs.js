import React from 'react';
import { useState } from "react";

const SwitchTabs = () => {
//---Home page----
function Home() {
    return (
        <div>
            <h3>This is Homepage</h3>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.  
            </p>
        </div>
    )
}

//---About page---
function About() {
    return (
        <div>
            <h3>This is About</h3>
            <p>
            It is also used to temporarily replace text in a process called greeking, 
            which allows designers to consider the form of a webpage or publication, 
            without the meaning of the text influencing the design.
            </p>
        </div>
    )
}

//----Profile---
function Profile() {
    return (
        <div>
            <h3>Profile</h3>
            <p>
            Name: Priyansi Yadav <br />
            Designation: Author and content writer <br />
            Email: priyanshi123@gmail.com
            </p>
        </div>
    )
}

//---Navigation Function---

function RouterButton({buttonLabel, setPage}) {
    function onClickHandler(e) {
        setPage(e.target.innerText);
    }
    return <button onClick={onClickHandler}>{buttonLabel}</button>;
}

const [page, setPage] = useState("Home");

function setPageData(e) {
    if (page ==="Home") {
        return <Home />;
    }
    if (page ==="About") {
        return <About />;
    }
    return <Profile />;

}

return (
    <div>
        <h1>Ex:7 Swtich Tabs</h1>
        <RouterButton buttonLabel={"Home"} setPage={setPage} />
        <RouterButton buttonLabel={"About"} setPage={setPage} />
        <RouterButton buttonLabel={"Profile"} setPage={setPage} />

        {setPageData()}
    </div>
    
  )
}

export default SwitchTabs