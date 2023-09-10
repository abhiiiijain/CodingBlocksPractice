import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./Components/Pages/Main";
import Dog from "./Components/Pages/Dog";
import Cat from "./Components/Pages/Cat";

const App = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">MAIN</Link>
            </li>
            <li>
              <Link to="/dog">DOG</Link>
            </li>
            <li>
              <Link to="/cat">CAT</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/cat" element={<Cat />} />
      </Routes>
    </>
  );
};

export default App;
