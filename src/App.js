import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Naslovna from './components/Naslovna'
import Kontakt from './components/Kontakt';
import KartaPica from './components/KartaPica';

function App() {

  const [activePage, setActivePage] = useState('home')

  const handleNav = (page) => {
    setActivePage(page);
  }

  return (
    <div className="main-component">
      <Navbar onNav = {handleNav} />

      {activePage === 'home' && <Naslovna/>}
      {activePage === 'menu' && <KartaPica/>}
      {activePage === 'contact' && <Kontakt/>}
      
      
      <Footer />
    </div>
  );
}

export default App;
