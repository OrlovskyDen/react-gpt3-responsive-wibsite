import React from 'react';
import { Blog, Features, Footer, Header, Possibility, What } from "./containers";
import { Brand, CTA, Navbar } from "./components";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App