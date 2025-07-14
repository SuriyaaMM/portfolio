import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Licenses from './components/Licenses';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <main className="min-h-screen bg-black text-white font-sans">
        <div className="container">
          <Header />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Licenses />
          <Awards />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;