import React, { Fragment } from "react";
import MainNavigation from "./Components/MainNavigation/MainNavigation";
import { Routes, Route } from "react-router-dom";
import AllQuotes from "./Components/Pages/AllQuotes";
import NewQuotes from "./Components/Pages/NewQuotes";

const App = () => {
  return (
    <Fragment>
      <MainNavigation />

      <main>
        <Routes>
          <Route path = "/" element={ <AllQuotes/> } />
          <Route path = "/new" element={ <NewQuotes/> } />
        </Routes>
      </main>
    </Fragment>
  );
};

export default App;
