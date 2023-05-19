import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import{Login}from"./components/Pages/Login";
import {Register} from "./components/Pages/Register"
import { useState } from "react";
import SDashboard from"./components/Pages/Sdashboard"
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Perform login validation (e.g., check against a database or API)
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleRegistration = (username, email, password) => {
    // Perform registration logic (e.g., save to a database or API)
    alert('Registration successful!');
  };
  return (
    <>
      <Router>
        <NavBar />

        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
           <Route path="/dasboard" element={<SDashboard/>}/>
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
