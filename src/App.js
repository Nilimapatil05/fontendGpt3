import React from "react";
import { Brand, CTA, Navbar } from "./components";
import {
  Footer,
  Blog,
  Possiblity,
  Feature,
  WhatGPT3,
  Header,
} from "./containers";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possiblity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
