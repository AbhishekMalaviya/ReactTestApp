import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Counter from './components/Counter';
import ReduxCounter from './features/counter/ReduxCounter';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Router>
        <Header title="Demo App" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/redux" element={<ReduxCounter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
