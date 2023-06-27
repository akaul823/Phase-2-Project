import Header from './Header';
import AccountNav from './AccountNav';
import Messenger from './Messenger';
import Contacts from './Contacts';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/data")
    .then(res=>res.json())
    .then(data=>setData(data))
  }, [])
  return (
    <div className="App">
      <Header />
      <AccountNav data={data} />
      <Contacts />
      <Messenger />
    </div>
  );
}

export default App;
