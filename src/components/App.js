import React, {useState} from 'react';
import '../css/App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Kontakt from './Kontakt';
import KartaPica from './KartaPica';

function App() {

  const [activePage, setActivePage] = useState('home')

  const handleNav = (page) => {
    setActivePage(page);
  }

  return (
    <div className="main-component">
      <Navbar onNav = {handleNav} />

      {activePage === 'home' && <KartaPica/>}
      {activePage === 'contact' && <Kontakt/>}
      
      
      <Footer />
    </div>
  );
}

export default App;
