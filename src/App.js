import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HealineCards from './components/HealineCards';
import Foods from './components/Foods';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Hero />
       <HealineCards />
       <Foods />
       <Category />
    </div>
  );
}

export default App;
