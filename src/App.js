import React from 'react';
import './App.css';
import Counters from './components/counters.jsx';
import Navbar from './components/navbar.jsx'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Counters/>
      </main>
    </React.Fragment>  
  );
}

export default App;
