import Header from './Header';
import NewContactForm from './NewContactForm';
import AccountNav from './AccountNav';
import Messenger from './Messenger';
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  return (
    <div className="App">
      <Header />
      <Messenger />
      <AccountNav />
      {/*The contact form will be moved from the app to the account nav */}
      <NewContactForm />

    </div>
  );
}

export default App;
