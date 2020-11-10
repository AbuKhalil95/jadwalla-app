import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main/index';
// import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#FFFFFF", height: "100vh", width: "100vw", display: "flex", flexDirection: "column" }}>
      <BrowserRouter>
        <Header />
        <Main />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
