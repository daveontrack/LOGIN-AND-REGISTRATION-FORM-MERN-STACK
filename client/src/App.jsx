import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup"; // Adjust the import path as necessary
import Login from "./Login"; // Adjust the import path as necessary
import Home from "./assets/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <div>
    //   <Signup />
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
