import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <header>
      <div>
      <Header></Header>
      </div>
    </header>

    <section>
      <div>
      <Home></Home>
      </div>
    </section>      
    
    <footer>
      <Footer></Footer>
    </footer>
    </>
  );
}

export default App;