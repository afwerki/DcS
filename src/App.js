import React from 'react';
import './App.css';
import Companies from './components/compaines/Companies';
import Footer from './components/footer/Footer';
// import AboutUs from './components/navbar/AboutUs';
// import MainSections from './components/main/MainSections';
import Header from './components/navbar/Header';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './navbar';
// import About from '.component/navbar/AboutUs';
// import Contact from './components/navbar/Contact';
// import Resources from './components/navbar/Resources';
// import SmartTools from './components/navbar/SmartTools';

function App() {
  return (
    <div>
      <Header/>
      <Footer/>
      <Companies/>
      {/* <AboutUs/> */}
      {/* <MainSections/> */}
    </div>
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' exact component={Home} />
    //     <Route path='/about' component={About} />
    //     <Route path='/Contact' component={Contact} />
    //     <Route path='/Resources' component={Resources} />
    //     <Route path='/SmartTools' component={SmartTools} />
    //   </Routes>
    // </Router>
  );
}

export default App;