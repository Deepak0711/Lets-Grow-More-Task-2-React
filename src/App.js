import React, { useState } from "react";
import './style.css';

const App=()=> {
  const[users, setUsers] = useState([]);

  const loadUsers=async()=>{
    console.log("Hello Deepak API");
    const response = await fetch("https://reqres.in/api/users?page=1" );
    const jsonR = await response.json();
    setUsers(jsonR.data);
  };
return (
    <div className="App">
      <header>
      <img class="logo" src="https://static1.squarespace.com/static/51d34521e4b085686831fee4/t/5318db46e4b03ba2018befa3/1625608438655/"></img>

      <button onClick={loadUsers} >  Click on me to Get User's Data</button>
      </header>
      <ul class ="Bullets">

        {users.map(({ id , email,first_name,last_name,avatar }) => (
          <li class="li"key = {id}> 
            <img class="dp" src={avatar}></img>
            <li class="li1">Name : {first_name} {last_name}</li>
            <li class="li1">Email ID : {email}</li>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
