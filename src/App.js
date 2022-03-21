import React from "react";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Routes, Route} from "react-router-dom";
import  Navbar from "./components/navbar/navbar.component";
import Authentication from "./pages/authentication/authentication.component";

function Shop() {
  return (
    <div>
      <h1>Shop page</h1>
    </div>
  );
}

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/sign-in" element={<Authentication/>}/> 
        </Route>
      </Routes>
  );
}

export default App;
