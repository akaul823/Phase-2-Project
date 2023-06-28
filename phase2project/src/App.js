<<<<<<< Updated upstream
import Header from './Header';
import AccountNav from './AccountNav';
import Messenger from './Messenger';
import Contacts from './Contacts';
import { useState, useEffect } from 'react';
import './App.css';
=======
import logo from './logo.svg';
import React from 'react';
import Nav from './components/Nav'
import Chat from './components/Chat'
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.css';
const URL = "http://localhost:3000/data"
>>>>>>> Stashed changes

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/data")
    .then(res=>res.json())
    .then(data=>setData(data))
    // .then(console.log(data))
  }, [])
  
  return (
<<<<<<< Updated upstream
    <div className="App">
  
      <AccountNav data={data} />
      <Contacts data={data}/>
=======
    <div>
    <div className="userList" class="navbar navbar-expand-lg navbar-light bg-dark">
      <Nav list={navUserList} nav="userList" setUser={setUser} eventHandler={chatSwitch}/>
    </div>
    <div className="chat">
      <Chat display={displayMessages} newMessage={newMessage}/>
    </div>
    <div className="accountList" class="navbar navbar-expand-lg navbar-light bg-light">
      <Nav list={navAccountList} nav="accountList" setAccount={setAccount} eventHandler={chatSwitch}/>
    </div>

>>>>>>> Stashed changes
    </div>
  );
}

export default App;
