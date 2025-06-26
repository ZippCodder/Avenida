import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header.jsx";
import Home from "./components/home.jsx";
import Footer from "./components/footer.jsx";

function App() {
 return (
  <>
  <div className="main-container">
   <Header/>
   <Home/>
   <Footer/>
  </div>
  </>
 )
}

const root = createRoot(document.getElementById("root"));
root.render(<App/>);
