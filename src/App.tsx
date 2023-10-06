import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./App/index";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
