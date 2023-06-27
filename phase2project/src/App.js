import Header from './Header';
import AccountNav from './AccountNav';
import Messenger from './Messenger';
import Contacts from './Contacts';
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  return (
    <div className="App">
      <Header />
      <Contacts />
      <Messenger />
      <AccountNav />

    </div>
  );
}

export default App;
