import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GameBoard from './components/GameBoard';

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
      <GameBoard></GameBoard>
      </div>
    </section>      
    
    <footer>
      <Footer></Footer>
    </footer>
    </>
  );
}

export default App;