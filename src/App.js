import React from 'react';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import { Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact component={Intro} />
      <Route path="/about" component={About} />
      <Route path="/project" component={Project} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </div>
  );
}

export default App;
