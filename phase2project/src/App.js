import Header from './Header';
import NewContactForm from './NewContactForm';
import AccountNav from './AccountNav';
import Messenger from './Messenger';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Messenger />
      <AccountNav />
      <NewContactForm />

    </div>
  );
}

export default App;
