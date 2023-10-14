import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Product from "./components/Product";
import MFooter from "./components/MFooter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Product />
      <MFooter/>
    </>
  );
}

export default App;
