import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hero from "./component/Hero.jsx";
import Login from "./loginAndSignup/Login.jsx";
import Tempuser from "./component/Tempuser.jsx";
import Signup from "./loginAndSignup/Signup.jsx";


function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<Tempuser />} />
      <Route path="/signup" element = {<Signup/>} />
    </Routes>
  );
}

export default App;
