import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./App/index";
import ViewPageScreen from "./App/viewPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/viewPageScreen" element={<ViewPageScreen />} />
      </Routes>
    </>
  );
}

export default App;
